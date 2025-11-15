import ReadersFeatureSection from "../../components/readersFeatureSection/readersFeatureSection";
import ReadersFeatures from "../../components/readersFeatureSection/readersFeatureSection";
import ReadersFooter from "../../components/readersFooter/readersFooter";
import ReadersFooterMobile from "../../components/readersFooterMobile/readersFooterMobile";
import ReadersMobileView from "../../components/readersMobileView/readersMobileView";
import ReadersHero from "../../components/readersPageComponents/readersHero/readersHero";
import ReadersNewsletters from "../../components/readersPageComponents/readersNewsletters/readersNewsletters";
import HeadingWithUnderline from "../../components/readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";

export default function ReadersPage() {
  return (
    <>
      {/* web */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <ReadersHero />

        <ReadersNewsletters />

        <div className="px-4 md:px-28 py-10 w-[58%]">
          <HeadingWithUnderline text="Features" />
        </div>
        <ReadersFeatureSection />

        <ReadersFooter />
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <ReadersMobileView />
        <ReadersFooterMobile />
      </div>
    </>
  );
}
