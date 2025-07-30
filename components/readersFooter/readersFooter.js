"use client";

import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { ReadersSubscribe } from "../readersSubscribe/readersSubscribe";
import Image from "next/image";

const feedbackData = [
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Ava Wilson",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    userName: "Jaxx Sanchez",
    feedback:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
];

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

export default function ReadersFooter() {
  return (
    <>
      {/* review section */}
      <div className="hidden lg:block bg-[#01261E]">
        <div className="px-4 md:px-16 py-10 md:pt-[101px] mx-auto ">
          <div className="flex flex-col justify-center max-w-[730px] mx-auto text-center">
            <h2 className="text-[#FAFAFA] text-[56px] leading-[70px] font-[400] ">
              Sagravia is trusted by 200,000+ people worldwide
            </h2>
          </div>

          <div className="relative group overflow-hidden pb-[60px] pt-[50px]">
            {/* Gradient Overlays */}
            <div
              className="absolute top-0 left-0 h-full w-32 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #01261E 30.88%, rgba(1, 38, 30, 0) 96.5%)",
              }}
            />
            <div
              className="absolute top-0 right-0 h-full w-32 z-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(270deg, #01261E 30.88%, rgba(1, 38, 30, 0) 96.5%)",
              }}
            />

            {/* Auto-Scrolling Flex Container */}
            <div className="overflow-hidden">
              <div className="flex gap-6 px-8 animate-scroll-cards">
                {[...feedbackData, ...feedbackData].map((item, index) => (
                  <div
                    key={index}
                    className="w-[317px] h-auto bg-[#FFFFFF0D] pl-[17px] pr-[21px] py-[25px]  rounded-[10px] border border-[#FFFFFF33] shrink-0"
                  >
                    <div className="flex justify-center lg:justify-start pb-[16px]">
                      {[...Array(5)].map((_, id) => (
                        <Image
                          key={id}
                          src="/readers/reader-star.png"
                          alt="star"
                          width={18}
                          height={18}
                          className=""
                        />
                      ))}
                    </div>

                    <div className="text-[#ffffff]">
                      <p className="text-[16px] max-w-[279px] pb-[28px]">
                        {item.feedback}
                      </p>
                      <p className="text-[16px]">{item.userName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
            <div className="py-20 flex justify-center relative z-10">
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
                  <h2 className="text-[28px] font-[manrope] lg:text-[36px] font-[400] mb-6">
                    Subscribe to get tips and tactics to grow the way you want.
                  </h2>
                  <ReadersSubscribe />
                </div>

                {/* right section */}
                <div className="lg:w-1/2 flex flex-row justify-end text-[16px]">
                  <div className="flex space-x-16 mr-6">
                    <ul className="space-y-2 mr-7">
                      <li>Blog</li>
                      <li>Careers</li>
                      <li>Privacy Policy</li>
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
                <div className="px-4" key={index}>
                  <a href={item.href}>
                    <img src={item.src} alt={item.name} className="w-8 h-8" />
                  </a>
                </div>
              ))}
            </div>
            <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15]"></div>
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
        <div className=" md:px-16 pt-[66px] mx-auto ">
          <div className="px-4 flex flex-col justify-center mx-auto text-center">
            <h2 className="text-[#FAFAFA] text-[30px] leading-[normal] font-[400]">
              Sagravia is trusted by
              <br /> 200,000+ people
              <br /> worldwide
            </h2>
          </div>

          <div className="relative group overflow-hidden ">
            <div className="overflow-hidden">
              <div className="flex gap-6 pt-[60px] animate-scroll-cards">
                {[...feedbackData, ...feedbackData].map((item, index) => (
                  <div
                    key={index}
                    className="w-[317px] h-auto bg-[#FFFFFF0D] pl-[17px] pr-[21px] py-[25px] rounded-lg border border-[#FFFFFF33] shrink-0"
                  >
                    <div className="flex justify-start mb-2">
                      {[...Array(5)].map((_, id) => (
                        <Image
                          key={id}
                          src="/readers/reader-star.png"
                          alt="star"
                          width={18}
                          height={18}
                          className=""
                        />
                      ))}
                    </div>
                    <div className="text-[#ffffff]">
                      <p className="text-[16px] max-w-[279px]">
                        {item.feedback}
                      </p>
                      <p className="text-[16px] mt-4">{item.userName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="block lg:hidden bg-[#01261E] text-white">
            <div className="md:px-14 pt-12 ">
              <div className="px-4 pb-10">
                <div className="">
                  <Link href="/">
                    <div className="w-32 md:w-48">
                      <img src="/light-logo.png" alt="Logo" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" px-6">
                <div className="flex justify-between">
                  <div className="">
                    <ul className="flex flex-col mr-6">
                      <li className="text-[16px] font-[600] pb-4">More</li>

                      <li className="py-1 ">
                        <Link href="#" className="text-[14px] font-[400] ">
                          Blog
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Careers
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Legal
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="">
                    <ul className="flex flex-col">
                      <li className="text-[16px] font-[600] pb-4">
                        Learn more
                      </li>

                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          About Us
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Readers
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
                        <Link href="#" className="">
                          Advertise
                        </Link>
                      </li>
                      <li className="py-1 text-[14px] font-[400]">
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

              <div className="border-b-[0.5px] border-[#FFF] opacity-[0.15] py-2 mx-6"></div>

              <div className="text-[12px] text-center text-[#95A1BB] py-4">
                <p>© 2024 Sagravia | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
