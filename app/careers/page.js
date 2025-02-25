"use client"
import React, { useState, useRef } from "react";
import ViewAll from "../../components/viewAll/viewAll";
import Leadership from "../../components/leadership/leadership";
import Others from "../../components/others/others";
import Design from "../../components/design/design";
import Engineering from "../../components/engineering/engineering";
import Journalism from "../../components/journalism/journalism";
import Tech from "../../components/tech/tech";
import Marketing from "../../components/marketing/marketing"

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
          className={` md:text-base uppercase py-2 px-3 lg:mx-2  text-[#0C3D3D] border border-[#0C3D3D] rounded-lg transition-all duration-300 ${
            activeTab === index ? "text-[#0C3D3D] bg-[#CDD2CF] hover:bg-[#46DE46]" : "  hover:text-black hover:bg-[#46DE46]"
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
    <div className="text-white px-4 md:px-16 py-20 mx-auto">
      <div className="mb-8 text-start ">
        <p className="text-2xl font-semibold text-black px-1 uppercase ">Looking for a new role &</p>
        <div className="w-[46%]">
        <h2 className="text-3xl md:text-7xl text-black py-2 ">
        Ready to make an impact?
        </h2>
        </div>
        <div className="pt-14 border-black border-b pb-8">
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
      <div className="w-full">
      <Testimonials testimonials={testimonials} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="mt-0">{testimonials[activeTab].component}</div>
    </div>
  );
};

export default Careers;