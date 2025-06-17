"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Variants for staggered animation
const container = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      ease: "easeOut",
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function AboutOurMission() {
  const componentData = [
    {
      id: 1,
      headerImageActive: "/about/dell-dark.png",
      headerImageInactive: "/about/dell.png",
      mainContent: `"At Dell, we value innovation and reliability—and working with your company has been a seamless partnership marked by professionalism, forward-thinking solutions, and exceptional collaboration."`,
      subContentL: "Beth Everett",
      subContentR: "Marketing & Communications Manager, Dell",
    },
    {
      id: 2,
      headerImageActive: "/about/coinbase-dark.png",
      headerImageInactive: "/about/coinbase.png",
      mainContent: `"At Coinbase, we prioritize trust and innovation in the digital economy, and partnering with your company has exemplified those values through secure, efficient, and forward-looking collaboration."`,
      subContentL: "Jordan Reeves",
      subContentR: "Senior Partnership Manager, Coinbase",
    },
    {
      id: 3,
      headerImageActive: "/about/fuji-dark.png",
      headerImageInactive: "/about/fuji.png",
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
    {/* desktop */}
      <div className="hidden lg:block">
        <div className="py-10">
          <h2 className="w-full pb-2 text-[30px] lg:text-[56px] text-[#01261E] leading-[1.2] font-[GT-Super-Ds-Trial] text-center">
            Our mission
          </h2>
          <p className="text-[#000] text-center text-[18px] font-[400] leading-[150%] tracking-[0.36px]">
            Our mission is to keep the world informed and curious,
            <br /> one newsletter at a time.
        </p>
      </div>

      <div className="py-10 md:px-28 px-4 relative">
        <div className="bg-[#DAEBE8] rounded-[32px] h-[358px] relative overflow-hidden">
          {/* Left Arrow */}
          {currentIndex !== 0 && (
            <button
              onClick={handlePrev}
              className="group absolute left-[20px] top-1/2 -translate-y-1/2 bg-[#9A9995] p-2 rounded-full shadow-md text-white transition-colors duration-300 overflow-hidden isolate z-10"
            >
              <span className="absolute inset-0 bg-[#01261E] rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out origin-center z-0" />
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
          {currentIndex !== componentData.length - 1 && (
            <button
              onClick={handleNext}
              className="group absolute right-[20px] top-1/2 -translate-y-1/2 bg-[#9A9995] p-2 rounded-full shadow-md text-white transition-colors duration-300 overflow-hidden isolate z-10"
            >
              <span className="absolute inset-0 bg-[#01261E] rounded-full scale-0 group-hover:scale-[2.5] transition-transform duration-500 ease-out origin-center z-0" />
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

          {/* Content */}
          <div className="p-6 transition duration-300 ease-in-out">
            {/* Logos */}
            <div className="flex justify-center items-center space-x-6">
              {componentData.map((data, index) => (
                <img
                  key={data.id}
                  src={
                    index === currentIndex
                      ? data.headerImageActive
                      : data.headerImageInactive
                  }
                  alt={data.subContentL}
                  className="w-[74px] transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id + "-quote"}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex justify-center py-4"
              >
                <p className="w-[60%] text-[26px] text-[#000] font-[500] leading-[124.224%] text-center">
                  {item.mainContent}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Name + Role with staggered animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id + direction}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex justify-center pt-2 min-h-[24px] space-x-1"
              >
                <motion.span
                  variants={fadeUp}
                  className="font-semibold text-black text-[15px]"
                >
                  {item.subContentL}
                </motion.span>
                <motion.span
                  variants={fadeUp}
                  className="text-[#A6A4A0] text-[15px]"
                >
                  |
                </motion.span>
                <motion.span
                  variants={fadeUp}
                  className="text-[#A6A4A0] text-[15px]"
                >
                  {item.subContentR}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="py-10">
        <h2 className="w-full pb-2 text-[30px] lg:text-[56px] text-[#01261E] leading-[1.2] font-[GT-Super-Ds-Trial] text-center">
          Our mission
        </h2>
        <p className="text-[#000] text-center text-[14px] font-[400] leading-[130%] tracking-[0.28px] px-12">
          Our mission is to keep the world informed and curious,
          one newsletter at a time.
        </p>
      </div>

      <div className="pb-10 pt-4 relative">
        <div className="bg-[#DAEBE8] h-[348px] relative overflow-hidden pt-4">
          {/* Left Arrow */}
          {currentIndex !== 0 && (
            <button
              onClick={handlePrev}
              className="group absolute left-[20px] top-[160px] -translate-y-1/2"
            >
              <img
                src="/about/button-left.png" 
                alt="Arrow Icon"
                className="w-5 h-5 relative z-10"
              />
            </button>
          )}

          {/* Right Arrow */}
          {currentIndex !== componentData.length - 1 && (
            <button
              onClick={handleNext}
              className="group absolute right-[20px] top-[158px] -translate-y-1/2"
            >
               <img
                src="/about/button-right.png" 
                alt="Arrow Icon"
                className="w-5 h-5 relative z-10"
              />
            </button>
          )}

          {/* Content */}
          <div className="p-6 transition duration-300 ease-in-out">
            {/* Logos */}
            <div className="flex justify-center items-center space-x-4">
              {componentData.map((data, index) => (
                <img
                  key={data.id}
                  src={
                    index === currentIndex
                      ? data.headerImageActive
                      : data.headerImageInactive
                  }
                  alt={data.subContentL}
                  className="w-[64px] transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id + "-quote"}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex justify-center py-4"
              >
                <p className="w-[85%] px-4 text-[14px] text-[#000] font-[500] leading-[124.224%] text-center tracking-[0.28px]">
                  {item.mainContent}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Name + Role with staggered animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id + direction}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col text-center justify-center pt-2 min-h-[24px] space-x-1"
              >
                <motion.span
                  variants={fadeUp}
                  className="font-semibold text-black text-[12px]"
                >
                  {item.subContentL}
                </motion.span>
                {/* <motion.span
                  variants={fadeUp}
                  className="text-[#A6A4A0] text-[15px]"
                >
                  |
                </motion.span> */}
                <motion.span
                  variants={fadeUp}
                  className="text-[#A6A4A0] text-[12px]"
                >
                  {item.subContentR}
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
