"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AdvertiseSidebarHomepage from "../../components/advertiseSidebarHomepage/advertiseSidebarHomepage";

export default function Advertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderContent = (index) => {
    switch (index) {
      case 0:
        return <div>Introduction Content</div>;
      case 1:
        return <div>Another Section Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-white fixed h-screen">
        <div className="lg:px-14">
          <div className="px-4 text-lg py-8 cursor-pointer" onClick={() => setActiveIndex(0)}>
            &larr; Introduction
          </div>
          <div className="pt-10">
            <h2 className="py-4 text-3xl">Building innovative Digital solutions</h2>
            <div className="border-t-2 border-b-2 border-black overflow-y-auto h-[320px]" style={{ scrollbarWidth: "none" }}>
              <AdvertiseSidebarHomepage />
            </div>
          </div>
          <div className="text-black py-6 flex justify-between">
            <h3 className="text-sm px-4 py-1">Interested to advertise?</h3>
            <h3 className="text-sm border border-black px-4 py-1 rounded-3xl cursor-pointer">Contact Us</h3>
          </div>
        </div>
      </div>

      {/* Right Content Section*/}
      <div className="ml-[300px] flex-1 overflow-y-auto">
        <div className="h-full py-6 px-4">
          {renderContent(activeIndex)}
        </div>
      </div>
    </div>
  );
}
