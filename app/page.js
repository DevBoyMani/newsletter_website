// app/advertise/page.js
import selectedIds from "../data/selectedWebsites";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "House of Summary | Verified News, Summarized",
  description:
    "Two friends on opposite sides of the world went door to door selling magazines in their neighbourhood. Two decades later House of Summary is born.",
  alternates: {
    canonical: "https://www.houseofsummary.com/",
  },
};

export const dynamic = "force-dynamic";
async function getAnalytics() {
  // Build an absolute base URL for server-side fetch
  const baseUrl =
    process.env.BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

  const res = await fetch(`${baseUrl}/api/home?website_ids=${selectedIds}`);

  if (!res.ok) {
    throw new Error("Failed to fetch home analytics");
  }

  return res.json();
}

export default async function Advertise() {
  const analyticsData = await getAnalytics();

  return <HomeClient analyticsData={analyticsData} />;
}
