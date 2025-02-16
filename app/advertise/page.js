"use client";
import { useState, useRef } from "react";
import AdvertiseSidebar from "../../components/advertiseSidebar/advertiseSidebar";
import HeaderButton from "../../components/advertiseComponents/headerButton/headerButton";

// Create components for each section (with images and dummy content)
const TotalVisits = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/total-visits.jpg" alt="Total Visits" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Total Visits</h3>
    <p className="text-lg"> of visits to your website. Here are the metrics for the last month...</p>
  </div>
);

const PageViews = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/page-views.jpg" alt="Page Views" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Page Views</h3>
    <p className="text-lg">viewed. This data helps to analyze the popularity of specific pages...</p>
  </div>
);

const BounceRate = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/bounce-rate.jpg" alt="Bounce Rate" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Bounce Rate</h3>
    <p className="text-lg"> who leave the site after viewing only one page...</p>
  </div>
);

const AverageSessionDuration = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/avg-session-duration.jpg" alt="Average Session Duration" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Average Session Duration</h3>
    <p className="text-lg"> A higher session duration generally indicates engaging content</p>
  </div>
);

const NewUsers = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/new-users.jpg" alt="New Users" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">New Users</h3>
    <p className="text-lg">visitors are coming to your site, helping you understand audience growth...</p>
  </div>
);

const ReturningUsers = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/returning-users.jpg" alt="Returning Users" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Returning Users</h3>
    <p className="text-lg"> returning to your website, helping gauge user retention...</p>
  </div>
);

const OrganicSearch = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/organic-search.jpg" alt="Organic Search" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Organic Search</h3>
    <p className="text-lg"> coming to your site from search engines without paid ads...</p>
  </div>
);

const SocialMedia = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/social-media.jpg" alt="Social Media" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Social Media</h3>
    <p className="text-lg">s, helping you understand the impact of your social marketing efforts...</p>
  </div>
);

const DirectTraffic = () => (
  <div className="p-4 flex flex-col items-center">
    <img src="/images/direct-traffic.jpg" alt="Direct Traffic" className="w-1/2 h-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">Direct Traffic</h3>
    <p className="text-lg">  your site by typing the URL directly in the browser...</p>
  </div>
);

export default function Advertise() {
  const advertiseListNames = [
    "Total Visits",
    "Page Views",
    "Bounce Rate",
    "Average Session Duration",
    "New Users",
    "Returning Users",
    "Organic Search",
    "Social Media",
    "Direct Traffic",
    
  ];

  const sectionRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index to render correct component
  };

  const renderContent = (index) => {
    switch (index) {
      case 0:
        return <TotalVisits />;
      case 1:
        return <PageViews />;
      case 2:
        return <BounceRate />;
      case 3:
        return <AverageSessionDuration />;
      case 4:
        return <NewUsers />;
      case 5:
        return <ReturningUsers />;
      case 6:
        return <OrganicSearch />;
      case 7:
        return <SocialMedia />;
      case 8:
        return <DirectTraffic />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="flex">
      {/* Left Sidebar (Fixed) */}
      <div className="flex-1 fixed md:h-screen lg:w-[540px] bg-[#343434] text-white p-4 flex flex-col">
        <header className="py-1 px-3 text-sm mb-4 pt-10">
          <HeaderButton onClick={() => {}} />
          <p className="leading-6 text-white ml-2 py-1">
            <span className="text-4xl pr-4 font-semibold">.</span>
            is an EU-based designer with a multi-disciplinary approach, creating websites & graphics.
          </p>
        </header>

        <div className="text-4xl text-white px-4 py-4">Building innovative digital solutions.</div>
        {/* Sidebar List (Scrollable) */}
        <div className="h-[320px]  border-t border-b border-gray-600 overflow-y-auto" style={{scrollbarWidth: "none"}}>
          <AdvertiseSidebar
            listNames={advertiseListNames}
            activeIndex={activeIndex}
            handleClick={handleClick}
          />
        </div>

        {/* Contact Information */}
        <div className="flex justify-between text-white py-6">
          <p className="px-4">Interested to hire me?</p>
          <p className="text-sm px-4 py-1 rounded-xl text-white bg-white/10 backdrop-blur-md transition hover:bg-white/20">
            sagravia@gmail.com
          </p>
        </div>
      </div>

      {/* Right Content Section (Independent Scrolling) */}
      <div className="ml-[300px] flex-1 overflow-y-auto">
        <div className="h-full py-6 px-4">
          {/* Render the appropriate component based on the active index */}
          {renderContent(activeIndex)}
        </div>
      </div>
    </div>
  );
}
