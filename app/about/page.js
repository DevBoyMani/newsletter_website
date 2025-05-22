import AboutHero from "../../components/aboutHero/aboutHero";
import AboutNewslettersStatistics from "../../components/aboutNewslettersStatistics/aboutNewslettersStatistics";
import AboutOurCompany from "../../components/aboutOurCompany/aboutOurCompany";

export default function About() {
    return (
        <>
            <div className="bg-[#FAFAFA]">
                <AboutHero/>
                <AboutNewslettersStatistics/>
                <AboutOurCompany/>
            </div>
        </>
    );
}
