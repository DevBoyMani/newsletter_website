"use client";

import { useSearchParams } from "next/navigation";
import ReadersMobileFeaturesSection from "../readersMobileFeaturesSection/readersMobileFeaturesSection";
import ReadersMobileNewsletterCards from "../readersMobileNewsletterCards/readersMobileNewsletterCards";
import HeadingWithUnderline from "../readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";
import { useEffect } from "react";
import Link from "next/link";

export default function ReadersMobileView() {
  const params = useSearchParams();

  // useEffect(() => {
  //   const target = params.get("scrollTo");
  //   if (!target) return;

  //   const section = document.querySelector(`#${target}`);
  //   if (!section) return;

  //   const yOffset = -100;
  //   const y =
  //     section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   setTimeout(() => {
  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }, 200);
  // }, [params]);
  return (
    <>
      <div className="bg-[#FAFAFA] pt-[110px]">
        <div className="px-4 py-10 mx-auto">
          <h1 className=" text-[#01261E] text-[44px] leading-[107%] ">
            For the readers still left in the world.
          </h1>
          <p className="text-[#121212] text-[14px] leading-normal font-[400] py-4">
            Our newsletters are written for those who seek meaning, not just
            empty updates.
          </p>
          <Link href="/about">
            <button className="flex px-[16px] py-[7px] bg-[#01261E] text-[#FAFAFA] text-[13px] font-[500] rounded-full border hover:bg-[#0B4337]">
              About us
            </button>
          </Link>
        </div>
        <div className="px-4 pb-10 mx-auto">
          <div className="w-full h-full">
            <video
              key="Hero-section-video"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/readers/hero-section-video-for-mobile.mp4"
                type="video/mp4"
              />
              {/* <source src="/advertise/advertise-page-video.webm" type="video/webm" /> */}
            </video>
          </div>
        </div>

        {/* newsletters section */}

        <div id="ourNewsletters" className="px-4 py-10 mx-auto">
          <HeadingWithUnderline text="Our Newsletters" />
          <p className="text-[#121212] text-[14px] leading-normal font-[400] py-4">
            Our editors review an overwhelming number of sources, remove the
            noise, and surface only what matters. Readers stay informed with
            clarity and precision, without wasting time or attention.
            <br />
            <a
              href="/contact"
              className="text-[#C7A262] text-[14px] font-[400] hover:underline"
            >
              Explore advertising opportunities →
            </a>
          </p>
          <ReadersMobileNewsletterCards />
        </div>

        {/* Features section */}
        <div className="py-10 mx-auto">
          <div className="px-4">
            <HeadingWithUnderline text="Features" />
          </div>
          <p className="text-[#121212] text-[14px] leading-normal font-[400] py-4 px-4">
            Our editors check every story for truth, context, and balance. The
            result is a newsletter that feels calm in a world that rarely
            pauses.
          </p>
          <ReadersMobileFeaturesSection />
        </div>
      </div>
    </>
  );
}
