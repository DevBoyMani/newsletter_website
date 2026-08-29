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

// async function getAnalytics() {
//   const baseUrl =
//     process.env.BASE_URL ||
//     (process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}`
//       : "http://localhost:3000");

//   const res = await fetch(`${baseUrl}/api/home?website_ids=${selectedIds}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch home analytics: ${res.status}`);
//   }

//   return res.json();
// }

async function getAnalytics() {
  return {
    subscribersMonthly: [],
    opensMonthly: [],
    adClickActivity: [],
  };
}

export default async function Advertise() {
  const analyticsData = await getAnalytics();

  return <HomeClient analyticsData={analyticsData} />;
}
