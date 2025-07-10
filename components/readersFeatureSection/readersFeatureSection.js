"use client";

// import { useState, useRef, useEffect } from "react";
// import FeatureLeftSidebar from "../featureLeftSidebar/featureLeftSidebar";
// import FeatureRightSide from "../featureRightSide/featureRightSide";

import ScrollSyncTabs from "../scrollSyncTabs/ScrollSyncTabs";

// const sections=[
//     { title:"Supports dark mode",
//     //   src:"/readers/supports-dark-mode.png",
//       content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
//       imageSize: "",
//     },
//     { title:"High quality pictures for context",
//       src:"/readers/nl-image-for-features.png",
//       content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
//       imageSize: "w-[431px] h-[379px]",
//     },
//     { title:"Fact checked and human written",
//       // src:"/readers/fact-checked-video.mp4",
//       content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
//       // imageSize: "w-[431px] h-[440px]",
//     },
//     { title:"Clear summary for the import new",
//         src:"/readers/clear-summary-for-the-import-news.png",
//         content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
//         imageSize: "w-[492px] h-[378px]",
//       },
//       { title:"We don’t link to any paywalled sites",
//         src:"/readers/we-dont-think.png",
//         content:"AG1 is proudly NSF Integer convallis dapibus blandit. Proin dapibus vel eros id imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis lobortis tempor velit, a dapibus risus vestibulum a. Maecenas fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit euismod quam eros sit amet est.",
//         imageSize: " h-auto",
//       },
//    ]

export default function ReadersFeatureSection() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  // const [isClickScrolling, setIsClickScrolling] = useState(false);

  // const sectionRefs = useRef([]);

  // // Scroll observer
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (isClickScrolling) return;

  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const index = sectionRefs.current.findIndex(
  //             (ref) => ref === entry.target
  //           );
  //           if (index !== -1) {
  //             setActiveIndex(index);
  //             setActiveScrollIndex(index);
  //           }
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.6,
  //     }
  //   );

  //   sectionRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref);
  //   });

  //   return () => {
  //     sectionRefs.current.forEach((ref) => {
  //       if (ref) observer.unobserve(ref);
  //     });
  //   };
  // }, [isClickScrolling]);

  // const handleClick = (index) => {
  //   if (index === activeIndex) return; // prevent double click on same item

  //   setIsClickScrolling(true); // start ignoring intersection while clicking
  //   setActiveIndex(index);
  //   setActiveScrollIndex(index);

  //   const el = sectionRefs.current[index];
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth", block: "start" });

  //     // Determine scroll offset based on screen size
  //     const screenWidth = window.innerWidth;
  //     let offset = -100; // default

  //     if (screenWidth >= 1536) {
  //       offset = -160; // 2xl
  //     } else if (screenWidth >= 1280) {
  //       offset = -120; // xl
  //     } else if (screenWidth >= 1024) {
  //       offset = -100; // lg
  //     } else if (screenWidth >= 768) {
  //       offset = -80; // md
  //     } else {
  //       offset = -60; // sm
  //     }

  //     // Wait for scrollIntoView to finish, then apply offset
  //     setTimeout(() => {
  //       window.scrollBy({ behavior: "smooth" });

  //       // Give a buffer before re-enabling intersection sync
  //       setTimeout(() => {
  //         setIsClickScrolling(false);
  //       }, 500);
  //     }, 400);
  //   }
  // };

  return (
    <>
      <div className="bg-[#FAFAFA] px-4 md:px-28 w-[54.5%]">
        <p className="text-black md:text-[16px] ">
          Integer convallis dapibus blandit. Proin dapibus vel eros id
          imperdiet. Fusce vel venenatis elit. Nunc imperdiet orci ac ornare
          ornare. Morbi vitae tincidunt ipsum, vitae tincidunt elit. Duis
          lobortis tempor velit, a dapibus risus vestibulum a. Maecenas
          fringilla, ligula in finibus pretium, sem odio commodo nisl, hendrerit
          euismod quam eros sit amet est.
        </p>
      </div>

      {/* my old code  all */}

      {/* <div className="flex h-screen sticky-0 bg-[#FAFAFA] px-4 md:px-28 mx-auto z-10 overflow-hidden mt-12"> */}
      {/* Left Sidebar */}
      {/* <FeatureLeftSidebar
          sections={sections}
          activeIndex={activeIndex}
          handleClick={handleClick}
        /> */}

      {/* Right Scrollable Content */}
      {/* <FeatureRightSide
          sections={sections}
          sectionRefs={sectionRefs}
        /> */}
      {/* </div> */}
      {/*/ my old code all */}

      <ScrollSyncTabs />
    </>
  );
}
