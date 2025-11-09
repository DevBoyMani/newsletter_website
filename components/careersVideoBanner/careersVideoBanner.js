"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const CareersVideoBanner = () => {
  const btnRef = useRef(null);
  const [originStyle, setOriginStyle] = useState({});

  const handleMouseEnter = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setOriginStyle({ transformOrigin: `${x}px ${y}px` });
  };

  return (
    <>
      {/* Desktop view with fallback image */}
      <div className="hidden lg:block relative py-10 bg-[#FAFAFA]">
        <div className="relative lg:h-[530px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/careers/careers-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-[10%] left-12 md:px-4">
            <div className="text-white">
              <h2 className="w-[572px] text-[56px] leading-[107%] font-[400]">
                We are a remote team, connected by purpose, not office walls
              </h2>
            </div>

            <Link
              href="/about"
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              className="relative inline-block border border-[#DAEBE8] text-[#DAEBE8] hover:text-[#000] lg:text-[14px] font-[600] leading-normal mt-[24px] w-[123px]  py-2 rounded-full overflow-hidden group"
            >
              <span
                style={originStyle}
                className={`absolute inset-0 bg-[#DAEBE8] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0`}
              />

              {/* Button text stays white */}
              <span className="relative z-10 transition-colors duration-300 flex justify-center text-center">
                About us
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view with fallback image */}
      <div className="block lg:hidden relative py-10 bg-[#FAFAFA]">
        <div className="relative h-[470px] w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/careers/career-mobile-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-[4%] left-4">
            <div className="text-white ">
              <h2 className="w-[316px] text-[39px] leading-[103%] font-[400] ">
                We are a remote team, connected by purpose, not office walls
              </h2>
            </div>
            <a
              href="/about"
              className="inline-block border border-[#FAFAFA] text-[#FAFAFA] text-[14px] mt-[17px] w-[96px] text-center py-1.5 rounded-[57px] leading-normal"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersVideoBanner;
