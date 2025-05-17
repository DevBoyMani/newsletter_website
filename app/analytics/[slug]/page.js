"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import AdvertiseSidebar from "../../../components/analyticsSidebar/analyticsSidebar";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnalyticsChartPS } from "../../../components/analyticsChartPS/analyticsChartPS";
import { AnalyticsChartGS } from "../../../components/analyticsChartGS/analyticsChartGS";
import AnalyticsSidebar from "../../../components/analyticsSidebar/analyticsSidebar";

const components = {
  "geopolitical-summary": () => <AnalyticsChartGS/>,
  "presidential-summary": () => <AnalyticsChartPS/>,
  "long-and-short": () => <AnalyticsChartGS/>,
  "business-history": () => <AnalyticsChartPS/>,
  "photo-summary": () => <AnalyticsChartGS/>,
  "new-users": () => <AnalyticsChartPS/>,
  "returning-users": () => <AnalyticsChartGS/>,
  "organic-search": () => <AnalyticsChartPS/>,
  "social-media": () => <AnalyticsChartGS/>,
  "direct-traffic": () => <AnalyticsChartPS/>,
  "summary": () => <AnalyticsChartGS/>,
  "summary1": () => <AnalyticsChartPS/>,
  "Long": () => <AnalyticsChartGS/>,
  "business": () => <AnalyticsChartPS/>,
  "photo": () => <AnalyticsChartGS/>,
  "users": () => <AnalyticsChartPS/>,
  "returning": () => <AnalyticsChartGS/>,
  "organic": () => <AnalyticsChartPS/>,
  "social": () => <AnalyticsChartGS/>,
  "direct": () => <AnalyticsChartPS/>,
};

const rightSectionNav = [
  { name: "Active Users", id: "chart1" },
  { name: "Country", id: "chart2" },
  { name: "Age", id: "chart3" },
  { name: "Subscriber Growth", id: "chart4" },
  { name: "Total Visits", id: "chart5" },
];

export default function AnalyticsSlug() {
  const params = useParams();
  const [selectedSlug, setSelectedSlug] = useState("");
  const [activeChartName, setActiveChartName] = useState(
    rightSectionNav[0].name
  );
  const [activeChart, setActiveChart] = useState(1);
  const scrollContainerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint (1024px)
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (params?.slug) {
      setSelectedSlug(params.slug);
    }
  }, [params?.slug]);

   // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   if (!scrollContainer) return;

  //   const handleScroll = () => {
  //     let nextChartIndex = null;

  //     rightSectionNav.forEach(({ id, name }, index) => {
  //       const section = document.getElementById(id);
  //       if (section) {
  //         const rect = section.getBoundingClientRect();

  //         // Section is visible within 15% of the viewport height
  //         if (
  //           rect.top < window.innerHeight * 0.15 &&
  //           rect.bottom > window.innerHeight * 0.15
  //         ) {
  //           nextChartIndex = index;
  //         }
  //       }
  //     });

  //     if (nextChartIndex !== null) {
  //       setActiveChart(nextChartIndex + 1);
  //       setActiveChartName(rightSectionNav[nextChartIndex].name);
  //     }
  //   };

  //   scrollContainer.addEventListener("scroll", handleScroll);

  //   return () => {
  //     scrollContainer.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

      useEffect(() => {
        const handleScrollDesktop = () => {
          let nextChartIndex = null;
      
          rightSectionNav.forEach(({ id }, index) => {
            const section = document.getElementById(id);
            if (section) {
              const rect = section.getBoundingClientRect();
      
              if (
                rect.top < window.innerHeight * 0.3 &&
                rect.bottom > window.innerHeight * 0.3
              ) {
                nextChartIndex = index;
              }
            }
          });
      
          if (nextChartIndex !== null) {
            setActiveChart(nextChartIndex + 1);
            setActiveChartName(rightSectionNav[nextChartIndex].name);
          }
        };
      
        const handleScrollMobile = () => {
          const scrollContainer = scrollContainerRef.current;
          if (!scrollContainer) return;
      
          let nextChartIndex = null;
      
          rightSectionNav.forEach(({ id }, index) => {
            const section = document.getElementById(id);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const scrollTop = scrollContainer.scrollTop;
              const containerHeight = scrollContainer.offsetHeight;
      
              if (
                scrollTop + containerHeight * 0.3 > sectionTop &&
                scrollTop + containerHeight * 0.3 < sectionTop + sectionHeight
              ) {
                nextChartIndex = index;
              }
            }
          });
      
          if (nextChartIndex !== null) {
            setActiveChart(nextChartIndex + 1);
            setActiveChartName(rightSectionNav[nextChartIndex].name);
          }
        };
      
        if (isDesktop) {
          window.addEventListener("scroll", handleScrollDesktop);
          return () => window.removeEventListener("scroll", handleScrollDesktop);
        } else {
          const scrollContainer = scrollContainerRef.current;
          if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScrollMobile);
            return () =>
              scrollContainer.removeEventListener("scroll", handleScrollMobile);
          }
        }
      }, [isDesktop]);
      
const handleScrollToSection = (event, id, offset = 0) => {
  event.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    const scrollY = section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({
      top: scrollY,
      behavior: "smooth"
    });
  }
};
// handleScrollToSection(e, 'sectionId', -80);


  const SelectedComponent =
    selectedSlug && components[selectedSlug]
      ? components[selectedSlug]
      : () => <div>Content not found</div>;

  return (
    <>
      {/* desktop view */}
      {isDesktop && (
        <div className="hidden lg:block md:flex">
          {/* left */}
          <div className="w-[36%] bg-white fixed h-screen ml-8">
            <div className="md:px-6">
              <div className="px-4 text-[24.5px] py-8 hover:underline">
                <Link href="/analytics" prefetch={true}>&larr; Introduction</Link>
              </div>
              <div className="pt-6">
                <h2 className="py-4 mx-0 text-[32px] font-[GT-Super-Ds-Trial] leading-normal w-[80%] border-b border-[#121212]">
                  Building Innovative Digital Solutions
                </h2>
                <div
                  className="overflow-y-auto w-[100%] sm:h-[40vh] md:h-[46vh] 
                  lg:h-[46vh] 
                  xl:h-[50vh]
                  2xl:h-[60vh] max-h-[64vh]"
                  style={{ scrollbarWidth: "none" }}
                >
                  <AnalyticsSidebar
                    activeSlug={selectedSlug}
                    onSelect={setSelectedSlug}
                  />
                </div>
              </div>
              <div className="w-[80%] mx-0 text-black pt-4 flex justify-between border-t border-[#121212]">
              <h3 className="text-[13px] py-1">Interested to advertise?</h3>
              <a className="border border-black text-[13px] px-4 py-1 rounded-3xl cursor-pointer">
                Contact Us
              </a>
            </div>
            </div>
          </div>

          {/* right */}
          <div 
          ref={scrollContainerRef}
          className="w-[64%] h-full  ml-auto overflow-y-auto rounded-l-3xl relative z-10">
            <div
              className="bg-[#01261E]"
            >
              <div className="h-full flex flex-col">
                <div className="">
                  <div className="bg-[#01261E] fixed top-0  w-[100%] pt-10 pb-12 z-50 hidden md:block rounded-l-3xl">
                    <div className="mx-[5.5%] 2xl:mx-[8%] 3xl:mx-[16%] w-[100%]">
                      <div className="flex space-x-12 2xl:space-x-16 ">
                      <div className="">
                        <div className="space-x-4">
                          {rightSectionNav.map(({ name, id }) => (
                            <a
                              key={id}
                              className="text-xs text-white border border-white w-full px-5 py-3 rounded-full cursor-pointer hover:bg-white hover:text-black"
                              onClick={(event) =>
                                handleScrollToSection(event, id, -120)
                              }
                            >
                              {name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <a
                          className="text-xs bg-white  rounded-full shadow-lg px-5 py-3"
                          href="https://www.sagravia.com/"
                          target="_blank"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                
               
       
               
                   {/* Vertical Lines Indicator */}
                <div className="fixed top-1/3 right-20  h-full flex flex-col items-center space-y-4 z-10">
                {rightSectionNav.map((el, index) => (
                    <div
                      key={el.id}
                      className={`h-[43px] w-[2px] transition-all duration-300 ${
                        activeChart === index + 1 ? "bg-[#fff]" : "bg-[#FFFFFF26]"
                      }`}
                    />
                  ))}
                </div>

                <div className="">
                    <div className="mx-24 lg:mb-28 mt-28">
                      <div className=" my-10" id="chart1">
                        <SelectedComponent />
                      </div>
                      <div className=" my-10" id="chart2">
                        <SelectedComponent />
                      </div>
                      <div className=" my-10" id="chart3">
                        <SelectedComponent />
                      </div>
                      <div className=" my-10" id="chart4">
                        <SelectedComponent />
                      </div>
                      <div className=" my-10 pb-28" id="chart5">
                        <SelectedComponent />
                      </div>
                    </div>
                </div>
             
               
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile View */}
      <div className="block lg:hidden w-sm">
        <div
          ref={scrollContainerRef}
          className="bg-[#01261E] max-h-[45vh] h-[357px] overflow-y-auto relative z-10"
        >
          {/* Header with Numerical Indicator */}
          <div className="bg-[#01261E] fixed top-0 w-full  pt-20 pb-3 px-4 z-50 text-white">
            <div className="flex justify-between items-center">
              <p className="text-[14px] text-[#FAFAFA]">{activeChartName}</p>
              <div className="text-[12px]  text-[#01261E]">
                <span className="w-8 h-8 flex items-center justify-center rounded-full font-[600] leading-normal bg-[#FAFAFA99]">
                  {activeChart}/{rightSectionNav.length}
                </span>
              </div>

            </div>
          </div>

          <div className="flex flex-col mx-4 mt-20 pb-20">
            {rightSectionNav.map((el) => (
              <div className=" my-4" key={el.id} id={el.id}>
                <SelectedComponent />
              </div>
            ))}
          </div>
        </div>

        <div className="max-h-[45vh] overflow-y-auto">
        <div className="max-w-2xl w-full ">
            {/* Navigation Links */}
            <div className="w-full px-4 py-2 fixed bg-white z-10">
            <div className="flex flex-wrap w-full h-full gap-x-3 sm:gap-x-6 pt-4 pb-5 px-2 border-black border-b text-xs sm:text-sm justify-between sm:justify-start items-center">
              <div>
                <Link href="/analytics" prefetch={true} className="cursor-pointer text-[13px] font-semibold py-2 px-2">
                  About
                </Link>
              </div>
              <div className="flex items-center">
                    <img src="/dot.png" alt="dot" className="w-1 h-1 rounded-full" />
                    </div>
              <div>
                <Link href="/" prefetch={true} className="cursor-pointer text-[13px] font-semibold bg-[#121212]/20 py-2 px-2 rounded-3xl">
                  Newsletters
                </Link>
              </div>
              <div className="flex items-center">
                    <img src="/dot.png" alt="dot" className="w-1 h-1 rounded-full" />
                    </div>
              <div>
                <Link href="/contact" prefetch={true} className="cursor-pointer text-[13px] font-semibold py-2 px-2">
                  Contact
                </Link>
              </div>
            </div>
          </div>


            {/* Bottom Section */}
            <div className="pt-14">
              <AnalyticsSidebar
                activeSlug={selectedSlug}
                onSelect={setSelectedSlug}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
