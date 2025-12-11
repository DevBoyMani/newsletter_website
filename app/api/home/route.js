import { NextResponse } from "next/server";
import { query } from "@/lib/db";

import websiteOptions from "@/data/websiteOptions";

function getAllowedDomainsForWebsiteIds(websiteIds) {
  const domains = new Set();
  websiteOptions.forEach((site) => {
    if (websiteIds.includes(site.id)) {
      site.linklyDomains.forEach((d) => domains.add(d));
    }
  });
  return domains;
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const WORKSPACE_ID = 252988;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    let websiteIds = searchParams.get("website_ids")
      ? searchParams
          .get("website_ids")
          .split(",")
          .map((x) => Number(x.trim()))
          .filter((n) => !isNaN(n))
      : [1, 3, 7];

    if (!websiteIds.length) {
      return NextResponse.json(
        { error: "No valid website_ids provided" },
        { status: 400 }
      );
    }

    // SQL 1: Monthly subscribers
    const subscribersSql = `
      WITH months AS (
        SELECT 
          date_trunc('month', current_date) - INTERVAL '12 months'
            + (g.m * INTERVAL '1 month') AS month_start
        FROM generate_series(0, 11) g(m)
      ),
      relevant_campaigns AS (
        SELECT id, date::date AS campaign_date
        FROM campaigns
        WHERE website_id = ANY($1::int[])
      ),
      sent_emails AS (
        SELECT es.user_id, rc.campaign_date
        FROM emails_sent es
        JOIN relevant_campaigns rc ON rc.id = es.campaign_id
      )
      SELECT
        TO_CHAR(m.month_start, 'YYYY-MM-01') AS month,
        COUNT(DISTINCT se.user_id) AS subscribers_count
      FROM months m
      LEFT JOIN sent_emails se 
        ON se.campaign_date >= m.month_start
       AND se.campaign_date < (m.month_start + INTERVAL '1 month')
      GROUP BY m.month_start
      ORDER BY m.month_start;
    `;

    // SQL 2: Monthly opens
    const opensMonthlySql = `
      WITH months AS (
        SELECT 
          date_trunc('month', current_date) - INTERVAL '12 months'
            + (g.m * INTERVAL '1 month') AS month_start
        FROM generate_series(0, 11) g(m)
      ),
      relevant_opens AS (
        SELECT eo.id, c.date::date AS event_date
        FROM emails_open eo
        JOIN campaigns c ON c.id = eo.campaign_id
        WHERE c.website_id = ANY($1::int[])
      )
      SELECT
        TO_CHAR(m.month_start, 'YYYY-MM-01') AS month,
        COUNT(ro.id) AS total_opens
      FROM months m
      LEFT JOIN relevant_opens ro 
        ON ro.event_date >= m.month_start
       AND ro.event_date < (m.month_start + INTERVAL '1 month')
      GROUP BY m.month_start
      ORDER BY m.month_start;
    `;

    const allowedDomains = getAllowedDomainsForWebsiteIds(websiteIds);

    // Linkly API
    const linklyListUrl =
      `https://app.linklyhq.com/api/workspace/${WORKSPACE_ID}/list_links` +
      `?page_size=500&search=p-ad&sort_by=inserted_at&sort_dir=desc` +
      `&api_key=${process.env.LINKLY_API_KEY}`;

    //
    // 🔥 DB Calls + Linkly call (async parallel)
    //
    const [subscribersResult, opensMonthlyResult, linklyListData] =
      await Promise.all([
        query(subscribersSql, [websiteIds]),
        query(opensMonthlySql, [websiteIds]),
        fetch(linklyListUrl).then((res) => res.json()),
      ]);

    //
    // subscribersMonthly
    //
    const subscribersMonthly = subscribersResult.rows.map((r) => ({
      month: r.month,
      count: Number(r.subscribers_count || 0),
    }));

    //
    // opensMonthly
    //
    const opensMonthly = opensMonthlyResult.rows.map((r) => ({
      month: r.month,
      count: Number(r.total_opens || 0),
    }));

    //
    // Linkly click activity
    //
    const links = linklyListData.links || linklyListData.data || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sixtyDaysAgo = new Date(today.getTime() - 60 * MS_PER_DAY);

    const linkIds = links
      .filter((link) => allowedDomains.has(link.domain))
      .map((l) => l.id)
      .filter(Boolean);

    let adClickActivity = [
      { week: "week1", lastMonth: 0, thisMonth: 0 },
      { week: "week2", lastMonth: 0, thisMonth: 0 },
      { week: "week3", lastMonth: 0, thisMonth: 0 },
      { week: "week4", lastMonth: 0, thisMonth: 0 },
    ];

    if (linkIds.length > 0) {
      const linkIdsParams = `link_ids=${linkIds.join("-")}`;
      const start = sixtyDaysAgo.toISOString().slice(0, 10);
      const end = today.toISOString().slice(0, 10);

      const clicksUrl =
        `https://app.linklyhq.com/api/v1/workspace/${WORKSPACE_ID}/clicks` +
        `?start=${start}&end=${end}` +
        `&workspace_id=${WORKSPACE_ID}` +
        `&${linkIdsParams}` +
        `&api_key=${process.env.LINKLY_API_KEY}` +
        `&bots=false`;

      const clicksData = await fetch(clicksUrl).then((r) => r.json());
      const traffic = clicksData.traffic || [];

      const BUCKETS = 4;
      const bucketSpan = 30 / BUCKETS;

      const lastMonthBuckets = Array(BUCKETS).fill(0);
      const thisMonthBuckets = Array(BUCKETS).fill(0);

      for (const point of traffic) {
        const day = new Date(point.t);
        const y = Number(point.y);

        const daysAgo = Math.floor(
          (today.getTime() - day.setHours(0, 0, 0, 0)) / MS_PER_DAY
        );

        if (daysAgo < 0 || daysAgo >= 60) continue;

        if (daysAgo < 30) {
          const pos = 29 - daysAgo;
          const bucket = Math.min(
            BUCKETS - 1,
            Math.max(0, Math.floor(pos / bucketSpan))
          );
          thisMonthBuckets[bucket] += y;
        } else {
          const pos = 59 - daysAgo;
          const bucket = Math.min(
            BUCKETS - 1,
            Math.max(0, Math.floor(pos / bucketSpan))
          );
          lastMonthBuckets[bucket] += y;
        }
      }

      const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
      adClickActivity = weeks.map((w, i) => ({
        week: w,
        lastMonth: lastMonthBuckets[i],
        thisMonth: thisMonthBuckets[i],
      }));
    }

    return NextResponse.json({
      subscribersMonthly,
      opensMonthly,
      adClickActivity,
    });
  } catch (err) {
    console.error("Error at /api/advertise:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
