"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const HomePopularNewslettersMobile = ({ cardsMobile }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < cardsMobile.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Enable finger & mouse swipes
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true, // allows drag with mouse on desktop too
  });

  return (
    <div className="block lg:hidden bg-[#FAFAFA] px-4 overflow-hidden">
      {/* Heading + Description */}
      <h2 className="text-[30px] text-[#01261E] pt-[20px] font-[400] leading-[120%]">
        Popular newsletters
      </h2>
      <p className="text-[#000] text-[14px] font-[400] leading-[19px] pt-[25px]">
        News should inform you, not exhaust you. We turn complex stories into
        clear and thoughtful summaries, written by humans with good judgment.
      </p>

      {/* Buttons Row */}
      <div className="flex justify-between items-center pt-[40px]">
        <div className="flex items-center gap-[13px]">
          {cardsMobile.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className="relative flex items-center justify-center"
              >
                <img
                  src={isActive ? card.activeImg : card.inactiveImg}
                  alt={card.title}
                  className={`object-contain ${
                    isActive ? "w-[50px] h-[50px]" : "w-[40px] h-[40px]"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <Link href="/readers">
            <div className="flex items-center gap-1">
              <a
                href="/readers?scrollTo=ourNewsletters"
                className="text-[15px] text-[#000] font-[600] hover:underline leading-[104%]"
              >
                See all{" "}
              </a>
              <span>
                <img
                  src="/home/popular-nls-r-arr.png"
                  alt="right arrow"
                  className="w-3"
                />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Swipeable Card Section */}
      <div className="pt-[30px] relative h-fit" {...swipeHandlers}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            layout
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="inset-0"
          >
            <div className="bg-white rounded-[10px] shadow-[0_0_30px_rgba(0,0,0,0.05)] p-4">
              <div className="flex justify-between items-center">
                <span
                  className="w-[14px] h-[14px] rounded-full"
                  style={{ backgroundColor: cardsMobile[activeIndex].color }}
                ></span>
                <p className="text-[#878C91] text-[14px] font-[500] leading-[160%]">
                  {cardsMobile[activeIndex].when}
                </p>
              </div>

              <p className="text-[#010205] text-[20px] font-[600] pt-[24px] tracking-[-0.6px] leading-[150%]">
                {cardsMobile[activeIndex].title}
              </p>

              <div className="flex justify-between items-start">
                <p className="w-[220px] text-[#878C91] text-[14px] font-[500] pt-[25px] leading-[160%]">
                  {cardsMobile[activeIndex].desc}
                </p>

                <div className="flex justify-end">
                  <Link href={cardsMobile[activeIndex].source} target="_blank">
                    <button className="mt-12 flex justify-center items-center bg-[#01261E] hover:bg-[#0B4337] text-white rounded-full w-[88px] h-[39px] transition-all duration-300">
                      <img
                        src="/home/w-r-arr.png"
                        alt="arrow"
                        className="w-[20px]"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator line below card section */}
      <div className="relative pt-[30px] pb-[35px] flex justify-center">
        <div className="w-full max-w-[111px] h-[1.5px] bg-[#E6E6E6] rounded-full relative overflow-hidden">
          <motion.div
            key={activeIndex}
            className="absolute top-0 h-full bg-[#01261E] rounded-full"
            initial={false}
            animate={{
              x: `${(activeIndex / (cardsMobile.length - 1)) * 200}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              width: `${100 / cardsMobile.length}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePopularNewslettersMobile;
