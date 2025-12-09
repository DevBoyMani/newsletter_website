// app/advertise/page.js
import selectedIds from "../../data/selectedWebsites";
import AdvertiseClient from "./AdvertiseClient";

export const revalidate = 43200; // 43200 seconds = 12 hours
async function getAnalytics() {
  // Build an absolute base URL for server-side fetch
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(
    `${baseUrl}/api/advertise?website_ids=${selectedIds}`,
    {
      // This works with the route-level revalidate – it's fine to keep
      next: { revalidate },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch analytics");
  }

  return res.json();
}

export default async function Advertise() {
  const analyticsData = await getAnalytics();

  return <AdvertiseClient analyticsData={analyticsData} />;
}
