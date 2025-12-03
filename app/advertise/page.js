"use client";

import { useState } from "react";

import { AccountReached } from "../../components/advertiseComponents/analyticsCharts/chartAccountReached/chartAccountReached";
import { ViewsCountry } from "../../components/advertiseComponents/analyticsCharts/chartViewsByCountry/chartViewsByCountry";
import { ActiveUsers } from "../../components/advertiseComponents/analyticsCharts/chartActiveUsers/chartActiveUsers";
import { Statistics } from "../../components/advertiseComponents/analyticsCharts/chartStatistics/chartStatistics";
import { SignInUps } from "../../components/advertiseComponents/analyticsCharts/chartSignUps/chartSignUps";
import HeadingWithUnderline from "../../components/advertiseComponents/headingWithUnderline/headingwithUnderline";

import AdvertisePageMobileVersion from "../../components/advertisePageMobileVersion/advertisePageMobileVersion";
import AdvertiseAdBlocker from "../../components/advertiseAdBlocker/advertiseAdBlocker";
import AdvertiseNewFaq from "../../components/advertiseNewFaq/advertiseNewFaq";
import Link from "next/link";
import CustomizedHoverButton from "../../components/customizedHoverButton/customizedHoverButton";

// 🔹 Static analytics data (no API)
const ADVERTISE_ANALYTICS = {
  subscribersMonthly: [
    { month: "2025-01-01", count: 34804 },
    { month: "2025-02-01", count: 87146 },
    { month: "2025-03-01", count: 148011 },
    { month: "2025-04-01", count: 247353 },
    { month: "2025-05-01", count: 315951 },
    { month: "2025-06-01", count: 371467 },
    { month: "2025-07-01", count: 512739 },
    { month: "2025-08-01", count: 1095335 },
    { month: "2025-09-01", count: 665106 },
    { month: "2025-10-01", count: 456244 },
    { month: "2025-11-01", count: 899518 },
    { month: "2025-12-01", count: 114759 },
  ],
  opensByCountry: [
    {
      country: "United States",
      uniqueOpeners: 276628,
      totalOpens: 6851111,
      totalPercentage: 74.89,
    },
    {
      country: "United Arab Emirates",
      uniqueOpeners: 67545,
      totalOpens: 968173,
      totalPercentage: 10.58,
    },
    {
      country: "United Kingdom",
      uniqueOpeners: 5636,
      totalOpens: 135758,
      totalPercentage: 1.48,
    },
    {
      country: "India",
      uniqueOpeners: 3972,
      totalOpens: 125463,
      totalPercentage: 1.37,
    },
    {
      country: "Australia",
      uniqueOpeners: 1496,
      totalOpens: 61834,
      totalPercentage: 0.68,
    },
  ],
  opensMonthly: [
    { month: "2025-01-01", count: 39387 },
    { month: "2025-02-01", count: 108552 },
    { month: "2025-03-01", count: 116890 },
    { month: "2025-04-01", count: 118543 },
    { month: "2025-05-01", count: 216723 },
    { month: "2025-06-01", count: 605858 },
    { month: "2025-07-01", count: 1077545 },
    { month: "2025-08-01", count: 1217666 },
    { month: "2025-09-01", count: 1443895 },
    { month: "2025-10-01", count: 1618392 },
    { month: "2025-11-01", count: 2321448 },
    { month: "2025-12-01", count: 276395 },
  ],
  opensByGender: [
    { gender: "male", totalOpeners: 64532, percentage: 57.69 },
    { gender: "female", totalOpeners: 47326, percentage: 42.31 },
    { gender: "unknown", totalOpeners: 3, percentage: 0 },
  ],
  adClickActivity: [
    { week: "week 1", lastMonth: 914, thisMonth: 10265 },
    { week: "week 2", lastMonth: 688, thisMonth: 13072 },
    { week: "week 3", lastMonth: 9547, thisMonth: 19801 },
    { week: "week 4", lastMonth: 7733, thisMonth: 7032 },
  ],
};

export default function Advertise() {
  // In case later you want to toggle between different presets, etc.
  const [analyticsData] = useState(ADVERTISE_ANALYTICS);

  const videos = [
    { video: "/advertise/v-1.mp4", id: "video1", height: "h-[694px]" },
    { video: "/advertise/v-2.mp4", id: "video2", height: "h-[644px]" },
    {
      video: "/advertise/v-3.mp4",
      id: "video3",
      height: "h-[781px]",
      moveUp: "mt-[-80px]",
    },
    {
      video: "/advertise/v-4.mp4",
      id: "video4",
      height: "h-[881px]",
      moveUp: "mt-[-120px]",
    },
  ];

  function ClickTooltip({ active, payload, label }) {
    if (!active || !payload || !payload.length) return null;

    const item = payload[0];
    const value = item.value || 0;

    const formatted = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(value);

    return (
      <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex items-stretch gap-3 text-sm">
        {/* vertical colored line */}
        <div
          className="w-[3px] rounded-full"
          style={{ backgroundColor: item.color || "#657C75" }}
        />

        <div className="flex flex-col gap-1">
          {/* Week */}
          <div className="font-medium text-[#111827]">{label}</div>

          {/* Count */}
          <div className="font-semibold text-[#111827]">{formatted}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* hero section */}
      <div className="bg-[#FAFAFA] hidden lg:block pt-[38px]">
        <div className=" relative md:px-28">
          {/* Text Section */}
          <div className="lg:pt-20 mx-auto">
            <div className="text-[#01261E]">
              <h2
                className="text-[80px] lg:w-[50%]  leading-[94%]"
                style={{ textShadow: "0px 4px 4px rgba(31, 25, 25, 0.00)" }}
              >
                90,367 people would have seen your brand yesterday
              </h2>
              <p className="text-[20px] py-4 w-[30%] sm:w-[30%]">
                Make your brand part of their morning ritual. Not ignored ad
                inventory.
              </p>
              <div>
                <Link href="/contact">
                  <button className="flex px-[18px] py-[7px] bg-[#01261E] text-[#FAFAFA] text-[14px] font-[600] rounded-full hover:bg-[#0B4337]">
                    Advertise now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Video + Text Section */}
          <div className="relative w-full mt-10">
            {/* Videos */}
            <div className="flex justify-center relative">
              <div className="flex space-x-4 items-end relative z-0 w-full">
                {videos.map((video) => (
                  <video
                    key={video.id}
                    src={video.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`object-cover w-[24%] max-w-[40%] ${
                      video.height
                    } ${video.moveUp || ""}`}
                  />
                ))}
              </div>
            </div>

            {/* 500K Subscribers Text */}
            <div className="absolute -bottom-4 left-[49.7%] -translate-x-1/2 z-20 text-center">
              <h2 className="font-[700] sm:text-[10vw] lg:text-[11.4vw] 2xl:text-[11.4vw] [1650px]:text-[13vw] [1800px]:text-[13vw] leading-[94%] tracking-[-1.6px] whitespace-nowrap">
                <span className="text-white">500k </span>
                <span className="text-[#01261E]">Subscribers</span>
              </h2>
            </div>
          </div>

          <div className="px-28 absolute -bottom-1 left-0 w-full h-[35vh] bg-gradient-to-t from-[#FAFAFA] to-transparent z-10"></div>
        </div>
      </div>

      {/* combined analytics */}
      <div className="bg-[#FAFAFA] relative hidden lg:block pt-20">
        <div className="px-4 sm:px-10 xl:px-28 2xl:px-28 pt-16 pb-10">
          <HeadingWithUnderline text="Combined Analytics" />
        </div>

        {/* charts section */}
        <div className="">
          {/* #1 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[45%]">
              <AccountReached
                subscribersMonthly={analyticsData.subscribersMonthly}
                isLoading={false}
              />
            </div>
            <div className="w-full md:w-[35%]">
              {/* later we can pass opensByCountry here */}
              <ViewsCountry
                opensByCountry={ADVERTISE_ANALYTICS.opensByCountry}
              />{" "}
            </div>
          </div>

          {/* #2 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[35%]">
              <div>
                <ActiveUsers opensMonthly={ADVERTISE_ANALYTICS.opensMonthly} />
              </div>
            </div>
            <div className="w-full md:w-[45%]">
              <div>
                <Statistics opensByGender={ADVERTISE_ANALYTICS.opensByGender} />
              </div>
            </div>
          </div>

          {/* #3 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[45%]">
              <div>
                <SignInUps
                  adClickActivity={ADVERTISE_ANALYTICS.adClickActivity}
                />
              </div>
            </div>
            <div className="w-full md:w-[35%]">
              <div
                className="h-[365px] rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
                style={{
                  background:
                    "conic-gradient(from 142deg at 60.52% 63.72%, var(--Green-Main, #01261E) 0deg, #116150 360deg)",
                }}
              >
                <div className="md:flex md:flex-col justify-between md:p-10 h-full">
                  <div className="flex-grow">
                    <p className="text-[#FAFAFA] max-w-[335px] text-[20px]">
                      This is where precision meets perspective. Explore
                      detailed analytics for every newsletter to see how
                      influence, attention, and conversion intertwine across our
                      newsletter portfolio.
                    </p>
                  </div>
                  <div>
                    <CustomizedHoverButton
                      href="/analytics"
                      label="See analytics"
                      fontSize="14px"
                      fontWeight="600"
                      width="fit"
                      height="37px"
                      borderColor="#DAEBE8"
                      hoverBgColor="#DAEBE8"
                      hoverText="black"
                      textColor="#DAEBE8"
                      padding="px-[24px] py-[9px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*text with video section */}
      <div className="bg-[#FAFAFA] hidden lg:block">
        <div className="px-4 sm:px-10 xl:px-28 2xl:px-28 py-10">
          <HeadingWithUnderline text="What your ads will look like" />
        </div>

        <div className="w-full h-[962px] relative overflow-hidden">
          <div className="w-full h-full">
            <video
              key="advertise-video"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/advertise/advertise-page-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="flex my-0 flex-col items-center justify-center text-center pt-10 pb-40">
          <h2
            className="text-[80px] font-[400] leading-[1]"
            style={{ fontFamily: "GT Super Ds Trial" }}
          >
            The most valuable real
            <br /> estate is the inbox
          </h2>

          <div className="w-[537px] mx-auto pt-[30px]">
            <p className="text-[20px] font-[400] leading-[1.5]">
              The inbox gives your brand a direct path to the reader. No
              algorithms, no ad blockers, no visual clutter. Just undivided
              attention.
            </p>
          </div>

          <a
            href="/contact"
            className="w-[806px] border border-[#01261E] rounded-[153px] overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E]"
          >
            <span className="flex py-[31px] justify-end items-center  text-[100px] font-[800] whitespace-nowrap transition-transform uppercase duration-500 ease-in-out animate-scroll group-hover:pause group">
              ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp;
              ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp;
              ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp;
              ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp;
              ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp;
              ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp; ADVERTISE&nbsp;
            </span>
          </a>
        </div>
      </div>

      {/* Ad blocker and Do follow */}
      <div className="hidden lg:block">
        <AdvertiseAdBlocker />
      </div>

      {/* faq */}
      <AdvertiseNewFaq />

      {/* mobile view for advertise page */}
      <div className="block lg:hidden bg-[#FAFAFA] pt-[100px] pb-[10px]">
        <AdvertisePageMobileVersion />
      </div>
    </>
  );
}
