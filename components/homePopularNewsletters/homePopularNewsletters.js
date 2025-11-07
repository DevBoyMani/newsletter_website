"use client";

import HeadingWithUnderline from "../../components/readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function HomePopularNewsletters() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsMobile = [
    {
      id: 0,
      activeImg: "/home/ps-color.png",
      inactiveImg: "/home/ps-gray.png",
      title: "Presidential Summary",
      desc: "We are the top digital marketing agency for branding corp. We offer a full rang engine.",
      color: "#4D3060",
      source: "https://www.presidentialsummary.com/",
    },
    {
      id: 1,
      activeImg: "/home/gs-color.png",
      inactiveImg: "/home/gs-gray.png",
      title: "Geopolitical Summary",
      desc: "Working with this digital marketing agency has been a true partnership.",
      color: "#06266D",
      source: "https://www.geopoliticalsummary.com/",
    },
    {
      id: 2,
      activeImg: "/home/ds-color.png",
      inactiveImg: "/home/ds-gray.png",
      title: "Dubai Summary",
      desc: "What sets this digital marketing agency apart is their commitment to transparency.",
      color: "#EECA66",
      source: "https://www.dubaisummary.com/",
    },
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="pt-[70px] pb-[82px] px-[110px]">
          <h2 className="text-[56px] text-[#01261E] font-[400] leading-[100%] ">
            Popular newsletters
          </h2>
          <div className="flex justify-between pt-[35px]">
            <p className="w-[42%] text-[#737373] text-[16px] font-[400] leading-[149%]">
              We are the top digital marketing agency for branding corp. We
              offer a full range of services to help clients improve their
              search engine rankings and drive more traffic to their websites.
            </p>
            <Link
              href="/readers#ourNewsletters"
              className="mt-8 text-[18px] text-[#000] font-[400] leading-[104%] hover:underline"
            >
              All newsletters &rarr;
            </Link>
          </div>

          {/* card */}
          <div className="flex lg:flex-row flex-col gap-[24px] pt-[35px] w-full overflow-hidden">
            {[
              {
                dot: "/home/ps-dot.png",
                title: "Presidential Summary",
                desc: "We are the top digital marketing agency for branding corp. We offer a full rang engine.",
              },
              {
                dot: "/home/gs-dot.png",
                title: "Geopolitical Summary",
                desc: "Working with this digital marketing agency has been a true partnership.",
              },
              {
                dot: "/home/bh-dot.png",
                title: "Business History",
                desc: "What sets this digital marketing agency apart is their commitment to transparency.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex-1 bg-white rounded-[10px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] min-w-0"
              >
                <div className="p-[32px] flex flex-col h-full">
                  <div className="flex justify-between items-center">
                    <img src={card.dot} alt="" className="w-[14px] h-[14px]" />
                    <p className="text-[#878C91] text-[14px] font-[500] leading-[160%] whitespace-nowrap">
                      Daily news
                    </p>
                  </div>

                  <p className="pt-[24px] text-[#010205] text-[26px] font-[600] leading-[150%] tracking-[-0.78px]">
                    {card.title}
                  </p>

                  <div className="pt-[56px] flex justify-between items-start flex-wrap gap-[19px] ">
                    <p className="flex-1 text-[#878C91] text-[14px] font-[500] leading-[160%] min-w-[150px]">
                      {card.desc}
                    </p>

                    <div className="flex-shrink-0">
                      <button className="group relative flex justify-center items-center border border-[#01261E] hover:bg-[#0B4337] rounded-[70px] py-[8px] px-[32px] transition-all duration-300 hover:scale-[1.05]">
                        <img
                          src="/home/r-arr.png"
                          alt="Green Arrow"
                          className="w-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <img
                          src="/home/w-r-arr.png"
                          alt="White Arrow"
                          className="w-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden bg-[#FAFAFA] px-4 overflow-hidden">
        {/* Heading + Description */}
        <h2 className="text-[30px] text-[#01261E] pt-[20px] font-[400] leading-[120%]">
          Popular newsletters
        </h2>
        <p className="text-[#000] text-[14px] font-[400] leading-[19px] pt-[25px]">
          We are the top digital marketing agency for branding corp. We offer a
          full range of services to help clients improve their search engine
          rankings and drive more traffic to their websites.
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
                    } `}
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-5">
            <Link href="/readers">
              <div className="flex items-center gap-1">
                <p className="text-[15px] text-[#000] font-[600] hover:underline leading-[104%]">
                  See all{" "}
                </p>
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

        {/* Card Section with slide animation */}
        <div className="pt-[30px] relative h-fit">
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
                    Daily news
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
                    <Link
                      href={cardsMobile[activeIndex].source}
                      target="_blank"
                    >
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
          {/* Gray background line (split into 3 equal parts) */}
          <div className="w-full max-w-[111px] h-[1.5px] bg-[#E6E6E6] rounded-full relative overflow-hidden">
            {/* Animated indicator */}
            <motion.div
              key={activeIndex}
              className="absolute top-0 h-full bg-[#01261E] rounded-full"
              initial={false}
              animate={{
                x: `${(activeIndex / (cardsMobile.length - 1)) * 200}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: `${100 / cardsMobile.length}%`, // each segment width = 1/3 if 3 items
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
