"use client";

import { useState } from "react";
import AdvertiseSidebarHomepage from "../../components/advertiseSidebarHomepage/advertiseSidebarHomepage";
import { motion } from "framer-motion";

export default function Advertise() {


  return (
    <div className="flex w-full">
      {/* Left Sidebar */}
      <div className="w-[36%] bg-white fixed h-screen">
        <div className="md:px-6">
              <div className="px-4 text-lg py-8">
                  <a href="/advertise">
                  Analytics
                  </a>
              </div>
              <div className="pt-6">
                <h2 className="py-4 text-3xl">Building Innovative Digital Solutions</h2>
                <div className="border-t-2 border-b-2 border-black overflow-y-auto md:h-[320px] "style={{ scrollbarWidth: "none" }}>
                  <AdvertiseSidebarHomepage />
                </div>
              </div>
              <div className="text-black pt-4 flex justify-between">
                <h3 className="text-sm px-4 py-1">Interested to advertise?</h3>
                <h3 className="text-sm border border-black px-4 py-1 rounded-3xl cursor-pointer">Contact Us</h3>
              </div>
        </div>   
      </div>


      {/* Right Content Section */}
      <div className="w-[64%] ml-auto flex flex-col ">
      <motion.div
          layout
          // key={selectedSlug}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          
        >
        <div className="fixed h-screen ">
          <div className="relative w-full h-full">
            <img
              src="/analytics-home-image.png"
              alt="Analytics Home"
              className="w-full h-full object-cover rounded-tl-3xl"
            />
          </div>
          <div className="lg:w-[28%] absolute right-0 top-5  px-4 ">
              <div className="text-sm text-white">
                <p className="py-2">Creativity has been an integral part of my life. Since 2010 I've started working in design industry. Having worked in graphic, product, ux, ui, motion and website design I have acquired a good understanding of creation processes in different fields.</p>
                <p className="py-2">Within close cooperation with developers I have good understanding of different tech stacks. This helps me in the design process, where I can drive my imagination with tech possibilities and goals.</p>
                <p className="py-2">As a dedicated and organised individual, I have an active and dynamic approach to achieving the best results in my work. I have a strong knowledge in design and digital product. I am driven by the idea to show product in a simple, however unique and always rationale way.</p>
                <div className="pt-6">
                <a
                  className="text-xs border border-white  rounded-full shadow-lg px-5 py-3 hover:bg-white hover:text-black"
                  href="https://www.sagravia.com/" target="_blank"
                >
                  Visit Website
                </a>
                </div>
              </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}
