"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import AnalyticsComboList from "../../../components/analyticsComboList/analyticsComboList";

// Page components
import PresidentialSummaryAnalytics from "../../../components/analyticsPages/analyticsPSComponent/analyticsPSComponent";
import GeopoliticalSummaryAnalytics from "../../../components/analyticsPages/analyticsGSComponent/analyticsGSComponent";
import BusinessHistoryAnalytics from "../../../components/analyticsPages/analyticsBHComponent/analyticsBHComponent";
import LongAndShortAnalytics from "../../../components/analyticsPages/analyticsLScomponent/analyticsLSComponent";
import MovieSuggestionsAnalytics from "../../../components/analyticsPages/analyticsMSComponent/analyticsMSComponent";
import DubaiSummaryAnalytics from "../../../components/analyticsPages/analyticsDSComponent/analyticsDSComponent";

export default function AnalyticsPage() {
  const { slug } = useParams();
  const router = useRouter();

  const selectedTopic = slug || "presidential-summary";

  const handleTopicChange = (newTopic) => {
    router.push(`/analytics/${newTopic}`);
  };

  // slugs → components
  const componentMap = {
    "presidential-summary": <PresidentialSummaryAnalytics />,
    "geopolitical-summary": <GeopoliticalSummaryAnalytics />,
    "business-history": <BusinessHistoryAnalytics />,
    "long-and-short": <LongAndShortAnalytics />,
    "movie-suggestions": <MovieSuggestionsAnalytics />,
    "dubai-summary": <DubaiSummaryAnalytics />,
  };

  const CurrentComponent = componentMap[selectedTopic] || (
    <p className="text-gray-500">Still in progress guys!</p>
  );

  return (
    <>
      {/* desktop view */}
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
            <div className="w-[60%] flex justify-end items-end">
              <AnalyticsComboList
                selected={selectedTopic}
                onChange={handleTopicChange}
              />
            </div>
          </div>

          {/* topic analytics */}
          {CurrentComponent}
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden bg-[#FAFAFA] pt-[160px] ">
        <AnalyticsComboList
          selected={selectedTopic}
          onChange={handleTopicChange}
        />

        {/* topic analytics */}
        {CurrentComponent}
      </div>
    </>
  );
}
