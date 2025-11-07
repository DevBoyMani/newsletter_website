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
      <div className="relative w-full h-fit">
        <div className="relative w-full h-[42vh] lg:h-[60vh] rounded-[5px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center w-full h-full"
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* ✅ make sure the chart fills the space */}
              <div className="w-full h-full">{charts[currentIndex]}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:hidden relative pt-[30px] pb-[9px] flex justify-center">
          {/* Gray background line (split into equal parts) */}
          <div className="w-full max-w-[111px] h-[1.5px] bg-[#E6E6E6] rounded-full relative overflow-hidden">
            {/* Animated active indicator */}
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
