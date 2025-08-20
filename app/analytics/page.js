import { redirect } from "next/navigation";

export default function AnalyticsIndexPage() {
  // redirect---> /analytics/[slug]/presidential-summary
  redirect("/analytics/presidential-summary");
}
