import Hero from "@/components/hero/hero";
import Linkpages from "@/components/linkpages/linkpages";
import Newsletters from "@/components/newsletters/newsletters";
import Journey from "@/components/journey/journey";
import Socials from "@/components/socials/socials";
import Checkdatas from "@/components/checkdatas/checkdatas";
import FaqAccordion from "@/components/faqaccordion/faqaccordion";
import Research from "@/components/research/research";
import { Homenaje } from "next/font/google";
import HomeNewsletterAdsGrow from "../components/homeNewsletterAdsGrow/homeNewsletterAdsGrow";
import HomePopularNewsletters from "../components/homePopularNewsletters/homePopularNewsletters";
import HomeWorldEngages from "../components/homeWorldEngages/homeWorldEngages";
import HomeLovedByReaders from "../components/homeLovedByReaders/homeLovedByReaders";
import HomeSocialconversations from "../components/homeSocialConversations/homeSocialConversations";
import HomeLatestStories from "../components/homeLatestStories/homeLatestStories";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeNewsletterAdsGrow />
      <HomePopularNewsletters />
      <HomeWorldEngages />
      <HomeLovedByReaders />
      <HomeSocialconversations />
      <HomeLatestStories />
      {/* <Linkpages /> */}
      {/* <Checkdatas />
      <Journey />
      <Newsletters />
      <FaqAccordion />
      <Socials />
      <Research /> */}
    </>
  );
}
