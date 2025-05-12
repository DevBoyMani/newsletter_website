"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const newsData = [
  {
    id: "item-1",
    logo: "/advertise/blommberg.png",
    logoAlt: "Bloomberg",
    logoWidth: 138,
    title: "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
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
    title: "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
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
    title: "LARK advises FSN Capital and its portfolio company TASKING on the acquisition of LDRA",
    description:
      "Tasking GmbH, a leading provider of embedded software development tools, has acquired LDRA, a UK-based software company.",
    date: "JANUARY 25, 2025",
    link: "#",
  },
];

export default function InThePress() {
  const [openItemMobile, setOpenItemMobile] = useState(newsData[0].id);
  const [direction, setDirection] = useState("next");

  const handleNext = () => {
    const currentIndex = newsData.findIndex((item) => item.id === openItemMobile);
    if (currentIndex < newsData.length - 1) {
      setDirection("next");
      setOpenItemMobile(newsData[currentIndex + 1].id);
    }
  };

  const handlePrev = () => {
    const currentIndex = newsData.findIndex((item) => item.id === openItemMobile);
    if (currentIndex > 0) {
      setDirection("prev");
      setOpenItemMobile(newsData[currentIndex - 1].id);
    }
  };

  const currentItem = newsData.find((item) => item.id === openItemMobile);

  return (
    <div className="relative w-[90%] mx-auto space-y-4 py-10">
      {/* News Slide */}
      <div className="relative w-full overflow-hidden min-h-[200px]"> {/* Container with stable height */}
   <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={currentItem?.id}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, info) => {
        if (info.offset.x < -swipeConfidenceThreshold) {
          // Swiped left → next
          handleNext();
        } else if (info.offset.x > swipeConfidenceThreshold) {
          // Swiped right → prev
          handlePrev();
        }
      }}
      initial={{ x: direction === "next" ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction === "next" ? -100 : 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full space-y-3 cursor-grab active:cursor-grabbing"
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
      <div className="flex justify-between items-center text-[15px] font-semibold">
        <p>{currentItem.date}</p>
        <a href={currentItem.link} className="text-black hover:underline">
          READ MORE
        </a>
      </div>
    </motion.div>
  </AnimatePresence>
</div>


      {/* Navigation Arrows */}
      {openItemMobile !== newsData[0].id && (
        <button
          onClick={handlePrev}
          className="absolute left-0 bottom-8 -translate-y-1/2"
        >
          <Image src="/advertise/button-left.png" alt="Left" width={25} height={25} />
        </button>
      )}

      {openItemMobile !== newsData[newsData.length - 1].id && (
        <button
          onClick={handleNext}
          className="absolute right-0 bottom-8 -translate-y-1/2"
        >
          <Image src="/advertise/button-right.png" alt="Right" width={25} height={25} />
        </button>
      )}

      {/* Slide Indicators */}
      <div className="flex justify-between py-4 px-8">
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
  );
}
