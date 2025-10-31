"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function HomeAutoScrollImages() {
  const images = [
    "/home/scroll-x-1.png",
    "/home/scroll-x-2.png",
    "/home/scroll-x-3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            fill
            className="object-contain rounded-[20px]"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
