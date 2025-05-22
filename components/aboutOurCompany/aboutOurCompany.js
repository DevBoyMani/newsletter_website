"use client";

import { useState } from "react";
import { Link } from "lucide-react";
import PublicHeadingWithUnderline from "../publicHeadingWithUnderline/publicHeadingWithUnderline";


export default function AboutOurCompany(){
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const areas = [
    { coords: "200,100,40", label: "Presidential Summary",content:"Global affairs and business news" },
    { coords: "400,80,40", label: "Geopolitical Summary",content:"International relations newsletter" },
    { coords: "420,230,40", label: "Business Highlights",content:"Global affairs and business news" },
    { coords: "420,410,40", label: "Entertainment News",content:"Global affairs and business news" },
    { coords: "200,410,40", label: "Cultural Affairs",content:"Global affairs and business news" },
  ];
    return(
        <div className="bg-[#FAFAFA] md:px-28">
            <div className="flex flex-col md:flex-row justify-start items-start py-10">
                {/* left */}
                <div className="w-full md:w-1/2">
                <PublicHeadingWithUnderline text="Our company"/>
                <div className="text-[#000] text-[18px] font-[400] leading-[135%] tracking-[0.36px]">
                    <p className="pt-8 pb-4">
                        We began as a single newsletter with one goal: delivering fresh, unbiased news to help you stay updated on the day’s most important topics. 
                    </p>
                     <p>
                       As we grew, we realized our audience's interests were diverse and ever-expanding. This inspired us to create a collection of specialized newsletters, each focused on a different subject, so you can dive deeper into everything that sparks your curiosity.
                    </p>
                </div>
                <div className="py-4">
                  
                    <a href="/">
                        <button className="group relative justify-center flex items-center  transition-all duration-500 ease-in-out text-[#01261E] hover:border-none hover:text-[#fff] hover:bg-[#01261E] hover:rounded-full">

                        <span className="w-8 h-8 flex items-center justify-center text-white bg-[#01261E] rounded-full">
                            &#10095;
                        </span>
                        <span className=" text-[16px] font-[500] leading-normal px-4">
                            View Newsletters
                        </span>
                    </button>
                    </a> 
                </div>


                </div>
                {/* right */}
                <div className="relative w-full md:w-1/2 px-10 ml-10">
                <img
                    src="/about/our-company-right-image.png"
                    alt="our-company-right-image"
                    useMap="#image-map"
                    className="w-[500px] h-auto"
                />
                <map name="image-map">
                    {areas.map((area, index) => (
                    <area
                        key={index}
                        shape="circle"
                        coords={area.coords}
                        alt={area.label}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        href="#"
                    />
                    ))}
                </map>
                {/* {areas.map((area, index) => {
                    const [x, y, r] = area.coords.split(",").map(Number);
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                            // Optional: Navigate to a section, open modal, etc.
                            console.log("Clicked:", area.label);
                        }}
                        className={`absolute rounded-full border-2 transition-all duration-300 ${
                            isHovered ? "bg-[#01261E] border-[#01261E]" : "bg-white border-gray-400"
                        }`}
                        style={{
                            top: `${y - r}px`,
                            left: `${x - r}px`,
                            width: `${r * 2}px`,
                            height: `${r * 2}px`,
                            cursor: "pointer",
                            zIndex: 10,
                        }}
                        title={area.label}
                        />
                    );
                    })} */}


                {/* Tooltip overlays */}
                {areas.map((area, index) => {
                    const [x, y, r] = area.coords.split(",").map(Number);
                    return (
                    hoveredIndex === index && (
                        <div
                        key={index}
                        className="absolute bg-black text-white text-sm px-3 py-2 rounded shadow-lg"
                        style={{
                            top: y - r - 40,
                            left: x - r,
                            transform: "translate(-50%, -50%)",
                        }}
                        >
                        <strong>{area.label}</strong>
                        <p>{area.content}</p>
                        </div>
                    )
                    );
                })}
                </div>
            </div>
        </div>
    )
}