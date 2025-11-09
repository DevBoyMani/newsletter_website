"use client";

import React, { useRef } from "react";

const CareersTestimonialsTab = ({ testimonials, activeTab, setActiveTab }) => {
  const containerRef = useRef(null);

  const handleClick = (index) => {
    setActiveTab(index);
    const button = containerRef.current.children[index];
    const containerWidth = containerRef.current.offsetWidth;
    const buttonWidth = button.offsetWidth;
    const buttonOffset = button.offsetLeft;
    const scrollPosition = buttonOffset - containerWidth / 2 + buttonWidth / 2;
    containerRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-row mr-2 ml-1"
    >
      {testimonials.map((testimonial, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`md:text-[16px] font-[600] uppercase py-2 px-3 lg:mr-4 mr-2 rounded-lg transition-all duration-300 ${
            activeTab === index
              ? "text-[#DAEBE8] bg-[#01261E]"
              : "bg-[#DAEBE8] text-[#0C3D3D] hover:bg-[#01261E] hover:text-[#DAEBE8]"
          }`}
        >
          {testimonial.name}
        </button>
      ))}
    </div>
  );
};

export default CareersTestimonialsTab;
