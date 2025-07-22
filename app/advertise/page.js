import { Component } from "../../components/areaChart/areaChart";
import { AccountReached } from "../../components/advertiseComponents/analyticsCharts/chartAccountReached/chartAccountReached";
import { ViewsCountry } from "../../components/advertiseComponents/analyticsCharts/chartViewsByCountry/chartViewsByCountry";
import { ActiveUsers } from "../../components/advertiseComponents/analyticsCharts/chartActiveUsers/chartActiveUsers";
import { Statistics } from "../../components/advertiseComponents/analyticsCharts/chartStatistics/chartStatistics";
import { SignInUps } from "../../components/advertiseComponents/analyticsCharts/chartSignUps/chartSignUps";
import HeadingWithUnderline from "../../components/advertiseComponents/headingWithUnderline/headingwithUnderline";
import { H2Icon } from "@heroicons/react/16/solid";
import AdvertiseFaq from "../../components/advertiseComponents/advertiseFaq/advertiseFaq";

import AdvertisePageMobileVersion from "../../components/advertisePageMobileVersion/advertisePageMobileVersion";
import { Agdasima } from "next/font/google";
import AdvertiseAdBlocker from "../../components/advertiseAdBlocker/advertiseAdBlocker";
import AdvertiseNewFaq from "../../components/advertiseNewFaq/advertiseNewFaq";
import Link from "next/link";

export default function Advertise() {
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

  const newsData = [
    {
      logo: "/advertise/bloomberg.png",
      logoAlt: "Bloomberg",
      logoWidth: 138,
      title:
        "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
      description:
        "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
      date: "JANUARY 25, 2025",
      link: "#",
    },
    {
      logo: "/advertise/bbc.png",
      logoAlt: "BBC",
      logoWidth: 108,
      title:
        "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
      description:
        "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
      date: "JANUARY 25, 2025",
      link: "#",
    },
    {
      logo: "/advertise/cnn.png",
      logoAlt: "CNN",
      logoWidth: 60,
      title:
        "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
      description:
        "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
      date: "JANUARY 25, 2025",
      link: "#",
    },
  ];

  return (
    <>
      {/* hero section */}
      <div className="bg-[#FAFAFA] hidden lg:block pt-[38px]">
        <div className=" relative md:px-28">
          {/* Top Year Labels */}
          {/* <div className="hidden lg:block absolute top-14 left-0 right-0 flex justify-between text-gray-500 text-[16px] px-[10%]">
            <span className="absolute left-[17%]">2014</span>
            <span className="absolute left-[38%]">2017</span>
            <span className="absolute left-[59%]">2020</span>
            <span className="absolute left-[80%]">2023</span>
          </div> */}

          {/* vertical lines */}
          {/* <div className="absolute top-20 bottom-[180px] left-[18%] w-px bg-[#716D6D] z-0" />
          <div className="absolute top-20 bottom-[70px] left-[39%] w-px bg-[#716D6D] z-0" />
          <div className="absolute top-20 bottom-[270px] left-[60%] w-px bg-[#716D6D] z-0" />
          <div className="absolute top-20 bottom-[390px] left-[81%] w-px bg-[#716D6D] z-0" /> */}

          {/* Text Section */}
          <div className="lg:pt-20 mx-auto">
            <div className="text-[#01261E]">
              <h2
                className="text-[80px] lg:w-[50%]  leading-[94%]"
                style={{ textShadow: "0px 4px 4px rgba(31, 25, 25, 0.00)" }}
              >
                Step into a world of discovery
              </h2>
              <p className="text-[20px] py-4 w-[30%] sm:w-[30%]">
                Explore different categories. Find the best deals. AG1 is a
                daily health drink packed with nutrients to help alleviate
                bloating.
              </p>
              <div>
                <Link href="/about">
                  <button className="flex px-[18px] py-[7px] bg-[#01261E] text-[#FAFAFA] text-[14px] font-[600] rounded-full hover:bg-[#0B4337]">
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="">
            <div className="flex justify-center relative mt-10 ">
              <div className="flex space-x-4 items-end relative z-0 w-full">
                {videos.map((video) => (
                  <video
                    key={video.id}
                    src={video.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`object-cover
                    w-[24%] max-w-[40%] 
                      ${video.height} ${video.moveUp || ""}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* bottom text  */}
          <div className="hidden lg:block absolute bottom-[600px] left-0 right-0 flex justify-between text-[#f0efed] text-[16px] font-[600] ">
            <span className="absolute bottom-[66px] left-[14%]">
              $19.4 trillion
            </span>
            <span className="absolute bottom-[14px] left-[36%]">
              $17.4 trillion
            </span>
            <span className="absolute bottom-[148px] left-[57%]">
              $18.9 trillion
            </span>
            <span className="absolute bottom-[250px] left-[78%]">
              $144 million
            </span>
          </div>

          <div className="px-28 absolute -bottom-1 left-0 w-full h-[35vh] bg-gradient-to-t from-[#FAFAFA] to-transparent z-10"></div>

          {/* 100K Subscribers Text (Above Gradient) */}
          <div className="">
            <div className="absolute -bottom-4 left-10 text-[11.3vw] font-[700] leading-[94%] tracking-[-1.6px] z-20 text-center w-[94%] max-w-[100%]">
              <h2>
                <span className="text-white">100K </span>
                <span className="text-[#01261E]">Subscribers</span>
              </h2>
            </div>
          </div>
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
              <AccountReached />
            </div>
            <div className="w-full md:w-[35%]">
              <ViewsCountry />
            </div>
          </div>

          {/* #2 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[35%]">
              <div>
                <ActiveUsers />
              </div>
            </div>
            <div className="w-full md:w-[45%]">
              <div>
                <Statistics />
              </div>
            </div>
          </div>

          {/* #3 */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 w-full md:py-4">
            <div className="w-full md:w-[45%]">
              <div>
                <SignInUps />
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
                      Access all major A2A payment methods via a single API and
                      global settlement with multi-currency support.
                    </p>
                  </div>
                  <div>
                    <Link href="/analytics">
                      <button className="flex px-4 py-1 text-[#FAFAFA] text-lg rounded-full border border-[#FAFAFA] p-2 hover:bg-[#ffffff] hover:text-[#01261E]">
                        Analytics
                      </button>
                    </Link>
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
          <HeadingWithUnderline text="How your ad will look like" />
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
              {/* <source src="/advertise/advertise-page-video.webm" type="video/webm" /> */}
            </video>
          </div>
        </div>

        <div className="flex my-0 flex-col items-center justify-center text-center pt-10 pb-40">
          <h2
            className="text-[80px] font-[400]"
            style={{ fontFamily: "GT Super Ds Trial" }}
          >
            And that’s not all
          </h2>

          <div className="w-[390px] mx-auto">
            <p className="text-[20px] font-[400] leading-[1.5]">
              Get a personalized demo and discover how Sagravia can help your
              business
            </p>
          </div>

          {/* Moving Text */}
          <a
            href="#"
            className="w-[806px] border border-[#01261E] rounded-[153px] overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E]"
          >
            <span className="flex py-[31px] justify-end items-center  text-[100px] font-[800] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll group-hover:pause group ">
              SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK
              TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO
              SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
              SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK
              TO SALES SPEAK TO SALES SPEAK TO SALES SPEAK TO SALES
            </span>
          </a>
        </div>
      </div>

      {/* Ad blocker and Do follow */}
      <div className="hidden lg:block">
        <AdvertiseAdBlocker />
      </div>

      {/* faq */}

      {/* old */}
      {/* <div className="bg-[#FAFAFA] relative hidden lg:block">
            <div className="px-4 md:px-28 pt-20 pb-10">
              <div className="flex flex-col md:flex-row justify-between px-4">
              <div className="md:w-[40%] lg:py-0 pb-14">
                <div className="text-[#01261E] text-[56px] leading-[104%] font-[400] ">
                Got Questions? We've Got Answers!
                </div>
              </div>

              <div className="md:w-[44%] ">
                <div className="text-black">
                <AdvertiseFaq/>
                </div>
              </div>
            </div>
            </div>
          </div> */}

      {/* new */}
      <AdvertiseNewFaq />

      {/* In the press */}
      <div className="bg-[#FAFAFA] hidden lg:block">
        <div className="px-4 sm:px-10 xl:px-28 2xl:px-28 py-10">
          <HeadingWithUnderline text="In the press" />
        </div>

        <div className="px-4 md:px-32 pb-20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {newsData.map((item, index) => (
              <div key={index} className="space-y-3">
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="h-[31px]"
                  style={{ width: `${item.logoWidth}px` }}
                />
                <p className="text-[26px] font-semibold">{item.title}</p>
                <p className="text-[15px] ">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-[15px] font-semibold">{item.date}</p>
                  <a
                    href={item.link}
                    className="text-[15px] font-semibold text-black hover:underline"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="px-20 py-20 flex justify-center ">
            <a
              href=""
              className="w-[198px] h-[45px] flex justify-center items-center border border-[#121212] rounded-[45px] text-[23px] text-[#121212] font-[600] hover:bg-[#01261E] hover:text-[#ffffff] transition"
            >
              See more
            </a>
          </div>
        </div>
      </div>

      {/* mobile view for advertise page */}
      <div className="block lg:hidden bg-[#FAFAFA] pt-[100px] pb-[10px]">
        <AdvertisePageMobileVersion />
      </div>
    </>
  );
}
