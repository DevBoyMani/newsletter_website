"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa"; 

export default function Hero() {
    const [email,setEmail] =useState("");
   
  return (
    <>
    <div className="relative bg-cover bg-center">
        <Image
            src="/hero.jpg"
            alt="Hero Image"
            fill
            className="-z-10 object-cover"
        />
        <div className="text-white px-4 md:px-16 py-20 lg:py-36  mx-auto lg:min-h-[650px]">
            <div>
            <h1 className="text-4xl sm:text-6xl leading-tight sm:leading-tight">
                Newsletter ads perform<br /> 20x better than <br />social media
            </h1>
            <p className="text-xl py-4">
                60,000+ Americans who trust our newsletters. Advertise with us to
                reach this engaged audience.
            </p>

            <button
                onClick={() => setEmail("")}
                className="py-3 px-8 bg-white mt-4 sm:text-xl text-black text-center rounded-full hover:bg-[#46DE46]"
            >
                Speak to sales &rarr;
            </button>
            </div>
        </div>
    </div>

{/* bottom of the hero section */}
    <div className="bg-white">
        <div className="flex text-black px-4 md:px-16 py-10 lg:py-12 mx-auto lg:min-h-[100px]">
            <div className="flex-[1]">
                <div className="flex items-center">
                   
                    {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-2xl text-[#46DE46] mr-2 mt-1" />
                    ))}
                </div>
                <h3 className="text-xl mt-4">100 verified 5-star reviews</h3>
            </div>
            <div className="flex-[2]">
                <h3 className="text-2xl italic">“I've seen our web traffic grow two or three times over.”</h3>
                <p className="py-4">- Jake Alexander, Upscaled Dubai</p>
            </div>
        </div>
    </div>

{/* advertise section */}

<div className="bg-[#F6F5F1]">
  <div className="flex  px-4 md:px-0 py-20 lg:py-20 max-w-7xl  lg:min-h-[650px] relative z-10">
    <div className="hidden pt-0 flex-1 lg:block relative">
      <Image
        src="/advertise.png"
        fill
        // objectFit="cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="advertise screen banner image"
      />
    </div>
    <div className="flex-1 pl-20">
      <div className="flex">
        <div className="flex items-center mr-4">
                    
          {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-2xl text-[#46DE46] mr-2 mt-1" />
             ))}
        </div>
        <div>
        <h3 className="text-xl mt-0">100 verified 5-star reviews</h3>
        </div>
      </div>
      <h1 className="mt-4 text-nl_background text-4xl sm:text-4xl leading-tight sm:leading-tight">
        ADVERTISE
      </h1>
      <p className="py-6">Advertise on newsletters that cater to your target demographics.</p>
        <ul className="list-none space-y-2">
            <li className="flex items-center">
                <span className="text-black font-bold mr-2">✓</span> Copywriting services included
            </li>
            <li className="flex items-center">
                <span className="text-black font-bold mr-2">✓</span> Ad design included
            </li>
            <li className="flex items-center">
                <span className="text-black font-bold mr-2">✓</span> Performance report included
            </li>
        </ul>
      <p className="py-6">We'll do the legwork, from creating catchy copy to design.</p>
      <button
        onClick={() => setEmail("")}
        className="py-3 px-8  bg-[#0C3D3D] mt-4 sm:text-xl  text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black">
         Speak to sales &rarr;
      </button>
    </div>
  </div>
</div>

{/* bottom of the advertise section*/}
<div className="bg-white">
        <div className="flex text-black px-4 md:px-16 py-10 lg:py-12 mx-auto lg:min-h-[100px]">
            <div className="">

                <div className="flex items-center ">
                <h3 className="text-4xl">
                "Our newsletters are read by 100,000+ people"
                </h3>
                   
                </div>
                <p className="text-xl mt-4">
                   Daily and weekly newsletters that cover topics from business history to global affairs
                </p>
                <button
                onClick={() => setEmail("")}
                className="py-3 px-8 mt-16 border border-[#0C3D3D] bg-white mt-4 sm:text-xl text-black text-center rounded-full hover:bg-[#46DE46]"
            >
                Advertise &rarr;
            </button>
            </div>
        </div>
    </div>


    </>
  );
}
