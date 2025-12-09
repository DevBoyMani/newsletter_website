import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const token = process.env.GOOGLE_SCRIPT_TOKEN;

    if (!scriptUrl || !token) {
      console.error("Missing GOOGLE_SCRIPT_URL or GOOGLE_SCRIPT_TOKEN env");
      return NextResponse.json(
        { ok: false, error: "Server not configured" },
        { status: 500 }
      );
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: token,
        ...body,
        source: body.source || "contact-page",
        timestamp: new Date().toISOString(),
      }),
    });

    let data = {};
    try {
      data = await res.json();
    } catch (err) {
      console.log("Failed to parse Apps Script response as JSON", err);
    }

    if (!res.ok || data.ok === false) {
      console.error("Apps Script error", res.status, data);
      return NextResponse.json(
        { ok: false, error: data.error || "Apps Script error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
