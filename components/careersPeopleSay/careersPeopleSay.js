"use client";

import React, { useState } from "react";

const CareersPeopleSay = () => {
  const images = [
    {
      id: 1,
      smallSrc: "/careers/mani-small.png",
      fullSrc: "/careers/mani-big.png",
      text: "“Working here genuinely feels like being part of something that’s growing fast but still thoughtful. We move quickly, test ideas, and actually see them go live.”",
      name: "Mani",
      role: "Junior Technology Specialist",
    },
    {
      id: 2,
      smallSrc: "/careers/trisha-small.png",
      fullSrc: "/careers/trisha-big.png",
      text: "“There’s a strong culture of clarity. We don’t do unnecessary meetings. Everyone respects time, and the work is focused. It’s the first place where I’ve seen efficiency practiced daily.”",
      name: "Trisha",
      role: "Social Media Manager",
    },
    {
      id: 3,
      smallSrc: "/careers/hidi-small.png",
      fullSrc: "/careers/hidi-big.png",
      text: "“The environment balances independence with support. You’re trusted to do your job, but you’re not left alone when you need guidance.”",
      name: "Heidi",
      role: "Content Writer",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(images[2]);

  return (
    <>
      {/*web*/}
      <div className="hidden lg:block bg-[#FAFAFA] px-28 pt-[60px] pb-[150px]">
        <div className="border-b border-black">
          <h2 className="text-[56px] leading-normal font-[400] text-[#01261E]">
            What our people have to say
          </h2>
        </div>

        <div className="flex justify-between pt-8">
          {/* Left Side (Small Images & Content) */}
          <div className="w-[60%]">
            {/* Small Images */}
            <div className="flex flex-row space-x-4 py-8">
              {images.map((image) => (
                <button
                  key={image.id}
                  className={`cursor-pointer p-0.5 rounded-full ${
                    selectedImage.id === image.id
                      ? "border border-black rounded-full"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.smallSrc}
                    alt={`image-${image.id}`}
                    className="w-14 h-14"
                  />
                </button>
              ))}
            </div>

            {/* Desktop Content */}
            <div className="py-6">
              <div className="flex flex-col h-full min-h-[200px]">
                <div className="flex-1">
                  <p className="text-black text-[24px] leading-[130%] font-[300] mb-6 w-[94%]">
                    {selectedImage.text}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-[24px] leading-[130%] font-[400]">
                    {selectedImage.name}
                  </p>
                  <p className="text-[15px] leading-[130%] font-[300]">
                    {selectedImage.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side (Large Image) */}
          <div className="w-[30%] pt-8">
            <img
              src={selectedImage.fullSrc}
              alt="selected"
              className="w-300 rounded-[15px]"
            />
          </div>
        </div>
      </div>

      {/* mobile*/}
      <div className="block lg:hidden bg-[#FAFAFA] px-4 py-10">
        <div className="border-b border-black mb-6">
          <h2 className="text-[30px] leading-normal font-[400] text-[#01261E]">
            What our people have to say
          </h2>
        </div>

        {/* Small Images */}
        <div className="flex flex-row space-x-4 py-4">
          {images.map((image) => (
            <button
              key={image.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation(); // stop bubbling up
                setSelectedImage(image);
              }}
              className={`cursor-pointer p-0.5 rounded-full ${
                selectedImage.id === image.id
                  ? "border border-black rounded-full"
                  : "border-transparent"
              }`}
            >
              <img
                src={image.smallSrc}
                alt={`image-${image.id}`}
                className="w-12 h-12"
              />
            </button>
          ))}
        </div>

        {/* Mobile Content */}
        <div className="transition-all duration-300 ease-in-out min-h-[170px]">
          <p className="text-black text-[17px] leading-[130%] font-[300] mb-6">
            {selectedImage.text}
          </p>
          <p className="text-[17px] leading-[130%] font-[400]">
            {selectedImage.name}
          </p>
          <p className="text-[11px] leading-[130%] font-[300]">
            {selectedImage.role}
          </p>
        </div>
      </div>
    </>
  );
};

export default CareersPeopleSay;
