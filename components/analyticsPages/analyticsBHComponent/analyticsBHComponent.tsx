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
      {/* desktop */}
      <div className="lg:block hidden">
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
              <a href="" target="_blank">
                <button className="text-[14px] px-4 py-2 bg-[#01261E] text-white rounded-full shadow hover:bg-green-800">
                  Visit website
                </button>
              </a>
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
          <AnalyticsAdCard id={3} />
        </div>
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <div className="px-4">
          {/* Hero section */}
          <div className="relative h-[232px] flex flex-col justify-between rounded-[10px] pt-[16px] pl-[16px] bg-[url('/analytics/bg-bh.png')] bg-cover bg-center overflow-hidden">
            <div className="z-90 relative ">
              <h4 className="font-[manrope] text-[16px] font-[600] text-[#000] leading-[150%]">
                Business History
              </h4>
              <p className="font-[500] text-[12px] pt-[12px] leading-[137%]">
                Intriguing stories that built (or
                <br /> broke) the greatest businesses.
              </p>
              <div className="pt-[15px]">
                <a href="https://www.businesshistory.co/" target="_blank">
                  <button className="text-[14px] px-[18px] py-[9px] font-[600] bg-[#01261E] text-white rounded-full shadow hover:bg-[#0B4337]">
                    Visit website
                  </button>
                </a>
              </div>
            </div>

            <img
              src="/analytics/mobile-a-bh.png"
              alt="Phone preview"
              className="absolute top-[53px] right-2 bottom-0 w-[176px] object-contain "
            />
          </div>

          {/* Charts + cards stacked */}
          <div className="space-y-6 mt-6">
            <AnalyticsPSNumberOfOpensChart />
            <AnalyticsPSNumberOfClicksChart />
            <AnalyticsPSNumberOfSubscribersChart />
            <AnalyticsPSAgeChart />
            <AnalyticsPSCountryChart />
            <AnalyticsAdCard id={3} />
          </div>
        </div>
      </div>
    </>
  );
}
