"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  const [email, setEmail] = useState("");
  const trustedCompanies = [
    { id: 1, name: "autio", logo: "/home/autio.png" },
    // { id: 2, name: "Going", logo: "/home/going.png" },
    { id: 2, name: "Zoho", logo: "/home/zoho.png" },
    { id: 3, name: "an", logo: "/home/an.png" },
    { id: 4, name: "gagg", logo: "/home/gagg.png" },
    { id: 5, name: "guide", logo: "/home/guide.png" },
  ];

  const trustedCompaniesMob = [
    { id: 1, name: "autio", logo: "/home/autio-mob.png" },
    // { id: 2, name: "Going", logo: "/home/going.png" },
    { id: 2, name: "Zoho", logo: "/home/zoho-mob.png" },
    { id: 3, name: "an", logo: "/home/an-mob.png" },
    { id: 4, name: "gagg", logo: "/home/gaggenau-mob.png" },
    { id: 5, name: "guide", logo: "/home/guide-mob.png" },
  ];

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="bg-[#FAFAFA]">
          {/* 1 */}
          <div className="pt-[142px] pl-[110px] flex">
            {/* left */}
            <div className="w-[50%]">
              <h2
                className={` w-full text-[80px] font-[400] leading-[94%] text-[#01261E] shadow-[0_4px_4px_rgba(31,25,25,0.00)]`}
              >
                Summary is where decision makers read, and the right brands are
                seen.
              </h2>
              <p
                className={`text-[#121212] pt-[32px] w-[455px] text-[18px] font-[400] leading-[168%]`}
              >
                In a world full of AI summaries, ours are written by humans. In
                a world full of noise, our audience comes here to think. Reach
                them here.
              </p>
              <div className="pt-[32px]">
                {/* w-[43%] */}
                <button className="w-[238px] bg-[#01261E] hover:bg-[#0B4337] py-[9px] px-[18px] text-[center] text-[19px] text-[#fff] rounded-[57px] leading-normal font-[400]">
                  Advertise your brand
                </button>
              </div>
            </div>
            {/* right */}
            <div className="w-[50%]">
              <div className="relative right-0">
                <img
                  src="/home/hero-image-new.png"
                  alt="Home hero image"
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="px-[110px] py-[41px] pt-[90px] pb-[40px]">
            <div className="flex">
              <div className="w-[30%] font-[Manrope] text-[14px] font-[300] leading-[169%] tracking-[2.5px] uppercase">
                Trusted by reliable partners who share our mission globally
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
              Summary is where decision makers read, and the right brands are
              seen.
            </h2>

            <p className="text-[#121212] pt-[14px] text-[14px] font-[400] leading-[145%]">
              In a world full of AI summaries, ours are written by humans. In a
              world full of noise, our audience comes here to think. Reach them
              here.
            </p>

            <div className="pt-6">
              <button className="w-[111px] sm:w-[118px] bg-[#01261E] py-[8px] px-[18px] text-center text-[14px] text-[#FAFAFA] rounded-[50px] font-[300] tracking-[0.14px]">
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
            <div className="flex animate-scroll-company items-center">
              {trustedCompaniesMob
                .concat(trustedCompaniesMob)
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
