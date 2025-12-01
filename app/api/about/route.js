import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const websiteIdsParam = searchParams.get("website_ids");

    if (!websiteIdsParam) {
      return NextResponse.json(
        { error: "website_ids is required (e.g. ?website_ids=1,2,3)" },
        { status: 400 }
      );
    }

    const websiteIds = websiteIdsParam
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean)
      .map((id) => Number(id))
      .filter((n) => !Number.isNaN(n));

    if (websiteIds.length === 0) {
      return NextResponse.json(
        { error: "website_ids must contain at least one valid number" },
        { status: 400 }
      );
    }

    // Optional date filters
    const fromParam = searchParams.get("from"); // "2025-11-01"
    const toParam = searchParams.get("to"); // "2025-11-28"

    // Default: last 90 days window
    const now = new Date();
    const defaultTo = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const defaultFrom = new Date(defaultTo);
    defaultFrom.setDate(defaultFrom.getDate() - 90);

    const fromDate = fromParam ? new Date(fromParam) : defaultFrom;
    const toDate = toParam ? new Date(toParam) : defaultTo;

    // Convert to ISO date-only strings
    const fromStr = fromDate.toISOString().slice(0, 10);
    const toStr = toDate.toISOString().slice(0, 10);

    // 1) Get website info
    const websitesSql = `
      SELECT id AS website_id, name AS website_name
      FROM websites
      WHERE id = ANY($1)
      ORDER BY id;
    `;

    // 2) Get total_reads per website (via campaigns in date window)
    const opensSql = `
      SELECT
        c.website_id,
        COUNT(eo.id) AS total_reads
      FROM campaigns c
      JOIN emails_open eo ON eo.campaign_id = c.id
      WHERE c.website_id = ANY($1)
        AND c.date >= $2
        AND c.date < $3
      GROUP BY c.website_id;
    `;

    // 3) Get total_sent per website (via campaigns in date window)
    const sentSql = `
      SELECT
        c.website_id,
        COUNT(es.id) AS total_sent
      FROM campaigns c
      JOIN emails_sent es ON es.campaign_id = c.id
      WHERE c.website_id = ANY($1)
        AND c.date >= $2
        AND c.date < $3
      GROUP BY c.website_id;
    `;

    const values = [websiteIds, fromStr, toStr];

    // (Optional) log timing to see DB time vs total time
    const t0 = Date.now();
    const [websitesRes, opensRes, sentRes] = await Promise.all([
      query(websitesSql, [websiteIds]),
      query(opensSql, values),
      query(sentSql, values),
    ]);
    console.log(
      "GET /api/about DB total ms:",
      Date.now() - t0,
      "range:",
      fromStr,
      "to",
      toStr
    );

    const websites = websitesRes.rows;

    const opensByWebsite = new Map();
    const sentByWebsite = new Map();

    for (const row of opensRes.rows) {
      opensByWebsite.set(Number(row.website_id), Number(row.total_reads) || 0);
    }

    for (const row of sentRes.rows) {
      sentByWebsite.set(Number(row.website_id), Number(row.total_sent) || 0);
    }

    const formatter = new Intl.NumberFormat("en-US");

    const result = websites.map((w) => {
      const websiteId = Number(w.website_id);
      const totalReads = opensByWebsite.get(websiteId) ?? 0;
      const totalSent = sentByWebsite.get(websiteId) ?? 0;

      const avgOpenRate = totalSent > 0 ? (totalReads / totalSent) * 100 : 0;

      return {
        website_id: websiteId,
        website_name: w.website_name,

        total_reads: totalReads,
        total_reads_formatted: formatter.format(totalReads),

        total_sent: totalSent,
        total_sent_formatted: formatter.format(totalSent),

        average_open_rate: Number(avgOpenRate.toFixed(2)),
        average_open_rate_formatted: `${avgOpenRate.toFixed(1)}%`,
      };
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("GET /api/about error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
