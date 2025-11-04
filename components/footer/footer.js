"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";
import Image from "next/image";
import { useState } from "react";

// const feedbackData = [
//   {
//     userName: "Ava Wilson",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Jaxx Sanchez",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Ava Wilson",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Jaxx Sanchez",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Ava Wilson",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Jaxx Sanchez",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Ava Wilson",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },
//   {
//     userName: "Jaxx Sanchez",
//     feedback:
//       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
//   },

// ];

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

      {/* old footer */}
      {/* <div id="site-footer" className="hidden lg:block bg-[#01261E]">
        <div className="px-4 md:px-16 mx-auto z-10">
      
          <div className="relative bg-[#01261E]">
          
            <div className="absolute -left-16 top-1 opacity-[100%] z-10">
              <img
                src="/readers/sagravia-footer-logo.png"
                alt="background logo"
                className="w-82"
              />
            </div>

         
            <div className="py-20 flex justify-center relative z-0 ">
              <img
                src="/readers/sagravia-big-text.png"
                alt="sagravia"
                className=" w-[97%] -mt-6 ml-6"
              />
            </div>

            <div className=" py-16 text-white relative z-10">
              <div className="max-w-[1710] mx-auto flex flex-col lg:flex-row justify-between gap-10">
          
                <div className="lg:w-1/2">
                  <p className="text-[28px] lg:text-[36px] font-[400] pb-6 max-w-[592px]">
                    Subscribe to get tips and tactics to grow the way you want.
                  </p>
                  <ReadersSubscribe />
                </div>


                <div className="lg:w-1/2 flex flex-row justify-end text-[16px]">
                  <div className="flex space-x-16 mr-0">
                    <ul className="space-y-2 mr-7">
                      <li>Blog</li>
                      <li>Careers</li>
                      <li>
                        <Link target="_blank" href="/policy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>Legal</li>
                    </ul>
                    <ul className="space-y-2 ">
                      <li>About Us</li>
                      <li>For Readers</li>
                      <li>Advertise</li>
                      <li>Analytics</li>
                      <li>Contact Sales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end pb-8">
              {socialMediaIcons.map((item, index) => (
                <div className="pl-[35px]" key={index}>
                  <a href={item.href}>
                    <img src={item.src} alt={item.name} className="w-8 h-8" />
                  </a>
                </div>
              ))}
            </div>
            <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] "></div>
            <div className="flex justify-center py-10">
              <p className="text-[14px] text-[#ffffff]">
                © 2024 Sagravia | All Rights Reserved
              </p>
            </div>
          </div>

        </div>
      </div> */}
      {/* old footer */}

      {/* new */}
      <div id="site-footer" className="bg-[#01261E] hidden lg:block">
        <div className="pt-[120px] px-[110px]">
          <div className="flex flex-row justify-between items-start">
            {/* left */}
            <div>
              <p className="text-[#C7A262] text-[16px] font-[500] leading-[49px]">
                CONTACT US
              </p>
              <h2 className="w-[464px] text-[40px] font-[manrope] font-[500] leading-[49px] text-[#fff]">
                Let’s Discuss Your Vision. Advertise with us
              </h2>

              {/* Email box */}
              <div className="flex items-center justify-between w-fit mt-[40px] px-[26px] py-[5.5px] rounded-[44px] border border-dashed border-[#EFEFEF57] bg-[#DAEBE84A] gap-3">
                <p className="text-[#fff] text-[17px] font-[300] leading-[31px] tracking-[-0.167px]">
                  advertise@hos.com
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
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>

              {/* 3 */}
              <ul>
                <li className="tracking-[0.16px] text-[#fff]">LEGAL</li>
                <li className="text-[#EFEDFD99] pt-4">
                  <Link href="/policy">Legal</Link>
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
                  src="/home/whatsapp-qr.png"
                  alt="whatsapp qr"
                  className="w-[72px] h-[72px] object-contain"
                />
                <div>
                  <p className="text-[#fff] text-[16px] font-[500] ">
                    WHATSAPP US
                  </p>
                  <p className="text-[#FFFFFF80] w-[175px] pt-[7px] leading-[130%]">
                    Use your phone to try the feature via QR code
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[11px] items-center">
                <img
                  src="/home/text-us-qr.png"
                  alt="text qr"
                  className="w-[72px] h-[72px] object-contain"
                />
                <div>
                  <p className="text-[#fff] text-[16px] font-[500] ">TEXT US</p>
                  <p className="text-[#FFFFFF80] w-[175px] pt-[7px] leading-[130%]">
                    Use your phone to try the feature via QR code
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] mt-[26px]"></div>
          <div className="pt-[80px]">
            <div className="flex flex-row items-center justify-between">
              <div className="text-[#fff] text-[16px] font-[400] leading-[49px] uppercase ">
                © 2025 House of Summary. All rights reserved.
              </div>
              <div className="flex justify-end items-center">
                {socialMediaIcons.map((item, index) => (
                  <div className="pl-[10px] " key={index}>
                    <a href={item.href}>
                      <img
                        src={item.src}
                        alt={item.name}
                        className="w-[18px] h-[18px]"
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
      {/* new */}
      {/* desktop view*/}

      {/* mobile view */}
      {/* id="mob-site-footer" */}
      <div className="block lg:hidden bg-[#01261E]">
        <div className="px-4 py-9 mx-auto ">
          <div className="block lg:hidden bg-[#01261E] text-white">
            <div className="md:px-14">
              <div className="px-4 pb-10">
                <div className="">
                  <Link href="/">
                    <div className="w-32 md:w-48">
                      <img src="/light-logo.png" alt="Logo" />
                    </div>
                  </Link>
                </div>
                {/* <div className="text-sm py-1 space-y-2">
                            <p>The place where newsletters live</p>
                            <p>Your trusted messenger</p>
                        </div> */}
              </div>

              {/* right */}
              <div className=" px-6">
                <div className="flex justify-between">
                  <div className="">
                    <ul className="flex flex-col mr-6">
                      <li className="text-[16px] font-semibold pb-4">More</li>

                      <li className="py-1 ">
                        <Link href="#" className="text-[14px]">
                          Blog
                        </Link>
                      </li>
                      <li className="py-1 text-[14px]">
                        <Link href="#" className="">
                          Careers
                        </Link>
                      </li>
                      <li className="py-1 text-[14px]">
                        <Link target="_blank" href="/policy">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="py-1 text-[14px]">
                        <Link href="#" className="">
                          Legal
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="flex flex-col">
                      <li className="text-[16px] font-semibold pb-4">
                        Learn more
                      </li>

                      <li className="py-1 text-[14px]">
                        <Link href="#" className="">
                          About Us
                        </Link>
                      </li>
                      <li className="py-1 text-[14px]">
                        <Link href="#" className="">
                          Readers
                        </Link>
                      </li>
                      <li className="py-1 text-[14px]">
                        <Link href="#" className="">
                          Advertise
                        </Link>
                      </li>
                      <li className="py-1 text-[14px]">
                        <Link href="#" className="">
                          Analytics
                        </Link>
                      </li>
                    </ul>
                  </div>
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
              <div>
                <div className="pt-14 px-4 flex justify-center pb-1">
                  <div className="flex space-x-6 ">
                    {socialMediaIcons.map((icons, index) => (
                      <a key={index} href={icons.href} target="_blank">
                        <img
                          src={icons.src}
                          alt={icons.name}
                          className="w-6 h-6 cursor-pointer"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] py-2 mx-6"></div>

              <div className="text-[12px] text-center text-[#95A1BB] pt-4">
                <p>© 2024 Sagravia | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
