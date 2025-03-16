"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import AdvertiseSidebar from "../../../components/advertiseSidebar/advertiseSidebar";
import { motion } from "framer-motion";
import { Component } from "../../../components/areaChart/areaChart";
import Link from "next/link";

const components = {
  "presidential-summary": () => <Component />,
  "geopolitical-summary": () => <Component />,
  "long-and-short": () => <Component />,
  "business-history": () => <Component />,
  "photo-summary": () => <Component />,
  "new-users": () => <Component />,
  "returning-users": () => <Component />,
  "organic-search": () => <Component />,
  "social-media": () => <Component />,
  "direct-traffic": () => <Component />,
};

const rightSectionNav = [
  { name: "Active Users", id: "chart1" },
  { name: "Country", id: "chart2" },
  { name: "Age", id: "chart3" },
  { name: "Subscriber Growth", id: "chart4" },
  { name: "Total Visits", id: "chart5" },
];

export default function AdvertiseSlug() {
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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      let nextChartIndex = null;

      rightSectionNav.forEach(({ id, name }, index) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();

          // Section is visible within 15% of the viewport height
          if (
            rect.top < window.innerHeight * 0.15 &&
            rect.bottom > window.innerHeight * 0.15
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

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const SelectedComponent =
    selectedSlug && components[selectedSlug]
      ? components[selectedSlug]
      : () => <div>Content not found</div>;

  return (
    <>
      {/* desktop view */}
      {isDesktop && (
        <div className="hidden lg:block md:flex">
          <div className="w-[36%] bg-white fixed h-screen">
            <div className="md:px-6">
              <div className="px-4 text-lg py-8">
                <Link href="/advertise" prefetch={true}>&larr; Introduction</Link>
              </div>
              <div className="pt-6">
                <h2 className="py-4 text-3xl">
                  Building Innovative Digital Solutions
                </h2>
                <div
                  className="border-t-2 border-b-2 border-black overflow-y-auto md:h-[320px]"
                  style={{ scrollbarWidth: "none" }}
                >
                  <AdvertiseSidebar
                    activeSlug={selectedSlug}
                    onSelect={setSelectedSlug}
                  />
                </div>
              </div>
              <div className="text-black pt-4 flex justify-between">
                <p className="text-sm px-4 py-1">Interested to advertise?</p>
                <p className="text-sm border border-black px-4 py-1 rounded-3xl">
                  Contact Us
                </p>
              </div>
            </div>
          </div>

          <div className="w-[64%] h-full  ml-auto overflow-y-auto rounded-l-3xl relative z-10">
            <div
              // layout
              // key={selectedSlug}
              // initial={{ x: "100%", opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // exit={{ x: "-100%", opacity: 0 }}
              // transition={{ duration: 0.9, ease: "easeInOut" }}
              className="bg-[#01261E]"
            >
              <div className="h-full flex flex-col">
                <div className="">
                  <div className="bg-[#01261E] fixed top-0  w-[100%] pt-10 pb-12 z-50 hidden md:block rounded-l-3xl">
                    <div className="flex flex-row space-x-12  absolute left-24">
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

                <div
                  // layout
                  // key={selectedSlug}
                  // initial={{ x: "100%", opacity: 0 }}
                  // animate={{ x: 0, opacity: 1 }}
                  // exit={{ x: "-100%", opacity: 0 }}
                  // transition={{ duration: 1.0, ease: "easeInOut" }}
                >
                  <div className="">
                    <div className="mx-24 lg:mb-28 mt-24">
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
                      <div className=" my-10" id="chart5">
                        <SelectedComponent />
                      </div>
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
          className="bg-[#01261E] max-h-[50vh] overflow-y-auto relative z-10"
        >
          {/* Header with Numerical Indicator */}
          <div className="bg-[#01261E] fixed top-0 w-full pt-6 pb-3 px-4 z-50 text-white">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-300">{activeChartName}</p>
              <div className="text-xs font-semibold bg-[#FAFAFA] text-[#01261E] py-2 px-2 rounded-full">
                {activeChart}/{rightSectionNav.length}
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-4 mt-20">
            {rightSectionNav.map((el) => (
              <div className="my-4" key={el.id} id={el.id}>
                <SelectedComponent />
              </div>
            ))}
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
        <div className="max-w-2xl w-full ">
            {/* Navigation Links */}
            <div className="w-full px-4 py-2 fixed bg-white z-50">
            <div className="flex flex-wrap w-full h-full gap-x-3 sm:gap-x-6 pt-2 pb-4 px-2 border-black border-b text-xs sm:text-sm justify-between sm:justify-start items-center">
              <div>
                <Link href="/advertise" prefetch={true} className="cursor-pointer font-semibold py-1 px-2">
                  About
                </Link>
              </div>
              <div className="">.</div>
              <div>
                <Link href="/" prefetch={true} className="cursor-pointer font-semibold bg-[#121212]/20 py-1 px-2 rounded-3xl">
                  Newsletters
                </Link>
              </div>
              <div className="">.</div>
              <div>
                <Link href="/contact" prefetch={true} className="cursor-pointer font-semibold py-1 px-2">
                  Contact
                </Link>
              </div>
            </div>
          </div>


            {/* Bottom Section */}
            <div className="pt-12">
              <AdvertiseSidebar
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
