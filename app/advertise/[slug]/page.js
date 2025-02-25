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

  "new-users": () => <Component />,
  "returning-users": () => <Component />,
  "organic-search": () => <Component />,
  "social-media": () => <Component />,
  "direct-traffic": () => <Component />,


};

export default function Advertise() {
  const params = useParams();
  const [selectedSlug, setSelectedSlug] = useState("");
  
  const rightSectionNav = [
    { name: "Active Users", id: "chart1" },
    { name: "Country", id: "chart2" },
    { name: "Age", id: "chart3" },
    { name: "Subscriber Growth", id: "chart4" },
    { name: "Total Visits", id: "chart5" }
  ];

  useEffect(() => {
    if (params?.slug) {
      setSelectedSlug(params.slug);
    }
  }, [params?.slug]);

  const handleScrollToSection = (event, id, offset = 0) => {
    event.preventDefault();
  
    const section = document.getElementById(id);
    if (section) {
      const yOffset = section.getBoundingClientRect().top + window.scrollY + offset; 
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  
  const SelectedComponent = selectedSlug && components[selectedSlug]
    ? components[selectedSlug]
    : () => <div>Content not found</div>;

  return (
   <>
     {/* desktop view */}
    <div className="hidden md:flex">
      {/* Left Section */}
      <div className="w-[36%] bg-white fixed h-screen">
        <div className="lg:px-6">
          <div className="px-4 text-lg py-8">
            <a href="/advertise">
            &larr; Introduction
            </a>
          </div>
          <div className="pt-6">
            <h2 className="py-4 text-3xl">Building Innovative Digital Solutions</h2>
            <div className="border-t-2 border-b-2 border-black overflow-y-auto h-[320px]" style={{ scrollbarWidth: "none" }}>
              <AdvertiseSidebar activeSlug={selectedSlug} onSelect={setSelectedSlug} />
            </div>
          </div>
          <div className="text-black pt-4 flex justify-between">
            <p className="text-sm px-4 py-1">Interested to advertise?</p>
            <p className="text-sm border border-black px-4 py-1 rounded-3xl">Contact Us</p>
          </div>
        </div>
      </div>


      {/* Right Section */}
      <div className="w-[64%] h-full  ml-auto overflow-y-auto rounded-l-3xl relative z-10">
       <motion.div
          layout
          key={selectedSlug}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="bg-[#01261E]"
        >

          <div className="h-full flex flex-col">
        
           {/* nav bar */}
            <div className="">
              <div className="bg-[#01261E] fixed top-0  w-[100%] pt-10 pb-12 z-50 hidden md:block rounded-l-3xl">
              <div className="flex flex-row space-x-12  absolute left-24">
                  <div className="">
                    <div className="space-x-4">
                      {rightSectionNav.map(({ name, id }) => (
                        <a
                          key={id}
                      className="text-xs text-white border border-white w-full px-5 py-3 rounded-full cursor-pointer hover:bg-white hover:text-black"
                      onClick={(event) => handleScrollToSection(event, id, -120)}
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  </div>
                <div className="">
                <a
                  className="text-xs bg-white  rounded-full shadow-lg px-5 py-3"
                  href="https://www.sagravia.com/" target="_blank"
                >
                  Visit Website
                </a>
                </div>
              </div>
              </div>
            </div>
            

            {/* Content Sections */}
            <motion.div
            layout
            key={selectedSlug}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            
          >
            <div className="">
              <div className="mx-24 lg:mb-28 mt-24">
                  <div className=" my-10" id="chart1">
                    <SelectedComponent />
                  </div>
                  <div className=" my-10" id="chart2">
                    <SelectedComponent />
                  </div>
                  <div className=" my-10" id="chart3">
                    <SelectedComponent />
                  </div>
                  <div className=" my-10" id="chart4">
                    <SelectedComponent />
                  </div>
                  <div className=" my-10" id="chart5">
                    <SelectedComponent />
                  </div>
              </div>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </div>

   
     {/* Mobile View */}
     <div className="block md:hidden">
     <div className="bg-[#01261E] p-4">
       {/* Mobile Navigation */}
       <div className="flex flex-wrap gap-2 justify-center">
         {rightSectionNav.map(({ name, id }) => (
           <a
             key={id}
             className="text-xs text-white border border-white px-3 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black"
             onClick={() => handleScrollToSection(id)}
           >
             {name}
           </a>
         ))}
       </div>
     </div>

     {/* Mobile Content */}
     <div className="p-4">
       {rightSectionNav.map(({ id }) => (
         <div className="my-5" id={id} key={id}>
           <SelectedComponent />
         </div>
       ))}
     </div>

     {/* Mobile Footer */}
     <div className="text-center py-4">
       <a className="text-sm bg-white text-black px-4 py-2 rounded-full shadow-lg" href="https://www.sagravia.com/" target="_blank">
         Visit Website
       </a>
     </div>
   </div></>

  );
}
