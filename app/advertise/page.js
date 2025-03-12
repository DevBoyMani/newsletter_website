"use client";

import { useState } from "react";
import AdvertiseSidebarHomepage from "../../components/advertiseSidebarHomepage/advertiseSidebarHomepage";
import { motion } from "framer-motion";

export default function Advertise() {
  const [openSection, setOpenSection] = useState("about");

  const toggleSection = (section) => {
    setOpenSection(section);
  };


  return (
    <>
    {/* desktop view */}
    <div className="hidden lg:block flex w-full">
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
                  <AdvertiseSidebarHomepage/>
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



    {/* mobile view */}
    <div className="w-sm lg:hidden block max-h-screen">
      <div className="max-h-[40%] min-h-[40%] overflow-y-auto">
      {openSection === "about" && (
          <div>
            <img
              src="/analytics-home-image-mobile.png"
              alt="Analytics Home"
              className="w-full h-full object-cover"
            />
          </div>
      )}
      </div>
      <div className=" max-h-[60%] min-h-[60%] overflow-y-auto">
          <div className=" w-sm z-10 px-4 pb-4 w-full flex flex-col items-start space-y-4 h-80">
            {/* Navigation Links */}
            <div className="bg-white flex fixed w-full justify-start pb-4 ">
              <div className="px-4">
                <div className="flex flex-row space-x-6 py-2 border-black border-b ">
                  <a className="cursor-pointer font-semibold" onClick={() => toggleSection("about")}>
                    About
                  </a>
                  <a>.</a>
                  <a className="cursor-pointer font-semibold" onClick={() => toggleSection("newsletters")}>
                    Newsletters
                  </a>
                  <a>.</a>
                  <a className="cursor-pointer font-semibold" onClick={() => toggleSection("contact")}>
                    Contact
                  </a>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="px-4">
              {/* About Section */}
              {openSection === "about" && (
                <>
                <div className="mt-8 fixed bg-white">
                  <h4 className="font-medium text-2xl">
                  Building innovative digital solutions
                  </h4>
                </div>
                <div className="pt-24">
                  <p className="py-2">Creativity has been an integral part of my life. Since 2010 I've started working in design industry. Having worked in graphic, product, ux, ui, motion and website design I have acquired a good understanding of creation processes in different fields.</p>
                    <p className="py-2">Within close cooperation with developers I have good understanding of different tech stacks. This helps me in the design process, where I can drive my imagination with tech possibilities and goals.</p>
                    <p className="py-2">As a dedicated and organised individual, I have an active and dynamic approach to achieving the best results in my work. I have a strong knowledge in design and digital product. I am driven by the idea to show product in a simple, however unique and always rationale way.</p>
                    <p className="py-2">Creativity has been an integral part of my life. Since 2010 I've started working in design industry. Having worked in graphic, product, ux, ui, motion and website design I have acquired a good understanding of creation processes in different fields.</p>
                    <p className="py-2">Within close cooperation with developers I have good understanding of different tech stacks. This helps me in the design process, where I can drive my imagination with tech possibilities and goals.</p>
                    <p className="py-2">As a dedicated and organised individual, I have an active and dynamic approach to achieving the best results in my work. I have a strong knowledge in design and digital product. I am driven by the idea to show product in a simple, however unique and always rationale way.</p>
                </div>
                </>
              )}

              {/* Newsletters Section */}
              {openSection === "newsletters" && (
                <>
                <div className="fixed mt-8 bg-white">
                  <h4 className="font-medium text-2xl">
                  Welcome to the News letters
                  </h4>
                </div>
                <div>
                  <AdvertiseSidebarHomepage />
                </div>
                </>
              )}

              {/* Contact Us Section */}
              {openSection === "contact" && (
                <>
                <div className="fixed mt-8 bg-white">
                  <h4 className="font-medium text-2xl">
                  Contact us
                  </h4>
                </div>
                <div>
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
