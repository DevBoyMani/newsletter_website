// "use client";
// import React, { useState } from "react";

// const Linkpages = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const testimonials = [
//     {
//       name: "Fashion",
//       author:"MARCHTEE, ELITE T-SHIRT MANUFACTURER",
//       quote: "Sagravia is an exceptional newsletter company that exceeded all expectations! Their advertising strategy was spot-on, helping my company sell out our entire t-shirt inventory in just a few hours during a one-week campaign. Their team is professional, creative, and highly effective at crafting messages that truly resonate with the audience. Sagravia delivers results beyond imagination—I highly recommend them to anyone looking for impactful marketing and incredible sales success!",
//       image: "/testimonials/1.jpg", // Replace with actual image URL
//     },
//     {
//       name: "Digital Marketing",
//       author:"SOCIAL BROKER, ACQUIRED ANY SOCIAL MEDIA HANDLE",
//       quote: "Sagravia is a game-changer! Their newsletter advertising helped my company sell out our entire t-shirt inventory in just a few hours. Their team is professional, innovative, and truly understands how to engage audiences. The results were beyond impressive, and the process was seamless from start to finish. If you’re looking for marketing that delivers quick, impactful results, Sagravia is the partner you need. Highly recommended for driving sales and success!",
//       image: "/testimonials/2.png", 
//     },
//     {
//       name: "Healthcare",
//       author:"HIMS, TELEHEALTH FOR MEN",
//       quote: "Sagravia is simply outstanding! Their newsletter campaign drove incredible results, selling out my entire t-shirt inventory in just a few hours during a one-week promotion. The team is sharp, efficient, and knows exactly how to captivate an audience. Their expertise turned my sales goals into a reality faster than I imagined. If you want marketing that truly works, Sagravia is the way to go. I couldn’t be happier with the results!",
//       image: "/testimonials/3.png", // Replace with actual image URL
//     },
//   ];

//   return (
//     <div className="text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20  lg:pb-20 mx-auto lg:min-h-[650px] ">
//       {/* Tabs */}
//       <div className="mb-8">
//         <h2 className="text-4xl font-semibold text-black">
//         Case studies: working with our advertising partners
//         </h2>
//       </div>
      
//       <div className="flex space-x-4 ">
//         {testimonials.map((testimonial, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveTab(index)}
//             className={`text-2xl px-4 py-2 mb-12 ${
//               activeTab === index
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-600 hover:text-black"
//             }`}
//           >
//             {testimonial.name}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="mt-6 flex flex-col md:flex-row items-center md:items-start">
//         {/* Left Content */}
//         <div className="md:w-1/2">
//           <p className="text-4xl text-gray-800 mb-8 leading-tight">{testimonials[activeTab].quote}</p>
//           <p className="mt-4 text-gray-700">
//             - {testimonials[activeTab].author}
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 ml-16">
//           <img
//             src={testimonials[activeTab].image}
//             alt={testimonials[activeTab].name}
//             className="w-[80%] h-auto  shadow-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Linkpages;

"use client";
import React, { useState } from "react";

const Linkpages = () => {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      name: "Fashion",
      author: "MARCHTEE, ELITE T-SHIRT MANUFACTURER",
      quote: "Sagravia is an exceptional newsletter company that exceeded all expectations! Their advertising strategy was spot-on, helping my company sell out our entire t-shirt inventory in just a few hours during a one-week campaign. Their team is professional, creative, and highly effective at crafting messages that truly resonate with the audience. Sagravia delivers results beyond imagination—I highly recommend them to anyone looking for impactful marketing and incredible sales success!",
      image: "/testimonials/1.jpg",
    },
    {
      name: "Digital Marketing",
      author: "SOCIAL BROKER, ACQUIRED ANY SOCIAL MEDIA HANDLE",
      quote: "Sagravia is a game-changer! Their newsletter advertising helped my company sell out our entire t-shirt inventory in just a few hours. Their team is professional, innovative, and truly understands how to engage audiences. The results were beyond impressive, and the process was seamless from start to finish. If you’re looking for marketing that delivers quick, impactful results, Sagravia is the partner you need. Highly recommended for driving sales and success!",
      image: "/testimonials/2.png",
    },
    {
      name: "Healthcare",
      author: "HIMS, TELEHEALTH FOR MEN",
      quote: "Sagravia is simply outstanding! Their newsletter campaign drove incredible results, selling out my entire t-shirt inventory in just a few hours during a one-week promotion. The team is sharp, efficient, and knows exactly how to captivate an audience. Their expertise turned my sales goals into a reality faster than I imagined. If you want marketing that truly works, Sagravia is the way to go. I couldn’t be happier with the results!",
      image: "/testimonials/3.png",
    },
  ];

  return (
    <div className="text-white px-4 md:px-16 py-20 lg:py-4 md:pb-20 lg:pb-20 mx-auto">
      {/* Tabs */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-black text-center md:text-left">
          Case studies: working with our advertising partners
        </h2>
      </div>

      <div className="flex flex-row md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {testimonials.map((testimonial, index) => (
          <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`text-lg sm:text-base md:text-2xl px-4 py-2 sm:px-6 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 ${
            activeTab === index
              ? "border-b-2 border-black text-black"
              : "text-gray-600 hover:text-black"
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
          <p className="text-xl md:text-2xl lg:text-4xl text-gray-800 mb-6 md:mb-8 leading-snug">
            {testimonials[activeTab].quote}
          </p>
          <p className="mt-4 text-gray-700">- {testimonials[activeTab].author}</p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8 flex justify-center">
          <img
            src={testimonials[activeTab].image}
            alt={testimonials[activeTab].name}
            className="w-full md:w-[80%] h-auto shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Linkpages;
