"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AdvertiseAdBlocker() {
  const componentData = [
    {
      id: 1,
      content:
        "Ad blockers can’t stop your ads here. Web ads get blocked. Newsletter ads don’t. Reach our audience directly, <br/>no filters, no ad blockers.",
      image: "/advertise/without-ad-blocker.png",
    },
    {
      id: 2,
      content:
        "Advertisers lose almost 30% of their money to ad blockers. Not with our ads. Advertisers lose almost 30% of their <br/>money to ad blockers.",
      image: "/advertise/with-ad-blocker.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const handleChange = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const item = componentData[currentIndex];

  // --

  const componentDataMob = [
    {
      id: 1,
      content:
        "Ad blockers can’t stop your ads here. Web ads get blocked. Newsletter ads don’t. Reach our audience directly, no filters, no ad blockers.",
      image: "/advertise/without-ad-blocker-new-mobile.png",
    },
    {
      id: 2,
      content:
        "Advertisers lose almost 30% of their money to ad blockers. Not with our ads. Advertisers lose almost 30% of their money to ad blockers.",
      image: "/advertise/with-ad-blocker-new-mobile.png",
    },
  ];

  const [currentIndexMob, setCurrentIndexMob] = useState(0);
  const [directionMob, setDirectionMob] = useState(1);

  const itemMob = componentDataMob[currentIndexMob];

  const handleChangeMob = (index) => {
    if (index === currentIndexMob) return;
    setDirectionMob(index > currentIndexMob ? 1 : -1);
    setCurrentIndexMob(index);
  };

  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block bg-[#01261E] px-12 pb-24 pt-20">
        <div>
          <p className="flex justify-center pt-4 text-[16px] text-[#C7A262] font-[500] leading-[150%] tracking-[0.32px]">
            What we offer, our benefits, simple to learn
          </p>
          <h2 className="flex justify-center py-2 text-center w-[60%] mx-auto text-[56px] text-white font-[400] leading-[1.2]">
            Maximize potential and Drive Business Success
          </h2>
        </div>

        <div>
          <p
            className="text-[#FFFFFFB2] py-4 text-center mx-auto text-[18px] w-[40%] font-[500] leading-[150%] tracking-[0.36px]"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>

        <div className="py-4">
          <div className="flex justify-center space-x-2">
            <button
              className={`px-4 py-2 text-[14px] font-[600] leading-normal rounded-[57px] ${
                currentIndex === 0
                  ? "bg-[#DAEBE8] text-[#121212]"
                  : "border border-[#DAEBE8] text-[#DAEBE8]"
              }`}
              onClick={() => handleChange(0)}
            >
              Without Ad Blocker
            </button>

            <button
              className={`px-4 py-2 text-[14px] font-[600] leading-normal rounded-[57px] ${
                currentIndex === 1
                  ? "bg-[#DAEBE8] text-[#121212]"
                  : "border border-[#DAEBE8] text-[#DAEBE8]"
              }`}
              onClick={() => handleChange(1)}
            >
              With Ad Blocker
            </button>
          </div>
        </div>

        <div className="relative pt-8 pb-[92px] overflow-hidden">
          <div className="mx-auto max-w-[80%] relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={item.image}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <img
                  src={item.image}
                  alt="Adblocker illustration"
                  className="w-full h-full object-cover rounded-[15px]"
                />
              </motion.div>
            </AnimatePresence>

            {/* <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#01261E] to-transparent z-10 pointer-events-none" /> */}
          </div>
        </div>
      </div>

      {/* mobile view */}
      {/* <div className="block lg:hidden relative bg-[#01261E] py-10 px-4">
        <div>
          <h6 className="flex justify-center pt-4 text-[12px] text-[#C7A262] font-[500] leading-[150%] tracking-[0.32px]">
            What we offer, our benefits, simple to learn
          </h6>
          <h2 className="flex justify-center py-2 text-center text-[30px] text-[#fff] font-[400] leading-[1.2] ">
            Maximize potential and
            <br /> Drive Business Success
          </h2>
        </div>

        <div>
          <p className="text-[#FFFFFFB2] py-4 px-8 text-center mx-auto text-[14px]  font-[500] leading-[150%] tracking-[0.36px]">
            {itemMob.content}
          </p>
        </div>

        <div className="py-4">
          <div className="flex justify-center space-x-2">
            <button
              className={`px-4 py-2 text-[12px] font-[600] leading-normal rounded-[57px] ${
                currentIndexMob === 0
                  ? "bg-[#DAEBE8] text-[#121212]"
                  : "border border-[#DAEBE8] text-[#DAEBE8]"
              }`}
              onClick={() => handleChangeMob}
            >
              Without Ad Blocker
            </button>

            <button
              className={`px-4 py-2 text-[12px] font-[600] leading-normal rounded-[57px] ${
                currentIndexMob === 1
                  ? "bg-[#DAEBE8] text-[#121212]"
                  : "border border-[#DAEBE8] text-[#DAEBE8]"
              }`}
              onClick={() => setCurrentIndexMob(1)}
            >
              With Ad Blocker
            </button>
          </div>
        </div>

        <div className="relative pt-8 pb-16">
          <div className="place-items-center">
            <img
              src={itemMob.image}
              alt="Adblocker illustration"
              className="w-full h-auto object-cover border-[0.5px] border-[#D3D3D3] rounded-[5px]"
            />

            <div className="absolute bottom-0 left-0 w-full h-[28vh] bg-gradient-to-t from-[#01261E] via-[#01261E]/90 to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div> */}
      <div className="block lg:hidden relative bg-[#01261E] pt-10 px-0 overflow-hidden">
        <div>
          <h6 className="flex justify-center font-[manrope] pt-4 text-[12px] text-[#C7A262] font-[500] leading-[150%] tracking-[0.32px]">
            What we offer, our benefits, simple to learn
          </h6>
          <h2 className="flex justify-center py-2 text-center text-[30px] text-white font-[400] leading-[1.2]">
            Maximize potential and
            <br /> Drive Business Success
          </h2>
        </div>

        <div>
          <p className="text-[#FFFFFFB2] py-4 px-8 text-center mx-auto text-[14px] font-[500] leading-[150%] tracking-[0.36px]">
            {itemMob.content}
          </p>
        </div>

        <div className="pt-4 pb-[30px]">
          <div className="flex justify-center space-x-2">
            <button
              className={`px-4 py-2 text-[12px] font-[600] leading-normal rounded-[57px] ${
                currentIndexMob === 0
                  ? "bg-[#DAEBE8] text-[#121212]"
                  : "border border-[#DAEBE8] text-[#DAEBE8]"
              }`}
              onClick={() => handleChangeMob(0)}
            >
              Without Ad Blocker
            </button>

            <button
              className={`px-4 py-2 text-[12px] font-[600] leading-normal rounded-[57px] ${
                currentIndexMob === 1
                  ? "bg-[#DAEBE8] text-[#121212]"
                  : "border border-[#DAEBE8] text-[#DAEBE8]"
              }`}
              onClick={() => handleChangeMob(1)}
            >
              With Ad Blocker
            </button>
          </div>
        </div>

        <div className="relative pt-0 pb-0">
          <div className="relative w-full">
            {/* <AnimatePresence custom={directionMob} mode="wait">
              <motion.img
                key={itemMob.image}
                src={itemMob.image}
                alt="Adblocker illustration"
                initial={{ x: directionMob > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: directionMob > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[5px] z-10"
              />
            </AnimatePresence> */}
            <AnimatePresence custom={directionMob} mode="wait">
              <motion.div
                key={itemMob.image}
                initial={{ x: directionMob > 0 ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: directionMob > 0 ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <img
                  src={itemMob.image}
                  alt="Adblocker illustration"
                  className="w-full h-auto z-10"
                />
              </motion.div>
            </AnimatePresence>

            {/* <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#01261E] via-[#01261E]/90 to-transparent z-10 pointer-events-none" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
