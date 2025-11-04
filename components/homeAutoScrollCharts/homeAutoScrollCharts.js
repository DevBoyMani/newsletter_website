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
    <div className="relative w-full h-full overflow-hidden rounded-[20px]">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Render the chart directly */}
          <div className="w-full h-full">{charts[currentIndex]}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
