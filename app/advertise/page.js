// app/advertise/page.js
import selectedIds from "../../data/selectedWebsites";
import AdvertiseClient from "./AdvertiseClient";

const title = "Advertise on House of Summary - Reach an Intellectual Audience";
const description =
  "Reach a highly engaged audience of readers and professionals. Grow your brand by advertising on the House of Summary platform today.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.houseofsummary.com/advertise",
  },
  openGraph: {
    title,
    description,
  },
};

export const revalidate = 43200; // 43200 seconds = 12 hours
async function getAnalytics() {
  // Build an absolute base URL for server-side fetch
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  console.log(
    "Fetching analytics from:",
    `${baseUrl}/api/advertise?website_ids=${selectedIds}`,
  );

  const res = await fetch(
    `${baseUrl}/api/advertise?website_ids=${selectedIds}`,
    {
      // This works with the route-level revalidate – it's fine to keep
      next: { revalidate },
    },
  );

  if (!res.ok) {
    console.log(res);
    throw new Error("Failed to fetch analytics");
  }

  return res.json();
}

export default async function Advertise() {
  const analyticsData = await getAnalytics();

  return <AdvertiseClient analyticsData={analyticsData} />;
}
