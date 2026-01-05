import AboutHero from "../../components/aboutHero/aboutHero";
import AboutNewslettersStatistics from "../../components/aboutNewslettersStatistics/aboutNewslettersStatistics";
import AboutOurCompany from "../../components/aboutOurCompany/aboutOurCompany";
import AboutOurMission from "../../components/aboutOurMission/aboutOurMission";
import AboutOurStandards from "../../components/aboutOurStandards/aboutOurStandards";
import AboutWantToJoinOurTeam from "../../components/aboutWantToJoinOurTeam/aboutWantToJoinOurTeam";

const title = "About House of Summary - Our Mission and Story";
const description =
  "Learn about House of Summary and our commitment to delivering high-quality content. Discover our story and the team behind the summaries.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.houseofsummary.com/about",
  },
  openGraph: {
    title,
    description,
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
