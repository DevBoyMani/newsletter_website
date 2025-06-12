"use client"

import { useState } from "react";
import { motion } from "framer-motion";


export default function AboutOurMission() {
  const componentData = [
    {
      id: 1,
      headerImage: "/about/dell.png",
      mainContent: `"At Dell, we value innovation and reliability—and working with your company has been a seamless partnership marked by professionalism, forward-thinking solutions, and exceptional collaboration."`,
      subContentL: "Beth Everett",
      subContentR: "Marketing & Communications Manager, Dell",
    },
    {
      id: 2,
      headerImage: "/about/coinbase.png",
      mainContent: `"At Coinbase, we prioritize trust and innovation in the digital economy, and partnering with your company has exemplified those values through secure, efficient, and forward-looking collaboration."`,
      subContentL: "Jordan Reeves",
      subContentR: "Senior Partnership Manager, Coinbase",
    },
    {
      id: 3,
      headerImage: "/about/fulji.png",
      mainContent: `"At Fujifilm, we appreciate creativity and precision, and working with your company has demonstrated a shared commitment to excellence, innovation, and impactful collaboration."`,
      subContentL: "Alicia Kim",
      subContentR: "Head of Media Relations, FujiFilm",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? componentData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === componentData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const item = componentData[currentIndex];

  return (
    <>
      {/* heading */}
      <div className="py-10">
        <h2 className="w-full pb-2 text-[30px] lg:text-[56px] text-[#01261E] leading-[1.2] font-[GT-Super-Ds-Trial] text-center">
          Our mission
        </h2>
        <p className="text-[#000] text-center text-[18px] font-[400] leading-[150%] tracking-[0.36px]">
          Our mission is to keep the world informed and curious,
          <br /> one newsletter at a time.
        </p>
      </div>

      {/* testimonial section */}
      <div className="py-10 md:px-28 px-4 relative ">
        <div className="bg-[#DAEBE8] rounded-[32px] h-[358px] relative overflow-hidden">

          {/* Left Arrow */}
          {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-[20px] top-1/2 -translate-y-1/2 bg-[#9A9995] p-2 rounded-full shadow-md z-10 hover:bg-[#01261E] text-[#fff]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="24" y1="16" x2="8" y2="16" />
              <polyline points="14 8 6 16 14 24" />
            </svg>
          </button>
          )}


          {/* Right Arrow */}
          {currentIndex !== componentData.length-1 && (
            <button
              className="absolute right-[20px] top-1/2 -translate-y-1/2 bg-[#9A9995] p-2 rounded-full shadow-md hover:bg-[#01261E] text-[#fff] z-10"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="8" y1="16" x2="24" y2="16" />
                <polyline points="18 8 26 16 18 24" />
              </svg>
            </button>
          )}


          {/* Display single item */}
          <div className="p-6 transition duration-300 ease-in-out">
            <div className="flex justify-center items-center">
              <img
                src={item.headerImage}
                alt={item.subContentL}
                className="w-[23%]"
              />
            </div>

            <div className="flex justify-center py-4">
              <p className="w-[60%] text-[26px] text-[#000] font-[500] leading-[124.224%] text-center">
                {item.mainContent}
              </p>
            </div>

            <div className="py-4 flex justify-center items-center space-x-2">
              <span className="text-[13px] text-[#000] font-[600] leading-[124.224%]">
                {item.subContentL}
              </span>
              <span className="text-[13px] text-[#A6A4A0] font-[600]">|</span>
              <span className="text-[13px] text-[#A6A4A0] font-[600] leading-[124.224%]">
                {item.subContentR}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
