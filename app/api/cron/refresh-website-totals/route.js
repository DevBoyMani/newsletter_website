import { NextResponse } from "next/server";
import { query } from "@/lib/db";

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");

  if (!CRON_SECRET || secret !== CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const t0 = Date.now();

    await query("SELECT refresh_website_email_totals();", []);

    const ms = Date.now() - t0;
    console.log("Cron job completed in", ms, "ms");

    return NextResponse.json({ ok: true, duration_ms: ms });
  } catch (err) {
    console.error("Cron refresh error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
