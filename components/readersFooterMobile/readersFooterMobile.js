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
      ".readers-footer-mobile-animate-scroll-cards"
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
      ".readers-footer-mobile-animate-scroll-cards"
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
      <div id="mob-site-footer" className="block lg:hidden bg-[#01261E]">
        <div className=" md:px-16 pt-[66px] mx-auto ">
          <div className="px-4 flex flex-col justify-center mx-auto text-center">
            <h2 className="text-[#FAFAFA] text-[30px] leading-[normal] font-[400]">
              Sagravia is trusted by
              <br /> 200,000+ people
              <br /> worldwide
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
                  className="w-[317px] h-auto bg-[#FFFFFF0D] pl-[17px] pr-[21px] py-[25px] rounded-lg border border-[#FFFFFF33] shrink-0"
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
                  <div className="text-[#ffffff]">
                    <p className="text-[16px] max-w-[279px]">{item.feedback}</p>
                    <p className="text-[16px] mt-4">{item.userName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="block lg:hidden bg-[#01261E] text-white">
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

                {/* <div className="pt-12 ">
                  <ul className="flex flex-col ">
                    <li className="text-[16px] font-semibold pb-4">
                      Contact Us
                    </li>

                    <li href="#" className="py-1 text-[14px]">
                      <Link href="#" className="">
                        info@sagravia.com
                      </Link>
                    </li>
                    <li href="#" className="py-1 text-[14px]">
                      <Link href="#" className="">
                        +1-2345-6789
                      </Link>
                    </li>
                    <li href="#" className="py-1 text-[14px]">
                      <Link href="#" className="">
                        123 Ave, New York, USA
                      </Link>
                    </li>
                  </ul>
                </div> */}
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
          </div>
        </div>
      </div>
    </>
  );
}
