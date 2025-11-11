"use client";

import HeadingWithUnderline from "../readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import HomePopularNewslettersMobile from "../../components/homePopularNewslettersMobile/homePopularNewslettersMobile";

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
      <HomePopularNewslettersMobile cardsMobile={cardsMobile} />
    </>
  );
}
