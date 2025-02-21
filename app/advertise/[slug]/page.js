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
  "geopolitical-summary": () => (
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
      <div className="w-[35%] bg-white fixed h-screen">
        <div className="lg:px-14">
          <div className="px-4 text-lg py-8">&larr; Introduction</div>
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
      <div className="w-[65%] h-full ml-auto overflow-y-auto bg-[#013220]  rounded-l-3xl relative z-10">
      <motion.div
        key={selectedSlug}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=""
      >
        <div className="h-full flex flex-col ">

            {/* nav */}
           <div className="ml-44 mt-10 mb-0 align-middle">
           <div className="fixed flex flex-wrap gap-4 z-10">
            {rightSectionNav.map((name, index) => (
              <div
                key={index}
                className="border border-white text-white px-4 py-1 rounded-full "
              >
                {name}
              </div>
            ))}
          </div>
            </div>

          {/* nav2*/}
         <div className="mb-10">
         <div className="fixed lg:top-14 lg:left-58 pl-20 pr-10 py-6 w-[64%]  z-10 flex justify-between items-center ">
         
            <h3 className="text-sm bg-white rounded-full shadow-lg  px-6 py-2.5">info</h3>
            
            <a className="text-sm bg-white  rounded-full shadow-lg px-6 py-2.5" href="#">
              Visit Website
            </a>
           
          </div>
         </div>

        

         <div className="ml-24 lg:mb-28 lg:mt-6 ">
           {/* Main Content */}
           <div className="">
            <div className="w-[90%]">
              <Component key={selectedSlug} />
            </div>

            <div className="w-[90%] my-10">
              <Component key={selectedSlug} />
            </div>
          </div>

         </div>
          
        </div>
      </motion.div>
      </div>
    </div>
  );
}
