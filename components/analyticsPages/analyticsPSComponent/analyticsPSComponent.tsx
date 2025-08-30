// "use client";

import AnalyticsPSNumberOfOpensChart from "@/components/analyticsPSNumberOfOpenChart/analyticsPSNumberOfOpenChart";
import AnalyticsPSNumberOfClicksChart from "@/components/analyticsPSNumberOfClicksChart/analyticsPSNumberOfClicksChart";
import AnalyticsPSNumberOfSubscribersChart from "@/components/analyticsPSNumberOfSubscribersChart/analyticsPSNumberOfSubscribersChart";
import AnalyticsPSAgeChart from "@/components/analyticsPSAgeChart/analyticsPSAgeChart";
import AnalyticsPSCountryChart from "@/components/analyticsPSCountryChart/analyticsPSCountryChart";
import AnalyticsAdCard from "../../../components/analyticsAdCard/analyticsAdCard";

export default function PresidentialSummaryAnalytics() {
  return (
    <>
      {/* 1st row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[22px]">
        {/* Left Card */}
        <div className="relative h-[465px] flex flex-col justify-between rounded-[22px] p-[40px] bg-gradient-to-br from-[#E2DEE6] to-[#746B7D] overflow-hidden">
          <div className="z-10">
            <p className="text-[16px] font-[400] text-[#01261E] pb-[14px]">
              Presidential Summary
            </p>
            <h2 className="w-[70%] font-[manrope] text-[#000] text-[38px] font-[700] leading-[105%] pb-[32px]">
              Summarizing daily headlines
            </h2>
            <button className="text-[14px] px-4 py-2 bg-[#01261E] text-white rounded-full shadow hover:bg-green-800">
              Visit website
            </button>
          </div>
          <img
            src="/analytics/a-ps.png"
            alt="Phone preview"
            className="absolute right-[30px] bottom-0 w-[370px] object-contain"
          />
        </div>

        {/* Right Chart */}
        <AnalyticsPSNumberOfOpensChart />
      </div>

      {/* 2nd row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[22px]">
        <AnalyticsPSNumberOfClicksChart />
        <AnalyticsPSNumberOfSubscribersChart />
      </div>

      {/* 3rd row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-[22px]">
        <AnalyticsPSAgeChart />
        <AnalyticsPSCountryChart />
        <AnalyticsAdCard />
      </div>
    </>
  );
}
