
import { Component } from "../../components/areaChart/areaChart";
import {AccountReached} from "../../components/advertiseComponents/analyticsCharts/chartAccountReached/chartAccountReached";
import {ViewsCountry} from "../../components/advertiseComponents/analyticsCharts/chartViewsByCountry/chartViewsByCountry";
import {ActiveUsers} from "../../components/advertiseComponents/analyticsCharts/chartActiveUsers/chartActiveUsers";
import {Statistics} from "../../components/advertiseComponents/analyticsCharts/chartStatistics/chartStatistics";
import {SignInUps} from "../../components/advertiseComponents/analyticsCharts/chartSignUps/chartSignUps";
import HeadingWithUnderline from "../../components/advertiseComponents/headingWithUnderline/headingwithUnderline";
import { Link } from "lucide-react";
import { H2Icon } from "@heroicons/react/16/solid";
import AdvertiseFaq from "../../components/advertiseComponents/advertiseFaq/advertiseFaq";
import Footer from "../../components/footer/footer"
import AdvertisePageMobileVersion from "../../components/advertisePageMobileVersion/advertisePageMobileVersion";

export default function Advertise() {
    const videos = [
      { video: "/advertise/v-1.mp4", id: "video1", height: "h-[732px]" },
      { video: "/advertise/v-2.mp4", id: "video2", height: "h-[661px]" },
      { video: "/advertise/v-3.mp4", id: "video3", height: "h-[876px]", moveUp: "mt-[-80px]" },
      { video: "/advertise/v-4.mp4", id: "video4", height: "h-[1005px]", moveUp: "mt-[-120px]" },
    ];

    const newsData = [
      {
        logo: "/advertise/blommberg.png",
        logoAlt: "Bloomberg",
        logoWidth: 138,
        title: "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
        description: "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
        date: "JANUARY 25, 2025",
        link: "#",
      },
      {
        logo: "/advertise/bbc.png",
        logoAlt: "BBC",
        logoWidth: 108,
        title: "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
        description: "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
        date: "JANUARY 25, 2025",
        link: "#",
      },
      {
        logo: "/advertise/cnn.png",
        logoAlt: "CNN",
        logoWidth: 60,
        title: "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
        description: "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
        date: "JANUARY 25, 2025",
        link: "#",
      },
    ];
  
    return (
      <>
        {/* hero section */}
          <div className="bg-white relative hidden lg:block">

              {/* Top Year Labels */}
              {/* <div className="hidden lg:block absolute top-14 left-0 right-0 flex justify-between text-gray-500 text-sm px-[10%]">
              <span className="absolute left-[12%]">2014</span>
              <span className="absolute left-[35%]">2017</span>
              <span className="absolute left-[59%]">2020</span>
              <span className="absolute left-[84%]">2023</span>
              </div> */}

              {/* Text Section */}
              <div className=" md:px-16 px-4 lg:pt-20 pt-10 mx-auto">
                <div className="text-black">
                  <h2 className="text-7xl lg:w-[50%] ">Step into a world of discovery</h2>
                  <p className="text-base py-4 w-[30%] sm:w-[30%]">
                    Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.
                  </p>
                </div>
              </div>


              {/* Vertical Lines (Now properly positioned) */}
              {/* <div className="hidden lg:block absolute w-full h-full pointer-events-none">
              <div className="absolute left-[13%] top-[-250] h-[420px] border-l border-gray-300 z-10"></div>
              <div className="absolute left-[36%] top-[-250] h-[500px] border-l border-gray-300 z-10"></div>
              <div className="absolute left-[60%] top-[-250] h-[280px] border-l border-gray-300 z-10"></div>
              <div className="absolute left-[85%] top-[-250] h-[160px] border-l border-gray-300 z-10"></div>
              </div> */}

              {/* Video Section */}
              <div className="flex justify-center relative px-2">
              <div className="flex gap-x-2 items-end relative z-0">
                {videos.map((video) => (
                  <video
                    key={video.id}
                    src={video.video}
                    autoPlay
                    loop
                    muted
                    className={`w-[21.31rem] ${video.height} object-cover ${video.moveUp || ""}`}
                  />
                ))}
              </div>
              </div>

                  {/* bottom text  */}
                  {/* <div className="hidden lg:block absolute bottom-[600px] left-0 right-0 flex justify-between text-gray-800 text-lg font-semibold ">
                      <span className="absolute bottom-[85px] left-[9.5%]">$19.4 trillion</span>
                      <span className="absolute bottom-[10px] left-[32.5%]">$17.4 trillion</span>
                      <span className="absolute bottom-[230px] left-[56.5%]">$18.9 trillion</span>
                      <span className="absolute bottom-[350px] left-[81.5%]">$144 million</span>
                  </div> */}


                  <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white to-transparent z-10"></div>

                  {/* 100K Subscribers Text (Above Gradient) */}
                  <div className="hidden lg:block absolute bottom-0 left-4 text-[186px] font-normal leading-[94%] tracking-[-1.93px] z-20">
                      <span className="text-white">100K </span>
                      <span className="text-[#01261E]">Subscribers</span>
                  </div>
          </div>

          {/* combined analytics */}
          <div className="bg-white relative hidden lg:block">
            <div className="px-4 md:px-28 py-10">
              <HeadingWithUnderline text="Combined Analytics"/>
            </div>

            {/* chars section */}
            <div className="">
              <div>

                {/* #1 */}
                <div className="lg:flex justify-center items-center flex:col space-x-6 md:py-4">
                  <div className="">
                    <div>
                        <AccountReached/>
                    </div>
                  </div>
                  <div className="">
                    <div>
                    <ViewsCountry/>
                    </div>
                  </div>
                </div>

                {/* #2 */}
                <div className="lg:flex justify-center items-center flex:col space-x-6 md:py-4">
                  <div className="">
                    <div>
                        <ActiveUsers/>
                    </div>
                  </div>
                  <div className="">
                    <div>
                    <Statistics/>
                    </div>
                  </div>
                </div>

                {/* #3 */}
                <div className="lg:flex justify-center items-center flex:col space-x-6 md:py-4">
                  <div className="">
                    <div>
                        <SignInUps/>
                    </div>
                  </div>
                  <div className="w-[478px] h-[365px] rounded-[8px]" style={{background: "conic-gradient(from 142deg at 60.52% 63.72%, var(--Green-Main, #01261E) 0deg, #116150 360deg)"}}>
                  <div className="md:flex md:flex-col justify-between md:p-10 h-full">
                    <div className="flex-grow">
                      <h4 className="text-[#FAFAFA] max-w-[335px] text-[20px]">
                        Access all major A2A payment methods via a single API and global settlement with multi-currency support.
                      </h4>
                    </div>
                    <div>
                      <button className="flex px-4 py-1 text-[#FAFAFA] text-lg rounded-[10px] border border-[#FAFAFA] p-2 hover:bg-[#ffffff] hover:text-[#01261E]">
                        Learn More
                      </button>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/*text with video section */}
          <div className="bg-white hidden lg:block">
            <div className="px-4 md:px-28 py-10">
                <HeadingWithUnderline text="How your ad will look like"/>
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
                  <source src="/advertise/advertise-page-video.mp4" type="video/mp4" />
                  {/* <source src="/advertise/advertise-page-video.webm" type="video/webm" /> */}
                </video>
              </div>
            </div>

            <div className="flex my-0 flex-col items-center justify-center text-center py-10">
              <h2 className="text-[80px] font-[400]" style={{ fontFamily: "GT Super Ds Trial" }}>
                And that’s not all
              </h2>

              <div className="w-[390px] mx-auto">
                <p className="text-[20px] font-[400] leading-[1.5]">
                  Get a personalized demo and discover how Sagravia can help your business
                </p>
              </div>

              {/* Moving Text */}
              <div className="w-[806px] border border-[#01261E] rounded-[153px] overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff]">
                <h2 className="flex justify-end items-center text-[100px] font-[800] py-[31px] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll group-hover:pause group">
                  SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES 
                </h2>
              </div>
            </div>

          </div>

          {/* Ad blocker and Do follow */}
          <div className="bg-white relative hidden lg:block">
              <div className="px-4 md:px-28 py-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6">
                  
                  {/* Box 1 */}
                  <div className="flex-1 border border-black p-6 rounded-[15px]">
                    <h4 className="text-2xl md:text-[36px] text-[#01261E] mb-4">AD Blocker</h4>
                    <p className="text-base md:text-[20px] mb-4">
                      Ad blockers can’t stop your ads here. Web ads get blocked. Newsletter ads don’t.
                      Reach our audience directly, no filters, no ad blockers.
                    </p>
                    <div className="flex justify-end">
                      <img
                        src="/advertise/ad-blocker-image.png"
                        alt=""
                        className="w-[114px] h-[114px] mt-auto"
                      />
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="flex-1 border border-black p-6 rounded-[15px]">
                    <h4 className="text-2xl md:text-[36px] text-[#01261E] mb-4">Do follow</h4>
                    <p className="text-base md:text-[20px] mb-20">
                      Dofollow links pass along what the SEO community commonly calls “link juice.”
                      Links are a vote for quality.
                    </p>

                    <div className="border bg-[#E6E6E6;] border-[#A7A7A7] text-center py-2">
                      <a href="http://raventools.com" target="_blank" className="text-black md:text-[20px]">
                        &lt;a href="http://raventools.com"&gt;great seo tools&lt;/a&gt;
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          {/* faq */}
          <div className="bg-white relative hidden lg:block">
            <div className="px-4 md:px-28 pt-20 pb-10">
              <div className="flex flex-col md:flex-row justify-between px-4">
              <div className="md:w-[40%] lg:py-0 pb-14">
                <div className="text-black lg:text-7xl text-5xl">
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
          </div>

          <div className="bg-white hidden lg:block">
            <div className="px-4 md:px-28 pt-20 pb-10">
                <HeadingWithUnderline text="In the press"/>
            </div>

            <div className="px-4 md:px-28 pb-20 pt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {newsData.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      className="h-[31px]"
                      style={{ width: `${item.logoWidth}px` }}
                    />
                    <h4 className="text-[26px] font-semibold">{item.title}</h4>
                    <p className="text-[15px] ">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-[15px] font-semibold">{item.date}</p>
                      <a
                        href={item.link}
                        className="text-[15px] font-semibold text-blue-600 hover:underline"
                      >
                        READ MORE
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-20 pb-20 flex justify-center">
                <a href="" className="px-6 py-2 border border-black rounded-xl text-[23px] font-[600] hover:bg-[#01261E] hover:text-[#ffffff] transition">
                  See more
                </a>
              </div>

            </div>

          </div>

          {/* mobile view for advertise page */}
          <div className="block lg:hidden">
            <AdvertisePageMobileVersion/>
          </div>
          <div>
            <Footer />
          </div>


      </>
    );
  }
  