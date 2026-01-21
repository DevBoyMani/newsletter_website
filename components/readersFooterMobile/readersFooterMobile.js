"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const feedbackData = [
  {
    id: 1,
    userName: "Natalie, Hungary",
    feedback:
      "I just wanted to take a moment to sincerely thank you for this newsletter. It's made a real difference in my life, saving me time, money, and the mental clutter.",
  },
  {
    id: 2,
    userName: "Michael, Georgia",
    feedback:
      "It always keeps me updated even on the go and every day I find news I hadn't heard anywhere else. Keep up the good work and let the haters hate.",
  },
  {
    id: 3,
    userName: "Miro, Texas",
    feedback:
      "I am a newsletter writer too and I was too lazy to subscribe to your newsletter but I am now proud to say I am a convert!",
  },
  {
    id: 4,
    userName: "Nikolai, New Jersey",
    feedback:
      "I'm getting more of my kids to read this. Sometimes don't agree with your analysis. But real professionals understand that we have nothing without a dialectic and robust debate.",
  },
  {
    id: 5,
    userName: "Jonathan,  UK",
    feedback:
      "It's good. I can get the key topline facts and then if I want to follow up in more detail do a broader search online.",
  },
];

export default function ReadersFooterMobile() {
  const mobileScrollRef = useRef(null); // Ref for the mobile scroll container
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // mobile Touch Events (Mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX - mobileScrollRef.current.offsetLeft; // Use mobileScrollRef
    scrollLeft.current = mobileScrollRef.current.scrollLeft; // Use mobileScrollRef

    // Pause the CSS animation on the animated container
    const animatedContainer = document.querySelector(
      ".readers-footer-mobile-animate-scroll-cards",
    );
    if (animatedContainer) {
      animatedContainer.style.animationPlayState = "paused";
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - mobileScrollRef.current.offsetLeft; // Use mobileScrollRef
    const walk = (x - startX.current) * 1.5;
    mobileScrollRef.current.scrollLeft = scrollLeft.current - walk; // Use mobileScrollRef
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Resume the CSS animation
    const animatedContainer = document.querySelector(
      ".readers-footer-mobile-animate-scroll-cards",
    );
    if (animatedContainer) {
      // Add a small delay before restarting to avoid jumpiness
      setTimeout(() => {
        animatedContainer.style.animationPlayState = "running";
      }, 50);
    }
  };
  return (
    <>
      {/* mobile view */}
      {/* id="mob-site-footer" */}
      <div className="block lg:hidden bg-[#01261E]">
        <div className=" md:px-16 pt-[66px] pb-[26px] mx-auto ">
          <div className="px-4 flex flex-col justify-center mx-auto text-center">
            <h2 className="text-[#FAFAFA] text-[30px] leading-[normal] font-[400]">
              House of Summary is
              <br /> trusted by 400,000+
              <br /> people worldwide
            </h2>
          </div>

          <div
            ref={mobileScrollRef}
            className="overflow-x-scroll cursor-grab"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none", // hide scrollbar
              msOverflowStyle: "none",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-6 pt-[60px] readers-footer-mobile-animate-scroll-cards">
              {[...feedbackData, ...feedbackData].map((item, index) => (
                <div
                  key={index}
                  className="w-[317px] h-full bg-[#FFFFFF0D] 
               pl-[17px] pr-[21px] py-[25px] rounded-lg 
              border border-[#FFFFFF33] shrink-0"
                >
                  <div className="flex justify-start mb-2">
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

                  <div className="text-[#ffffff] flex flex-col h-full min-h-[180px]">
                    <p className="text-[16px] max-w-[279px]">{item.feedback}</p>
                    <p className="text-[16px] mt-auto">{item.userName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="block lg:hidden bg-[#01261E] text-white">
            <div className="md:px-14 pt-12 ">
              <div className="px-4 pb-10">
                <div className="">
                  <Link href="/">
                    <div className="w-32 md:w-48">
                      <img src="/light-logo.png" alt="Logo" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" px-6">
                <div className="flex justify-between">
                  <div className="">
                    <ul className="flex flex-col mr-6">
                      <li className="text-[16px] font-[600] pb-4">More</li>

                      <li className="py-1 ">
                        <Link href="#" className="text-[14px] font-[400] ">
                          Blog
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Careers
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link target="_blank" href="/policy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Legal
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="flex flex-col">
                      <li className="text-[16px] font-[600] pb-4">
                        Learn more
                      </li>

                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          About Us
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Readers
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Advertise
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Analytics
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="pt-14 px-4 flex justify-center pb-1">
                  <div className="flex space-x-6 ">
                    {socialMediaIcons.map((icons, index) => (
                      <a key={index} href={icons.href} target="_blank">
                        <img
                          src={icons.src}
                          alt={icons.name}
                          className="w-6 h-6 cursor-pointer"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] py-2 mx-6"></div>

              <div className="text-[12px] text-center text-[#95A1BB] py-4">
                <p>© 2024 Sagravia | All Rights Reserved</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
