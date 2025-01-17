"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          fill
          className="-z-10 object-cover"
        />
        <div className="text-white px-4 md:px-16 py-20 lg:py-36 mx-auto ">
          <div className="text-center lg:text-left">
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

      {/* Bottom of the Hero Section */}
      <div className="bg-white">
        <div className="flex flex-col lg:flex-row text-black px-4 md:px-16 py-10 lg:py-12 mx-auto gap-4 lg:gap-0">
          <div className="lg:flex-[1] text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-2xl text-[#46DE46] mr-2 mt-1" />
              ))}
            </div>
            <h3 className="text-xl mt-4">100 verified 5-star reviews</h3>
          </div>
          <div className="lg:flex-[2] text-center lg:text-left">
            <h3 className="text-2xl italic">
              “I've seen our web traffic grow two or three times over.”
            </h3>
            <p className="py-4">- Jake Alexander, Upscaled Dubai</p>
          </div>
        </div>
      </div>

      {/* Advertise Section */}
      <div className="bg-[#F6F5F1]">
        <div className="flex flex-col lg:flex-row px-4 md:px-0 py-20 lg:py-20 max-w-7xl mx-auto gap-10 lg:gap-0">
          <div className="relative lg:flex-1 flex justify-center">
            <Image
              src="/w-advertise.png"
              fill
              className="lg:relative w-full lg:w-auto"
              alt="Advertise Banner"
            />
          </div>
          <div className="lg:flex-1 pl-0 lg:pl-20 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-2xl text-[#46DE46] mr-2 mt-1" />
              ))}
            </div>
            <h1 className="mt-8 mb-6 text-nl_background text-4xl sm:text-5xl leading-tight">
              ADVERTISE
            </h1>
            <p className="py-6">
              Advertise on newsletters that cater to your target demographics.
            </p>
            <ul className="list-none space-y-2 text-left lg:text-left">
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
            <p className="py-6">
              We'll do the legwork, from creating catchy copy to design.
            </p>
            <button
              onClick={() => setEmail("")}
              className="py-3 px-8 bg-[#0C3D3D] mt-4 sm:text-xl text-white text-center rounded-full hover:bg-[#46DE46] hover:text-black"
            >
              Speak to sales &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Bottom of the Advertise Section */}
      <div className="bg-white">
        <div className="px-4 md:px-16 py-10 lg:py-12 ">
          <h3 className="text-4xl">
            "Our newsletters are read by 100,000+ people"
          </h3>
          <p className="text-xl mt-4">
            Daily and weekly newsletters that cover topics from business history to global affairs
          </p>
          <button
            onClick={() => setEmail("")}
            className="py-3 px-8 mt-10 border border-[#0C3D3D] bg-white text-black text-center rounded-full hover:bg-[#46DE46]"
          >
            Advertise &rarr;
          </button>
        </div>
      </div>
    </>
  );
}
