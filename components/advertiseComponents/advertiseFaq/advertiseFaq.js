"use client"

import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const accordionData = [
  { id: "item-1", title: "Recruitment team chat", content: "Absolutely, we cater to clients from different time zones and have worked with clients from almost every continent (just not Antarctica - still working on that!).", step: 1 },
  { id: "item-2", title: "Team member interview", content: "Help your new team understand your field of knowledge. At White Widget, we understand the importance of synchronization in our project workflow, regardless of geographical boundaries. Once a project kicks off, our team diligently works to identify and establish overlapping working hours that suit both our client and our team.", step: 2 },
  { id: "item-3", title: "Technical exercise", content: "Put your skills to the test and show us how you shine. At White Widget, we understand the importance of synchronization in our project workflow, regardless of geographical boundaries. Once a project kicks off, our team diligently works to identify and establish overlapping working hours that suit both our client and our team. This approach ensures that communication remains seamless and efficient collaboration is maintained throughout the duration of the project. ", step: 3 },
  { id: "item-4", title: "Leadership chat", content: "Help us get to know you beyond your CV. Absolutely, we cater to clients from different time zones and have worked with clients from almost every continent", step: 4 },
  { id: "item-5", title: "Offer time", content: "Your now just a signature away from joining the greatest team. This approach ensures that communication remains seamless and efficient collaboration is maintained throughout the duration of the project.", step: 5 },
];

export default function AdvertiseFaq() {
  const [openItemDesktop, setOpenItemDesktop] = useState(null);
  const [openItemMobile, setOpenItemMobile] = useState(accordionData[0].id);
  const [direction, setDirection] = useState("next");

  const handleNext = () => {
    const currentIndex = accordionData.findIndex((item) => item.id === openItemMobile);
    setDirection("next"); // Set direction
    if (currentIndex < accordionData.length - 1) {
      setOpenItemMobile(accordionData[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = accordionData.findIndex((item) => item.id === openItemMobile);
    setDirection("prev"); // Set direction
    if (currentIndex > 0) {
      setOpenItemMobile(accordionData[currentIndex - 1].id);
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block w-full space-y-2">
      {accordionData.map((item) => (
          <div
            key={item.id}
            className={`rounded-lg transition ${
              openItemDesktop === item.id ? "bg-white shadow-lg" : "bg-[#DAEBE8] shadow-lg"
            }`}
          >
            <div
              className="px-4 py-3 rounded-lg cursor-pointer transition"
              onClick={() => setOpenItemDesktop(openItemDesktop === item.id ? null : item.id)}
            >
              <div className="flex justify-between gap-4 items-start">
                <div className="flex-1">
                  <h4 className="text-[22px] text-[#01261E] leading-[104%] font-[400]">{item.title}</h4>
                  {openItemDesktop === item.id && (
                    <p className="text-[#12121299] text-[15px] leading-[130%] font-400 py-2">{item.content}</p>
                  )}
                </div>

                <div className="w-5 h-5 flex-shrink-0">
                  {openItemDesktop === item.id ? (
                    <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Mobile View */}
      <div className="block lg:hidden space-y-2 relative w-[80%] ml-8">
      <motion.div
          key={openItemMobile}
          initial={{ x: direction === "next" ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: direction === "next" ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className=""
        >
        {accordionData.map((item) =>
          openItemMobile === item.id ? (
            <div
              key={item.id}
              className={`rounded-lg transition  ${openItemMobile === item.id ? "bg-white shadow-lg" : "bg-[#DAEBE8] shadow-xl"} mb-6`}
            >
              <div className=" px-4 py-3 rounded-lg text-lg font-medium transition">
                <div>
                  <div className="text-sm font-medium text-black bg-[#D6FFEC] px-2 py-1 my-2 rounded-full w-fit mb-1">
                    Step {item.step}
                  </div>
                  <h4 className="text-xl">{item.title}</h4>
                  <p className="text-sm py-4">{item.content}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </motion.div>

        {/* Navigation Buttons */}
        <div>
        {openItemMobile !== accordionData[0].id && (
          <button
            className="absolute  -left-10 top-24 transform -translate-y-1/2  py-1 pr-4  "
            onClick={handlePrev}
          >
            <img
            src="/careers/ButtonLeft.png"
            alt=""
            className="w-8 h-8 mb-4" />
          </button>
        )}
        </div>

        <div>
        {openItemMobile !== accordionData[accordionData.length - 1].id && (
          <button
            className="absolute -right-10 top-24 transform -translate-y-1/2  py-1 pl-4 "
            onClick={handleNext}
          >
            <img
            src="/careers/ButtonRight.png"
            alt=""
            className="w-8 h-8 " />
          </button>
        )}
        </div>

          {/* indicator */}
        <div className="flex justify-between py-2 px-2 w-full">
          {accordionData.map((item, index) => (
            <div
              key={index}
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

