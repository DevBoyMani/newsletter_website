"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "1. Supports dark mode",
    //   src:"/readers/supports-dark-mode.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: "",
  },
  {
    id: 2,
    title: "2. High quality pictures for context",
    src: "/readers/nl-image-for-features.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: "w-[431px] h-[379px]",
  },
  {
    id: 3,
    title: "3. Fact checked and human written",
    videoSrc: "/readers/fact-checked-video.mp4",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: " h-[375px]",
  },
  {
    id: 4,
    title: "4. Clear summary for the import new",
    src: "/readers/clear-summary-for-the-import-news-mob.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: "w-[60%]",
  },
  {
    id: 5,
    title: "5. We don’t link to any paywalled sites",
    src: "/readers/we-dont-think.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
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
      {sections.map(({ title, content, src, videoSrc, imageSize }, index) => {
        const isFirst = index === 0;
        const isThird = index === 2;
        const isFourth = index === 3;

        const imageSrc = isFirst
          ? mode === "light"
            ? "/readers/light-mode-image.png"
            : "/readers/dark-mode-image.png"
          : src;

        return (
          <div key={index} className="flex flex-col py-4 items-center">
            {/* Text Content */}
            <div className="w-full px-4">
              <h2 className="text-[24px] font-[500] text-black ml-2 mb-4 leading-[normal]">
                {title}
              </h2>
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
                  isThird && videoSrc
                    ? ""
                    : isFourth
                    ? "" // No padding on 4th section image
                    : "px-4"
                }`}
              >
                {isThird && videoSrc ? (
                  <video
                    autoPlay
                    playsInline
                    muted
                    loop
                    preload="auto"
                    className={`object-cover w-full ${imageSize ?? "h-auto"}`}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  imageSrc && (
                    <img
                      src={imageSrc}
                      alt={title}
                      className={`object-cover rounded-md w-full ${
                        imageSize ?? "h-auto"
                      }`}
                    />
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
