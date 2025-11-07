"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const cardsData = [
  {
    id: 0,
    img: "/home/l-b-r-gs-logo.png",
    text: "It always keeps me updated even on the go and every day I find news I hadn't heard anywhere else. Keep up the good work and let the haters hate.",
    name: "Michael Albert",
    location: "Atlanta, Georgia",
  },
  {
    id: 1,
    img: "/home/l-b-r-ps-logo.png",
    text: "I am a newsletter writer too and I was too lazy to subscribe to your newsletter but I am now proud to say I am a convert.",
    name: "Dr Miro Bada",
    location: "Austin, Texas",
  },
  {
    id: 2,
    img: "/home/l-b-r-gs-logo.png",
    text: "I'm getting more of my kids to read this. Sometimes don't agree with your analysis. But real professionals understand that we have nothing without a dialectic and robust debate.",
    name: "Nickoai Pokrovsky",
    location: "Franklin Lakes, NJ",
  },
];
export default function HomeLovedByReaders() {
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef(null);

  // 👇 Handle scroll to detect which card is centered
  const handleScroll = (e) => {
    const container = e.target;
    const width = container.offsetWidth * 0.85;
    const index = Math.round(container.scrollLeft / width);
    setActiveIndex(index);
  };

  // 👇 Scroll to the 1st index card after mount (once everything is painted)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleInitialScroll = () => {
      const width = container.offsetWidth * 0.85;
      container.scrollTo({
        left: width * 1, // 👈 1 = center 2nd card
        behavior: "smooth",
      });
    };

    // Run after a short delay to ensure layout is ready
    const timeout = setTimeout(handleInitialScroll, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <div className="bg-[#FAFAFA]">
          <div className="pt-[110px] pb-[80px] px-[165px]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center text-[56px] text-[#01261E] font-[400] leading-[48px] tracking-[-1.2px]">
                Loved by readers
              </h2>
              <p className="pt-[26px] text-center text-[19px] text-[#161C2D] font-[400] leading-[32px] tracking-[-0.2px] w-[50%]">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next landing page.
              </p>
            </div>
            {/* cards */}
            <div className="pt-[56px]">
              <div className="flex gap-[30px] items-stretch">
                <div className="flex-1">
                  <div className="h-full bg-[#fff] border border-[#E7E9ED] rounded-[10px] flex flex-col">
                    <div className="px-[33px] pt-[32px] pb-[25px] flex flex-col flex-1">
                      <div className="w-[54px] h-[54px]">
                        <img
                          src="/home/l-b-r-gs-logo.png"
                          alt="GS"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-[#161C2D] text-[21px] font-[400] leading-[32px] tracking-[-0.5px] pt-[24px]">
                        “It always keeps me updated even on the go and every day
                        I find news I hadn't heard anywhere else. Keep up the
                        good work and let the haters hate".
                      </p>
                      <div className="flex-1" />
                      <p className="text-[#161C2D] text-[17px] font-[400] leading-[29px] tracking-[-0.2px] pt-[23px] mt-auto">
                        Michael Albert
                        <span className="ml-[9px] text-[rgba(22,28,45,0.7)]">
                          Altanta, Georgia
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-full bg-[#fff] border border-[#E7E9ED] rounded-[10px] flex flex-col">
                    <div className="px-[33px] pt-[32px] pb-[25px] flex flex-col flex-1">
                      <div className="w-[54px] h-[54px]">
                        <img
                          src="/home/l-b-r-ps-logo.png"
                          alt="GS"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-[#161C2D] text-[21px] font-[400] leading-[32px] tracking-[-0.5px] pt-[24px]">
                        “I am a newsletter writer too and I was too lazy to
                        subscribe to your newsletter but I am now proud to say I
                        am a convert”
                      </p>
                      <div className="flex-1" />
                      <p className="text-[#161C2D] text-[17px] font-[400] leading-[29px] tracking-[-0.2px] pt-[23px] mt-auto">
                        Dr Miro Bada
                        <span className="ml-[9px] text-[rgba(22,28,45,0.7)]">
                          Austin, Texas
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-full bg-[#fff] border border-[#E7E9ED] rounded-[10px] flex flex-col">
                    <div className="px-[33px] pt-[32px] pb-[25px] flex flex-col flex-1">
                      <div className="w-[54px] h-[54px]">
                        <img
                          src="/home/l-b-r-gs-logo.png"
                          alt="GS"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-[#161C2D] text-[21px] font-[400] leading-[32px] tracking-[-0.5px] pt-[24px]">
                        “I'm getting more of my kids to read this. Sometimes
                        don't agree with your analysis. But real professionals
                        understand that we have nothing without a dialectic and
                        robust debate.”
                      </p>
                      <div className="flex-1" />
                      <p className="text-[#161C2D] text-[17px] font-[400] leading-[29px] tracking-[-0.2px] pt-[23px] mt-auto">
                        Nickoai Pokrovsky
                        <span className="ml-[9px] text-[rgba(22,28,45,0.7)]">
                          Franklin Lakes, NJ
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden bg-[#FAFAFA]">
        {/* Section Heading */}
        <div className="px-4">
          <h2 className="text-[30px] font-[400] text-center text-[#121212] pt-[39px] leading-[120%]">
            Loved by readers
          </h2>
          <p className="text-center text-[14px] text-[#121212] font-[400] leading-[145%] tracking-[0.7px] max-w-[295px] mx-auto pt-[25px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        {/* Scrollable Cards */}
        <div className="pt-[50px]">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-4 pb-6 pt-2 no-scrollbar px-[12px]"
            onScroll={handleScroll}
          >
            {/* Spacer before first card */}
            <div className="flex-shrink-0 w-[8%]" />

            {cardsData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex-shrink-0 w-[263px] h-[285px] bg-white border border-[#E7E9ED] rounded-[10px] p-[25px] snap-center shadow-[0_0_10px_rgba(0,0,0,0.04)] flex flex-col justify-between`}
                animate={{
                  scale: activeIndex === index ? 1.05 : 0.92,
                  opacity: activeIndex === index ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="w-[39px] h-[39px]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full"
                  />
                </div>

                {/* Middle content */}
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-[#161C2D] text-[16px] leading-[24px] font-[400] tracking-[-0.5px] pt-[18px]">
                    “{item.text}”
                  </p>

                  {/* Bottom content */}
                  <div className="pt-4">
                    <p className="text-[#161C2D] text-[13px] font-[400] leading-[29px] tracking-[-0.2px]">
                      {item.name}
                      <span className="ml-[6px] text-[rgba(22,28,45,0.7)]">
                        {item.location}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Spacer after last card */}
            <div className="flex-shrink-0 w-[8%]" />
          </div>
        </div>

        {/* Indicator Line */}
        <div className="relative pt-[30px] pb-[34px] flex justify-center">
          <div className="w-full max-w-[111px] h-[1.5px] bg-[#E6E6E6] rounded-full relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#161C2D] rounded-full"
              animate={{
                x: `${activeIndex * 37}px`,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ width: "37px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
