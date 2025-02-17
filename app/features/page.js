"use client";
import { useState, useEffect, useRef } from "react";
import SidebarNav from "../../components/sidebarNav/sidebarNav";
import ImageGrid from "../../components/imageGrid/imageGrid";
import FeatureSection from "../../components/featureSection/featureSection";
import { FaStar } from "react-icons/fa";

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
 <div className="bg-white px-4 md:px-16 py-10 md:pt-20 mx-auto">
            <div className="max-w-4xl">
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-black text-start">
                    The benefits of taking AG1
                </h2>
                <p className="text-black text-lg md:text-xl py-4 md:py-6">
                    Discover the benefits of taking AG1 daily to support your health holistically.
                </p>
            </div>
        </div>

        <div className="flex px-4 md:px-16 mx-auto relative">
            <div className="w-1/4 sticky top-24 h-screen">
                <SidebarNav listNames={listNames} activeIndex={activeIndex} sectionRefs={sectionRefs} />
            </div>
            <div className="w-3/4 overflow-y-auto " style={{ scrollbarWidth: "none" }}>
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

        {/* review section*/}
        <div className="px-4  md:px-16 py-10 md:pt-20 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  p-6 rounded-lg z-10">
            {/* Card 1 */}
            <div className="bg-[#F6F5F1] p-6 rounded-lg">
            <div className="flex justify-center lg:justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-2xl text-[#46DE46] mr-2" />
                ))}
            </div>
            <h2 className="text-black text-2xl font-semibold py-4">Believer</h2>
            <p className=" italic text-lg text-black">
                I’ve always had a hard time choosing the right multivitamin and having to take pills. AG1 has been a godsend for me. My gut feels better, I feel more awake during the day and feel overall healthier and less sluggish.
            </p>
            <p className="text-gray-500 text-lg py-4">James J.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F6F5F1] p-6 rounded-lg">
            <div className="flex justify-center lg:justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-2xl text-[#46DE46] mr-2" />
                ))}
            </div>
            <h2 className="text-black text-2xl font-semibold py-4">I Love AG1            </h2>
            <p className=" italic text-lg text-black">
            I feel so much better since I ditched my daily multivitamin and switched. I have energy. My stomach isn’t grumbling anymore. It gets delivered every month. It really couldn’t be any easier.
            </p>
            <p className="text-gray-500 text-lg py-4">James J.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F6F5F1] p-6 rounded-lg">
            <div className="flex justify-center lg:justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-2xl text-[#46DE46] mr-2" />
                ))}
            </div>
            <h2 className="text-black text-2xl font-semibold py-4">Long Time Customer</h2>
            <p className=" italic text-lg text-black">
            I have been using AG1 for at least 5 years. It’s much better than taking a multivitamin and it’s got a surprisingly good taste. It’s not bad at all. Their customer service is also some of the best I have ever experienced.
            </p>
            <p className="text-gray-500 text-lg py-4">James J.</p>
            </div>

        </div>
        </div>

        </>
    );
}
