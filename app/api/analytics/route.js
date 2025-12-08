// app/api/website-opens-monthly/route.js
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

const WORKSPACE_ID = 252988; // Linkly workspace

export async function POST(request) {
  try {
    const body = await request.json();
    const websiteId = body.website_id ?? body.websiteId;

    if (!websiteId || Number.isNaN(Number(websiteId))) {
      return NextResponse.json(
        { error: "website_id is required and must be a number" },
        { status: 400 }
      );
    }

    const numericWebsiteId = Number(websiteId);

    //
    // 1️⃣ Opens: last 6 completed months (emails_open)
    //
    const opensSql = `
      -- Last 6 *completed* months (exclude current month)
      WITH months AS (
        SELECT 
          date_trunc('month', current_date) - INTERVAL '6 months'
              + (g.m * INTERVAL '1 month') AS month_start
        FROM generate_series(0, 5) AS g(m)
      ),
      relevant_opens AS (
        SELECT
          eo.user_id,
          eo.id,
          c.date::date AS event_date
        FROM emails_open eo
        JOIN campaigns c ON c.id = eo.campaign_id
        WHERE c.website_id = $1
      ),
      opens_by_user_month AS (
        SELECT
          date_trunc('month', event_date) AS month_start,
          user_id,
          COUNT(*) AS opens_count
        FROM relevant_opens
        GROUP BY 1, 2
      )
      SELECT
        TO_CHAR(m.month_start::date, 'YYYY-MM-01') AS month,
        COALESCE(SUM(obum.opens_count), 0) AS total_opens,
        COALESCE(COUNT(DISTINCT obum.user_id), 0) AS total_openers,
        COALESCE(
          COUNT(DISTINCT CASE WHEN obum.opens_count > 5 THEN obum.user_id END),
          0
        ) AS heavy_openers
      FROM months m
      LEFT JOIN opens_by_user_month obum
        ON obum.month_start = m.month_start
      GROUP BY m.month_start
      ORDER BY m.month_start;
    `;

    //
    // 2️⃣ Subscribers by month: last 6 completed months (emails_sent)
    //
    const subscribersSql = `
    WITH months AS (
  SELECT 
    date_trunc('month', current_date) - INTERVAL '6 months'
        + (g.m * INTERVAL '1 month') AS month_start
  FROM generate_series(0, 5) AS g(m)
),

campaigns_for_site AS (
  SELECT id, date::date AS sent_date
  FROM campaigns
  WHERE website_id = $1
),

sent_unique AS (
  SELECT
    date_trunc('month', c.sent_date) AS month_start,
    es.user_id
  FROM emails_sent es
  JOIN campaigns_for_site c ON c.id = es.campaign_id
  GROUP BY date_trunc('month', c.sent_date), es.user_id
)

SELECT
  TO_CHAR(m.month_start::date, 'YYYY-MM-01') AS month,
  COUNT(DISTINCT s.user_id) AS subscribers_count
FROM months m
LEFT JOIN sent_unique s
  ON s.month_start = m.month_start
GROUP BY m.month_start
ORDER BY m.month_start;
    `;

    //
    // 3️⃣ Gender breakdown (opens, last 6 completed months)
    //
    const genderSql = `
  WITH date_window AS (
    SELECT
      date_trunc('month', current_date) - INTERVAL '6 months' AS start_month,
      date_trunc('month', current_date) AS current_month_start
  ),
  relevant_campaigns AS (
    SELECT
      c.id,
      c.date::date AS campaign_date
    FROM campaigns c
    JOIN date_window w
      ON c.date::date >= w.start_month
     AND c.date::date <  w.current_month_start
    WHERE c.website_id = $1
  ),
  relevant_opens AS (
    SELECT
      eo.user_id
    FROM emails_open eo
    JOIN relevant_campaigns rc ON rc.id = eo.campaign_id
  )
  SELECT
    u.gender,
    COUNT(DISTINCT ro.user_id) AS total_openers
  FROM relevant_opens ro
  JOIN users u ON u.id = ro.user_id
  WHERE u.gender IS NOT NULL
    AND u.gender <> ''
  GROUP BY u.gender
  ORDER BY total_openers DESC;
`;

    //
    // 4️⃣ Country breakdown (opens, last 6 completed months)
    //
    const countrySql = `
  WITH date_window AS (
    SELECT
      date_trunc('month', current_date) - INTERVAL '6 months' AS start_month,
      date_trunc('month', current_date) AS current_month_start
  ),
  relevant_campaigns AS (
    SELECT
      c.id,
      c.date::date AS campaign_date
    FROM campaigns c
    JOIN date_window w
      ON c.date::date >= w.start_month
     AND c.date::date <  w.current_month_start
    WHERE c.website_id = $1
  ),
  relevant_opens AS (
    SELECT
      eo.user_id
    FROM emails_open eo
    JOIN relevant_campaigns rc ON rc.id = eo.campaign_id
  )
  SELECT
    u.country,
    COUNT(DISTINCT ro.user_id) AS total_openers
  FROM relevant_opens ro
  JOIN users u ON u.id = ro.user_id
  WHERE u.country IS NOT NULL
    AND u.country <> ''
  GROUP BY u.country
  ORDER BY total_openers DESC;
`;

    //
    // 5️⃣ Run opens + subscribers + gender + country in parallel
    //
    const [opensResult, subscribersResult, genderResult, countryResult] =
      await Promise.all([
        query(opensSql, [numericWebsiteId]),
        query(subscribersSql, [numericWebsiteId]),
        query(genderSql, [numericWebsiteId]),
        query(countrySql, [numericWebsiteId]),
      ]);

    const opensByMonth = opensResult.rows.map((r) => ({
      month: r.month, // "YYYY-MM-01"
      totalOpens: Number(r.total_opens || 0),
      totalOpeners: Number(r.total_openers || 0),
      heavyOpeners: Number(r.heavy_openers || 0), // users with >5 opens that month
    }));

    const subscribersByMonth = subscribersResult.rows.map((r) => ({
      month: r.month, // "YYYY-MM-01"
      subscribersCount: Number(r.subscribers_count || 0),
    }));

    const genderBreakdown = genderResult.rows.map((r) => ({
      gender: r.gender,
      totalOpeners: Number(r.total_openers || 0),
    }));

    const countriesAll = countryResult.rows.map((r) => ({
      country: r.country,
      totalOpeners: Number(r.total_openers || 0),
    }));

    const countryBreakdown = countriesAll.slice(0, 4); // 👈 KEEP ONLY TOP 5

    //
    // 6️⃣ Ad clicks: last 6 completed months (Linkly)
    //
    const site = websiteOptions.find((s) => s.id === numericWebsiteId);
    const allowedDomains = new Set(site?.linklyDomains || []);

    let adClicksMonthly = [];

    if (allowedDomains.size > 0 && process.env.LINKLY_API_KEY) {
      // Step 1: list links (p-ad) for this workspace
      const listUrl =
        `https://app.linklyhq.com/api/workspace/${WORKSPACE_ID}/list_links` +
        "?page_size=500" +
        "&search=p-ad" +
        "&sort_by=inserted_at" +
        "&sort_dir=desc" +
        `&api_key=${process.env.LINKLY_API_KEY}`;

      const listRes = await fetch(listUrl);
      if (!listRes.ok) {
        throw new Error("Failed to fetch Linkly links");
      }
      const listJson = await listRes.json();
      const links = listJson.links || listJson.data || [];

      const linkIds = links
        .filter((link) => allowedDomains.has(link.domain))
        .map((l) => l.id)
        .filter(Boolean);

      // Pre-build 6 completed months
      const now = new Date();
      const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1); // first day of current month
      const startDate = new Date(currentMonthStart);
      startDate.setMonth(startDate.getMonth() - 6); // 6 months ago (first month in window)
      const endDate = new Date(currentMonthStart);
      endDate.setDate(endDate.getDate() - 1); // last day of previous month

      const yyyyMmDd = (d) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`;

      if (linkIds.length > 0) {
        const linkIdsParam = `link_ids=${linkIds.join("-")}`;
        const clicksUrl =
          `https://app.linklyhq.com/api/v1/workspace/${WORKSPACE_ID}/clicks` +
          `?start=${encodeURIComponent(yyyyMmDd(startDate))}` +
          `&end=${encodeURIComponent(yyyyMmDd(endDate))}` +
          `&workspace_id=${WORKSPACE_ID}` +
          `&${linkIdsParam}` +
          `&api_key=${process.env.LINKLY_API_KEY}` +
          `&bots=false`;

        const clicksRes = await fetch(clicksUrl);
        if (!clicksRes.ok) {
          throw new Error("Failed to fetch Linkly clicks");
        }
        const clicksJson = await clicksRes.json();
        const traffic = clicksJson.traffic || [];

        // Bucket by month key "YYYY-MM-01"
        const monthBuckets = {};

        for (const point of traffic) {
          const t = point.t;
          const y = point.y;
          if (!t || y == null) continue;

          const d = new Date(t);
          if (Number.isNaN(d.getTime())) continue;

          const monthKey = `${d.getFullYear()}-${String(
            d.getMonth() + 1
          ).padStart(2, "0")}-01`;

          monthBuckets[monthKey] = (monthBuckets[monthKey] || 0) + Number(y);
        }

        // Build ordered 6-months array
        const months = [];
        for (let i = 0; i < 6; i++) {
          const mStart = new Date(currentMonthStart);
          mStart.setMonth(mStart.getMonth() - 6 + i); // 6 months ago up to last month
          const key = `${mStart.getFullYear()}-${String(
            mStart.getMonth() + 1
          ).padStart(2, "0")}-01`;
          months.push({
            month: key,
            totalClicks: Number(monthBuckets[key] || 0),
          });
        }

        adClicksMonthly = months;
      } else {
        // No links: still return 6 months with 0
        const now = new Date();
        const currentMonthStart = new Date(
          now.getFullYear(),
          now.getMonth(),
          1
        );
        const months = [];
        for (let i = 0; i < 6; i++) {
          const mStart = new Date(
            currentMonthStart.getFullYear(),
            currentMonthStart.getMonth() - 6 + i,
            1
          );
          const key = `${mStart.getFullYear()}-${String(
            mStart.getMonth() + 1
          ).padStart(2, "0")}-01`;
          months.push({ month: key, totalClicks: 0 });
        }
        adClicksMonthly = months;
      }
    } else {
      // No domains / no API key: still return structured empty data
      const now = new Date();
      const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const months = [];
      for (let i = 0; i < 6; i++) {
        const mStart = new Date(
          currentMonthStart.getFullYear(),
          currentMonthStart.getMonth() - 6 + i,
          1
        );
        const key = `${mStart.getFullYear()}-${String(
          mStart.getMonth() + 1
        ).padStart(2, "0")}-01`;
        months.push({ month: key, totalClicks: 0 });
      }
      adClicksMonthly = months;
    }

    //
    // Final payload
    //
    return NextResponse.json({
      websiteId: numericWebsiteId,
      opensByMonth,
      subscribersByMonth,
      genderBreakdown,
      countryBreakdown,
      adClicksMonthly,
    });
  } catch (error) {
    console.error("[/api/website-opens-monthly] error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
