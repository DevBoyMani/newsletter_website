"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";
import Image from "next/image";
import { useState } from "react";

const socialMediaIcons = [
  {
    name: "x",
    src: "/f-x.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "insta",
    src: "/f-insta.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "fb",
    src: "/f-fb.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "ln",
    src: "/f-ln.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "threads",
    src: "/f-threads.png",
    href: "https://www.presidentialsummary.com/",
  },
];

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const handleCopy = () => {
    const email = "careers@sagravia.com";

    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1500); // Hide after 1.5 seconds
    });
  };
  return (
    <>
      {/* desktop view*/}
      <div id="site-footer" className="bg-[#01261E] hidden lg:block">
        <div className="pt-[120px] px-[110px]">
          <div className="flex flex-row justify-between items-start">
            {/* left */}
            <div>
              <p className="text-[#C7A262] text-[16px] font-[500] leading-[49px]">
                CONTACT US
              </p>
              <h2 className="w-[464px] text-[40px] font-[manrope] font-[400] leading-[49px] text-[#fff]">
                Serious readers. Smart brands. The connection starts here.
              </h2>

              {/* Email box */}
              <div className="flex items-center justify-between w-fit mt-[36px] px-[26px] py-[5.5px] rounded-[44px] border border-dashed border-[#EFEFEF57] bg-[#DAEBE84A] gap-3">
                <p className="text-[#fff] text-[17px] font-[300] leading-[31px] tracking-[-0.167px]">
                  sales@houseofsummary.com
                </p>
                <img
                  src="/home/copy.png"
                  alt="copy-icon"
                  className="w-4 h-5 cursor-pointer"
                  onClick={handleCopy}
                />
              </div>

              {/* Popup */}
              {showPopup && (
                <div className="absolute ml-40 -mt-[70px] bg-[#000] text-white text-xs px-3 py-1 rounded-md shadow-md z-10 whitespace-nowrap">
                  Email copied!
                </div>
              )}
            </div>

            {/* right */}
            <div className="flex flex-row gap-[70px] font-[manrope] text-[16px] font-[400]">
              {/* 1 */}
              <ul>
                <li className="tracking-[0.16px] text-[#fff]">COMPANY</li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/about">About us</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/careers">Careers</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              {/* 2 */}
              <ul>
                <li className="tracking-[0.16px] text-[#fff]">NAVIGATION</li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/advertise">Advertise</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/readers">Readers</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/analytics">Analytics</Link>
                </li>
                {/* <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/blog">Blog</Link>
                </li> */}
              </ul>

              {/* 3 */}
              <ul>
                <li className="tracking-[0.16px] text-[#fff]">LEGAL</li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/policy">Privacy policy</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/policy">Terms of use</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/policy">Cookie policy</Link>
                </li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/policy">Refund policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-[40px] mt-[136px]">
              <div className="flex flex-row gap-[11px] items-center">
                <img
                  src="/whatsapp-us-qr.png"
                  alt="whatsapp qr"
                  className="w-[72px] h-[72px] object-contain rounded-[6px]"
                />
                <div>
                  <p className="text-[#fff] text-[16px] font-[500] ">
                    WHATSAPP US
                  </p>
                  <p className="text-[#FFFFFF80] w-[175px] pt-[7px] leading-[130%]">
                    Scan and send us a WhatsApp message
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[11px] items-center">
                <img
                  src="/text-us-qr.png"
                  alt="text qr"
                  className="w-[72px] h-[72px] object-contain rounded-[6px]"
                />
                <div>
                  <p className="text-[#fff] text-[16px] font-[500] ">TEXT US</p>
                  <p className="text-[#FFFFFF80] w-[175px] pt-[7px] leading-[130%]">
                    Scan and send
                    <br /> us an SMS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] mt-[26px]"></div>
          <div className="pt-[80px]">
            <div className="flex flex-row items-center justify-between">
              <div className="text-[#fff] text-[16px] font-[400] leading-[49px]">
                © 2025 House of Summary. All rights reserved.
              </div>
              <div className="flex justify-end items-center">
                {socialMediaIcons.map((item, index) => (
                  <div className="pl-[10px] " key={index}>
                    <a href={item.href}>
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-[24px] h-[24px]"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-[68px]">
            <div className="relative flex justify-center items-center">
              <img
                src="/home/footer-summary.png"
                alt="Summary banner"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      {/* id="mob-site-footer" */}
      <div className="block lg:hidden bg-[#01261E]">
        <div className="px-4 py-[34px] mx-auto ">
          <div className="bg-[#01261E] text-white">
            <div className="px-4 pb-10">
              <Link href="/">
                <div className="w-32 md:w-48">
                  <img src="/light-logo.png" alt="Logo" />
                </div>
              </Link>

              {/* <div className="text-sm py-1 space-y-2">
                            <p>The place where newsletters live</p>
                            <p>Your trusted messenger</p>
                        </div> */}
            </div>

            <div className=" px-4">
              <div className="flex justify-between">
                {/* left */}
                <ul className="flex flex-col mr-6">
                  <li className="text-[16px] font-[600] pb-[12px]">Legal</li>

                  {/* <li className="py-1 ">
                        <Link href="#" className="text-[14px]">
                          Blog
                        </Link>
                      </li> */}
                  <li className="py-1 text-[14px]">
                    <Link href="/policy" className="font-[400]">
                      Privacy policy
                    </Link>
                  </li>
                  <li className="py-1 text-[14px] font-[400]">
                    <Link href="/policy">Terms of use</Link>
                  </li>
                  <li className="py-1 text-[14px]">
                    <Link href="/policy" className="font-[400]">
                      Cookie policy
                    </Link>
                  </li>
                  <li className="py-1 text-[14px]">
                    <Link href="/policy" className="font-[400]">
                      Refund policy
                    </Link>
                  </li>
                </ul>
                {/* right */}
                <ul className="flex flex-col">
                  <li className="text-[16px] font-[600] pb-[12px]">More</li>

                  <li className="py-1 text-[14px]">
                    <Link href="/about" className="font-[400]">
                      About Us
                    </Link>
                  </li>
                  <li className="py-1 text-[14px]">
                    <Link href="/readers" className="font-[400]">
                      Readers
                    </Link>
                  </li>
                  <li className="py-1 text-[14px]">
                    <Link href="/advertise" className="font-[400]">
                      Advertise
                    </Link>
                  </li>
                  <li className="py-1 text-[14px]">
                    <Link href="/analytics" className="font-[400]">
                      Analytics
                    </Link>
                  </li>
                  <li className="py-1 text-[14px]">
                    <Link href="/contact" className="font-[400]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className="pt-12 ">
                  <ul className="flex flex-col ">
                    <li className="text-[16px] font-semibold pb-4">
                      Contact Us
                    </li>

                    <li href="#" className="py-1 text-[14px]">
                      <Link href="#" className="">
                        info@sagravia.com
                      </Link>
                    </li>
                    <li href="#" className="py-1 text-[14px]">
                      <Link href="#" className="">
                        +1-2345-6789
                      </Link>
                    </li>
                    <li href="#" className="py-1 text-[14px]">
                      <Link href="#" className="">
                        123 Ave, New York, USA
                      </Link>
                    </li>
                  </ul>
                </div> */}
            </div>

            {/* social icons */}
            <div className="pt-[52px] px-4 flex justify-center">
              <div className="flex space-x-6 ">
                {socialMediaIcons.map((icons, index) => (
                  <a key={index} href={icons.href} target="_blank">
                    <img
                      src={icons.src}
                      alt={icons.name}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* divider */}
            <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] pt-[20px] mx-6"></div>

            <div className="text-[12px] font-[400] text-center text-[#95A1BB] pt-2 leading-[22px]">
              <p>
                © 2025 House of Summary
                <br /> All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
