"use client";
import { useState } from "react";
import { forwardRef } from "react";
import { motion } from 'framer-motion';

const FeatureSection = forwardRef(({ data }, ref) => {
    const { title, src, content, imageSize, isFirst, isThird } = data;

    // Track which mode is active
    const [mode, setMode] = useState("dark"); // default: dark

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    // Decide image based on mode (only for first section)
    const imageSrc =
        isFirst && mode === "light"
            ? "/readers/light-mode-image.png"
            : isFirst && mode === "dark"
            ? "/readers/dark-mode-image.png" 
            : src; 
    
            const videoSrc= "/readers/fact-checked-video.mp4"

    return (
        <div ref={ref} className="w-full px-8 bg-[#FAFAFA]">
            <div className="flex flex-col md:flex-row border-t md:pb-10 md:pt-4 top-20">
                {/* Left Side - Sticky Text Content */}
                <div className="md:w-1/2 text-black md:pr-10 pr-4 md:sticky  bg-[#FAFAFA] z-10">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-6 md:pt-4">
                        {title}
                    </h2>
                    <p className="text-black text-[18px] md:pb-6">{content}</p>

                    {/* Mode buttons only on first section */}
                    {isFirst && (
                        <div className="flex space-x-4 mt-4">
                            <motion.button
                            onClick={() => handleModeChange(mode === "dark" ? "light" : "dark")}
                            className={`
                                relative w-[79px] h-[40px] rounded-full
                                ${mode === "dark" ? "shadow-inner" : "shadow-inner"}
                              `}
                              style={{
                                boxShadow: mode === "dark" 
                                  ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" 
                                  : "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset"
                              }}
                            initial={{ backgroundColor: "#01261E" }}
                            animate={{
                                backgroundColor: mode === "dark" ? " #01261E" : "#DAEBE8",
                            }}
                            transition={{ duration: 0.3 }}
                            >
                            {/* Inner Image for Dark Mode */}
                            <motion.img
                                src={mode === "dark" ? "/readers/moon.png" : "/readers/sun.png"}
                                alt="Mode Toggle"
                                className="absolute top-1 left-0.5 w-[34px] h-[34px] rounded-full"
                                animate={{ x: mode === "dark" ? 39 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                            </motion.button>
                        </div>
                        )}
                </div>

                {/* Right Side - Dynamic Image */}
                <div className="md:w-1/2">
                   {isThird ? (
                            // Render video if it's the third section
                            <video 
                                autoPlay 
                                muted 
                                className={`object-cover rounded-md w-full ${imageSize ?? "h-auto"}`} 
                               
                                >
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                                </video>
                        ) : (
                            // Render image for other sections
                            <img
                                src={imageSrc}
                                alt={title}
                                className={`object-cover rounded-md w-full ${imageSize ?? "h-auto"}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
});

FeatureSection.displayName = "FeatureSection";
export default FeatureSection;
