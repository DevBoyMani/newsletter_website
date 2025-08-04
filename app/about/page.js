import AboutHero from "../../components/aboutHero/aboutHero";
import AboutNewslettersStatistics from "../../components/aboutNewslettersStatistics/aboutNewslettersStatistics";
import AboutOurCompany from "../../components/aboutOurCompany/aboutOurCompany";
import AboutOurMission from "../../components/aboutOurMission/aboutOurMission";
import AboutOurStandards from "../../components/aboutOurStandards/aboutOurStandards";
import AboutWhantToJoinOurTeam from "../../components/aboutWhantToJoinOurTeam/aboutWhantToJoinOurTeam";

export default function About() {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <AboutHero />
        <AboutNewslettersStatistics />
        <AboutOurCompany />
        <AboutOurMission />
        <AboutOurStandards />
        <AboutWhantToJoinOurTeam />
      </div>
    </>
  );
}
