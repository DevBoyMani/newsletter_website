"use client";
import { useState } from "react";
import { forwardRef } from "react";
import { motion } from 'framer-motion';

const FeatureRightSideInner = forwardRef(({ data }, ref) => {
    const { title, src, content, imageSize, isFirst, isThird, isFourth } = data;

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
            <div className={`flex flex-col md:flex-row  md:pt-4 md:pb-0 top-20`} style={{borderTop:"1px solid #707170"}}>
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
                                relative w-[80px] h-[40px] rounded-full
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
                                className="absolute top-0.5 left-0 w-[40px] h-[40px] rounded-full"
                                animate={{ x: mode === "dark" ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
                            />
                            </motion.button>
                        </div>
                        )}
                </div>

                {/* Right Side - Dynamic Image */}
                <div className={`md:w-1/2 md:relative md:pt-4 ${isFourth ? "min-h-[300px]" : ""}`}>
                {isThird ? (
                    <video
                    autoPlay
                    muted
                    className={`object-cover rounded-md w-full ${imageSize ?? "h-auto"}`}
                    >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>

                    
                ) : isFourth ? (
                    <img
                    src={imageSrc}
                    alt={title}
                    className={`object-cover w-full absolute 2xl:top-12 xl:top-16 ${imageSize ?? "h-auto"}`}
                    />
                ) : (
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

FeatureRightSideInner.displayName = "FeatureRightSideInner";
export default FeatureRightSideInner;
