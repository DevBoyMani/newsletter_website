"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AdvertiseSidebar from "../../../components/advertiseSidebar/advertiseSidebar";
import { Component } from "../../../components/areaChart/areaChart";

const components = {
  "presidential-summary": () => (
    <div className="relative mt-0">
      <Component />
    </div>
  ),
};

// Main Advertise Component
export default function Advertise() {
  const rightSectionNav = [
    "Active Users",
    "Country",
    "Age",
    "Subscriber Growth",
    "Total Visits",
  ];
  const [selectedSlug, setSelectedSlug] = useState("presidential-summary");

  // Handle sidebar click
  const handleSidebarClick = (slug) => {
    setSelectedSlug(slug);
  };

  const Component =
    selectedSlug && components[selectedSlug]
      ? components[selectedSlug]
      : () => <div>Content not found</div>;

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-[38%] bg-white fixed h-screen pt-6">
        <div className="lg:px-14">
          <div className="px-4 text-lg py-4">&larr; Introduction</div>
          <div className="pt-10">
            <h2 className="py-4 text-3xl">
              Building innovative Digital
              <br /> solutions
            </h2>
            <div
              className="border-t-2 border-b-2 border-black overflow-y-auto h-[320px]"
              style={{ scrollbarWidth: "none" }}
            >
              <AdvertiseSidebar
                activeSlug={selectedSlug}
                onSelect={handleSidebarClick}
              />
            </div>
          </div>
          <div className="text-black py-6">
            <div className="flex justify-between">
              <h3 className="text-sm px-4 py-1">Interested to advertise?</h3>
              <h3 className="text-sm border border-black px-4 py-1 rounded-3xl">
                Contact US
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <motion.div
        key={selectedSlug}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-[62%] ml-auto overflow-y-auto bg-[#013220] h-screen rounded-l-3xl mt-6 relative"
      >
        <div className="h-full flex flex-col justify-between">
          {/* Top Navbar Inside Right Section */}
          <div className="fixed top-56 left-50 w-[58%]  z-10 flex justify-between items-center px-12 py-6">
            <h3 className="text-lg bg-white px-6 py-2 rounded-full shadow-lg">info</h3>
            <a className="text-lg bg-white px-6 py-2 rounded-full shadow-lg" href="#">
              Visit Website
            </a>
          </div>

          {/* Navigation Pills */}
          <div className="my-12 px-12 flex flex-wrap gap-4">
            {rightSectionNav.map((name, index) => (
              <div
                key={index}
                className="border border-white text-white px-6 py-2 rounded-full"
              >
                {name}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="pl-12 py-12">
            <div className="w-[90%]">
              <Component key={selectedSlug} />
            </div>
          </div>
          
          <div className="pl-12 py-12">
            <div className="w-[90%]">
              <Component key={selectedSlug} />
            </div>
          </div>

          <div className="pl-12 py-12">
            <div className="w-[90%]">
              <Component key={selectedSlug} />
            </div>
          </div>
          
          <div className="pl-12 py-12">
            <div className="w-[90%]">
              <Component key={selectedSlug} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
