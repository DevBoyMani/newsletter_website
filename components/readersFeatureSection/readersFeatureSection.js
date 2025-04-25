'use client';

import { useState,useRef} from 'react';
import FeatureSection from '../featureSection/featureSection';

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
      // src:"/readers/fact-checked-video.mp4",
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


export default function ReadersFeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Create refs for each section
  const sectionRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index);
  
    const section = sectionRefs.current[index];
    const scrollContainer = document.querySelector('.scrollable-content'); // class for right section
    const yOffset = -10; // adjust this to move section a bit higher
  
    if (section && scrollContainer) {
      const sectionTop = section.offsetTop + yOffset;
  
      scrollContainer.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex h-screen bg-[#FAFAFA] px-4 md:px-16 mx-auto relative z-10 overflow-hidden mt-12">
  {/* Left Sidebar (Sticky) */}
  <div className="h-full overflow-hidden pr-10 z-10 w-1/4 sticky top-24 bg-[#FAFAFA]">
    {sections.map((item, index) => (
      <div
        key={index}
        className={`py-4 px-4 border-b text-lg md:text-[18px] cursor-pointer transition-all
          ${index === activeIndex ? 'bg-[#01261E] text-white' : 'text-black hover:text-white hover:bg-[#01261ee0]'}`}
        onClick={() => handleClick(index)}
      >
        {item.title}
      </div>
    ))}
  </div>

  {/* Right Scrollable Content */}
  <div className="w-3/4 bg-[#FAFAFA] h-screen overflow-y-auto px-6 pt-6 pb-60 space-y-16 scroll-smooth scrollable-content" style={{ scrollbarWidth: "none" }}>
    {sections.map((item, index) => (
      <FeatureSection
        key={index}
        ref={(el) => (sectionRefs.current[index] = el)}
        data={{
          ...item,
          isFirst: index === 0,isThird: index === 2,
        }}
      />
    ))}
  </div>
</div>

  );
}

