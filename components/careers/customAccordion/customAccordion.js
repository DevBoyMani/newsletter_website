"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  { id: "item-1", title: "Recruitment team chat", content: "Help us get to know you beyond your CV", step: 1 },
  { id: "item-2", title: "Team member interview", content: "Help your new team understand your field of knowledge", step: 2 },
  { id: "item-3", title: "Technical exercise", content: "Put your skills to the test and show us how you shine.", step: 3 },
  { id: "item-4", title: "Leadership chat", content: "Help us get to know you beyond your CV", step: 4 },
  { id: "item-5", title: "Offer time", content: "You're now just a signature away from joining the greatest team", step: 5 },
];

export default function CustomAccordion() {
  const [openItemDesktop, setOpenItemDesktop] = useState(accordionData[1].id);
  const [openItemMobile, setOpenItemMobile] = useState(accordionData[0].id);
  const [direction, setDirection] = useState("next");

  const swipeConfidenceThreshold = 50;

  const handleNext = () => {
    const currentIndex = accordionData.findIndex((item) => item.id === openItemMobile);
    if (currentIndex < accordionData.length - 1) {
      setDirection("next");
      setOpenItemMobile(accordionData[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = accordionData.findIndex((item) => item.id === openItemMobile);
    if (currentIndex > 0) {
      setDirection("prev");
      setOpenItemMobile(accordionData[currentIndex - 1].id);
    }
  };

  const currentItem = accordionData.find((item) => item.id === openItemMobile);

      const swipeVariants = {
      enter: (direction) => ({
        x: direction === "next" ? 200 : -200,
        opacity: 0,
      }),
      center: {
        x: 0,
        opacity: 1,
      },
      exit: (direction) => ({
        x: direction === "next" ? -200 : 200,
        opacity: 0,
      }),
    };


  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block w-full space-y-2">
        {accordionData.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg transition ${openItemDesktop === item.id ? "bg-white shadow-lg" : "bg-[#DAEBE8] shadow-lg"}`}
          >
            <div
              className="px-4 py-3 rounded-lg text-lg font-medium cursor-pointer transition"
              onClick={() => setOpenItemDesktop(openItemDesktop === item.id ? null : item.id)}
            >
              {openItemDesktop === item.id ? (
                <div className="flex justify-between">
                  <div>
                    <div className="pb-4">
                      <span className="px-3 py-1 text-[11px] text-[#048B65] bg-[#D6FFEC] rounded-[23px] font-[600] leading-[104%]">Step {item.step}</span>
                    </div>
                    <h4 className="text-[22px] text-[#01261E] font-[600] leading-[104%]">{item.title}</h4>
                    <p className="text-[15px] text-[#12121299] py-2 font-[600] leading-[104%]">{item.content}</p>
                  </div>
                  <ChevronUp className="w-6 h-6 transition-transform duration-300" />
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <h2 className="text-[22px] text-[#01261E] font-[600] leading-[104%] py-4">{item.title}</h2>
                  <ChevronDown className="w-6 h-6 transition-transform duration-300" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

     
      {/* Mobile View */}
      <div className="block lg:hidden relative w-[80%] ml-8 space-y-2 ">
        <div className="relative h-[24vh] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
          {currentItem && (
                    <motion.div
                      key={currentItem.id}
                      custom={direction}
                      variants={swipeVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      drag="x"
                      dragConstraints={{ left: 2, right: 2 }}
                      onDragEnd={(e, info) => {
                        if (info.offset.x < -swipeConfidenceThreshold) {
                          handleNext();
                        } else if (info.offset.x > swipeConfidenceThreshold) {
                          handlePrev();
                        }
                      }}
                      className="absolute top-0 left-0 w-full space-y-3 cursor-grab active:cursor-grabbing touch-pan-x z-10"
                    >
            
                  <div className="p-1">
                    <div className="shadow-lg rounded-lg bg-white mb-4">
                    <div className=" text-lg font-medium transition">
                      <div className="px-4">
                     
                          <span className="relative top-3 block text-[11px] font-[600] leading-[104%] text-[#048B65] bg-[#D6FFEC] px-2 py-1 rounded-[23px] w-fit ">
                        Step {currentItem.step}
                      </span>
                  
                      
                      <h4 className=" pt-6 text-[18px] text-[#01261E] font-[600] leading-[104%]">{currentItem.title}</h4>
                      <p className=" text-[12px] text-[#12121299] font-[600] leading-[104%] py-4">{currentItem.content}</p>
                      </div>
                    </div>
                  </div>
                  </div>
             
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Navigation Buttons */}
          {openItemMobile !== accordionData[0].id && (
            <button
              className="absolute -left-8 top-[33.5%] -translate-y-1/2 z-20"
              onClick={handlePrev}
            >
              <img src="/careers/ButtonLeft.png" alt="Prev" className="w-7 h-7" />
            </button>
          )}
          {openItemMobile !== accordionData[accordionData.length - 1].id && (
            <button
              className="absolute -right-8 top-[37.5%] -translate-y-1/2 z-20"
              onClick={handleNext}
            >
              <img src="/careers/ButtonRight.png" alt="Next" className="w-7 h-7" />
            </button>
          )}

        {/* Indicator */}
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
      </div>

    </>
  );
}
