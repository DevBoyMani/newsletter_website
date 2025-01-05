"use client";
import { useState } from "react";

export default function Newsletters() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Multiple benefits section */}
      <div className="bg-white">
        <div className="text-black px-4 md:px-16 py-10 lg:py-12 mx-auto lg:min-h-[100px]">
          <div>
            <h3 className="text-[44px]">Multiple benefits in every scoop</h3>
            <p className="py-4 text-[22px]">
              Our scientists have carefully selected ingredients in forms that your body can absorb, and looked at how ingredients work together to amplify their effectiveness.*
            </p>
          </div>
          <button
            onClick={() => setEmail("")}
            className="py-3 px-8 bg-white mt-4 sm:text-xl text-black text-center rounded-full hover:bg-[#46DE46] border border-[#0c3d3d]"
          >
            Full Ingredient List
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-4 md:px-16">
        {/* Four square cards in 2x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array(4).fill(null).map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 mb-4  flex items-center justify-center">
                {/* Placeholder for icon or image */}
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Digestive support {index + 1}</h4>
              <p className="text-gray-600 text-sm">
              Calcium and biotin support digestion, ensuring that you feel your best and essential nutrients actually get to where they're needed. {index + 1}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
