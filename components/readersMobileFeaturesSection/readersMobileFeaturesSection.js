"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Beautiful on dark mode",
    //   src:"/readers/supports-dark-mode.png",
    content:
      "Reading should feel effortless. Our layout adapts to low light, reducing eye strain and making late night reading genuinely enjoyable.",
    imageSize: "",
  },
  {
    id: 2,
    title: "High quality pictures for context",
    src: "/readers/nl-image-for-features.webp",
    content:
      "We use images with intention. Every picture adds clarity, helps you understand the story faster, and gives you visual context without overwhelming your reading flow.",
    imageSize: "w-[431px] h-[379px]",
  },
  {
    id: 3,
    title: "Human written and fact checked",
    src: "/readers/fact-checked-mobile.webp",
    content:
      "We don’t publish until every claim is confirmed. Our editors validate sources, check dates, trace data, and ensure context so you never get half-truths or headlines without substance.",
    // imageSize: "h-[444px]",
  },
  {
    id: 4,
    title: "Clear summary for important news",
    src: "/readers/clear-summary-for-the-import-news-mob.webp",
    content:
      "We monitor the world’s most credible news outlets, filter out the noise, and summarize only what matters. You stay informed in minutes instead of losing hours on endless articles.",
    imageSize: "w-[60%]",
  },
  {
    id: 5,
    title: "We don’t link to any paywalled sites",
    src: "/readers/we-dont-think.webp",
    content:
      "You will never hit a paywall from us. Every link we share is open, accessible, and worth your attention.",
    imageSize: " h-auto",
  },
];

export default function ReadersMobileFeaturesSection() {
  const [mode, setMode] = useState("dark");

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="bg-[#FAFAFA] pb-10 mx-auto">
      {/* Features Loop */}
      {sections.map(({ title, content, src, imageSize }, index) => {
        const isFirst = index === 0;
        const isThird = index === 2;
        const isFourth = index === 3;

        const imageSrc = isFirst
          ? mode === "light"
            ? "/readers/light-mode-image.png"
            : "/readers/dark-mode-image.webp"
          : src;

        return (
          <div key={index} className="flex flex-col py-4 items-center">
            {/* Text Content */}
            <div className="w-full px-4">
              <p className="text-[24px] font-[500] text-black mb-4 leading-[normal]">
                {title}
              </p>
              <p className="text-black text-[14px] font-[400] pb-6">
                {content}
              </p>
            </div>

            {/* First Section Special Layout */}
            {isFirst ? (
              <div className="relative flex w-full items-start justify-center px-4">
                <motion.button
                  onClick={handleModeChange}
                  className="absolute top-0 left-4 w-[21.5%] h-[8%] rounded-full shadow-inner mr-[5px] flex items-center"
                  style={{
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                    justifyContent: mode === "dark" ? "flex-end" : "flex-start",
                  }}
                  initial={{ backgroundColor: "#01261E" }}
                  animate={{
                    backgroundColor: mode === "dark" ? "#01261E" : "#DAEBE8",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={
                      mode === "dark" ? "/readers/moon.png" : "/readers/sun.png"
                    }
                    alt="Mode Toggle"
                    className="w-[48%] mt-0.5 rounded-full"
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                      mass: 0.8,
                    }}
                  />
                </motion.button>

                {/* Image */}
                <div className="ml-5">
                  {imageSrc && (
                    <img
                      src={imageSrc}
                      alt={title}
                      className="object-cover rounded-md w-full h-auto"
                    />
                  )}
                </div>
              </div>
            ) : (
              // Normal sections
              <div
                className={`w-full ${
                  isThird
                    ? ""
                    : isFourth
                      ? "" // No padding on 4th section image
                      : "px-4"
                }`}
              >
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt={title}
                    className={`object-cover w-full ${
                      isThird ? "w-[50%] h-[444px]" : ""
                    } ${isThird ? {} : "rounded-md"} ${imageSize ?? "h-auto"}`}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
