"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HomeScrollNumberOfOpensChart from "@/components/homeScrollNumberOfOpenChart/homeScrollNumberOfOpenChart";
import HomeScrollNumberOfClicksChart from "@/components/homeScrollNumberOfClicksChart/homeScrollNumberOfClicksChart";
import HomeScrollNumberOfSubscribersChart from "@/components/homeScrollNumberOfSubscribersChart/homeScrollNumberOfSubscribersChart";

export default function HomeAutoScrollCharts() {
  const charts = [
    <HomeScrollNumberOfOpensChart key="opens" />,
    <HomeScrollNumberOfClicksChart key="clicks" />,
    <HomeScrollNumberOfSubscribersChart key="subs" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % charts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [charts.length]);

  return (
    <>
      {/* --- WEB VERSION --- */}
      <div
        className="
    hidden lg:block relative w-full 
    rounded-[5px] overflow-hidden
    h-[400px]    
    min-h-[400px]
    max-h-[450px]
  "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex items-center justify-center w-full h-full"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="w-full h-full">{charts[currentIndex]}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- MOBILE VERSION --- */}
      <div className="block lg:hidden relative w-full">
        {/* Carousel Section */}
        <div
          className="
      relative w-full rounded-[5px] overflow-hidden
      min-h-[265px] max-h-[360px]
    "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="w-full h-full ">{charts[currentIndex]}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator (Independent from Carousel) */}
        <div className="relative mt-[22px] mb-[5px] flex justify-center">
          <div className="w-full max-w-[111px] h-[1.5px] bg-[#E6E6E6] rounded-full relative overflow-hidden">
            <motion.div
              key={currentIndex}
              className="absolute top-0 h-full bg-[#01261E] rounded-full"
              initial={false}
              animate={{
                x: `${(currentIndex / (charts.length - 1)) * 200}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: `${100 / charts.length}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
