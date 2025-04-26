import ReadersFeatures from "../../components/readersFeatureSection/readersFeatureSection";
import ReadersFooter from "../../components/readersFooter/readersFooter";
import ReadersMobileView from "../../components/readersMobileView/readersMobileView";
import ReadersHero from "../../components/readersPageComponents/readersHero/readersHero";
import ReadersNewsletters from "../../components/readersPageComponents/readersNewsletters/readersNewsletters";
import HeadingWithUnderline from "../../components/readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";

export default function ReadersPage(){
    return (
        <>
            <div className="hidden lg:block bg-[#FAFAFA]">
            <ReadersHero/>

              <div className="px-4 md:px-16 py-10 ">
                <HeadingWithUnderline text="Our newsletters" />
              </div>
              <ReadersNewsletters/>

              <div className="px-4 md:px-16 py-10 ">
                <HeadingWithUnderline text="Features"/>
              </div>
              <ReadersFeatures/>

              <ReadersFooter/>
            </div>

            <div className="block lg:hidden">
              <ReadersMobileView/>
              
            <ReadersFooter/>
            </div>
        </>
    )
}