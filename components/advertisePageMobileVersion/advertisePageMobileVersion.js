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
  <div className="px-4 md:px-16 pt-10 lg:pt-20 mx-auto max-w-screen-xl">
    <h2 className="text-[44px] sm:text-5xl md:text-7xl font-semibold text-left text-black w-full leading-[1.2]">
      Step into a world of discovery
    </h2>
    <p className="w-[60%] sm:w-[80%] md:w-[70%] text-sm sm:text-base py-4 text-black">
      Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.
    </p>
  </div>

  {/* Videos */}
  <div className="flex justify-center relative px-4 overflow-x-auto max-w-full mt-4">
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
            w-[30vw] sm:w-[5rem] 
            ${video.height} ${video.moveUp || ""}`}
        />
      ))}
    </div>
  </div>

  {/* Gradient */}
  <div className="absolute -bottom-1 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent z-10" />

  {/* Subscribers Text */}
  <div className="absolute bottom-5 left-4 w-fit text-[40px] sm:text-[36px] md:text-[47px] font-normal leading-[94%] tracking-[-1.5px] z-20 text-center">
    <span className="text-white">100K </span>
    <span className="text-[#01261E]">Subscribers</span>
  </div>
</div>


      {/* Combined Analytics */}
      <div className="bg-white relative px-4 md:px-28 pt-6">
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

        <div className="flex flex-col items-center justify-center text-center py-4">
          <h2 className="text-3xl sm:text-5xl md:text-[80px] font-light leading-tight">
            And that’s not all
          </h2>
          <p className="text-lg sm:text-xl mt-4 max-w-xs">
            Get a personalized demo and discover how Sagravia can help your business
          </p>

          <div className="w-full max-w-[269px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-white text-[#01261E]">
            <h2 className="text-[40px] font-bold py-2 whitespace-nowrap animate-scroll">
              SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES
            </h2>
          </div>
        </div>
      </div>

      {/* Ad Blocker and Do Follow */}
      <div className="bg-white px-4 md:px-28 py-10">
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
          <div className="w-1/2 px-2">
            <div className="flex justify-center">
              <img src="/advertise/do-follow.png" alt="Do Follow" className="w-[37px] h-[37px]" />
            </div>
            <h4 className="text-[14px] md:text-3xl text-[#01261E] mb-4 text-center md:text-left">Do follow</h4>
            <p className="text-base mb-2 text-center md:text-left">
              Dofollow links pass along what the SEO community commonly calls “link juice.”
              Links are a vote for quality.
            </p>
            <div className="flex w-lg max-w-[170px] border bg-[#E6E6E6] border-[#A7A7A7] text-center">
              <a
                href="http://raventools.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${agdasima.className} text-black text-[8px] font- w-full px-1 py-1`}
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
