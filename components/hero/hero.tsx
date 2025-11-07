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
      <div className="hidden lg:block">
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
                Explore different categories. Find the best deals. AG1 is a
                daily health drink packed with nutrients to help alleviate
                bloating.
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
      </div>
      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="bg-[#FAFAFA] pt-[144px] px-4">
          {/* 1 — Hero Section */}
          <div>
            <h2 className="text-[44px] font-[400] leading-[110%] text-[#01261E] max-w-[344px]">
              Feed your and knowledge and expand your knowledge
            </h2>

            <p className="text-[#121212] pt-[14px] text-[14px] font-[400] leading-[145%]">
              Explore different categories. Find the best deals. AG1 is a daily
              health drink packed with nutrients to help alleviate bloating.
            </p>

            <div className="pt-6">
              <button className="max-w-[111px] min-w-[20%] bg-[#01261E] py-[8px] px-[18px] text-center text-[14px] text-[#FAFAFA] rounded-[50px] font-[300] tracking-[0.14px]">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="bg-[#FAFAFA]">
          <div className="-mt-[40px]">
            <img
              src="/home/hero-image-new-mobile.png"
              alt="Home hero image"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* 2 — Trusted Companies */}
        <div className="pt-[20px] pb-[24px] overflow-hidden bg-[#FAFAFA]">
          <div className="relative w-full scroll-company-wrapper">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
            <div className="flex animate-scroll-company gap-6 sm:gap-10 items-center">
              {trustedCompanies
                .concat(trustedCompanies)
                .map((company, index) => (
                  <img
                    key={index}
                    src={company.logo}
                    alt={company.name}
                    className="w-[151px] h-[47px] object-contain"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
