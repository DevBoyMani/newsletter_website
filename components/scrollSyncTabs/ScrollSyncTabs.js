"use client";

import { useEffect, useRef, useState } from "react";

const tabs = [
  {
    title: "Third-party certifications",
    image: "/images/tab-certification.jpg",
    content: "Content for certifications",
  },
  {
    title: "Certificate of analysis",
    image: "/images/tab-analysis.jpg",
    content: "Content for analysis",
  },
  {
    title: "Heavy metals",
    image: "/images/tab-metals.jpg",
    content: "Content for heavy metals",
  },
  {
    title: "Allergens",
    image: "/images/tab-allergens.jpg",
    content: "Content for allergens",
  },
  {
    title: "Pesticides & herbicides",
    image: "/images/tab-pesticides.jpg",
    content: "Content for pesticides",
  },
  {
    title: "Microbes & toxins",
    image: "/images/tab-microbes.jpg",
    content: "Content for microbes",
  },
  {
    title: "Banned substances",
    image: "/images/tab-banned.jpg",
    content: "Content for banned substances",
  },
  {
    title: "Residual solvents",
    image: "/images/tab-solvents.jpg",
    content: "Content for residual solvents",
  },
  {
    title: "Nutritional testing",
    image: "/images/tab-nutritional.jpg",
    content: "Content for nutritional testing",
  },
  {
    title: "Sensory experience",
    image: "/images/tab-sensory.jpg",
    content: "Content for sensory experience",
  },
];

export default function ScrollSyncTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

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

  return (
    <section className="mx-auto px-6 py-16 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sticky Left Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-24 space-y-2">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                onClick={() => scrollToSection(idx)}
                className={`cursor-pointer px-4 py-2 rounded-sm border-l-4 transition-all ${
                  activeIndex === idx
                    ? "bg-[#8a6c42] text-white border-[#8a6c42]"
                    : "bg-transparent text-black border-transparent hover:text-[#8a6c42]"
                }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </aside>

        {/* Right Scrollable Content */}
        <div className="flex-1 space-y-16">
          {tabs.map((tab, idx) => (
            <section
              key={idx}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className="scroll-mt-24"
              id={`section-${idx}`}
            >
              <h2 className="text-2xl font-semibold mb-4">{tab.title}</h2>
              <p className="text-gray-700 mb-4 whitespace-pre-line">
                {tab.content}
              </p>
              <img
                src={tab.image}
                alt={tab.title}
                className="w-full max-w-md rounded-lg"
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
