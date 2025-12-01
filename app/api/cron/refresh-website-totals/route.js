import { NextResponse } from "next/server";
import { query } from "@/lib/db";

const CRON_SECRET = process.env.CRON_SECRET; // set this in env

export async function GET() {
  // Simple auth so random people can't hit this
  const authHeader = req.headers.get("x-cron-secret");
  if (!CRON_SECRET || authHeader !== CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const t0 = Date.now();

    // Call the postgres function
    await query("SELECT refresh_website_email_totals();", []);

    const ms = Date.now() - t0;
    console.log("refresh_website_email_totals completed in", ms, "ms");

    return NextResponse.json({ ok: true, duration_ms: ms });
  } catch (err) {
    console.error("Cron refresh_website_email_totals error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
