import { Suspense } from "react";
import ReadersFeatureSection from "../../components/readersFeatureSection/readersFeatureSection";
import ReadersFeatures from "../../components/readersFeatureSection/readersFeatureSection";
import ReadersFooter from "../../components/readersFooter/readersFooter";
import ReadersFooterMobile from "../../components/readersFooterMobile/readersFooterMobile";
import ReadersMobileView from "../../components/readersMobileView/readersMobileView";
import ReadersHero from "../../components/readersPageComponents/readersHero/readersHero";
import ReadersNewsletters from "../../components/readersPageComponents/readersNewsletters/readersNewsletters";
import HeadingWithUnderline from "../../components/readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";

const title = "House of Summary Readers - Join Our Knowledge Community";
const description =
  "Connect with a global community of dedicated readers. Explore how House of Summary helps lifelong learners stay informed with curated insights.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.houseofsummary.com/readers",
  },
  openGraph: {
    title,
    description,
  },
};

export default function ReadersPage() {
  return (
    <>
      {/* web */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <ReadersHero />

        <Suspense fallback={null}>
          <ReadersNewsletters />
        </Suspense>

        <div className="px-4 md:px-28 py-10 w-[58%]">
          <HeadingWithUnderline text="Features" />
        </div>
        <ReadersFeatureSection />

        <ReadersFooter />
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <Suspense fallback={null}>
          <ReadersMobileView />
        </Suspense>

        <ReadersFooterMobile />
      </div>
    </>
  );
}
