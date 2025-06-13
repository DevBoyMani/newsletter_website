"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



export default function AboutOurMission() {
  const componentData = [
    {
      id: 1,
       headerImageActive: "/about/dell-dark.png",      // dark/active version
       headerImageInactive: "/about/dell.png",     // gray/inactive version
      mainContent: `"At Dell, we value innovation and reliability—and working with your company has been a seamless partnership marked by professionalism, forward-thinking solutions, and exceptional collaboration."`,
      subContentL: "Beth Everett",
      subContentR: "Marketing & Communications Manager, Dell",
    },
    {
      id: 2,
       headerImageActive: "/about/coinbase-dark.png",      // dark/active version
    headerImageInactive: "/about/coinbase.png",     // gray/inactive version
      mainContent: `"At Coinbase, we prioritize trust and innovation in the digital economy, and partnering with your company has exemplified those values through secure, efficient, and forward-looking collaboration."`,
      subContentL: "Jordan Reeves",
      subContentR: "Senior Partnership Manager, Coinbase",
    },
    {
      id: 3,
       headerImageActive: "/about/fuji-dark.png",      // dark/active version
      headerImageInactive: "/about/fuji.png",     // gray/inactive version
      mainContent: `"At Fujifilm, we appreciate creativity and precision, and working with your company has demonstrated a shared commitment to excellence, innovation, and impactful collaboration."`,
      subContentL: "Alicia Kim",
      subContentR: "Head of Media Relations, FujiFilm",
    },
  ];

  const [direction, setDirection] = useState("forward");

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setDirection("backward");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? componentData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("forward");
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
        <div className=" bg-[#DAEBE8] rounded-[32px] h-[358px] relative overflow-hidden">

          {/* Left Arrow */}
          {currentIndex !== 0 && (
        
          <button
            onClick={handlePrev}
            className="group relative overflow-hidden isolate z-10 left-[20px] top-1/2 -translate-y-1/2 bg-[#9A9995] p-2 rounded-full shadow-md text-white transition-colors duration-300"
          >
            {/* Expanding green circle */}
            <span className="absolute inset-0 bg-[#01261E] rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out origin-center z-0" />

            {/* Icon stays on top */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 relative z-10"
            >
              <line x1="24" y1="16" x2="8" y2="16" />
              <polyline points="14 8 6 16 14 24" />
            </svg>
          </button>

          )}


          {/* Right Arrow */}
          {currentIndex !== componentData.length-1 && (
            <button
  onClick={handleNext}
  className="group absolute right-[20px] top-1/2 -translate-y-1/2 bg-[#9A9995] p-2 rounded-full shadow-md text-white transition-colors duration-300 overflow-hidden isolate z-10"
>
  {/* Expanding green circle */}
  <span className="absolute inset-0 bg-[#01261E] rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out origin-center z-0" />

  {/* Icon stays on top */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 relative z-10"
  >
    <line x1="8" y1="16" x2="24" y2="16" />
    <polyline points="18 8 26 16 18 24" />
  </svg>
</button>

          )}


          {/* Display single item */}
          <div className="p-6 transition duration-300 ease-in-out">
            <div className="flex justify-center items-center space-x-6">
              {componentData.map((data, index) => (
                <img
                  key={data.id}
                  src={index === currentIndex ? data.headerImageActive : data.headerImageInactive}
                  alt={data.subContentL}
                  className="w-[74px]  transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>


            <div className="flex justify-center py-4">
              <p className="w-[60%] text-[26px] text-[#000] font-[500] leading-[124.224%] text-center">
                {item.mainContent}
              </p>
            </div>

            <AnimatePresence mode="wait">
  <div
    key={item.id}
    className="py-4 flex justify-center items-center space-x-2"
  >
    {/* Animate Left Only on Backward */}
    {direction === "backward" ? (
      <motion.span
        key={"L" + item.id}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="text-[13px] text-[#000] font-[600] leading-[124.224%]"
      >
        {item.subContentL}
      </motion.span>
    ) : (
      <span className="text-[13px] text-[#000] font-[600] leading-[124.224%]">
        {item.subContentL}
      </span>
    )}

    {/* Divider (static or animated) */}
    <span className="text-[13px] text-[#A6A4A0] font-[600]">|</span>

    {/* Animate Right Only on Forward */}
    {direction === "forward" ? (
      <motion.span
        key={"R" + item.id}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 10, opacity: 1}}
        transition={{ duration: 0.4 }}
        className="text-[13px] text-[#A6A4A0] font-[600] leading-[124.224%]"
      >
        {item.subContentR}
      </motion.span>
    ) : (
      <span className="text-[13px] text-[#A6A4A0] font-[600] leading-[124.224%]">
        {item.subContentR}
      </span>
    )}
  </div>
</AnimatePresence>


          </div>
        </div>
      </div>
    </>
  );
}
