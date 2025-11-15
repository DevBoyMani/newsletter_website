"use client";

import Image from "next/image";
import styles from "../aboutOurCompany.module.css";
import HeadingWithUnderline from "../advertiseComponents/headingWithUnderline/headingwithUnderline";

const newsletters = [
  {
    name: "Presidential Summary",
    description: "Global affairs and business news",
    icon: "/icons/presidential.png",
    style: { top: "0%", left: "50%", transform: "translate(-50%, 0)" },
  },
  {
    name: "Long & Short",
    description: "Markets and investing",
    icon: "/icons/longshort.png",
    style: { top: "20%", left: "85%", transform: "translate(-50%, -50%)" },
  },
  {
    name: "Business History",
    description: "Stories of great businesses",
    icon: "/icons/businesshistory.png",
    style: { top: "65%", left: "85%", transform: "translate(-50%, -50%)" },
  },
  {
    name: "Cinema Weekly",
    description: "Top movie picks and reviews",
    icon: "/icons/cinema.png",
    style: { top: "90%", left: "50%", transform: "translate(-50%, -100%)" },
  },
  {
    name: "Geopolitical Summary",
    description: "World politics insights",
    icon: "/icons/geopolitical.png",
    style: { top: "65%", left: "10%", transform: "translate(-50%, -50%)" },
  },
  {
    name: "Urban India",
    description: "Life, cities, and society",
    icon: "/icons/urban.png",
    style: { top: "20%", left: "10%", transform: "translate(-50%, -50%)" },
  },
];

export default function AboutOurCompany() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:flex">
        <div className="px-4 md:px-28 md:py-10">
          <div className="flex lg:flex-row">
            {/* left */}
            <div className="w-[50%]">
              <div className="w-[80%]">
                <HeadingWithUnderline text="Our company" />

                <p className="pt-8 text-[#000] text-[18px] font-[400] leading-[135%] tracking-[0.36px]">
                  We began as a single newsletter with a simple purpose: to
                  deliver news that is clear, factual, and useful. No noise, no
                  sensationalism, no guessing games.
                </p>

                <p className="py-4 text-[#000] text-[18px] font-[400] leading-[135%] tracking-[0.36px]">
                  As our readership grew, we learned something important. People
                  wanted the same level of clarity in more areas of life. So we
                  expanded carefully and deliberately. Today, we are a network
                  of specialized newsletters, each written by people who know
                  their field and care about getting it right.
                </p>

                <div className="md:w-[32%] w-full mt-6">
                  <a
                    href="/"
                    className="block text-center bg-[#01261E] hover:bg-[#014134] text-white text-[14px] font-[600] px-4 py-2 rounded-full w-full"
                  >
                    View Newsletters
                  </a>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="w-[50%]">
              <div className="relative w-full flex justify-center items-center">
                {/* Orbit background image */}
                <img
                  src="/about/roll-with-nls.png"
                  alt="Orbit"
                  className="w-[92%] h-auto"
                />

                {/* Icon 1 - Top Left (Capitol icon) */}
                <div className="absolute top-[15%] left-[30%] group">
                  <a
                    href="https://www.presidentialsummary.com/"
                    target="_blank"
                  >
                    <img
                      src="/about/ps-round.png"
                      alt="Capitol"
                      className="w-10 h-10 bg-[#4D3060] hover:bg-[#684182] rounded-full"
                    />
                  </a>
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10 ">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        Presidential Summary
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        Global affairs and
                        <br /> business news
                      </p>
                    </div>

                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div>

                {/* Icon 2 - Top Right (Blue stripes icon) */}
                <div className="absolute top-[12%] right-[25%] group">
                  <a
                    href="https://www.geopoliticalsummary.com/"
                    target="_blank"
                  >
                    <img
                      src="/about/gs-round.png"
                      alt="Stripes"
                      className="w-10 h-10 bg-[#06266D] hover:bg-[#0A338C] rounded-full"
                    />
                  </a>
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        Geopolitical Summary
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        International relations
                        <br /> newsletter
                      </p>
                    </div>

                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div>

                {/* Icon 3 - Middle Right (B&H) */}
                {/* <div className="absolute top-[38%] right-[23%] group">
                  <a href="https://www.businesshistory.co/" target="_blank">
                    <img
                      src="/about/bh-round.png"
                      alt="B&H"
                      className="w-10 h-10 bg-[#8E3321] hover:bg-[#A23E2B] rounded-full"
                    />
                  </a>
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        Business History
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        Historical business
                        <br />
                        knowledge
                      </p>
                    </div>

                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div> */}

                {/* Icon 4 - Bottom Right ms */}
                {/* <div className="absolute bottom-[16%] right-[32%] group">
                  <a href="https://www.moviesuggestions.com/" target="_blank">
                    <img
                      src="/about/ms-round.png"
                      alt="Film"
                      className="w-10 h-10 bg-[#161B21] hover:bg-[#2D3844] rounded-full"
                    />
                  </a>
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        Movie Suggestions
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        A weekly roundup of
                        <br /> movie reviews & news
                      </p>
                    </div>

                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div> */}

                {/* london */}
                <div className="absolute bottom-[16%] right-[32%] group">
                  <a href="https://www.londonsummary.com/" target="_blank">
                    <img
                      src="/about/london-round.png"
                      alt="london"
                      className="w-10 h-10 bg-[#80011F] hover:bg-[#AA0028] rounded-full object-contain p-1"
                    />
                  </a>
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        London Summary
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        Capital, historical, diverse, modern
                      </p>
                    </div>

                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div>

                {/* Icon 5 - Bottom Left (Building) */}
                {/* <div className="absolute bottom-[32%] left-[27%] group">
                  <a href="https://www.longandshort.com/" target="_blank">
                    <img
                      src="/about/ls-round.png"
                      alt="Building"
                      className="w-10 h-10 bg-[#6A6F5B] hover:bg-[#737961] rounded-full"
                    />
                  </a>
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        Long and Short
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        Insider news for the world
                        <br /> of finance
                      </p>
                    </div>

                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div> */}

                {/* Icon 6 - Dubai summary */}
                <div className="absolute top-[40%] left-[9%] group w-10 h-10">
                  {/* Normal Image */}
                  <a href="https://www.dubaisummary.com/" target="_blank">
                    <img
                      src="/about/ds-1.png"
                      alt="normal"
                      className="w-full h-full bg-[#102341] rounded-full absolute top-0 left-0 opacity-100 group-hover:opacity-0"
                    />

                    {/* Hover Image */}
                    <img
                      src="/about/ds-hover.png"
                      alt="Capitol Hover"
                      className="w-full h-full bg-[#102341] rounded-full absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                    />
                  </a>

                  {/* Tooltip */}
                  <div className="absolute -top-[65px] left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs px-[15px] py-1 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-[185px]">
                      <p className="text-[12px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                        Dubai Summary
                      </p>
                      <p className="text-[12px] text-center leading-[135%] tracking-[0.24px]">
                        Explore Dubai careers with
                        <br /> our guidance
                      </p>
                    </div>
                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden px-4">
        <div className="">
          <HeadingWithUnderline text="Our company" />

          <p className="pt-4 text-[#000] text-[14px] font-[400] leading-normal ">
            We began as a single newsletter with a simple purpose: to deliver
            news that is clear, factual, and useful. No noise, no
            sensationalism, no guessing games.
          </p>

          <p className="py-4 text-[#000] text-[14px] font-[400] leading-normal ">
            As our readership grew, we learned something important. People
            wanted the same level of clarity in more areas of life. So we
            expanded carefully and deliberately. Today, we are a network of
            specialized newsletters, each written by people who know their field
            and care about getting it right.
          </p>

          <div className="w-fit mt-2">
            <a
              href="/"
              className="block text-center bg-[#01261E] hover:bg-[#014134] text-[#FAFAFA] text-[14px] font-[300] tracking-[0.14px] px-4 py-2 rounded-full "
            >
              View Newsletters
            </a>
          </div>
        </div>

        <div className="mt-8">
          <div className="relative w-full flex justify-center items-center">
            {/* Orbit background image */}
            <img
              src="/about/roll-with-nls.png"
              alt="Orbit"
              className="w-[92%] h-auto"
            />

            {/* Icon 1 - Top Left (Capitol icon) */}
            <div className="absolute top-[15%] left-[30%] group">
              <a href="https://www.presidentialsummary.com/" target="_blank">
                <img
                  src="/about/ps-round.png"
                  alt="Capitol"
                  className="w-8 h-8 bg-[#4D3060] hover:bg-[#684182] rounded-full"
                />
              </a>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10 ">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    Presidential Summary
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    Global affairs and
                    <br /> business news
                  </p>
                </div>

                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div>

            {/* Icon 2 - Top Right (Blue stripes icon) */}
            <div className="absolute top-[12%] right-[25%] group">
              <a href="https://www.geopoliticalsummary.com/" target="_blank">
                <img
                  src="/about/gs-round.png"
                  alt="Stripes"
                  className="w-8 h-8 bg-[#06266D] hover:bg-[#0A338C] rounded-full"
                />
              </a>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    Geopolitical Summary
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    International relations
                    <br /> newsletter
                  </p>
                </div>

                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div>

            {/* Icon 3 - Middle Right (B&H) */}
            {/* <div className="absolute top-[38%] right-[23%] group">
              <a href="https://www.businesshistory.co/" target="_blank">
                <img
                  src="/about/bh-round.png"
                  alt="B&H"
                  className="w-8 h-8 bg-[#8E3321] hover:bg-[#A23E2B] rounded-full"
                />
              </a>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    Business History
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    Historical business
                    <br />
                    knowledge
                  </p>
                </div>

                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div> */}

            {/* Icon 4 - Bottom Right (Film roll) */}
            {/* <div className="absolute bottom-[14%] right-[32%] group">
              <a href="https://www.moviesuggestions.com/" target="_blank">
                <img
                  src="/about/ms-round.png"
                  alt="Film"
                  className="w-8 h-8 bg-[#161B21] hover:bg-[#2D3844] rounded-full"
                />
              </a>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    Movie Suggestions
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    A weekly roundup of
                    <br /> movie reviews & news
                  </p>
                </div>

                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div> */}
            {/* london */}
            <div className="absolute bottom-[14%] right-[32%] group">
              <a href="https://www.londonsummary.com/" target="_blank">
                <img
                  src="/about/london-round.png"
                  alt="london"
                  className="w-8 h-8 bg-[#80011F] hover:bg-[#AA0028] rounded-full object-contain p-1"
                />
              </a>
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    London Summary
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    Capital, historical, diverse, modern
                  </p>
                </div>

                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div>

            {/* Icon 5 - Bottom Left (Building) */}
            {/* <div className="absolute bottom-[25%] left-[28%] group">
              <a href="https://www.longandshort.com/" target="_blank">
                <img
                  src="/about/ls-round.png"
                  alt="Building"
                  className="w-8 h-8 bg-[#6A6F5B] hover:bg-[#737961] rounded-full"
                />
              </a>
              <div className="absolute -top-16 left-[160%] -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    Long and Short
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    Insider news for the world
                    <br /> of finance
                  </p>
                </div>

                <div className="absolute left-10 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div> */}

            {/* Icon 6 - DS */}
            <div className="absolute top-[40%] left-[7%] group">
              <a href="https://www.dubaisummary.com/" target="_blank">
                <img
                  src="/about/ds-1.png"
                  alt="Capitol"
                  className="w-8 h-8 bg-[#102341] hover:bg-[#102341] rounded-full"
                />
              </a>
              <div className="absolute -top-[160%] left-[180%] -translate-x-1/2 bg-[#26252C] text-[#fff] text-xs py-2 rounded-[5px] shadow opacity-0 group-hover:opacity-100 transition-opacity z-10 ">
                <div className="w-[150px]">
                  <p className="text-[10px] text-center font-[600] leading-[135%] tracking-[0.24px]">
                    Dubai Summary
                  </p>
                  <p className="text-[10px] text-center leading-[135%] tracking-[0.24px]">
                    Explore Dubai careers
                  </p>
                </div>

                <div className="absolute left-8 -bottom-1 -translate-x-1/2 w-3 h-3 bg-[#26252C] rotate-45 z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
