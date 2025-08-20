"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import AnalyticsComboList from "../../../components/analyticsComboList/analyticsComboList";

// Page components
import PresidentialSummaryAnalytics from "../../../components/analyticsPages/analyticsPSComponent/analyticsPSComponent";
import GeopoliticalSummaryAnalytics from "../../../components/analyticsPages/analyticsGSComponent/analyticsGSComponent";
// import EconomyAnalytics from "@/components/analyticsPages/EconomyAnalytics";
// import DefenseAnalytics from "@/components/analyticsPages/DefenseAnalytics";
// import EnergyAnalytics from "@/components/analyticsPages/EnergyAnalytics";
// import TechnologyAnalytics from "@/components/analyticsPages/TechnologyAnalytics";

export default function AnalyticsPage() {
  const { slug } = useParams();
  const router = useRouter();

  const selectedTopic = slug || "presidential-summary";

  const handleTopicChange = (newTopic) => {
    router.push(`/analytics/${newTopic}`);
  };

  const renderPage = () => {
    switch (selectedTopic) {
      case "presidential-summary":
        return <PresidentialSummaryAnalytics />;
      case "geopolitical-summary":
        return <GeopoliticalSummaryAnalytics />;
      case "economy-summary":
        return <EconomyAnalytics />;
      case "defense-summary":
        return <DefenseAnalytics />;
      case "energy-summary":
        return <EnergyAnalytics />;
      case "technology-summary":
        return <TechnologyAnalytics />;
      default:
        return "Still in progress guys!";
    }
  };

  return (
    <div className="hidden lg:block bg-[#FAFAFA] pb-[60px]">
      <div className="px-[33px]">
        {/* logo */}
        <Link href="/">
          <div className="pt-[30px]">
            <img
              src="/logo.png"
              alt="Sagravia Logo"
              className="w-32 md:w-36 cursor-pointer"
            />
          </div>
        </Link>

        {/* heading */}
        <div className="flex justify-between pt-[37px]">
          <div className="w-[40%]">
            <h2 className="text-[47px] font-[400] leading-normal font-[manrope] text-[#000]">
              Analytics overview
            </h2>
          </div>
          <div className="w-[60%] flex justify-end">
            <AnalyticsComboList
              selected={selectedTopic}
              onChange={handleTopicChange}
            />
          </div>
        </div>

        {/* topic analytics */}
        {renderPage()}
      </div>
    </div>
  );
}
