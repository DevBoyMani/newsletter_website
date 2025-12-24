// app/advertise/page.js
import selectedIds from "../data/selectedWebsites";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "House of Summary | Verified News, Summarized",
  description:
    "Get the latest, verified news summaries from House of Summary. Stay informed with concise, fact-based news for a clear picture of the world.",
  alternates: {
    canonical: "https://www.houseofsummary.com/",
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

  const res = await fetch(`${baseUrl}/api/home?website_ids=${selectedIds}`, {
    // This works with the route-level revalidate – it's fine to keep
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch home analytics");
  }

  return res.json();
}

export default async function Advertise() {
  const analyticsData = await getAnalytics();

  return <HomeClient analyticsData={analyticsData} />;
}
