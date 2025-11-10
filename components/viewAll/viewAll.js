"use client";
import { useState } from "react";

export default function ViewAll({ activeCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? 1 : section);
  };

  // const images = [
  //   {
  //     tag: "design",
  //     popupSalary: "$50,000 - $70,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     popupContent2:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
  //     name: "Design",
  //     title: "Graphic Designer",
  //     experience: "Senior",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry. ",
  //     button: "Apply",
  //     theme: "#E19F20",
  //     slug: "graphic-designer",
  //   },
  //   {
  //     popupSalary: "$40,000 - $80,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     name: "UX/UI",
  //     title: "UX Designer",
  //     experience: "Mid-Level",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry. ",
  //     button: "Apply",
  //     theme: "#582719",
  //     slug: "ux-designer",
  //   },
  //   {
  //     popupSalary: "$40,000 - $70,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     popupContent2:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
  //     name: "Web Dev",
  //     title: "Full-Stack Developer",
  //     experience: "Junior",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
  //     button: "Apply",
  //     theme: "#092236",
  //     slug: "full-stack",
  //   },
  //   {
  //     popupSalary: "$50,000 - $80,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     popupContent2:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
  //     name: "Design",
  //     title: "logo Designer",
  //     experience: "Senior",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
  //     button: "Apply",
  //     theme: "#1A1A1A",
  //     slug: "logo-designer",
  //   },
  //   {
  //     popupSalary: "$40,000 - $70,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     popupContent2:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
  //     name: "UX/UI",
  //     title: "web Designer",
  //     experience: "Mid-Level",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
  //     button: "Apply",
  //     theme: "#394E65",
  //     slug: "web-designer",
  //   },
  //   {
  //     popupSalary: "$30,000 - $60,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     popupContent2:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
  //     name: "Web Dev",
  //     title: "Backend Developer",
  //     experience: "Junior",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry. ",
  //     button: "Apply",
  //     theme: "#657C75",
  //     slug: "backend-dev",
  //   },
  //   {
  //     popupSalary: "$50,000 - $80,000",
  //     popupVenue: "remote",
  //     popupContent1:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
  //     popupContent2:
  //       "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
  //     name: "Software Engineer",
  //     title: "Programmer",
  //     experience: "Junior",
  //     content:
  //       "You'll play a key role in scaling our platform as we strive to lead the branded payments industry. ",
  //     button: "Apply",
  //     theme: "#01261E",
  //     slug: "software-engineer",
  //   },
  // ];

  const images = [
    {
      tag: "design",
      name: "Design",
      title: "Graphic Designer",
      experience: "Senior",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$50,000 - $70,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#E19F20",
      slug: "graphic-designer",
    },
    {
      tag: "design",
      name: "UX/UI",
      title: "UX Designer",
      experience: "Mid-Level",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$40,000 - $80,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      button: "Apply",
      theme: "#582719",
      slug: "ux-designer",
    },
    {
      tag: "tech",
      name: "Web Dev",
      title: "Full-Stack Developer",
      experience: "Junior",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$40,000 - $70,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#092236",
      slug: "full-stack",
    },
    {
      tag: "design",
      name: "Design",
      title: "Logo Designer",
      experience: "Senior",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$50,000 - $80,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#1A1A1A",
      slug: "logo-designer",
    },
    {
      tag: "design",
      name: "UX/UI",
      title: "Web Designer",
      experience: "Mid-Level",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$40,000 - $70,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#394E65",
      slug: "web-designer",
    },
    {
      tag: "tech",
      name: "Web Dev",
      title: "Backend Developer",
      experience: "Junior",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$30,000 - $60,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#657C75",
      slug: "backend-dev",
    },
    {
      tag: "tech",
      name: "Software Engineer",
      title: "Programmer",
      experience: "Junior",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$50,000 - $80,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#01261E",
      slug: "software-engineer",
    },
    {
      tag: "editorial",
      name: "Content Writer – London",
      title: "Content Writer",
      experience: "Junior",
      content:
        "You'll play a key role in scaling our platform as we strive to lead the branded payments industry.",
      popupSalary: "$50,000 - $80,000",
      popupVenue: "remote",
      popupContent1:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase. The campaign should use a Marketing Automation Platform (like HubSpot, Marketo, or Pardot) and include the following:",
      popupContent2:
        "Design an email nurturing campaign that targets leads who have shown interest in your product/service but have not yet made a purchase.",
      button: "Apply",
      theme: "#016788",
      slug: "content-writer-london",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };
  const closeSidebar = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };
  // Filter jobs dynamically

  const filteredImages =
    activeCategory === "View All"
      ? images
      : images.filter(
          (item) => item.tag.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>
      <div className="text-white py-10 lg:py-8 mx-auto relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-5 gap-x-4 gap-y-4">
          {filteredImages.map((item, index) => {
            const isHover = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative w-full h-[230px] lg:h-[316px] text-white p-3 lg:p-4 rounded-[14px] overflow-hidden flex flex-col justify-between cursor-pointer transform-gpu transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{
                  backgroundColor: item.theme,
                  // expose theme for hue-preserving darken
                  "--card": item.theme,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* ==== Pipe-style bottom→top curtain using clip-path (perfectly follows radius) ==== */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 hidden lg:block will-change-transform"
                  style={{
                    // start fully clipped from the top (100%), end unclipped (0%)
                    // rounded corners match via "round 14px"
                    clipPath: "inset(var(--wipe, 100%) 0 0 0 round 14px)",
                    transition:
                      "clip-path 380ms cubic-bezier(0.2,0.65,0.3,0.9)",
                    // same hue, deeper darken than before (≈20%)
                    background: "color-mix(in oklab, var(--card) 80%, black)",
                    // small translateZ to avoid banding
                    transform: "translateZ(0)",
                    // on hover flip the CSS variable:
                    ["--wipe"]: hoveredIndex === index ? "0%" : "100%",
                  }}
                />

                {/* thin sheen at leading edge (subtle) */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden lg:block"
                  style={{
                    height: 12,
                    clipPath: "inset(var(--wipe, 100%) 0 0 0 round 14px)",
                    transition:
                      "clip-path 380ms cubic-bezier(0.2,0.65,0.3,0.9)",
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0))",
                    mixBlendMode: "overlay",
                    transform: "translateZ(0)",
                    ["--wipe"]: hoveredIndex === index ? "0%" : "100%",
                  }}
                />

                {/* Top label (unchanged) */}
                <h2 className="relative z-10 font-[manrope] text-[12px] font-[400] leading-[101%] mt-2">
                  {item.name}
                </h2>

                {/* ===== MOBILE CONTENT (unchanged) ===== */}
                <div className="relative z-10 block lg:hidden flex-grow min-h-[160px] max-h-[230px]">
                  <div className="mt-4">
                    <h5 className="text-[14px] font-[700] leading-[101%]">
                      {item.title}
                    </h5>
                    <p className="text-[12px] text-white/60 font-[400] leading-[101%] py-1">
                      {item.experience}
                    </p>
                  </div>
                  <div className="flex flex-col justify-between min-h-[160px] max-h-[230px]">
                    <div className="mt-auto">
                      <p className="text-[11px] leading-normal text-white/90">
                        {item.content}
                      </p>
                    </div>
                    <div className="pb-6 pt-4">
                      <button
                        onClick={() => handleImageClick(index)}
                        className="text-[12px] w-full bg-white/10 text-white py-1 rounded-[6px]"
                      >
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>

                {/* ===== DESKTOP CONTENT (tighter stagger & distances) ===== */}
                <div className="relative z-10 hidden lg:block w-full h-auto">
                  <div className="relative min-h-[140px]">
                    {/* Rest state (fades out a bit quicker) */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 flex flex-col justify-end transition-all duration-220 ease-out ${
                        hoveredIndex === index
                          ? "opacity-0 translate-y-1 pointer-events-none"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      <h3 className="text-[17px] font-[700] leading-[101%] py-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-white/75 leading-[101%]">
                        {item.experience}
                      </p>
                    </div>

                    {/* Hover reveal (shorter travel: ~6–8px; staggered) */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <h3
                        className={`text-[17px] font-[700] leading-[101%] py-2 text-white transition-[opacity,transform] duration-260 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                        style={{
                          transitionDelay:
                            hoveredIndex === index ? "80ms" : "0ms",
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-[14px] text-white/85 leading-[101%] transition-[opacity,transform] duration-260 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                        style={{
                          transitionDelay:
                            hoveredIndex === index ? "160ms" : "0ms",
                        }}
                      >
                        {item.experience}
                      </p>

                      <p
                        className={`text-[12px] text-white/95 leading-normal pt-2 transition-[opacity,transform] duration-260 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                        style={{
                          transitionDelay:
                            hoveredIndex === index ? "240ms" : "0ms",
                        }}
                      >
                        {item.content}
                      </p>

                      <div
                        className={`pt-4 transition-[opacity,transform] duration-260 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }`}
                        style={{
                          transitionDelay:
                            hoveredIndex === index ? "320ms" : "0ms",
                        }}
                      >
                        <button
                          onClick={() => handleImageClick(index)}
                          className="w-full bg-white/25 hover:bg-white/30 text-white py-2 rounded-lg transition-colors"
                        >
                          {item.button}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle inner ring on hover (Pipe vibe) */}
                <span className="pointer-events-none absolute inset-0 rounded-[14px] ring-0 ring-transparent group-hover:ring-1 group-hover:ring-white/25 transition-[ring] duration-200" />
              </div>
            );
          })}
        </div>

        {/* ====== popup ====== */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-[#121212CC] flex justify-end items-center z-50 px-4"
            onClick={closeSidebar}
          >
            <div
              className="w-full md:w-[27%] h-fit bg-[#DAEBE8] shadow-lg transition-transform duration-300 relative flex flex-col lg:mr-4 mx-6 mt-8 rounded-[10px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 overflow-y-auto pb-6 px-6 pt-4">
                <div className="flex justify-end items-center">
                  <button
                    onClick={closeSidebar}
                    className="w-7 h-7 text-xl text-black flex items-center justify-center rounded-lg"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[16px] font-[300] leading-[108%] tracking-[0.32px] uppercase text-[#000]">
                  {images[selectedIndex].popupVenue}
                </p>
                <h4 className="text-[22px] font-[500] leading-[108%] tracking-[0.88px] text-[#020715] py-2">
                  {images[selectedIndex].title}
                </h4>
                {/* <p className="text-[12px] font-[400] leading-[108%] tracking-[0.32px] uppercase text-[#000] pb-2">
                  {images[selectedIndex].type}
                </p> */}
                <p className="text-[16px] text-[#000] font-[300] leading-[108%] tracking-[0.64px] ">
                  {images[selectedIndex].popupSalary}
                </p>
                <p className="text-[#000] text-[14px] font-[400] leading-[135%] pt-4 pb-4">
                  {images[selectedIndex].popupContent1}
                </p>
                <p className="text-sm text-black">
                  {images[selectedIndex].popupContent2}
                </p>
                <div className="flex justify-end mt-4">
                  <a
                    href={`/careers/${images[selectedIndex].slug}`}
                    className="flex justify-center w-full px-14 py-2 bg-[#01261E] text-white text-[18px] font-[500] rounded-[6px] hover:bg-[#014134] transition"
                  >
                    Assignment
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
