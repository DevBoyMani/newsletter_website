"use client";
import { useState, useEffect, useRef } from "react";
import SidebarNav from "../../components/sidebarNav/sidebarNav";
import ImageGrid from "../../components/imageGrid/imageGrid";
import FeatureSection from "../../components/featureSection/featureSection";

export default function Features() {
    const listNames = [
        "Healthy Ageing",
        "Immune Defence",
        "Digestion",
        "Focus, Energy & Mood",
        "High Quality Standards",
        "Ingredients You Can Feel",
        "Simplicity",
        "Taste",
        "Science & Research"
    ];

    const images = [
        { name: "image1", src: "/features/features-1.jpg" },
        { name: "image2", src: "/features/features-2.jpg" },
        { name: "image3", src: "/features/features-3.jpg" }
    ];

    const sectionRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target);
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
        <div className="text-white px-4 md:px-16 py-10 md:pt-20 mx-auto">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-black text-start">
                        The benefits of taking AG1
                    </h2>
                    <p className="text-black text-lg md:text-xl py-4 md:py-6">
                        Discover the benefits of taking AG1 daily to support your health holistically.
                    </p>
                </div>
            </div>

        <div className="flex text-white px-4 md:px-16 py-10 md:py-20 mx-auto">
            <SidebarNav listNames={listNames} activeIndex={activeIndex} />

            <div className="w-3/4 text-black overflow-y-auto h-screen"  style={{ scrollbarWidth: "none" }}>
                <ImageGrid images={images} />

                {listNames.map((name, index) => (
                    <FeatureSection 
                        key={index} 
                        title={name} 
                        ref={(el) => (sectionRefs.current[index] = el)}
                    />
                ))}
            </div>
        </div>
        </>
    );
}
