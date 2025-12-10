import { NextResponse } from "next/server";
import { query } from "@/lib/db";

const websiteOptions = [
  {
    id: 1,
    name: "Presidential Summary",
    linklyDomains: ["link.presidentialsummary.com"],
    domain: "presidentialsummary.com",
  },
  {
    id: 2,
    name: "Long & Short",
    linklyDomains: ["link.longandshort.com", "link.altdaily.co"],
    domain: "longandshort.com",
  },
  {
    id: 3,
    name: "Geopolitical Summary",
    linklyDomains: ["link.geopoliticalsummary.com"],
    domain: "geopoliticalsummary.com",
  },
  {
    id: 4,
    name: "Business History",
    linklyDomains: ["link.businesshistory.co"],
    domain: "businesshistory.co",
  },
  {
    id: 6,
    name: "Movie Suggestions",
    linklyDomains: ["link.moviesuggestions.com"],
    domain: "moviesuggestions.com",
  },
  {
    id: 7,
    name: "Dubai Summary",
    linklyDomains: ["link.dubaisummary.com"],
    domain: "dubaisummary.com",
  },
];

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
const WORKSPACE_ID = 252988; // your Linkly workspace ID

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // website_ids=1,3,7 -> [1,3,7]
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

    // 1️⃣ Monthly distinct recipients (from emails_sent), last 12 *completed* months
    const subscribersSql = `
  WITH months AS (
    SELECT 
      date_trunc('month', current_date) - INTERVAL '12 months'
          + (g.m * INTERVAL '1 month') AS month_start
    FROM generate_series(0, 11) AS g(m)
  ),
  relevant_campaigns AS (
    SELECT id, date::date AS campaign_date
    FROM campaigns
    WHERE website_id = ANY($1::int[])
  ),
  sent_emails AS (
    SELECT
      es.user_id,
      rc.campaign_date
    FROM emails_sent es
    JOIN relevant_campaigns rc ON rc.id = es.campaign_id
    -- if you only want successfully sent emails, uncomment:
    -- WHERE es.status = 'sent'
  )
  SELECT
    TO_CHAR(m.month_start::date, 'YYYY-MM-01') AS month,
    COUNT(DISTINCT se.user_id) AS subscribers_count
  FROM months m
  LEFT JOIN sent_emails se
    ON se.campaign_date >= m.month_start
   AND se.campaign_date <  (m.month_start + INTERVAL '1 month')
  GROUP BY m.month_start
  ORDER BY m.month_start;
`;

    // 2️⃣ Opens by Country (distinct users only)
    const countrySql = `
  WITH relevant_opens AS (
    SELECT DISTINCT eo.user_id
    FROM emails_open eo
    JOIN campaigns c ON c.id = eo.campaign_id
    WHERE c.website_id = ANY($1::int[])
  ),
  country_counts AS (
    SELECT
      u.country,
      COUNT(*) AS unique_openers
    FROM relevant_opens ro
    JOIN users u ON u.id = ro.user_id
    WHERE u.country IS NOT NULL
      AND u.country <> ''
    GROUP BY u.country
  )
  SELECT
    country,
    unique_openers,
    -- keep this alias so the JS mapping code doesn't need to change
    unique_openers AS total_opens
  FROM country_counts
  ORDER BY unique_openers DESC;
`;

    // 3️⃣ Opens Monthly – last 12 *completed* months (exclude current month)
    const opensMonthlySql = `
  WITH months AS (
    SELECT 
      date_trunc('month', current_date) - INTERVAL '12 months'
          + (g.m * INTERVAL '1 month') AS month_start
    FROM generate_series(0, 11) AS g(m)
  ),
  relevant_opens AS (
    SELECT
      eo.id,
      c.date::date AS event_date
    FROM emails_open eo
    JOIN campaigns c ON c.id = eo.campaign_id
    WHERE c.website_id = ANY($1::int[])
  )
  SELECT
    TO_CHAR(m.month_start::date, 'YYYY-MM-01') AS month,
    COUNT(ro.id) AS total_opens
  FROM months m
  LEFT JOIN relevant_opens ro
    ON ro.event_date >= m.month_start
   AND ro.event_date <  (m.month_start + INTERVAL '1 month')
  GROUP BY m.month_start
  ORDER BY m.month_start;
`;

    //
    // 4️⃣ Opens by Gender
    //
    const genderSql = `
      WITH relevant_campaigns AS (
        SELECT id
        FROM campaigns
        WHERE website_id = ANY($1::int[])
      )
      SELECT
        u.gender,
        COUNT(DISTINCT eo.user_id) AS total_openers
      FROM emails_open eo
      JOIN relevant_campaigns c ON c.id = eo.campaign_id
      JOIN users u              ON u.id = eo.user_id
      WHERE u.gender IS NOT NULL
        AND u.gender <> ''
      GROUP BY u.gender
      ORDER BY total_openers DESC;
    `;

    // 5️⃣ Total opens on "last campaign per website" across all selected website_ids
    const lastCampaignOpensSql = `
  WITH last_campaigns AS (
    SELECT DISTINCT ON (website_id)
      id,
      website_id,
      date
    FROM campaigns
    WHERE website_id = ANY($1::int[])
    ORDER BY website_id, date DESC NULLS LAST, id DESC
  )
  SELECT 
    COUNT(eo.id) AS total_opens_last_campaigns
  FROM last_campaigns lc
  LEFT JOIN emails_open eo
    ON eo.campaign_id = lc.id;
`;

    const allowedDomains = getAllowedDomainsForWebsiteIds(websiteIds);

    //
    // 6️⃣ Linkly list_links for p-ad (to get link IDs)
    //
    const linklyListUrl =
      `https://app.linklyhq.com/api/workspace/${WORKSPACE_ID}/list_links` +
      "?page_size=500" +
      "&search=p-ad" +
      "&sort_by=inserted_at" +
      "&sort_dir=desc" +
      `&api_key=${process.env.LINKLY_API_KEY}`;

    // Run DB queries + list_links in parallel
    const [
      subscribersResult,
      countryResult,
      opensMonthlyResult,
      genderResult,
      linklyListData,
      lastCampaignOpensResult,
    ] = await Promise.all([
      query(subscribersSql, [websiteIds]),
      query(countrySql, [websiteIds]),
      query(opensMonthlySql, [websiteIds]),
      query(genderSql, [websiteIds]),
      fetch(linklyListUrl).then((res) => {
        if (!res.ok) throw new Error("Failed to fetch Linkly links");
        return res.json();
      }),
      query(lastCampaignOpensSql, [websiteIds]),
    ]);

    //
    // subscribersMonthly
    //
    const subscribersMonthly = subscribersResult.rows.map((r) => ({
      month: r.month,
      count: Number(r.subscribers_count || 0),
    }));

    //
    // opensByCountry (top 5 + %)
    //
    const totalOpensAll = countryResult.rows.reduce(
      (sum, r) => sum + Number(r.total_opens || 0),
      0
    );

    const opensByCountryAll = countryResult.rows.map((r) => {
      const totalOpens = Number(r.total_opens || 0);
      const percentage = totalOpensAll ? (totalOpens / totalOpensAll) * 100 : 0;

      return {
        country: r.country,
        uniqueOpeners: Number(r.unique_openers || 0),
        totalOpens,
        totalPercentage: Number(percentage.toFixed(2)),
      };
    });

    const opensByCountry = opensByCountryAll.slice(0, 5);

    //
    // opensMonthly
    //
    const opensMonthly = opensMonthlyResult.rows.map((r) => ({
      month: r.month,
      count: Number(r.total_opens || 0),
    }));

    //
    // opensByGender (with %)
    //
    const totalGenderOpeners = genderResult.rows.reduce(
      (sum, r) => sum + Number(r.total_openers || 0),
      0
    );

    const opensByGender = genderResult.rows.map((r) => {
      const openers = Number(r.total_openers || 0);
      const percentage = totalGenderOpeners
        ? (openers / totalGenderOpeners) * 100
        : 0;

      return {
        gender: r.gender,
        totalOpeners: openers,
        percentage: Number(percentage.toFixed(2)),
      };
    });

    //
    // 7️⃣ Total opens for the "last campaign per website" (all selected websites)
    let lastCampaignOpenSummary = {
      totalOpens: 0,
      formattedTotalOpens: "0",
    };

    if (lastCampaignOpensResult.rows.length > 0) {
      const r = lastCampaignOpensResult.rows[0];
      const total = Number(r.total_opens_last_campaigns || 0);

      lastCampaignOpenSummary = {
        totalOpens: total,
        formattedTotalOpens: total.toLocaleString("en-US"),
      };
    }

    //
    // 8️⃣ Ad click activity from Linkly /clicks
    //
    const links = linklyListData.links || linklyListData.data || [];
    const now = new Date();
    const today = new Date(now);
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

      const start = sixtyDaysAgo.toISOString().slice(0, 10); // YYYY-MM-DD
      const end = today.toISOString().slice(0, 10);

      const clicksUrl =
        `https://app.linklyhq.com/api/v1/workspace/${WORKSPACE_ID}/clicks` +
        `?start=${encodeURIComponent(start)}` +
        `&end=${encodeURIComponent(end)}` +
        `&workspace_id=${WORKSPACE_ID}` +
        `&${linkIdsParams}` +
        `&api_key=${process.env.LINKLY_API_KEY}` +
        `&bots=false`;

      console.log("CLICK API URL:", clicksUrl);

      const clicksData = await fetch(clicksUrl).then((res) => {
        if (!res.ok) {
          console.error("Linkly error RESPONSE:", res.status, res.statusText);
          throw new Error("Failed to fetch Linkly clicks");
        }
        return res.json();
      });

      const traffic = clicksData.traffic || [];

      const BUCKETS_PER_WINDOW = 4;
      const DAYS_PER_WINDOW = 30;
      const bucketSpan = DAYS_PER_WINDOW / BUCKETS_PER_WINDOW; // 7.5 days

      const thisMonthBuckets = Array(BUCKETS_PER_WINDOW).fill(0);
      const lastMonthBuckets = Array(BUCKETS_PER_WINDOW).fill(0);

      for (const point of traffic) {
        const { t, y } = point;
        if (!t || y == null) continue;

        const day = new Date(t);
        if (Number.isNaN(day.getTime())) continue;

        const dayMidnight = new Date(day);
        dayMidnight.setHours(0, 0, 0, 0);

        const diffMs = today.getTime() - dayMidnight.getTime();
        const daysAgo = Math.floor(diffMs / MS_PER_DAY);

        if (daysAgo < 0 || daysAgo >= 60) continue;

        if (daysAgo < 30) {
          // THIS MONTH (0–29 days ago)
          const pos = 29 - daysAgo; // 0 oldest, 29 newest
          let bucket = Math.floor(pos / bucketSpan); // 0..3
          if (bucket < 0) bucket = 0;
          if (bucket >= BUCKETS_PER_WINDOW) bucket = BUCKETS_PER_WINDOW - 1;
          thisMonthBuckets[bucket] += Number(y) || 0;
        } else {
          // LAST MONTH (30–59 days ago)
          const pos = 59 - daysAgo; // 0 oldest, 29 newest
          let bucket = Math.floor(pos / bucketSpan); // 0..3
          if (bucket < 0) bucket = 0;
          if (bucket >= BUCKETS_PER_WINDOW) bucket = BUCKETS_PER_WINDOW - 1;
          lastMonthBuckets[bucket] += Number(y) || 0;
        }
      }

      const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
      adClickActivity = weeks.map((label, i) => ({
        week: label,
        lastMonth: lastMonthBuckets[i],
        thisMonth: thisMonthBuckets[i],
      }));
    }

    //
    // Final payload (now includes lastCampaignOpenStats)
    //
    return NextResponse.json({
      subscribersMonthly,
      opensByCountry,
      opensMonthly,
      opensByGender,
      adClickActivity,
      lastCampaignOpenSummary,
    });
  } catch (error) {
    console.error("[/api/advertise] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
