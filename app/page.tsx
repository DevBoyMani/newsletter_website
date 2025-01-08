import Hero from "@/components/hero/hero";
// import Linkpages from "@/components/linkpages/linkpages";
import Navbar from "@/components/navbar/navbar";
import Newsletters from "@/components/newsletters/newsletters";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Newsletters/>
        {/* <Linkpages/> */}

        </>
    )
}