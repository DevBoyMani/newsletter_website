import Hero from "@/components/hero/hero";
import Linkpages from "@/components/linkpages/linkpages";
import Navbar from "@/components/navbar/navbar";
import Newsletters from "@/components/newsletters/newsletters";
import Journey from "@/components/journey/journey";
import Socials from "@/components/socials/socials";
import Checkdatas from "@/components/checkdatas/checkdatas"
import FaqAccordion from "@/components/faqaccordion/faqaccordion"

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Newsletters/>
        <Linkpages/>
        <Journey/>
        <Socials/>
        <Checkdatas/>
        <FaqAccordion/>

        </>
    )
}