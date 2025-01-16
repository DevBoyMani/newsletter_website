
// "use client";

// import { useState } from "react";

// export default function FaqAccordion() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const accordions = [
//     {
//       question: "How do I know if AG1 is right for me?",
//       answer: "AG1 is designed for people looking to support their foundational nutrition needs for whole body health.While we have a degree of individuality, all of our bodies are reliant on the same nutrient foundation to nourish the systems that power our health. AG1 is an easy, drinkable daily supplement that supports brain, gut, and immune health through a science-driven formula of vitamins, minerals, prebiotics, probiotics, stress adaptogens, mushrooms, superfoods, and digestive enzymes.*AG1 is not intended for individuals under 18 or pregnant/nursing women.",
//     },
//     {
//       question: "When should I expect to see benefits?",
//       answer: "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
//     },
//     {
//       question: "What kind of benefits can I expect from taking AG1?",
//       answer: "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
//     },
//     {
//         question: "What can I do with Material Tailwind?",
//         answer: "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
//       },
//       {
//         question: "What can I do with Material Tailwind?",
//         answer: "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
//       },
//       {
//         question: "What can I do with Material Tailwind?",
//         answer: "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
//       },
//   ];

//   return (
//     <div className="bg-[#ffffff] text-white px-4 md:px-16 py-20 lg:py-8 md:pb-20 lg:pb-20 mx-auto lg:min-h-[650px] hidden md:block">
//       <div className="flex lg:justify-between">
//         <div className="flex">
//           <h2 className="text-4xl font-semibold text-black">FAQs</h2>
//         </div>
//         <div>
//           {accordions.map((item, index) => (
//             <div key={index} className="border-b border-slate-200">
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full flex justify-between items-center py-5 text-black"
//               >
//                 <span className="text-xl font-semibold">{item.question}</span>
//                 <span
//                   className={`text-black transition-transform duration-300 ${
//                     activeIndex === index ? "rotate-30" : "rotate-0"
//                   }`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 16 16"
//                     fill="currentColor"
//                     className="w-10 h-6"
//                     strokeWidth="0.5"
//                   >
//                     <path
//                       d={
//                         activeIndex === index
//                           ? "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" // Minus Icon
//                           : "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" // Plus Icon
//                       }
//                     />
//                   </svg>
//                 </span>
//               </button>
//               <div
//                 className={`overflow-hidden transition-all duration-300 ${
//                   activeIndex === index ? "max-h-[500px]" : "max-h-0"
//                 }`}
//               >
//                 <div className="pb-5 text-lg text-black">{item.answer}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordions = [
    {
      question: "How do I know if AG1 is right for me?",
      answer: "AG1 is designed for people looking to support their foundational nutrition needs for whole body health. While we have a degree of individuality, all of our bodies are reliant on the same nutrient foundation to nourish the systems that power our health. AG1 is an easy, drinkable daily supplement that supports brain, gut, and immune health through a science-driven formula of vitamins, minerals, prebiotics, probiotics, stress adaptogens, mushrooms, superfoods, and digestive enzymes. *AG1 is not intended for individuals under 18 or pregnant/nursing women.",
    },
    {
      question: "When should I expect to see benefits?",
      answer: "While many factors influence the impact you may feel from AG1, including the consistency of your routine and your health prior to starting, most results from the ingredients in AG1 are experienced after 1 month to 3 months.",
    },
    {
      question: "What kind of benefits can I expect from taking AG1?",
      answer: "While many factors influence the impact you may feel from AG1, including the consistency of your routine and your health prior to starting, most results from the ingredients in AG1 are experienced after 1 month to 3 months.In a single-arm study that assessed the self-perceived efficacy of AG1 in a group of 35 healthy adults ages 25-48 over 3 months, 97% of participants felt more energy and noticed less gas and bloating at 1 month. At 3 months, 94% of participants felt more calm, and 97% felt digestion improved. You can read more about what we studied and learned here.",
    },
    {
      question: "What makes AG1 different from other nutritional products?",
      answer: "Since 2010, we’ve set out to formulate the most comprehensive and effective Foundational Nutrition supplement. Here’s what makes AG1 unique:Comprehensiveness: One daily serving of AG1 combines the power of multiple supplements such as a multivitamin, probiotics, greens and superfood powders, vitamin B complex, and vitamin C tablets. *",
    },
    {
        question: "What products does AG1 replace?",
        answer: "One daily serving of AG1 eliminates the need for other supplements such as a multivitamin, probiotics, greens and superfood powders, vitamin B complex, and vitamin C tablets.",
      },
      {
        question: "What measures do you take to ensure the quality of AG1?",
        answer: "We’ve spent over a decade in pursuit of creating the highest-quality Foundational Nutrition supplement. We think about quality through four considerations—research, sourcing, manufacturing, and testing. And at each step of the process we go above and beyond industry standards.This includes relying on expert-led scientific research on AG1, sourcing ingredients for potency and purity, manufacturing at TGA-registered facilities, and testing for 950 contaminants, impurities and allergens. We verify our testing process with one of the most rigorous independent quality and safety certification programs, NSF Certified for Sport®.",
      },
      {
        question: "How do I use AG1?",
        answer: "AG1 is a Foundational Nutrition supplement made powerfully simple and convenient.While you can take AG1 at any time, we recommend taking AG1 first thing in the morning on an empty stomach for optimal absorption.",
      },
     
  ];

  return (
    <>
    {/* // desk top view */}
    <div className="bg-[#ffffff] hidden md:block text-white pl-12 pr-14 mx-auto ">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-20 lg:py-40">
   
        <div className="md:w-1/3 lg:w-1/2">
          <h2 className="text-5xl  text-black">FAQs</h2>
        </div>

 
        <div className="md:w-2/3 lg:w-3/4">
          {accordions.map((item, index) => (
            <div key={index} className="border-b border-slate-200 mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-5 text-black"
              >
                <span className="text-xl font-semibold">{item.question}</span>
                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-30" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-6 h-6"
                    strokeWidth="0.5"
                  >
                    <path
                      d={
                        activeIndex === index
                          ? "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" // Minus Icon
                          : "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" // Plus Icon
                      }
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="pb-5 text-lg text-black">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* mobile view */}
    <div className="bg-white block md:hidden text-black px-6 py-20 md:hidden">
  <h2 className="text-3xl font-bold mb-6">FAQs</h2>
  {accordions.map((item, index) => (
    <div key={index} className="border-b border-gray-300 mb-4">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center py-2 text-left"
      >
        <span className="text-base font-medium">{item.question}</span>
        <span
          className={`transition-transform duration-300 p-2 ${ 
            activeIndex === index ? "rotate-30" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5"
            strokeWidth="0.5"
          >
            <path
              d={
                activeIndex === index
                  ? "M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
                  : "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" 
              }
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeIndex === index ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="py-3 text-sm">{item.answer}</div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}
