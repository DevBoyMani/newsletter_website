"use client";
import { useState, useEffect, useRef } from "react";
import SidebarNav from "../../components/sidebarNav/sidebarNav";
import FeatureSection from "../featureSection/featureSection";
import ReaderImageGrid from "../readersImageGrid/readersImageGrid";

export default function ReadersFeatures() {

   const sections=[
    { title:"Supports dark mode",
    //   src:"/readers/supports-dark-mode.png",
      content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
      imageSize: "",
    },
    { title:"High quality pictures for context",
      src:"/readers/nl-image-for-features.png",
      content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
      imageSize: "w-[431px] h-[379px]",
    },
    { title:"Fact checked and human written",
      src:"/readers/fact-checked.png",
      content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
      imageSize: "w-[431px] h-[440px]",
    },
    { title:"Clear summary for the import new",
        src:"/readers/clear-summary-for-the-import-news.png",
        content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
        imageSize: "w-[492px] h-[378px]",
      },
      { title:"We don’t link to any paywalled sites",
        src:"/readers/we-dont-think.png",
        content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
        imageSize: " h-auto",
      },
   ]

    const sectionRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target);
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3,
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);


    return (
        <>
        <div className="bg-white px-4 md:px-16 pb-10 mx-auto">
            <div className="">
                <p className="text-black text-lg md:text-xl ">
                Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.

                </p>
            </div>
        </div>

        <div className="flex px-4 md:px-16 mx-auto relative">
            <div className="w-1/4 sticky top-24 h-screen">
                <SidebarNav listNames={sections.map(el=>el.title)} activeIndex={activeIndex} sectionRefs={sectionRefs} />
            </div>
            <div className="w-3/4 overflow-y-auto " style={{ scrollbarWidth: "none" }}>
                {/* <ReaderImageGrid images={images} /> */}
                {sections.map((data, index) => (
                    <FeatureSection 
                    key={index} 
                    data={{ ...data, isFirst: index === 0 }} 
                    ref={el => (sectionRefs.current[index] = el)}
                    />
                ))}

               
            </div>
        </div>

        

        </>
    );
}
