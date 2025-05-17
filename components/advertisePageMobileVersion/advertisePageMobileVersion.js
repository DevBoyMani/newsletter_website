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
import { Agdasima } from 'next/font/google';

const agdasima = Agdasima({
  weight: ['400'], 
  subsets: ['latin'],
  display: 'swap',
});

export default function AdvertisePageMobileVersion() {
  const videos = [
    { video: "/advertise/v-1.mp4", id: "video1", height: "h-[297px]" },
    { video: "/advertise/v-2.mp4", id: "video2", height: "h-[245px]" },
    { video: "/advertise/v-3.mp4", id: "video3", height: "h-[389px]", moveUp: "mt-[-80px]" },
    { video: "/advertise/v-4.mp4", id: "video4", height: "h-[513px]", moveUp: "mt-[-120px]" },
  ];


  return (
    <>
      {/* Hero Section */}
    <div className="bg-white relative">
       {/* Top Year Labels */}
              <div className="absolute top-12 left-0 right-0 flex justify-between text-gray-500 text-[16px] px-[10%]">
              <span className="absolute left-[10.5%]">2014</span>
              <span className="absolute left-[33%]">2017</span>
              <span className="absolute left-[57%]">2020</span>
              <span className="absolute left-[82%]">2023</span>
              </div>

              <div className="absolute top-20 bottom-[180px] left-[14%] w-px bg-gray-300 z-0" />
              <div className="absolute top-20 bottom-[70px] left-[37%] w-px bg-gray-300 z-0" />
              <div className="absolute top-20 bottom-[270px] left-[61%] w-px bg-gray-300 z-0" />
              <div className="absolute top-20 bottom-[390px] left-[86%] w-px bg-gray-300 z-0" />


        <div className="px-4 md:px-16 pt-28 lg:pt-20 mx-auto max-w-screen-xl">
          <h2 className="text-[44px] font-[400] text-left text-[#01261E] w-full leading-[117%] font-[GT-Super-Ds-Trial]">
            Step into a world of discovery
          </h2>
          <p className="w-[60%] sm:w-[80%] md:w-[70%] text-sm sm:text-base py-4 text-black">
            Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.
          </p>
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
                  <div className="absolute bottom-[0px] left-0 right-0 flex justify-between text-gray-800 text-[16px]">
                      <span className="absolute bottom-[246px] left-[9.5%]">$19.4<br/> trillion</span>
                      <span className="absolute bottom-[196px] left-[32.5%]">$17.4<br/> trillion</span>
                      <span className="absolute bottom-[326px] left-[56.5%]">$18.9<br/> trillion</span>
                      <span className="absolute bottom-[452px] left-[80%]">$144<br/> million</span>
                  </div>

          {/* Gradient */}
      <div className="absolute -bottom-1 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent z-10" />

          {/* Subscribers Text */}
          <div className="absolute bottom-3 left-4 text-[12.5vw] font-normal leading-[94%] tracking-[-1%] z-20 text-start font-[GT-Super-Ds-Trial] ">
            <span className="text-white">100K </span>
            <span className="text-[#01261E]">Subscribers</span>
          </div>
    </div>


      {/* Combined Analytics */}
      <div className="bg-white relative px-4 md:px-28 pt-10">
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
            <div className="w-full h-[215px] rounded-[8px]" style={{ background: "conic-gradient(from 142deg at 60.52% 63.72%, var(--Green-Main, #01261E) 0deg, #116150 360deg)" }}>
              <div className="flex flex-col justify-between p-6 h-full">
                <h4 className="text-white text-lg max-w-[335px]">
                  Access all major A2A payment methods via a single API and global settlement with multi-currency support.
                </h4>
                <div className="flex justify-start items-center max-w-xl max-h-[20px] pb-6">
                  <button className="text-[15px] mt-6 px-4 py-1.5 border border-white text-white rounded-[10px] hover:bg-white hover:text-[#01261E] transition">
                    About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Preview */}
      <div className="bg-white py-10">
        <div className="px-4 py-10">
        <HeadingWithUnderline text="How your ad will look like"/>
        </div>
        <div className="flex w-full max-h-[213px] relative overflow-hidden">
          <video autoPlay loop muted playsInline className=" object-cover">
            <source src="/advertise/advertise-page-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col items-center justify-center text-center pt-8 pb-4">
          <h2 className="text-[34px] font-[GT-Super-Ds-Trial] font-[400] leading-normal">
            And that’s not all
          </h2>
          <p className="text-[12px] leading-[125%] font-[400] mt-4 max-w-[60%]">
            Get a personalized demo and discover how Sagravia can help your business
          </p>

          <a href="#" className="w-full max-w-[269px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-[#ffffff] text-[#01261E] font-[800]">
                <span className="flex py-2 justify-end items-center text-[37px] whitespace-nowrap transition-transform duration-500 ease-in-out animate-scroll-mobile group-hover:pause group ">
                  SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES 
                </span>
              </a>
        </div>
      </div>

      {/* Ad Blocker and Do Follow */}
      <div className="bg-white px-8 md:px-28 py-8">
      <div className="flex flex-row justify-between items-stretch gap-4">
        {/* AD Blocker Section */}
        <div className="w-1/2 ">
          <div className="flex justify-center">
            <img src="/advertise/ad-blocker-image.png" alt="Ad Blocker" className="w-[37px] h-[37px]" />
          </div>
          <h4 className="text-[14px] text-[#01261E] mb-4 text-center md:text-left">AD Blocker</h4>
          <p className="text-base mb-4 text-center md:text-left">
            Ad blockers can’t stop your ads here. Web ads get blocked. Newsletter ads don’t.
            Reach our audience directly, no filters, no ad blockers.
          </p>
        </div>

    {/* Do Follow Section */}
          <div className="w-1/2">
            <div className="flex justify-center">
              <img src="/advertise/do-follow.png" alt="Do Follow" className="w-[37px] h-[37px]" />
            </div>
            <h4 className="text-[14px] md:text-3xl text-[#01261E] mb-4 text-center md:text-left">Do follow</h4>
            <p className="text-base mb-2 text-center md:text-left">
              Dofollow links pass along what the SEO community commonly calls “link juice.”
              Links are a vote for quality.
            </p>
            <div className="flex w-full border bg-[#E6E6E6] border-[#A7A7A7] text-center">
              <a
                href="http://raventools.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${agdasima.className} text-black text-[8px] font-[400] leading-normal w-full px-1 py-0.5 `}
              >
                &lt;a href="http://raventools.com"&gt;great seo tools&lt;/a&gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      


      {/* FAQ Section */}
      <div className="bg-white px-4 md:px-28 pt-10 pb-10">
      <HeadingWithUnderline text="Got Questions? We've Got Answers!"/>
      <div>
        <MobileFaq/>
      </div>
      </div>

      {/* In the Press */}
      <div className="bg-white px-4 md:px-28 pt-10 pb-10">
        <HeadingWithUnderline text="In the press"/>
        <InThePress />
      </div>
    </>
  );
}
