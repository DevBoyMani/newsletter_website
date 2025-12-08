"use client";

import AnalyticsPSNumberOfOpensChart from "@/components/analyticsPSNumberOfOpenChart/analyticsPSNumberOfOpenChart";
import AnalyticsPSNumberOfClicksChart from "@/components/analyticsPSNumberOfClicksChart/analyticsPSNumberOfClicksChart";
import AnalyticsPSNumberOfSubscribersChart from "@/components/analyticsPSNumberOfSubscribersChart/analyticsPSNumberOfSubscribersChart";
import AnalyticsPSAgeChart from "@/components/analyticsPSAgeChart/analyticsPSAgeChart";
import AnalyticsPSCountryChart from "@/components/analyticsPSCountryChart/analyticsPSCountryChart";
import AnalyticsAdCard from "@/components/analyticsAdCard/analyticsAdCard";

export default function WebsiteAnalytics({
  config,
  opensByMonth = [],
  subscribersByMonth = [],
  genderBreakdown = [],
  countryBreakdown = [],
  adClicksMonthly = [],
}) {
  if (!config) {
    return (
      <p className="px-8 pt-10 text-sm text-red-500">Unknown newsletter.</p>
    );
  }

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:block">
        {/* 1st row: hero + opens chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[22px]">
          {/* Hero card (left) */}
          <div
            className="relative h-[465px] flex flex-col justify-between rounded-[22px] p-[40px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${config.desktopBg})` }}
          >
            <div className="z-10">
              <p className="text-[16px] font-[400] text-[#01261E] pb-[14px]">
                {config.name}
              </p>
              <h2 className="w-[70%] font-[manrope] text-[#000] text-[38px] font-[700] leading-[105%] pb-[32px]">
                {config.heroTitleLine1}
                <br />
                {config.heroTitleLine2}
              </h2>
              <a href={config.visitUrl} target="_blank" rel="noreferrer">
                <button className="text-[14px] px-4 py-2 bg-[#01261E] text-white rounded-full shadow hover:bg-[#0B4337]">
                  Visit website
                </button>
              </a>
            </div>

            <img
              src={config.desktopPhone}
              alt={`${config.name} preview`}
              className="absolute right-[30px] bottom-0 w-[370px] object-contain"
            />
          </div>

          {/* Opens chart (right) */}
          <AnalyticsPSNumberOfOpensChart opensByMonth={opensByMonth} />
        </div>

        {/* 2nd row: clicks + subscribers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[22px]">
          <AnalyticsPSNumberOfClicksChart adClicksMonthly={adClicksMonthly} />
          <AnalyticsPSNumberOfSubscribersChart
            subscribersByMonth={subscribersByMonth}
          />
        </div>

        {/* 3rd row: gender + country + ad card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-[22px]">
          <AnalyticsPSAgeChart genderBreakdown={genderBreakdown} />
          <AnalyticsPSCountryChart countryBreakdown={countryBreakdown} />
          <AnalyticsAdCard id={config.adCardId} />
        </div>
      </div>

      {/* MOBILE */}
      <div className="block lg:hidden px-4">
        {/* Hero section */}
        <div
          className="relative h-[232px] flex flex-col justify-between rounded-[10px] pt-[16px] pl-[16px] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${config.mobileBg})` }}
        >
          <div className="z-10 relative">
            <h4 className="font-[manrope] text-[16px] font-[600] text-[#000] leading-[150%]">
              {config.name}
            </h4>
            <p className="font-[500] text-[12px] pt-[12px] leading-[137%]">
              {config.heroTitleLine1}
              <br />
              {config.heroTitleLine2}
            </p>
            <div className="pt-[15px]">
              <a href={config.visitUrl} target="_blank" rel="noreferrer">
                <button className="text-[14px] px-[18px] py-[8px] font-[600] bg-[#01261E] text-white rounded-full shadow hover:bg-[#0B4337]">
                  Visit website
                </button>
              </a>
            </div>
          </div>

          <img
            src={config.mobilePhone}
            alt={`${config.name} preview`}
            className="absolute top-[62px] right-1 bottom-0 w-[175px] object-contain"
          />
        </div>

        {/* Charts stacked */}
        <div className="space-y-[32px] mt-6">
          <AnalyticsPSNumberOfOpensChart opensByMonth={opensByMonth} />
          <AnalyticsPSNumberOfClicksChart adClicksMonthly={adClicksMonthly} />
          <AnalyticsPSNumberOfSubscribersChart
            subscribersByMonth={subscribersByMonth}
          />
          <AnalyticsPSAgeChart genderBreakdown={genderBreakdown} />
          <AnalyticsPSCountryChart countryBreakdown={countryBreakdown} />
          <AnalyticsAdCard id={config.adCardId} />
        </div>
      </div>
    </>
  );
}
