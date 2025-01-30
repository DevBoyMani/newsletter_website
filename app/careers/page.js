"use client";
import React, { useState, useRef } from "react";
import ViewAll from "@components/viewAll/viewAll";
// import Vitamins from "./Vitamins";
// import Minerals from "./Minerals";
// import GoodBacteria from "./GoodBacteria";
// import PlantCompounds from "./PlantCompounds";

const Testimonials = ({ testimonials, activeTab, setActiveTab }) => {
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
    <div ref={containerRef} className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-row">
        
      {testimonials.map((testimonial, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`text-lg md:text-2xl py-2 mx-2 border-b-2 transition-all duration-300 ${
            activeTab === index ? "border-black text-black" : "text-gray-600 hover:text-black border-white"
          }`}
        >
          {testimonial.name}
        </button>
      ))}
    </div>
  );
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    { name: "View All", component: <ViewAll/> },
    { name: "Vitamins", component: <Vitamins /> },
    { name: "Minerals", component: <Minerals /> },
    { name: "Good Bacteria", component: <GoodBacteria /> },
    { name: "Plant Compounds & Mushrooms", component: <PlantCompounds /> },
  ];

  return (
    <div className="text-white px-4 md:px-16 py-20 mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-6xl font-semibold text-black text-start">
          High-quality ingredients<br /> optimised for impact
        </h2>
      </div>
      <Testimonials testimonials={testimonials} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6">{testimonials[activeTab].component}</div>
    </div>
  );
};

export default Careers;
