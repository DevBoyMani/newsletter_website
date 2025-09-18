"use client";

import AnalyticsPSNumberOfOpensChart from "@/components/analyticsPSNumberOfOpenChart/analyticsPSNumberOfOpenChart";
import AnalyticsPSNumberOfClicksChart from "@/components/analyticsPSNumberOfClicksChart/analyticsPSNumberOfClicksChart";
import AnalyticsPSNumberOfSubscribersChart from "@/components/analyticsPSNumberOfSubscribersChart/analyticsPSNumberOfSubscribersChart";
import AnalyticsPSAgeChart from "@/components/analyticsPSAgeChart/analyticsPSAgeChart";
import AnalyticsPSCountryChart from "@/components/analyticsPSCountryChart/analyticsPSCountryChart";
import AnalyticsAdCard from "../../../components/analyticsAdCard/analyticsAdCard";

export default function BusinessHistoryAnalytics() {
  return (
    <>
      {/* 1-row*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[22px]">
        <div className="relative h-[465px] flex flex-col justify-between rounded-[22px] p-[40px] bg-[url('/analytics/bg-bh.png')] bg-cover bg-center overflow-hidden">
          <div className="z-10">
            <p className=" text-[16px] font-[400] text-[#01261E] pb-[14px]">
              Business History
            </p>
            <h2 className="font-[manrope] w-[56%] text-[#000] text-[38px] font-[700] leading-[105%] pb-[32px]">
              Business magnets, their triumphs, and trials
            </h2>
            <button className="text-[14px] px-4 py-2 bg-[#01261E] text-white rounded-full shadow hover:bg-green-800">
              Visit website
            </button>
          </div>
          <img
            src="/analytics/a-bh.png"
            alt="Phone preview"
            className="absolute right-[30px] bottom-0 w-[370px] object-contain"
          />
        </div>
        <AnalyticsPSNumberOfOpensChart />
      </div>

      {/* 2-row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[22px]">
        <AnalyticsPSNumberOfClicksChart />
        <AnalyticsPSNumberOfSubscribersChart />
      </div>

      {/* 3-row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-[22px]">
        <AnalyticsPSAgeChart />
        <AnalyticsPSCountryChart />
        <AnalyticsAdCard />
      </div>
    </>
  );
}
