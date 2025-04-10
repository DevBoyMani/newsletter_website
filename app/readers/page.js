import ReadersHero from "../../components/readersPageComponents/readersHero/readersHero";
import ReadersNewsletters from "../../components/readersPageComponents/readersNewsletters/readersNewsletters";
import ReadersFeatures from "../../components/readersPageComponents/readersFeatures/readersFeatures"
import HeadingWithUnderline from "../../components/readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";

export default function ReadersPage(){
    return (
        <>
            <ReadersHero/>
            <div className="px-4 md:px-16 py-10">
              <HeadingWithUnderline text="Our newsletters"/>
            </div>

            <ReadersNewsletters/>
            {/* <ReadersFeatures/> */}
        </>
    )
}