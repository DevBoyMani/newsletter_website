"use client";




import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import AdvertiseSidebar from "../../../components/advertiseSidebar/advertiseSidebar";
import { Component } from "../../../components/areaChart/areaChart";
import Link from "next/link";

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

export default function AdvertiseSlug() {
  const params = useParams();
  const [selectedSlug, setSelectedSlug] = useState("");
  
  // const [openSection, setOpenSection] = useState("");
  
  const rightSectionNav = [
    { name: "Active Users", id: "chart1",reachedTop:"false" },
    { name: "Country", id: "chart2",reachedTop:"false" },
    { name: "Age", id: "chart3",reachedTop:"false" },
    { name: "Subscriber Growth", id: "chart4",reachedTop:"false" },
    { name: "Total Visits", id: "chart5",reachedTop:"false" }
  ];

const [activeChart, setActiveChart] = useState(1);
  const totalCharts = rightSectionNav.length; 
  // const toggleSection = (section) => {
  //   setOpenSection(section);
  // };


  const handleScroll = () => {
    let currentChart = 1;
    rightSectionNav.forEach(({ id }, index) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentChart = index + 1;
        }
      }
    });

    setActiveChart(currentChart);
  };


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
    <div className="hidden lg:block md:flex">
      {/* Left Section */}
      <div className="w-[36%] bg-white fixed h-screen">
        <div className="md:px-6">
          <div className="px-4 text-lg py-8">
            <a href="/advertise">
            &larr; Introduction
            </a>
          </div>
          <div className="pt-6">
            <h2 className="py-4 text-3xl">Building Innovative Digital Solutions</h2>
            <div className="border-t-2 border-b-2 border-black overflow-y-auto md:h-[320px]" style={{ scrollbarWidth: "none" }}>
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
     <div className="block lg:hidden w-sm ">

      <div className="bg-[#01261E] max-h-[50vh] overflow-y-auto relative z-10" onScroll={handleScroll}>
          {/* Header with Numerical Indicator */}
          <div className="bg-[#01261E] fixed top-0 w-full pt-6 pb-3 px-4 z-50 text-white">
            <div className="flex justify-between items-center">
              <h4 className="text-sm text-gray-300">Total Visits</h4>
              <div className="text-xs font-semibold bg-[#FAFAFA] text-[#01261E] py-2 px-2 rounded-full">{activeChart}/{totalCharts}</div>
            </div>
          </div>

        <div className=" flex flex-col">
            <div className="mx-4">
              <div className=" mt-24">
                  {rightSectionNav.map(el => {
                    return <div className=" my-10" key={el.id} id={el.id}>
                    <SelectedComponent />
                  </div>
                  
                  })}
              </div>
            </div>
        </div>
      </div>

      <div className="max-h-[50vh] overflow-y-auto">
        <div className="max-w-2xl w-full ">
          {/* Navigation Links */}
          <div className="w-full px-4 py-2 fixed bg-white  z-50">
                <div className="flex space-x-6 py-2 px-2 border-black border-b text-xs">
                  <Link
                    className="cursor-pointer font-semibold py-2 px-2"
                    // onClick={() => toggleSection("about")}
                    href="/advertise"
                  >
                    About
                  </Link>
                  <a className="py-2">.</a>
                  <Link href="/advertise/geopolitical-summary" className="cursor-pointer font-semibold bg-[#121212]/20 py-2 px-2 rounded-3xl">
                    Newsletters
                  </Link>

                  <a className="py-2">.</a>
                  <Link
                    className="cursor-pointer font-semibold py-2 px-2" 
                    // onClick={() => toggleSection("contact")}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>


            {/* bottom section */}
            <div className="pt-14">
                    <AdvertiseSidebar activeSlug={selectedSlug} onSelect={setSelectedSlug} />
            </div>
        </div>
   </div>
    </div>
   </>

  );
}