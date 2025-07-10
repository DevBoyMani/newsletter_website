"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    id: "item-1",
    title: "Recruitment team chat",
    content: "Help us get to know you beyond your CV",
    step: 1,
  },
  {
    id: "item-2",
    title: "Team member interview",
    content: "Help your new team understand your field of knowledge ",
    step: 2,
  },
  {
    id: "item-3",
    title: "Technical exercise",
    content: "Put your skills to the test and show us how you shine.",
    step: 3,
  },
  {
    id: "item-4",
    title: "Leadership chat",
    content: "Help us get to know you beyond your CV",
    step: 4,
  },
  {
    id: "item-5",
    title: "Offer time",
    content: "You're now just a signature away from joining the greatest team",
    step: 5,
  },
];

export default function CustomAccordion({ onStepChange }) {
  const [openItemDesktop, setOpenItemDesktop] = useState(accordionData[0].id);
  const [openItemMobile, setOpenItemMobile] = useState(
    accordionData[0]?.id || null
  );

  const currentItem =
    accordionData.find((item) => item.id === openItemMobile) ||
    accordionData[0];

  const handleNext = () => {
    const idx = accordionData.findIndex((item) => item.id === openItemMobile);
    const next = Math.min(idx + 1, accordionData.length - 1);
    setOpenItemMobile(accordionData[next].id);
  };

  const handlePrev = () => {
    const idx = accordionData.findIndex((item) => item.id === openItemMobile);
    const prev = Math.max(idx - 1, 0);
    setOpenItemMobile(accordionData[prev].id);
  };

  // notify parent
  useEffect(() => {
    const itemD = accordionData.find((item) => item.id === openItemDesktop);
    onStepChange?.(itemD?.step);
  }, [openItemDesktop]);

  useEffect(() => {
    onStepChange?.(currentItem?.step);
  }, [openItemMobile]);

  // swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block w-full space-y-2">
        {accordionData.map((item) => (
          <div key={item.id} className="rounded-lg bg-white transition">
            <div
              className="px-4 py-3 cursor-pointer"
              onClick={() => {
                setOpenItemDesktop(
                  openItemDesktop === item.id ? null : item.id
                );
                onStepChange?.(item.step);
              }}
            >
              {openItemDesktop === item.id ? (
                <div className="flex justify-between items-start gap-4">
                  <div className="max-w-[80%]">
                    <span className="text-[11px] bg-[#D6FFEC] px-3 py-1 rounded-full text-[#048B65] font-semibold">
                      Step {item.step}
                    </span>
                    <h4 className="text-xl font-medium mt-2">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.content}</p>
                  </div>
                  <ChevronUp className="w-6 h-6" />
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">{item.title}</h2>
                  <ChevronDown className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* mobile */}
      {/* <div
        className="block lg:hidden relative mx-10 space-y-2"
        {...swipeHandlers}
      >
        <div className="w-[287px] h-[151px]">
          <div className="relative overflow-hidden">
            {currentItem && (
              <div className="absolute top-0 left-0 w-full space-y-3 z-10">
                <div className="">
                  <div className="shadow-lg rounded-lg bg-white mb-4">
                    <div className="text-lg font-medium transition">
                      <div className="px-4">
                        <span className="relative top-3 block text-[11px] font-[600] leading-[104%] text-[#048B65] bg-[#D6FFEC] px-2 py-1 rounded-[23px] w-fit">
                          Step {currentItem.step}
                        </span>
                        <h4 className="pt-6 text-[18px] text-[#01261E] font-[600] leading-[104%]">
                          {currentItem.title}
                        </h4>
                        <p className="text-[12px] text-[#12121299] font-[600] leading-[104%] py-4">
                          {currentItem.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

  
        {openItemMobile !== accordionData[0].id && (
          <button
            className="absolute -left-8 top-[36.5%] -translate-y-1/2 z-20"
            onClick={handlePrev}
          >
            <img src="/careers/left-new.png" alt="Prev" className="w-6 h-6" />
          </button>
        )}
        {openItemMobile !== accordionData[accordionData.length - 1].id && (
          <button
            className="absolute -right-8 top-[37%] -translate-y-1/2 z-20"
            onClick={handleNext}
          >
            <img src="/careers/right-new.png" alt="Next" className="w-6 h-6" />
          </button>
        )}

        <div className="flex justify-between py-2 px-2 w-full">
          {accordionData.map((item) => (
            <div
              key={item.id}
              className={`w-full border-b-2 transition ${
                openItemMobile === item.id ? "border-black" : "border-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div> */}

      <div className="block lg:hidden px-4 bg-[#FAFAFA]">
        <div className="relative flex flex-col items-center" {...swipeHandlers}>
          {/* Card Section */}
          <div className="w-full max-w-[287px] h-[150px]">
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg bg-[#FAFAFA] z-10">
              <AnimatePresence mode="wait">
                {currentItem && (
                  <motion.div
                    key={currentItem.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full px-[20px] py-[25px] flex flex-col justify-start bg-[#FAFAFA]"
                  >
                    <span className="block text-[11px] font-[600] leading-[104%] text-[#048B65] bg-[#D6FFEC] px-2 py-1 rounded-[23px] w-fit">
                      Step {currentItem.step}
                    </span>
                    <h4 className="text-[18px] text-[#01261E] font-[600] leading-[104%] pt-4 pb-3">
                      {currentItem.title}
                    </h4>
                    <p className="text-[12px] text-[#12121299] font-[600] leading-[104%] overflow-hidden text-ellipsis line-clamp-3 pb-2">
                      {currentItem.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          {openItemMobile !== accordionData[0].id && (
            <button
              className="absolute -left-2 top-[40%] -translate-y-1/2 z-20"
              onClick={handlePrev}
            >
              <img src="/careers/left-new.png" alt="Prev" className="w-6 h-6" />
            </button>
          )}
          {openItemMobile !== accordionData[accordionData.length - 1].id && (
            <button
              className="absolute -right-2 top-[40%] -translate-y-1/2 z-20"
              onClick={handleNext}
            >
              <img
                src="/careers/right-new.png"
                alt="Next"
                className="w-6 h-6"
              />
            </button>
          )}

          {/* Indicator (fixed position) */}
          <div className="flex justify-between pt-8 px-8 w-full max-w-[287px]">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className={`w-full border-b-2 transition ${
                  openItemMobile === item.id
                    ? "border-black"
                    : "border-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
