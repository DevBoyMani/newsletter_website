"use client";
import { forwardRef } from "react";
import FeatureHighlight from "../featureHighlight/featureHighlight";

const FeatureSection = forwardRef(({ title }, ref) => {
    const sectionImage = { name: "feature image", src: "/features/sections/section1.jpg" };
    const sectionContent = [
        "AG1 supports mental performance and focus with vitamins C, B6, B12, riboflavin, niacin, pantothenic acid, folate, and zinc.",
        "With thiamine, AG1 supports a healthy heart.",
        "AG1 supports healthy skin, hair, and nails with vitamin A, vitamin C, riboflavin, niacin, biotin, selenium, copper, and zinc.",
        "AG1 helps protect your cells from oxidative stress with vitamins E and C, riboflavin, zinc, copper, manganese, and selenium.",
    ];

    return (
        <div ref={ref} className="w-full px-8">
            <div className="flex flex-col md:flex-row border-b md:py-10 top-10">
                {/* Left Side - Sticky Text Content */}
                <div className="md:w-1/2 text-black md:pr-10 pr-4 md:sticky  bg-white z-10">
                    <h2 className="text-3xl md:text-3xl lg:text-4xl text-black text-start md:pb-6 md:pt-4">
                        {title}
                    </h2>
                    <p className="text-black text-lg md:text-xl md:pb-6">
                        AG1 lets you face the future with confidence by fueling your cells with nutrients they need to support a sharp mind, a healthy heart, and vibrant skin, hair, and nails.
                    </p>
                    <h3 className="text-sm md:text-lg lg:text-lg">WHAT TO EXPECT</h3>
                    <FeatureHighlight content={sectionContent} />
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2">
                    <img
                        src={sectionImage.src}
                        alt={sectionImage.name}
                        className="object-cover rounded-md w-full h-full md:max-h-[800px]"
                    />
                </div>
            </div>
        </div>
    );
});

FeatureSection.displayName = "FeatureSection";

export default FeatureSection;
