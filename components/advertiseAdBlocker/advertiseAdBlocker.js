"use client";

import { useState } from "react";

export default function AdvertiseAdBlocker() {
  const componentData = [
    {
      id: 1,
      content:
        "Ad blockers can’t stop your ads here. Web ads get blocked. Newsletter ads don’t. Reach our audience directly, no filters, no ad blockers.",
      image: "/advertise/without-ad-blocker.png",
    },
    {
      id: 2,
      content:
        "Advertisers lose almost 30% of their money to ad blockers. Not with our ads. Advertisers lose almost 30% of their money to ad blockers.",
      image: "/advertise/with-ad-blocker.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const item = componentData[currentIndex];

  return (
      <>
     
     {/* desktop view */}
    <div className="bg-[#01261E] p-12 hidden lg:block">
      <div>
        <h6 className="flex justify-center pt-4 text-[16px] text-[#C7A262] font-[500] leading-[150%] tracking-[0.32px]">
          What we offer, our benefits, simple to learn
        </h6>
        <h2 className="flex justify-center py-2 text-center w-[60%] mx-auto text-[56px] text-[#fff] font-[400] leading-[1.2] font-[GT-Super-Ds-Trial]">
          Maximize potential and Drive Business Success
        </h2>
      </div>

      <div>
        <p className="text-[#FFFFFFB2] py-4 text-center mx-auto text-[18px] w-[40%] font-[500] leading-[150%] tracking-[0.36px]">
          {item.content}
        </p>
      </div>

      <div className="py-4">
        <div className="flex justify-center space-x-2">
          <button
            className={`px-4 py-2 text-[14px] font-[600] leading-normal rounded-[57px] ${
              currentIndex === 0
                ? "bg-[#DAEBE8] text-[#121212]"
                : "border border-[#DAEBE8] text-[#DAEBE8]"
            }`}
            onClick={() => setCurrentIndex(0)}
          >
            Without Ad Blocker
          </button>

          <button
            className={`px-4 py-2 text-[14px] font-[600] leading-normal rounded-[57px] ${
              currentIndex === 1
                ? "bg-[#DAEBE8] text-[#121212]"
                : "border border-[#DAEBE8] text-[#DAEBE8]"
            }`}
            onClick={() => setCurrentIndex(1)}
          >
            With Ad Blocker
          </button>
        </div>
      </div>

      <div className="relative pt-8 pb-16">
        <div className="mx-auto max-w-[80%]">
          <img src={item.image} alt="Adblocker illustration" className="w-full h-[654px] object-cover rounded-[15px]" />
          
          {/* Bottom Shadow */}
          <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#01261E] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
 
    </div>

    {/* mobile view */}
    <div className="bg-[#01261E] pt-10 px-4 block lg:hidden ">
      <div>
        <h6 className="flex justify-center pt-4 text-[12px] text-[#C7A262] font-[500] leading-[150%] tracking-[0.32px]">
          What we offer, our benefits, simple to learn
        </h6>
        <h2 className="flex justify-center py-2 text-center text-[30px] text-[#fff] font-[400] leading-[1.2] font-[GT-Super-Ds-Trial]">
          Maximize potential and<br/> Drive Business Success
        </h2>
      </div>

      <div>
        <p className="text-[#FFFFFFB2] py-4 px-8 text-center mx-auto text-[14px]  font-[500] leading-[150%] tracking-[0.36px]">
          {item.content}
        </p>
      </div>

      <div className="py-4">
        <div className="flex justify-center space-x-2">
          <button
            className={`px-4 py-2 text-[12px] font-[600] leading-normal rounded-[57px] ${
              currentIndex === 0
                ? "bg-[#DAEBE8] text-[#121212]"
                : "border border-[#DAEBE8] text-[#DAEBE8]"
            }`}
            onClick={() => setCurrentIndex(0)}
          >
            Without Ad Blocker
          </button>

          <button
            className={`px-4 py-2 text-[12px] font-[600] leading-normal rounded-[57px] ${
              currentIndex === 1
                ? "bg-[#DAEBE8] text-[#121212]"
                : "border border-[#DAEBE8] text-[#DAEBE8]"
            }`}
            onClick={() => setCurrentIndex(1)}
          >
            With Ad Blocker
          </button>
        </div>
      </div>

      <div className="relative pt-8 pb-16">
        <div className="place-items-center">
          <img src={item.image} alt="Adblocker illustration" className="w-[341px] h-auto  object-cover rounded-[15px]" />
          
          {/* Bottom Shadow */}
          <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#01261E] to-transparent z-10 pointer-events-none" />
        </div>
      </div>
 
    </div>
      </>
  );
}
