import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const websiteIdsParam = searchParams.get("website_ids");

    if (!websiteIdsParam) {
      return NextResponse.json(
        { error: "website_ids is required (e.g. ?website_ids=1,3,7)" },
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

    const sql = `
      SELECT
        w.id AS website_id,
        w.name AS website_name,
        COALESCE(t.total_reads, 0) AS total_reads,
        COALESCE(t.total_sent, 0)  AS total_sent,
        COALESCE(cstats.campaigns_count, 0) AS campaigns_count
      FROM websites w
      LEFT JOIN website_email_totals t
        ON t.website_id = w.id
      LEFT JOIN (
        SELECT
          website_id,
          COUNT(*) AS campaigns_count
        FROM campaigns
        WHERE website_id = ANY($1)
        GROUP BY website_id
      ) cstats
        ON cstats.website_id = w.id
      WHERE w.id = ANY($1)
      ORDER BY w.id;
    `;

    const { rows } = await query(sql, [websiteIds]);

    const formatter = new Intl.NumberFormat("en-US");

    const result = rows.map((row) => {
      const totalReads = Number(row.total_reads) || 0;
      const totalSent = Number(row.total_sent) || 0;
      const campaignsCount = Number(row.campaigns_count) || 0;

      const avgOpenRate = totalSent > 0 ? (totalReads / totalSent) * 100 : 0;

      return {
        website_id: row.website_id,
        website_name: row.website_name,

        total_reads: totalReads,
        total_reads_formatted: formatter.format(totalReads),

        total_sent: totalSent,
        total_sent_formatted: formatter.format(totalSent),

        campaigns_count: campaignsCount,
        campaigns_count_formatted: formatter.format(campaignsCount),

        average_open_rate: Number(avgOpenRate.toFixed(2)),
        average_open_rate_formatted: `${avgOpenRate.toFixed(2)}%`,
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
