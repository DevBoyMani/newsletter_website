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

// --- Add formatter here ---
// function formatCompactNumber(num) {
//   if (!num) return "0";

//   const n = Number(num);
//   if (isNaN(n)) return num;

//   // Billions → allow decimal
//   if (n >= 1_000_000_000) {
//     return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
//   }

//   // Millions → allow decimal
//   if (n >= 1_000_000) {
//     return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
//   }

//   // Thousands → NO decimal
//   if (n >= 1_000) {
//     return Math.floor(n / 1_000) + "K";
//   }

//   return n.toString();
// }

export default function AdvertiseClient({ analyticsData }) {
  const [data] = useState(analyticsData || {});
  // Use raw number and convert
  // const rawYesterdayOpens =
  //   analyticsData?.lastCampaignOpenSummary?.totalOpens || 124056;

  // const heroYesterdayReach = formatCompactNumber(rawYesterdayOpens);
  const {
    subscribersMonthly = [],
    opensByCountry = [],
    opensMonthly = [],
    opensByGender = [],
    adClickActivity = [],
  } = data;

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
                {analyticsData?.lastCampaignOpenSummary?.formattedTotalOpens}{" "}
                people would have seen your brand yesterday
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
                subscribersMonthly={subscribersMonthly}
                isLoading={false}
              />
            </div>
            <div className="w-full md:w-[35%]">
              <ViewsCountry opensByCountry={opensByCountry} />
            </div>
          </div>

          {/* #2 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[35%]">
              <Statistics opensByGender={opensByGender} />
            </div>
            <div className="w-full md:w-[45%]">
              <ActiveUsers opensMonthly={opensMonthly} />
            </div>
          </div>

          {/* #3 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[45%]">
              <SignInUps adClickActivity={adClickActivity} />
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
        <AdvertisePageMobileVersion
          subscribersMonthly={subscribersMonthly}
          isLoading={false}
          opensByCountry={opensByCountry}
          opensByGender={opensByGender}
          opensMonthly={opensMonthly}
          adClickActivity={adClickActivity}
          formattedTotalOpens={
            analyticsData?.lastCampaignOpenSummary?.formattedTotalOpens
          }
        />
      </div>
    </>
  );
}
