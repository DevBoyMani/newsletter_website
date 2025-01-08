"use client";
import React, { useState } from "react";

const Linkpages = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      name: "Sir Lewis Hamilton",
      quote: "I've been drinking AG1 every single day for a few years and it's become a key part of my routine. As a daily clean, green source of energy — it tastes great, is convenient to take on the road, and is complete enough to be an all-in-one supplement. I love that it's a really easy way to support my overall health.",
      image: "https://via.placeholder.com/400x400?text=Lewis+Hamilton", // Replace with actual image URL
    },
    {
      name: "Dr. Andrew Huberman",
      quote: "AG1 has completely changed the way I approach nutrition and supplements. It simplifies my routine and ensures I'm getting everything I need in one simple solution.",
      image: "https://via.placeholder.com/400x400?text=Andrew+Huberman", // Replace with actual image URL
    },
    {
      name: "Allyson Felix",
      quote: "AG1 is my go-to solution for energy, focus, and recovery. It's a game-changer for athletes and anyone looking to perform at their best.",
      image: "https://via.placeholder.com/400x400?text=Allyson+Felix", // Replace with actual image URL
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-300">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {testimonial.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-lg italic text-gray-800">{testimonials[activeTab].quote}</p>
          <p className="mt-4 font-semibold text-gray-700">
            - {testimonials[activeTab].name}
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
          <img
            src={testimonials[activeTab].image}
            alt={testimonials[activeTab].name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Linkpages;