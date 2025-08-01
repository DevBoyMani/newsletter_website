import { Component } from "../../components/areaChart/areaChart";
import { AccountReached } from "../../components/advertiseComponents/analyticsCharts/chartAccountReached/chartAccountReached";
import { ViewsCountry } from "../../components/advertiseComponents/analyticsCharts/chartViewsByCountry/chartViewsByCountry";
import { ActiveUsers } from "../../components/advertiseComponents/analyticsCharts/chartActiveUsers/chartActiveUsers";
import { Statistics } from "../../components/advertiseComponents/analyticsCharts/chartStatistics/chartStatistics";
import { SignInUps } from "../../components/advertiseComponents/analyticsCharts/chartSignUps/chartSignUps";
import HeadingWithUnderline from "../../components/advertiseComponents/headingWithUnderline/headingwithUnderline";
import AdvertiseFaq from "../../components/advertiseComponents/advertiseFaq/advertiseFaq";
import Footer from "../../components/footer/footer";
import InThePress from "../advertiseComponents/mobileViewComponents/inThePress/inThePress";
import { MobileFaq } from "../advertiseComponents/mobileViewComponents/mobileFaq/mobileFaq";
import { Agdasima } from "next/font/google";
import AdvertiseAdBlocker from "../advertiseAdBlocker/advertiseAdBlocker";
import Link from "next/link";

export default function AdvertisePageMobileVersion() {
  const videos = [
    { video: "/advertise/v-1.mp4", id: "video1", height: "h-[297px]" },
    { video: "/advertise/v-2.mp4", id: "video2", height: "h-[245px]" },
    {
      video: "/advertise/v-3.mp4",
      id: "video3",
      height: "h-[389px]",
      moveUp: "mt-[-80px]",
    },
    {
      video: "/advertise/v-4.mp4",
      id: "video4",
      height: "h-[513px]",
      moveUp: "mt-[-120px]",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#FAFAFA] relative">
        {/* Top Year Labels */}
        {/* <div className="absolute top-12 left-0 right-0 flex justify-between text-gray-500 text-[16px] px-[10%]">
          <span className="absolute left-[10.5%]">2014</span>
          <span className="absolute left-[34%]">2017</span>
          <span className="absolute left-[58%]">2020</span>
          <span className="absolute left-[82%]">2023</span>
        </div> */}
        {/* 
        <div className="absolute top-20 bottom-[182px] left-[15%] w-px bg-gray-300 z-0" />
        <div className="absolute top-20 bottom-[70px] left-[38.5%] w-px bg-gray-300 z-0" />
        <div className="absolute top-20 bottom-[270px] left-[62%] w-px bg-gray-300 z-0" />
        <div className="absolute top-20 bottom-[390px] left-[85.5%] w-px bg-gray-300 z-0" /> */}

        <div className="px-4 pt-10 mx-auto max-w-screen-xl">
          <h2 className="text-[44px] font-[400] text-left text-[#01261E] w-full leading-[117%] ">
            Step into a world of discovery
          </h2>
          <p className="w-[60%] sm:w-[80%] md:w-[70%] text-sm sm:text-base py-4 text-black">
            Explore different categories. Find the best deals. AG1 is a daily
            health drink packed with nutrients to help alleviate bloating.
          </p>
          <div className="absolute top-100 left-[4%] z-20">
            <Link href="/about">
              <button className="flex px-[14px] py-[7px] bg-[#01261E] text-[#FAFAFA] text-[13px] font-[600] rounded-full border hover:bg-[#0B4337]">
                About us
              </button>
            </Link>
          </div>
        </div>

        {/* Videos */}
        <div className="flex relative pl-4 pr-6 mt-4">
          <div className="flex gap-x-2 items-end relative z-0 w-max">
            {videos.map((video) => (
              <video
                key={video.id}
                src={video.video}
                autoPlay
                loop
                muted
                playsInline
                className={`object-cover
                w-[24%] 
                  ${video.height} ${video.moveUp || ""}`}
              />
            ))}
          </div>
        </div>
        {/* bottom text  */}
        <div className="absolute bottom-[0px] left-0 right-0 flex justify-between text-[#f0efed] text-[16px]">
          <span className="absolute bottom-[248px] left-[9.5%]">
            $19.4
            <br /> trillion
          </span>
          <span className="absolute bottom-[196px] left-[32.5%]">
            $17.4
            <br /> trillion
          </span>
          <span className="absolute bottom-[338px] left-[56.5%]">
            $18.9
            <br /> trillion
          </span>
          <span className="absolute bottom-[464px] left-[80%]">
            $144
            <br /> million
          </span>
        </div>

        {/* Gradient */}
        <div className="absolute -bottom-1 left-0 w-full h-[120px] px-4 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10" />

        {/* Subscribers Text */}
        <div className="absolute bottom-0 left-0 w-full px-4 text-start z-20">
          <h2 className="text-[47px] sm:text-[6vw] font-normal leading-[1] tracking-tight text-wrap">
            <span className="text-white">100K </span>
            <span className="text-[#01261E]">Subscribers</span>
          </h2>
        </div>
      </div>

      {/* Combined Analytics */}
      <div className="bg-[#FAFAFA] relative px-4 md:px-28 pt-20">
        <HeadingWithUnderline text="Combined Analytics" />

        {/* Analytics Chart Grid */}
        <div className=" mt-10">
          {/* Chart Row 1 */}
          <div className="flex flex-col justify-center items-center gap-4">
            <AccountReached />
            <ViewsCountry />
          </div>

          {/* Chart Row 2 */}
          <div className="flex flex-col justify-center items-center gap-4">
            <ActiveUsers />
            <Statistics />
          </div>

          {/* Chart Row 3 */}
          <div className="flex flex-col justify-center items-center gap-4">
            <SignInUps />
            <div
              className="w-full h-[215px] rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
              style={{
                background:
                  "conic-gradient(from 142deg at 60.52% 63.72%, var(--Green-Main, #01261E) 0deg, #116150 360deg)",
              }}
            >
              <div className="flex flex-col justify-between p-6 h-full">
                <p className="text-white text-[15px] font-[400] max-w-[335px]">
                  Access all major A2A payment methods via a single API and
                  global settlement with multi-currency support.
                </p>
                <div className="flex justify-start items-center max-w-xl max-h-[20px] pb-6">
                  <Link href="/analytics">
                    <button className="text-[14px] mt-6 px-4 py-1.5 border border-white text-white rounded-full hover:bg-white hover:text-[#01261E] transition">
                      Analytics
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Preview */}
      <div className="bg-[#FAFAFA] pt-10">
        <div className="px-4 py-10">
          <HeadingWithUnderline text="How your ad will look like" />
        </div>
        <div className="flex w-full max-h-[213px] relative overflow-hidden">
          <video autoPlay loop muted playsInline className=" object-cover">
            <source
              src="/advertise/advertise-page-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-[60px]">
          <h2 className="text-[34px]  font-[400] leading-normal">
            And that’s not all
          </h2>
          <p className="text-[#121212] text-[16px] leading-[125%] font-[400] tracking-[0.8px] py-[30px] text-center">
            Get a personalized demo and
            <br /> discover how Sagravia can help
            <br /> your business
          </p>

          <a
            href="#"
            className="w-full max-w-[269px] border border-[#01261E] rounded-full overflow-hidden relative group bg-[#01261E] text-[#ffffff] font-[800]"
          >
            <span className="flex py-2 justify-end items-center text-[37px] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll-mobile group-hover:pause group ">
              SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK
              TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO
              SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
              SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK
              TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
            </span>
          </a>
        </div>
      </div>

      {/* Ad Blocker and Do Follow */}

      <AdvertiseAdBlocker />

      {/* FAQ Section */}
      <div className="bg-[#FAFAFA] px-4 md:px-28 pt-10 pb-10">
        <HeadingWithUnderline text="Got Questions? We've Got Answers!" />
        <div>
          <MobileFaq />
        </div>
      </div>

      {/* In the Press */}
      <div className="bg-[#FAFAFA] px-4 md:px-28 pt-10 pb-10">
        <HeadingWithUnderline text="In the press" />
        <InThePress />
      </div>
    </>
  );
}
