"use client";

import Image from 'next/image';
import styles from '../aboutOurCompany.module.css';
import HeadingWithUnderline from '../advertiseComponents/headingWithUnderline/headingwithUnderline';
import { useState } from "react";



export default function AboutOurStandards() {
    const [selected, setSelected] = useState("Relevance");

    const buttons = [
    {id:1,label: "Accuracy",p1:"We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust.",p2:"We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust.", top: "3%", left: "50%" },
    {id:2, label: "Quality",p1:"We prioritize thoughtful, curated content over volume. Every issue has to have true value. We prioritize thoughtful, curated content over volume. Every issue has to have true value.",p2:"We prioritize thoughtful, curated content over volume. Every issue has to have true value. We prioritize thoughtful, curated content over volume. Every issue has to have true value.", top: "20%", left: "80%" },
    {id:3, label: "Relevance",p1:"We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust.",p2:"We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust. We ensure every fact is checked and verified, making the content you can trust.", top: "70%", left: "88%" },
    {id:4, label: "Readers First",p1:"Our readers are at the heart of everything we do. We craft our newsletters to meet your needs, preferences, and passions.Our readers are at the heart of everything we do. We craft our newsletters to meet your needs, preferences, and passions.",p2:"Our readers are at the heart of everything we do. We craft our newsletters to meet your needs, preferences, and passions.Our readers are at the heart of everything we do. We craft our newsletters to meet your needs, preferences, and passions.", top: "93%", left: "53%" },
    {id:5, label: "Context",p1:"Not a newsflash: our readers are smart. So we provide the tools and links to dig deeper. We publish the details that help connect the dots. So we provide the tools and links to dig deeper. We publish the details that help connect the dots.",p2:"Not a newsflash: our readers are smart. So we provide the tools and links to dig deeper. We publish the details that help connect the dots. So we provide the tools and links to dig deeper. We publish the details that help connect the dots.", top: "70%", left: "15%" },
    {id:6, label: "Partners",p1:"We collaborate only with trusted partners who share our commitment to quality. We collaborate only with trusted partners who share our commitment to quality.",p2:"We collaborate only with trusted partners who share our commitment to quality. We collaborate only with trusted partners who share our commitment to quality.", top: "20%", left: "18%" },
  ];

  const activeContent = buttons.find(item => item.label === selected);
  return (

    <>
    <div className="px-4 md:px-28 md:py-20">
     <div className="flex lg:flex-row">
       {/* left */}
      <div className="w-[50%]">
        <div className="w-[80%]">
          <HeadingWithUnderline text="Our standards"/>

            {activeContent && (
            
                <div>
                    <h5 className='py-4 text-[22px] '>{activeContent.label}</h5>
                    <p>{activeContent.p1}</p>
                    <p>{activeContent.p2}</p>
                </div>
            
            )}

         
        </div>
      </div>

      {/* right */}
      <div className="w-[50%]">
       
        <div className="relative w-full flex justify-center items-center">
          {/* Orbit background image */}
          <video
            src="/about/our-standards.mp4"
            className="w-[92%] h-auto"
            autoPlay
            loop
            muted
            playsInline
            >
            Your browser does not support the video tag.
        </video>

        
      {/* Radio buttons around the circle */}
      {buttons.map((btn) => (
        <div
          key={btn.label}
          style={{
            top: btn.top,
            left: btn.left,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute flex flex-col items-center space-y-1 cursor-pointer"
          onClick={() => setSelected(btn.label)}
        >
            <span
            className={`text-xs ${
              selected === btn.label ? "font-bold text-black" : "text-gray-800"
            }`}
          >
            {btn.label}
          </span>
          <div
            className={`w-4 h-4 rounded-full border-4 transition-all ${
                selected === btn.label
                ? "border-[#00261E] bg-white"  
                : "border-transparent bg-[#00261E]" 
            }`}
            />
        </div>
      ))}

        </div>

      </div>
     </div>
    </div>
    
    </>
  );
}

