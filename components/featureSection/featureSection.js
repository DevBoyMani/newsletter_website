"use client";
import { useState } from "react";
import { forwardRef } from "react";

const FeatureSection = forwardRef(({ data }, ref) => {
    const { title, src, content, imageSize, isFirst } = data;

    // Track which mode is active
    const [mode, setMode] = useState("dark"); // default: dark

    const handleModeChange = (newMode) => {
        setMode(newMode);
    };

    // Decide image based on mode (only for first section)
    const imageSrc =
        isFirst && mode === "light"
            ? "/readers/light-mode-image.png" // 👈 Change to your light image
            : isFirst && mode === "dark"
            ? "/readers/dark-mode-image.png"  // 👈 Change to your dark image
            : src; // default from data

    return (
        <div ref={ref} className="w-full px-8">
            <div className="flex flex-col md:flex-row border-t md:py-10 top-10">
                {/* Left Side - Sticky Text Content */}
                <div className="md:w-1/2 text-black md:pr-10 pr-4 md:sticky  bg-white z-10">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-6 md:pt-4">
                        {title}
                    </h2>
                    <p className="text-black text-[18px] md:pb-6">{content}</p>

                    {/* Mode buttons only on first section */}
                    {isFirst && (
                        <div className="flex space-x-4 mt-4">
                            {mode === "dark" && (
                                <button onClick={() => handleModeChange("light")}>
                                    <img
                                        src="/readers/light-mode-button.png"
                                        alt="Light Mode"
                                        className="w-[79px]"
                                    />
                                </button>
                            )}
                            {mode === "light" && (
                                <button onClick={() => handleModeChange("dark")}>
                                    <img
                                        src="/readers/dark-mode-button.png"
                                        alt="Dark Mode"
                                        className="w-[79px]"
                                    />
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Side - Dynamic Image */}
                <div className="md:w-1/2">
                    <img
                        src={imageSrc}
                        alt={title}
                        className={`object-cover rounded-md w-full ${imageSize ?? "h-auto"}`}
                    />
                </div>
            </div>
        </div>
    );
});

FeatureSection.displayName = "FeatureSection";
export default FeatureSection;
