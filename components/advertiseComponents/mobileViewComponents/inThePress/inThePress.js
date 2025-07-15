"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const newsData = [
  {
    id: "item-1",
    logo: "/advertise/blommberg.png",
    logoAlt: "Bloomberg",
    logoWidth: 138,
    title:
      "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
    description:
      "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
    date: "JANUARY 25, 2025",
    link: "#",
  },
  {
    id: "item-2",
    logo: "/advertise/bbc.png",
    logoAlt: "BBC",
    logoWidth: 108,
    title:
      "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
    description:
      "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
    date: "JANUARY 25, 2025",
    link: "#",
  },
  {
    id: "item-3",
    logo: "/advertise/cnn.png",
    logoAlt: "CNN",
    logoWidth: 60,
    title:
      "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
    description:
      "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
    date: "JANUARY 25, 2025",
    link: "#",
  },
];

export default function InThePress() {
  const [openItemMobile, setOpenItemMobile] = useState(newsData[0].id);
  const [direction, setDirection] = useState("next");

  const swipeConfidenceThreshold = 50;

  const handleNext = () => {
    const currentIndex = newsData.findIndex(
      (item) => item.id === openItemMobile
    );
    if (currentIndex < newsData.length - 1) {
      setDirection("next");
      setOpenItemMobile(newsData[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = newsData.findIndex(
      (item) => item.id === openItemMobile
    );
    if (currentIndex > 0) {
      setDirection("prev");
      setOpenItemMobile(newsData[currentIndex - 1].id);
    }
  };

  // swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const currentItem = newsData.find((item) => item.id === openItemMobile);

  return (
    <div className="relative space-y-4 py-10" {...swipeHandlers}>
      {/* News Slide */}
      <div className="relative w-full overflow-hidden min-h-[200px]">
        {" "}
        {/* Container with stable height */}
        <motion.div
          key={currentItem?.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -swipeConfidenceThreshold) {
              handleNext();
            } else if (info.offset.x > swipeConfidenceThreshold) {
              handlePrev();
            }
          }}
          initial={{ x: direction === "next" ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "next" ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full space-y-3 cursor-grab active:cursor-grabbing touch-pan-x"
        >
          <Image
            src={currentItem.logo}
            alt={currentItem.logoAlt}
            width={currentItem.logoWidth}
            height={31}
            priority
            className="w-auto h-[31px]"
          />

          <h4 className="text-[22px] md:text-[26px] font-semibold text-start">
            {currentItem.title}
          </h4>
          <p className="text-[15px] text-start">{currentItem.description}</p>
          <div className="flex justify-between items-center text-[15px] font-semibold pt-2 pb-8">
            <p>{currentItem.date}</p>
            <a href={currentItem.link} className="text-black hover:underline">
              READ MORE
            </a>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <div className="">
        {openItemMobile !== newsData[0].id && (
          <button
            onClick={handlePrev}
            className="absolute left-0 bottom-8 -translate-y-1/2"
          >
            <img
              src="/advertise/left-new.png"
              alt="Left"
              className="w-[25px] h-[25px]"
            />
          </button>
        )}

        {openItemMobile !== newsData[newsData.length - 1].id && (
          <button
            onClick={handleNext}
            className="absolute right-0 bottom-8 -translate-y-1/2"
          >
            <img
              src="/advertise/right-new.png"
              alt="Right"
              className="w-[25px] h-[25px]"
            />
          </button>
        )}

        {/* Slide Indicators */}
        <div className="flex justify-between py-4 px-16">
          {newsData.map((item) => (
            <div
              key={item.id}
              className={`w-full border-b-2 transition ${
                openItemMobile === item.id ? "border-black" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
