"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import AdvertiseSidebar from "../../../components/advertiseSidebar/advertiseSidebar";
import { Component } from "../../../components/areaChart/areaChart";

const components = {
  "presidential-summary": () => <Component />,
  "geopolitical-summary": () => <Component />,
  "long-and-short": () => <Component />,
  "business-history": () => <Component />,
  "photo-summary": () => <Component />,
};

export default function Advertise() {
  const params = useParams();
  const [selectedSlug, setSelectedSlug] = useState("");
  
  const rightSectionNav = [
    { name: "Active Users", id: "chart1" },
    { name: "Country", id: "chart2" },
    { name: "Age", id: "chart3" },
    { name: "Subscriber Growth", id: "chart4" },
    { name: "Total Visits", id: "chart5" },
  ];

  useEffect(() => {
    if (params?.slug) {
      setSelectedSlug(params.slug);
    }
  }, [params?.slug]);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const SelectedComponent = selectedSlug && components[selectedSlug]
    ? components[selectedSlug]
    : () => <div>Content not found</div>;

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-[35%] bg-white fixed h-screen">
        <div className="lg:px-14">
          <div className="px-4 text-lg py-8">&larr; Introduction</div>
          <div className="pt-10">
            <h2 className="py-4 text-3xl">Building innovative Digital solutions</h2>
            <div className="border-t-2 border-b-2 border-black overflow-y-auto h-[360px]" style={{ scrollbarWidth: "none" }}>
              <AdvertiseSidebar activeSlug={selectedSlug} onSelect={setSelectedSlug} />
            </div>
          </div>
          <div className="text-black py-6 flex justify-between">
            <h3 className="text-sm px-4 py-1">Interested to advertise?</h3>
            <h3 className="text-sm border border-black px-4 py-1 rounded-3xl">Contact Us</h3>
          </div>
        </div>
      </div>


      {/* Right Section */}
      <div className="w-[65%] h-full ml-auto overflow-y-auto rounded-l-3xl relative z-10">
        <motion.div
          key={selectedSlug}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1.5 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-[#013220]"
        >
          <div className="h-full flex flex-col">
            {/* Top Fixed Buttons */}
           
            <div className="ml-44 mt-10 mb-0 align-center">
              <div className="fixed flex flex-wrap gap-4 z-10">
                {rightSectionNav.map(({ name, id }) => (
                  <button
                    key={id}
                    className=" text-white bg-black px-4 py-2 rounded-full cursor-pointer"
                    onClick={() => handleScrollToSection(id)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

             {/* nav2*/}
             <div className="mb-10">
              <div className="fixed lg:top-16 lg:left-58 pl-20 pr-10 py-6 w-[64%]  z-10 flex justify-between items-center ">
                <h3 className="text-sm bg-white rounded-full shadow-lg  px-6 py-2.5">
                  info
                </h3>

                <a
                  className="text-sm bg-white  rounded-full shadow-lg px-6 py-2.5"
                  href="#"
                >
                  Visit Website
                </a>
              </div>
            </div>


            {/* Content Sections */}
            <motion.div
            key={selectedSlug}
            initial={{ x: "80%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            
          >
            <div className="ml-24 lg:mb-28 lg:mt-[-10]">
              <div className="w-[90%] my-10" id="chart1">
                <SelectedComponent />
              </div>
              <div className="w-[90%] my-10" id="chart2">
                <SelectedComponent />
              </div>
              <div className="w-[90%] my-10" id="chart3">
                <SelectedComponent />
              </div>
              <div className="w-[90%] my-10" id="chart4">
                <SelectedComponent />
              </div>
              <div className="w-[90%] my-10" id="chart5">
                <SelectedComponent />
              </div>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
