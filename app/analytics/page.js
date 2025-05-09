"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import AdvertiseSidebarHomepage from "../../components/analyticsSidebarHomepage/analyticsSidebarHomepage";
import AdvertiseSidebar from "../../components/analyticsSidebar/analyticsSidebar";
import { motion } from "framer-motion";
// import { MobileChart} from "../../components/advertiseComponents/mobileChart/mobileChart";
import { Component } from "../../components/analyticsChartGS/analyticsChartGS";
import AnalyticsSidebarHomepage from "../../components/analyticsSidebarHomepage/analyticsSidebarHomepage";

export default function Analytics() {
  const [openSection, setOpenSection] = useState("about");

  const toggleSection = (section) => {
    setOpenSection(section);
  };
  const router = useRouter();
  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block flex w-full">
        {/* Left Sidebar */}
        <div className="w-[36%] bg-white fixed h-screen">
          <div className="md:px-6">
            <div className="px-4 text-[16px] py-8 hover:underline">
              <a href="/analytics">Analytics</a>
            </div>
            <div className="pt-6">
              <h2 className="py-4 mx-4 text-[32px] font-[GT-Super-Ds-Trial] leading-normal w-[80%] border-b border-[#121212]">
                Building Innovative Digital Solutions
              </h2>
              <div
                className="overflow-y-auto w-[100%] sm:h-[40vh] md:h-[46vh] 
              lg:h-[46vh] 
              xl:h-[50vh]
              2xl:h-[60vh] max-h-[64vh]"
                style={{scrollbarWidth: "none" }}
              >
                <AnalyticsSidebarHomepage />
              </div>
            </div>
            <div className="w-[80%] mx-4 text-black pt-4 flex justify-between border-t border-[#121212]">
              <h3 className="text-[13px] py-1">Interested to advertise?</h3>
              <a className="border border-black text-[13px] px-4 py-1 rounded-3xl cursor-pointer">
                Contact Us
              </a>
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
                  <p className="py-2">
                    Creativity has been an integral part of my life. Since 2010
                    I've started working in design industry. Having worked in
                    graphic, product, ux, ui, motion and website design I have
                    acquired a good understanding of creation processes in
                    different fields.
                  </p>
                  <p className="py-2">
                    Within close cooperation with developers I have good
                    understanding of different tech stacks. This helps me in the
                    design process, where I can drive my imagination with tech
                    possibilities and goals.
                  </p>
                  <p className="py-2">
                    As a dedicated and organised individual, I have an active
                    and dynamic approach to achieving the best results in my
                    work. I have a strong knowledge in design and digital
                    product. I am driven by the idea to show product in a
                    simple, however unique and always rationale way.
                  </p>
                  <div className="pt-6">
                    <a
                      className="text-xs border border-white  rounded-full shadow-lg px-5 py-3 hover:bg-white hover:text-black"
                      href="https://www.sagravia.com/"
                      target="_blank"
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

      {/* mobile view */}
      <div className="w-sm lg:hidden block max-h-screen">
        <div className="max-h-[50vh] overflow-hidden">
            <div className="">
              <img
                src="/analytics-home-image-mobile.png"
                alt="Analytics Home"
                className="w-full h-[357px]"
              />
            </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto relative z-10">
        <div className="max-w-2xl w-full ">
            {/* Navigation Links */}
                <div className="w-full px-4 py-2 fixed bg-white z-50">
                <div className="flex flex-wrap w-full h-full gap-x-3 sm:gap-x-6 pt-2 pb-2 px-2 border-black border-b text-xs sm:text-sm justify-between sm:justify-start items-center">
                    <div>
                      <Link
                      prefetch={true}
                        href="/"
                        className="cursor-pointer text-[13px] font-semibold bg-[#121212]/20 py-2 px-2 rounded-3xl"
                      >
                        About
                      </Link>
                    </div>
                    <div className="flex items-center">
                    <img src="/dot.png" alt="dot" className="w-1 h-1 rounded-full" />
                    </div>
                    <div
                      className="cursor-pointer text-[13px] font-semibold py-2 px-2"
                      onClick={() => router.push("/analytics/geopolitical-summary")}
                    >
                      Newsletters
                    </div>
                    <div className="flex items-center">
                    <img src="/dot.png" alt="dot" className="w-1 h-1 rounded-full" />
                    </div>
                    <div>
                    <Link
                     href="/"
                     prefetch={true}
                      className="cursor-pointer text-[13px] font-semibold py-2 px-2"
                      // onClick={() => toggleSection("contact")}
                    >
                      Contact
                    </Link>
                    </div>
                </div>
             

                <div>
                    <div className="bg-white pt-2">
                        <h4 className="font-medium text-2xl">
                          Building innovative digital solutions
                        </h4>
                    </div>
                </div>
              </div>     

            {/* Content Sections */}
            <div className="px-4">
              {/* About Section */}
              {openSection === "about" && (
                <>
                
                  <div className="pt-36 text-[12px]">
                    <p className="">
                      Creativity has been an integral part of my life. Since
                      2010 I've started working in design industry. Having
                      worked in graphic, product, ux, ui, motion and website
                      design I have acquired a good understanding of creation
                      processes in different fields.
                    </p>
                    <p className="py-2">
                      Within close cooperation with developers I have good
                      understanding of different tech stacks. This helps me in
                      the design process, where I can drive my imagination with
                      tech possibilities and goals.
                    </p>
                    <p className="py-2">
                      As a dedicated and organised individual, I have an active
                      and dynamic approach to achieving the best results in my
                      work. I have a strong knowledge in design and digital
                      product. I am driven by the idea to show product in a
                      simple, however unique and always rationale way.
                    </p>
                    <p className="py-2">
                      Creativity has been an integral part of my life. Since
                      2010 I've started working in design industry. Having
                      worked in graphic, product, ux, ui, motion and website
                      design I have acquired a good understanding of creation
                      processes in different fields.
                    </p>
                    <p className="py-2">
                      Within close cooperation with developers I have good
                      understanding of different tech stacks. This helps me in
                      the design process, where I can drive my imagination with
                      tech possibilities and goals.
                    </p>
                    <p className="py-2">
                      As a dedicated and organised individual, I have an active
                      and dynamic approach to achieving the best results in my
                      work. I have a strong knowledge in design and digital
                      product. I am driven by the idea to show product in a
                      simple, however unique and always rationale way.
                    </p>
                  </div>
                </>
              )}


              {/* Newsletters Section
              {openSection === "newsletters" && (
                <>
                  <div className="fixed mt-8 ">
                    <h4 className="font-medium text-2xl">
                      Welcome to the News letters
                    </h4>
                  </div>
                  <div className="pt-24 ">
                    <AdvertiseSidebar />
                  </div>
                </>
              )} */}

              {/* Contact Us Section */}
              {openSection === "contact" && (
                <>
                  <div lassName="pt-24 ">
                    <p className="text-sm text-gray-700">Contact us...</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
