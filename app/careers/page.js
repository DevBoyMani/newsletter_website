"use client"
import React, { useState, useRef } from "react";
import ViewAll from "../../components/viewAll/viewAll";
import Leadership from "../../components/leadership/leadership";
import Others from "../../components/others/others";
import Design from "../../components/design/design";
import Engineering from "../../components/engineering/engineering";
import Journalism from "../../components/journalism/journalism";
import Tech from "../../components/tech/tech";
import Marketing from "../../components/marketing/marketing";
import {FaqAccordionC} from "../../components/careers/faqAccordionC/faqAccordionC"

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
          className={` md:text-base uppercase py-2 px-3 lg:mr-4  text-[#0C3D3D] rounded-lg transition-all duration-300 ${
            activeTab === index ? "text-[#0C3D3D] bg-[#CDD2CF] hover:bg-[#46DE46] " : "bg-[#DAEBE8]  hover:text-black hover:bg-[#46DE46]"
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
    { name: "Design", component: <Design/> },
    { name: "Engineering", component: <Engineering/> },
    { name: "Journalism", component: <Journalism /> },
    { name: "Tech", component: <Tech/> },
    { name: "Leadership", component: <Leadership /> },
    {name: "Marketing", component: <Marketing /> },
    { name: "Others", component: <Others /> }
  ];

  return (
    <div className="text-white">
      <div className="md:px-16 px-4 pt-20 mx-auto ">
      <div className="mb-8 text-start ">
        <p className="text-2xl font-semibold text-black px-1 uppercase ">Looking for a new role &</p>
        <div className="w-[46%]">
        <h2 className="text-3xl md:text-7xl text-black py-2 ">
        Ready to make an impact?
        </h2>
        </div>
        <div className="pt-14 border-black border-b pb-4">
          <div className="flex justify-between">
          <div className="text-5xl text-black">
            Open Positions
          </div>
          <div className="">
          <div className="flex text-black text-base space-x-4 mt-8">
            <a  href="" target="_blank">LinkedIn &#8599;</a>
            <a href="" target="_blank">Glassdoor &#8599;</a>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>

      <div className="w-full md:px-16">
      <Testimonials testimonials={testimonials} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="mt-0 md:px-16">
        {testimonials[activeTab].component}
      </div>

      <div className="py-10 md:px-16">
        <div className="flex justify-between">
          <div className="md:w-[40%]">
            <div className="text-black text-7xl ">
              How do we work with your application?
            </div>
          </div>

          <div className="md:w-[44%]">
            <div className="text-black">
            <FaqAccordionC/>
            </div>
          </div>
        </div>
      </div>
      

      <div className="relative py-10 ">
        <div className="relative lg:h-[530px]">
          <img
            src="/careers/careers-1.png"
            className="w-full h-full object-cover"
            alt="Careers"
          />
          <div className="absolute top-1/4 left-10 lg:w-[35%] lg:h-[50%] space-y-10 md:px-4">
            <div className="text-white text-4xl lg:text-6xl ">
              Your trusted source for digital insights
            </div>

            <a
              href=""
              className="inline-block border border-white text-white text-lg mt-4 px-6 py-1 rounded-lg hover:text-black hover:bg-white"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;