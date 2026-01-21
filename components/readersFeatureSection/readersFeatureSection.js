"use client";

import ReadersMobileFeaturesSection from "../readersMobileFeaturesSection/readersMobileFeaturesSection";
import HeadingWithUnderline from "../readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";
import ScrollSyncTabs from "../scrollSyncTabs/ScrollSyncTabs";

export default function ReadersFeatureSection() {
  return (
    <>
      <div className="hidden lg:block">
        <div className="px-4 md:px-28 py-10 w-[58%]">
          <HeadingWithUnderline text="Features" />
        </div>
        <div className="bg-[#FAFAFA] px-4 md:px-28 w-[54.5%]">
          <p className="text-black md:text-[16px] ">
            Our editors check every story for truth, context, and balance. The
            result is a newsletter that feels calm in a world that rarely
            pauses.
          </p>
        </div>

        <ScrollSyncTabs />
      </div>

      <div className="block lg:hidden">
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
