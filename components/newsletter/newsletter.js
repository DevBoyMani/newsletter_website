
"use client";

import React from "react";

const Newsletter = ({ inform, handleAdd }) => {
  console.log("inform", inform);
  return (
    <a
      href={inform.website} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white shadow-md relative w-full h-full flex flex-col no-underline"
    >
      <div className="p-0 flex-1 bg-[#f6f5f1]">
        {/* Image Section */}
        <div className="mb-6 relative lg:h-54">
          <img
            src={inform.image}
            alt={inform.heading}
            className="rounded-t shadow-md object-cover lg:w-full lg:h-full h-80"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAdd(inform.id); 
            }}
            className={`absolute top-2 right-2 w-14 h-14 flex items-center justify-center rounded  hover:bg-[#46DE46] ${
              inform.selected ? "bg-[#46DE46]" : "bg-white"
            }`}
          >
            {inform.selected ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.8}
                stroke="black"
                className="w-8 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.8}
                stroke="black"
                className="w-10 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Content Section */}
        <div className="px-4 pt-1 pb-3">
          <h3 className="text-3xl font-bold">{inform.heading}</h3>
        </div>
        <div className="mb-5 px-4 text-xl">
          <p>{inform.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Newsletter;
