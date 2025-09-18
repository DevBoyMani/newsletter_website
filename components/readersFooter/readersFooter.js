"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const feedbackData = [
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
];

const socialMediaIcons = [
  {
    name: "x",
    src: "/readers/x.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "insta",
    src: "/readers/insta.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "ln",
    src: "/readers/ln.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "tiktok",
    src: "/readers/tiktok.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "t",
    src: "/readers/t.png",
    href: "https://www.presidentialsummary.com/",
  },
];

export default function ReadersFooter() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      {/* desktopsection */}
      <div id="site-footer" className="hidden lg:block bg-[#01261E]">
        <div className="px-4 md:px-16 py-10 md:pt-[101px] mx-auto ">
          <div className="flex flex-col justify-center max-w-[730px] mx-auto text-center">
            <h2 className="text-[#FAFAFA] text-[56px] leading-[70px] font-[400] ">
              Sagravia is trusted by 200,000+ people worldwide
            </h2>
          </div>

          <div className="relative group overflow-hidden pb-[60px] pt-[50px]">
            {/* Gradient Overlays */}
            <div
              className="absolute top-0 left-0 h-full w-32 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #01261E 30.88%, rgba(1, 38, 30, 0) 96.5%)",
              }}
            />
            <div
              className="absolute top-0 right-0 h-full w-32 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(270deg, #01261E 30.88%, rgba(1, 38, 30, 0) 96.5%)",
              }}
            />

            {/* Auto-Scrolling Flex Container */}

            {/* <div
              className="overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={scrollRef}
                className={`flex gap-6 whitespace-nowrap cursor-grab ${
                  isHovered ? "pause-animation" : "animate-scroll-cards"
                }`}
                style={{
                  animationPlayState: isHovered ? "paused" : "running",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {[...feedbackData, ...feedbackData].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[317px] w-[317px] h-auto bg-[#FFFFFF0D] pl-[17px] pr-[21px] py-[25px] rounded-[10px] border border-[#FFFFFF33] shrink-0 select-none"
                  >
                    <div className="flex justify-center lg:justify-start pb-[16px]">
                      {[...Array(5)].map((_, id) => (
                        <Image
                          key={id}
                          src="/readers/reader-star.png"
                          alt="star"
                          width={18}
                          height={18}
                        />
                      ))}
                    </div>
                    <div className="text-[#ffffff]">
                      <p className="text-[16px] max-w-full  whitespace-normal pb-[28px]">
                        {item.feedback}
                      </p>
                      <p className="text-[16px]">{item.userName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <div
              className="overflow-hidden cursor-grab"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              ref={scrollRef} // ✅ scrolling happens here
              style={{
                overflowX: isHovered ? "auto" : "hidden", // enable scroll only on hover
                scrollbarWidth: "none", // hide scrollbar
                msOverflowStyle: "none",
              }}
            >
              {/* animated track */}
              <div
                className={`${
                  isHovered ? "pause-animation" : "animate-scroll-cards"
                }`}
                style={{
                  display: "inline-flex", // keeps widths consistent
                  gap: "24px",
                  animationPlayState: isHovered ? "paused" : "running",
                }}
              >
                {[...feedbackData, ...feedbackData].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[317px] w-[317px] h-auto bg-[#FFFFFF0D] 
                  pl-[17px] pr-[21px] py-[25px] rounded-[10px] 
                  border border-[#FFFFFF33] shrink-0 select-none"
                  >
                    <div className="flex justify-center lg:justify-start pb-[16px]">
                      {[...Array(5)].map((_, id) => (
                        <Image
                          key={id}
                          src="/readers/reader-star.png"
                          alt="star"
                          width={18}
                          height={18}
                        />
                      ))}
                    </div>
                    <div className="text-[#ffffff]">
                      <p className="text-[16px] max-w-full whitespace-normal pb-[28px]">
                        {item.feedback}
                      </p>
                      <p className="text-[16px]">{item.userName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* footer */}
          <div id="site-footer" className="relative bg-[#01261E]">
            {/* Background Logo */}
            <div className="absolute -left-16 top-4 opacity-[100%] z-10">
              <img
                src="/readers/sagravia-footer-logo.png"
                alt="background logo"
                className="w-82"
              />
            </div>

            {/* Foreground Content */}
            <div className="py-20 flex justify-center relative z-10">
              <img
                src="/readers/sagravia-big-text.png"
                alt="sagravia"
                className=" w-[97%] ml-9"
              />
            </div>

            <div className=" py-16 text-white relative z-10">
              <div className="max-w-[1710] mx-auto flex flex-col lg:flex-row justify-between gap-10">
                {/* left section */}
                <div className="lg:w-1/2">
                  <h2 className="text-[28px] font-[manrope] lg:text-[36px] font-[400] mb-6">
                    Subscribe to get tips and tactics to grow the way you want.
                  </h2>
                  <ReadersSubscribe />
                </div>

                {/* right section */}
                <div className="lg:w-1/2 flex flex-row justify-end text-[16px]">
                  <div className="flex space-x-16 mr-6">
                    <ul className="space-y-2 mr-7">
                      <li>Blog</li>
                      <li>Careers</li>
                      <li>
                        <Link target="_blank" href="/policy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>Legal</li>
                    </ul>
                    <ul className="space-y-2 ">
                      <li>About Us</li>
                      <li>For Readers</li>
                      <li>Advertise</li>
                      <li>Analytics</li>
                      <li>Contact Sales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end pb-8">
              {socialMediaIcons.map((item, index) => (
                <div className="px-4" key={index}>
                  <a href={item.href}>
                    <img src={item.src} alt={item.name} className="w-8 h-8" />
                  </a>
                </div>
              ))}
            </div>
            <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15]"></div>
            <div className="flex justify-center py-10">
              <p className="text-[14px] text-[#ffffff]">
                © 2024 Sagravia | All Rights Reserved
              </p>
            </div>
          </div>
          {/* /footer */}
        </div>
      </div>
    </>
  );
}
