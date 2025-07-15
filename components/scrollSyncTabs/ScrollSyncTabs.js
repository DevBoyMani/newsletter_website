"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    id: 1,
    title: "Supports dark mode",
    image: "/readers/supports-dark-mode.png",
    imageSize: "w-[351px] h-[507px]",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
  },
  {
    id: 2,
    title: "High quality pictures for context",
    image: "/readers/nl-image-for-features.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: "w-[431px] h-[379px]",
  },
  {
    id: 3,
    title: "Fact checked and human written",
    image: "/readers/fact-checked-video.mp4",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    // imageSize: "w-[431px] h-[518px]",
  },
  {
    id: 4,
    title: "Clear summary for the import new",
    image: "/readers/clear-summary-for-the-import-news-web.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: "w-[88%]",
  },
  {
    id: 5,
    title: "We don’t link to any paywalled sites",
    image: "/readers/we-dont-think.png",
    content:
      "AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
    imageSize: " h-auto",
  },
];

export default function ScrollSyncTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleModeChange = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <section className="mx-auto px-6 py-16 lg:px-28">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 mr-4">
          <div className="sticky top-24 space-y-2">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                onClick={() => scrollToSection(idx)}
                className={`cursor-pointer px-4 py-4 text-[17px] font-[400] leading-normal transition-all ${
                  activeIndex === idx
                    ? "bg-[#01261E] text-white"
                    : "bg-transparent text-black border-transparent hover:bg-[#01261e61] hover:text-[#01261E]"
                }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-0">
          {tabs.map((tab, idx) => {
            const isFirst = idx === 0;
            const isThird = idx === 2;

            const imageSrc =
              isFirst && mode === "light"
                ? "/readers/light-mode-image.png"
                : isFirst && mode === "dark"
                ? "/readers/dark-mode-image.png"
                : tab.image;

            return (
              <section
                key={idx}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className="scroll-mt-24"
                id={`section-${idx}`}
              >
                <div
                  className={`flex flex-col md:flex-row md:pt-4 ${
                    idx !== 3 ? "md:py-16" : ""
                  }`}
                  style={{ borderTop: "1px solid #707170" }}
                >
                  <div className="md:w-[50%] pr-6">
                    <h2 className="text-[32px] font-[500] leading-normal text-[#121212] mb-4">
                      {tab.title}
                    </h2>
                    <p className="text-[16px] font-[400] leading-normal text-[#121212] mb-4 whitespace-pre-line">
                      {tab.content}
                    </p>

                    {isFirst && (
                      <div className="flex space-x-4 mt-4">
                        <motion.button
                          onClick={handleModeChange}
                          className="relative w-[80px] h-[38px] rounded-full shadow-inner"
                          style={{
                            boxShadow:
                              "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
                          }}
                          initial={{ backgroundColor: "#01261E" }}
                          animate={{
                            backgroundColor:
                              mode === "dark" ? "#01261E" : "#DAEBE8",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.img
                            src={
                              mode === "dark"
                                ? "/readers/moon.png"
                                : "/readers/sun.png"
                            }
                            alt="Mode"
                            className="absolute top-0 left-0 w-[50%] rounded-full"
                            animate={{ x: mode === "dark" ? 40 : 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 40,
                            }}
                          />
                        </motion.button>
                      </div>
                    )}
                  </div>

                  <div className="md:w-[50%] mt-6 md:mt-0 relative flex justify-end items-end">
                    {isThird ? (
                      <video
                        autoPlay
                        muted
                        loop
                        className="object-cover rounded-[30px] w-[431px] h-[518px]"
                      >
                        <source src={tab.image} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={imageSrc}
                        alt={tab.title}
                        className={`object-cover rounded-md ${
                          tab.imageSize ?? "w-full h-auto"
                        }`}
                      />
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
