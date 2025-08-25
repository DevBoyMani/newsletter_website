"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";
import Image from "next/image";

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
    src: "/readers/x.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "insta",
    src: "/readers/insta.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "ln",
    src: "/readers/ln.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "tiktok",
    src: "/readers/tiktok.png",
    href: "https://www.presidentialsummary.com/",
  },
  {
    name: "t",
    src: "/readers/t.png",
    href: "https://www.presidentialsummary.com/",
  },
];

export default function Footer() {
  return (
    <>
      {/* desktop view*/}
      <div className="hidden lg:block bg-[#01261E]">
        <div className="px-4 md:px-16 mx-auto z-10">
          {/* footer */}
          <div className="relative bg-[#01261E]">
            {/* Background Logo */}
            <div className="absolute -left-16 top-4 opacity-[100%] z-10">
              <img
                src="/readers/sagravia-footer-logo.png"
                alt="background logo"
                className="w-82"
              />
            </div>

            {/* Foreground Content */}
            <div className="py-20 flex justify-center relative z-10 ">
              <img
                src="/readers/sagravia-big-text.png"
                alt="sagravia"
                className=" w-[97%] px-4 py-2"
              />
            </div>

            <div className=" py-16 text-white relative z-10">
              <div className="max-w-[1710] mx-auto flex flex-col lg:flex-row justify-between gap-10">
                {/* left section */}
                <div className="lg:w-1/2">
                  <p className="text-[28px] lg:text-[36px] font-[400] pb-6 max-w-[592px]">
                    Subscribe to get tips and tactics to grow the way you want.
                  </p>
                  <ReadersSubscribe />
                </div>

                {/* right section */}
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
          {/* /footer */}
        </div>
      </div>

      {/* mobile view */}

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
