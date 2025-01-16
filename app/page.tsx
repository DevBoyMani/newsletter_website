import Hero from "@/components/hero/hero";
import Linkpages from "@/components/linkpages/linkpages";
import Navbar from "@/components/navbar/navbar";
import Newsletters from "@/components/newsletters/newsletters";
import Journey from "@/components/journey/journey";
import Socials from "@/components/socials/socials";
import Checkdatas from "@/components/checkdatas/checkdatas"
import FaqAccordion from "@/components/faqaccordion/faqaccordion"
import Research from "@/components/research/research"

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Linkpages/>
        <Checkdatas/>
        <Journey/>
        <Newsletters/>
        <FaqAccordion/>
        <Socials/>
        <Research/>

        </>
    )
}