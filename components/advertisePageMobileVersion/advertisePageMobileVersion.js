import { Component } from "../../components/areaChart/areaChart";
import { AccountReached } from "../../components/advertiseComponents/analyticsCharts/chartAccountReached/chartAccountReached";
import { ViewsCountry } from "../../components/advertiseComponents/analyticsCharts/chartViewsByCountry/chartViewsByCountry";
import { ActiveUsers } from "../../components/advertiseComponents/analyticsCharts/chartActiveUsers/chartActiveUsers";
import { Statistics } from "../../components/advertiseComponents/analyticsCharts/chartStatistics/chartStatistics";
import { SignInUps } from "../../components/advertiseComponents/analyticsCharts/chartSignUps/chartSignUps";
import HeadingWithUnderline from "../../components/advertiseComponents/headingWithUnderline/headingwithUnderline";
import AdvertiseFaq from "../../components/advertiseComponents/advertiseFaq/advertiseFaq";
import Footer from "../../components/footer/footer";

export default function AdvertisePageMobileVersion() {
  const videos = [
    { video: "/advertise/v-1.mp4", id: "video1", height: "h-[297px]" },
    { video: "/advertise/v-2.mp4", id: "video2", height: "h-[245px]" },
    { video: "/advertise/v-3.mp4", id: "video3", height: "h-[389px]", moveUp: "mt-[-80px]" },
    { video: "/advertise/v-4.mp4", id: "video4", height: "h-[513px]", moveUp: "mt-[-120px]" },
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
      {/* Hero Section */}
      <div className="bg-white relative">
        <div className="px-4 md:px-16 pt-10 lg:pt-20 mx-auto max-w-screen-xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-left text-black w-full">
            Step into a world of discovery
          </h2>
          <p className="w-[70%] text-base py-4 text-black">
            Explore different categories. Find the best deals. AG1 is a daily health drink packed with nutrients to help alleviate bloating.
          </p>
        </div>

        <div className="flex sm:flex-row justify-center items-end sm:items-end gap-4 px-4 py-6">
          {videos.map((video) => (
            <video
              key={video.id}
              src={video.video}
              autoPlay
              loop
              muted
              className={`w-[80px] ${video.height} object-cover ${video.moveUp || ""}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent z-10"></div>

                  {/* 100K Subscribers Text (Above Gradient) */}
                  <div className=" absolute bottom-6 left-4 text-[47px] font-normal leading-[94%] tracking-[-1.93px] z-20">
                      <span className="text-white">100K </span>
                      <span className="text-[#01261E]">Subscribers</span>
                  </div>
      </div>

      {/* Combined Analytics */}
      <div className="bg-white relative px-4 md:px-28 pt-6">
        <HeadingWithUnderline text="Combined Analytics" />

        {/* Analytics Chart Grid */}
        <div className="space-y-10 mt-10">
          {/* Chart Row 1 */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <AccountReached />
            <ViewsCountry />
          </div>

          {/* Chart Row 2 */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <ActiveUsers />
            <Statistics />
          </div>

          {/* Chart Row 3 */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <SignInUps />
            <div className="w-full max-w-[343px] h-[215px] rounded-[8px]" style={{ background: "conic-gradient(from 142deg at 60.52% 63.72%, var(--Green-Main, #01261E) 0deg, #116150 360deg)" }}>
              <div className="flex flex-col justify-between p-6 md:p-10 h-full">
                <h4 className="text-white text-lg max-w-[335px]">
                  Access all major A2A payment methods via a single API and global settlement with multi-currency support.
                </h4>
                <button className="w-[50%] mt-6 px-1 py-1 border border-white text-white rounded-[10px] hover:bg-white hover:text-[#01261E] transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Preview */}
      <div className="bg-white px-4 md:px-28 py-10">
        <HeadingWithUnderline text="How your ad will look like" />
        <div className="w-full h-[400px] sm:h-[500px] md:h-[962px] relative overflow-hidden mt-6">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/advertise/advertise-page-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col items-center justify-center text-center py-10">
          <h2 className="text-3xl sm:text-5xl md:text-[80px] font-light leading-tight">
            And that’s not all
          </h2>
          <p className="text-lg sm:text-xl mt-4 max-w-md">
            Get a personalized demo and discover how Sagravia can help your business
          </p>

          <div className="w-full max-w-[806px] border border-[#01261E] rounded-full overflow-hidden relative group mt-10 hover:bg-[#01261E] hover:text-white">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold py-6 whitespace-nowrap animate-scroll">
              SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES SPEAKTOSALES
            </h2>
          </div>
        </div>
      </div>

      {/* Ad Blocker and Do Follow */}
      <div className="bg-white px-4 md:px-28 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 border border-black p-6 rounded-[15px]">
            <h4 className="text-2xl md:text-3xl text-[#01261E] mb-4">AD Blocker</h4>
            <p className="text-base md:text-lg mb-4">
              Ad blockers can’t stop your ads here. Web ads get blocked. Newsletter ads don’t. Reach our audience directly, no filters, no ad blockers.
            </p>
            <div className="flex justify-end">
              <img src="/advertise/ad-blocker-image.png" alt="" className="w-[114px] h-[114px] mt-auto" />
            </div>
          </div>

          <div className="flex-1 border border-black p-6 rounded-[15px]">
            <h4 className="text-2xl md:text-3xl text-[#01261E] mb-4">Do follow</h4>
            <p className="text-base md:text-lg mb-6">
              Dofollow links pass along what the SEO community commonly calls “link juice.” Links are a vote for quality.
            </p>
            <div className="border bg-[#E6E6E6] border-[#A7A7A7] text-center py-2">
              <a href="http://raventools.com" target="_blank" className="text-black md:text-lg">
                &lt;a href="http://raventools.com"&gt;great seo tools&lt;/a&gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white px-4 md:px-28 pt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="md:w-[40%]">
            <h2 className="text-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Got Questions? We've Got Answers!
            </h2>
          </div>
          <div className="md:w-[55%]">
            <AdvertiseFaq />
          </div>
        </div>
      </div>

      {/* In the Press */}
      <div className="bg-white px-4 md:px-28 pt-20 pb-10">
        <HeadingWithUnderline text="In the press" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {newsData.map((item, index) => (
            <div key={index} className="space-y-3 text-center md:text-left">
              <img src={item.logo} alt={item.logoAlt} className="h-[31px] mx-auto md:mx-0" style={{ width: `${item.logoWidth}px` }} />
              <h4 className="text-[22px] md:text-[26px] font-semibold">{item.title}</h4>
              <p className="text-[15px]">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-[15px] font-semibold">{item.date}</p>
                <a href={item.link} className="text-[15px] font-semibold text-blue-600 hover:underline">
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20 pb-20 flex justify-center">
          <a href="#" className="px-6 py-2 border border-black rounded-xl text-[18px] md:text-[23px] font-semibold hover:bg-[#01261E] hover:text-white transition">
            See more
          </a>
        </div>
      </div>
    </>
  );
}
