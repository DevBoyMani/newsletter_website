"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  const [email, setEmail] = useState("");
  const trustedCompanies = [
    { id: 1, name: "autio", logo: "/home/autio.png" },
    { id: 2, name: "Going", logo: "/home/going.png" },
    { id: 3, name: "an", logo: "/home/an.png" },
    { id: 4, name: "gagg", logo: "/home/gagg.png" },
    { id: 5, name: "guide", logo: "/home/guide.png" },
  ];

  return (
    <>
      {/* desktop */}
      <div className="bg-[#FAFAFA]">
        {/* 1 */}
        <div className="pt-[142px] pl-[110px] flex">
          {/* left */}
          <div className="w-[41%]">
            <h2
              className={` w-full text-[80px] font-[400] leading-[94%] text-[#01261E] shadow-[0_4px_4px_rgba(31,25,25,0.00)]`}
            >
              Feed your and knowledge and expand your knowledge
            </h2>
            <p
              className={`text-[#121212] pt-[32px] w-[455px] text-[18px] font-[400] leading-[168%]`}
            >
              Explore different categories. Find the best deals. AG1 is a daily
              health drink packed with nutrients to help alleviate bloating.
            </p>
            <div className="pt-[32px]">
              {/* w-[43%] */}
              <button className="w-[238px] bg-[#01261E] hover:bg-[#0B4337] py-[9px] px-[18px] text-[center] text-[19px] text-[#fff] rounded-[57px] leading-normal font-[400]">
                Get started for free
              </button>
            </div>
          </div>
          {/* right */}
          <div className="w-[59%]">
            <div className="relative right-0">
              <img
                src="/home/hero-image-new.png"
                alt="Home hero image"
                className=""
              />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="px-[110px] py-[41px] pt-[90px] pb-[40px]">
          <div className="flex">
            <div className="w-[30%] font-[Manrope] text-[14px] font-[300] leading-[169%] tracking-[2.5px] uppercase">
              Trusted by thousands of companies in 100+ countries
            </div>
            <div className="w-[70%]">
              <div className="flex flex-wrap justify-end items-center gap-[40px]">
                {trustedCompanies.map((company) => (
                  <img
                    key={company.id}
                    src={company.logo}
                    alt={company.name}
                    className="w-[100px] h-[47px] object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
    </>
  );
}
