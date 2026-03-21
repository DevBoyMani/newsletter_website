import { NextResponse } from "next/server";
import zeroBounceServer from "@/lib/zeroBounce-server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Extract IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "";

    console.log("Client IP:", ip);

    // -------------------------------
    // 🔁 TOGGLE THIS WHEN ZB IS BACK
    // -------------------------------
    let responseZB = {
      status: "valid",
      sub_status: "recheck",
      city: "",
      country: "",
      domain: "",
      firstname: "",
      lastname: "",
      gender: "",
      zipcode: "",
      region: "",
      smtp_provider: "",
    };

    /*
    // ✅ UNCOMMENT THIS WHEN FIXED
    responseZB = ip
      ? await zeroBounceServer.validateEmail(email.toLowerCase().trim(), ip)
      : await zeroBounceServer.validateEmail(email.toLowerCase().trim());
    */

    // Fetch country based on IP
    let country = "Unknown";
    if (ip) {
      try {
        const geoResponse = await fetch(
          `http://ip-api.com/json/${ip}?fields=country`,
        );
        const geoData = await geoResponse.json();
        country = geoData.country || "Unknown";
      } catch (geoError) {
        console.error("Geolocation fetch failed:", geoError);
      }
    }

    return NextResponse.json({
      ...responseZB,
      countryFromApi: country,
      ip,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
