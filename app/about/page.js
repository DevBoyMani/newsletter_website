import AboutHero from "../../components/aboutHero/aboutHero";
import AboutNewslettersStatistics from "../../components/aboutNewslettersStatistics/aboutNewslettersStatistics";
import AboutOurCompany from "../../components/aboutOurCompany/aboutOurCompany";
import AboutOurMission from "../../components/aboutOurMission/aboutOurMission";
import AboutOurStandards from "../../components/aboutOurStandards/aboutOurStandards";
import AboutWantToJoinOurTeam from "../../components/aboutWantToJoinOurTeam/aboutWantToJoinOurTeam";

export const metadata = {
  title: "About House of Summary - Our Mission and Story",
  description:
    "Learn about House of Summary and our commitment to delivering high-quality content. Discover our story and the team behind the summaries.",
  alternates: {
    canonical: "https://www.houseofsummary.com/about",
  },
};

export default function About() {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <AboutHero />
        <AboutNewslettersStatistics />
        <AboutOurCompany />
        <AboutOurMission />
        <AboutOurStandards />
        <AboutWantToJoinOurTeam />
      </div>
    </>
  );
}
