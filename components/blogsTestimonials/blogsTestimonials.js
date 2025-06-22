"use client";
import { useRef, useState } from "react";

export default function BlogsTestimonials() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    { name: "View All" },
    { name: "Basics" },
    { name: "advertising" },
    { name: "analytics" },
    { name: "Tech" },
    { name: "Case study" },
    { name: "Inside Sagravia" },
    { name: "Perspectives" },
  ];

  const Testimonials = ({ testimonials, activeTab, setActiveTab }) => {
    const containerRef = useRef(null);

    const handleClick = (index) => {
      setActiveTab(index);
      const button = containerRef.current.children[index];
      const containerWidth = containerRef.current.offsetWidth;
      const buttonWidth = button.offsetWidth;
      const buttonOffset = button.offsetLeft;
      const scrollPosition =
        buttonOffset - containerWidth / 2 + buttonWidth / 2;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    };

    return (
      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar whitespace-nowrap flex flex-row mr-2"
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={` md:text-base uppercase py-2 px-3 lg:mr-4  mr-2  text-[#0C3D3D] rounded-lg transition-all duration-300 ${
              activeTab === index
                ? "text-[#DAEBE8] bg-[#01261E] hover:bg-[#01261E] "
                : "bg-[#DAEBE8]  hover:text-[#DAEBE8] hover:bg-[#01261E]"
            }`}
          >
            {testimonial.name}
          </button>
        ))}
      </div>
    );
  };

  //   const testimonials = [
  //     { name: "View All", component: <ViewAll /> },
  //     { name: "Design", component: <Design /> },
  //     { name: "Engineering", component: <Engineering /> },
  //     { name: "Journalism", component: <Journalism /> },
  //     { name: "Tech", component: <Tech /> },
  //     { name: "Leadership", component: <Leadership /> },
  //     { name: "Marketing", component: <Marketing /> },
  //     { name: "Others", component: <Others /> },
  //   ];

  return (
    <>
      <div className="pb-20 pt-10 md:px-28">
        <div className="py-4">
          <h4 className="text-[24px] text-[#000] font-[700] leading-[104%]">
            All articles
          </h4>
        </div>
        <div className="w-full">
          <Testimonials
            testimonials={testimonials}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </>
  );
}
