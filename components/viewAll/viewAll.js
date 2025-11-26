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

  const images = [
    {
      tag: "marketing",
      name: "Marketing",
      title: "Social Media Intern",
      experience: "Entry",
      content:
        "Create, publish, and analyze daily social content to grow readership and brand reach across major platforms with hands-on strategy experience.",
      popupSalary: "Internship",
      popupVenue: "remote",
      popupContent1:
        "Join our editorial team as a Social Media Intern and help shape how our newsletters show up across Facebook, Instagram, Threads, X, Reddit, and LinkedIn. You will publish daily content, write sharp hooks, and manage a consistent calendar.",
      popupContent2:
        "You will monitor comments and trends, track analytics, and test ideas that turn readers into subscribers. Expect hands-on guidance, real responsibility, and weekly feedback that strengthens storytelling, design judgment, and data-driven decision making.",
      button: "Apply",
      theme: "#E19F20",
      slug: "marketing-social",
    },
    {
      tag: "tech",
      name: "Tech",
      title: "Python Developer",
      experience: "Senior",
      content:
        "Build automations, data pipelines, and backend systems that power our growing network of newsletters and analytics infrastructure.",
      popupSalary: "$24,000–$36,000",
      popupVenue: "remote",
      popupContent1:
        "We’re looking for a Python Developer who can turn ideas into smart, scalable systems. You’ll work on everything from data scraping to automation scripts and backend integrations that keep our media network running smoothly.",
      popupContent2:
        "This is a hands-on role that blends engineering and creativity. You’ll collaborate with our editorial and analytics teams to build tools that save hours, power insights, and help us grow faster.",
      button: "Apply",
      theme: "#582719",
      slug: "python-developer",
    },
    {
      tag: "editorial",
      name: "Editorial",
      title: "Content Writer",
      experience: "Mid-level",
      content:
        "Write sharp, witty, and insightful stories that capture London’s people, culture, and city life for a fast-growing daily newsletter.",
      popupSalary: "$12,000–$24,000",
      popupVenue: "remote",
      popupContent1:
        "London Summary is looking for a writer who knows the city beyond its headlines. Someone who sees stories in the everyday, from a new café in Shoreditch to a tech boom in Canary Wharf.",
      popupContent2:
        "You’ll help build one of London’s most distinctive newsletters, writing pieces that inform, entertain, and connect readers to the pulse of the city.",
      button: "Apply",
      theme: "#016788",
      slug: "content-writer-london-summary",
    },
    {
      tag: "others",
      name: "Other",
      title: "SEO Manager",
      experience: "Senior",
      content:
        "Drive organic growth across a global network of newsletters by building and optimizing data-driven SEO strategies.",
      popupSalary: "$12,000–$18,000",
      popupVenue: "remote",
      popupContent1:
        "House of Summary is looking for an SEO Manager who blends analytical precision with creative insight. You’ll help our network of newsletters reach millions more readers organically.",
      popupContent2:
        "This is a hands-on role where strategy meets execution: analyzing data, improving infrastructure, and driving measurable audience growth",
      button: "Apply",
      theme: "#092236",
      slug: "seo-manager",
    },
    {
      tag: "leadership",
      name: "Leadership",
      title: "Head of Ad Sales",
      experience: "Senior",
      content:
        "Lead and scale ad sales across a global network of newsletters by building premium partnerships and driving revenue growth.",
      popupSalary: "$24,000–$36,000 + performance incentives",
      popupVenue: "remote",
      popupContent1:
        "House of Summary is seeking a strategic, relationship-driven Head of Ad Sales to lead monetization across our fast-growing portfolio of newsletters.",
      popupContent2:
        "This is a leadership role for someone who thrives at the intersection of media, sales, and strategy, turning brand relationships into long-term revenue partnerships and premium advertising experiences.",
      button: "Apply",
      theme: "#1A1A1A",
      slug: "leadership-ad-sales",
    },
    {
      tag: "others",
      name: "Other",
      title: "Legal & Compliance Officer",
      experience: "Senior",
      content:
        "Oversee legal, regulatory, and compliance functions across an international media group operating newsletters in the US, EU, and UAE.",
      popupSalary: "$24,000–$36,000",
      popupVenue: "remote",
      popupContent1:
        "House of Summary is seeking a Legal & Compliance Officer to manage and oversee legal, regulatory, and compliance activities across its international portfolio of media brands.",
      popupContent2:
        "This is a strategic and detail-oriented role for someone who can bridge legal precision with commercial awareness, ensuring operational integrity and compliance across multiple jurisdictions.",
      button: "Apply",
      theme: "#394E65",
      slug: "legal-compliance-officer",
    },
    {
      tag: "marketing",
      name: "Marketing",
      title: "Brand Partnerships Manager",
      experience: "Mid-level",
      content:
        "Lead global brand collaborations and sponsorships, driving creative, data-backed campaigns across House of Summary’s international newsletter network.",
      popupSalary: "$24,000–$36,000",
      popupVenue: "remote",
      popupContent1:
        "House of Summary is hiring a Brand Partnerships Manager to develop and manage strategic relationships with top global brands. You’ll lead sponsorships, integrated marketing campaigns, and creative partnerships.",
      popupContent2:
        "This role blends creativity with commercial insight, ideal for someone who understands brand storytelling, audience growth, and performance metrics that drive meaningful results.",
      button: "Apply",
      theme: "#657C75",
      slug: "brand-partnerships-manager",
    },
    {
      tag: "design",
      name: "Design",
      title: "Video Editor",
      experience: "Mid-level",
      content:
        "Edit and produce short-form video content and reels that bring House of Summary’s storytelling and brand identity to life.",
      popupSalary: "$12,000–$24,000",
      popupVenue: "remote",
      popupContent1:
        "We’re looking for a Video Editor (Reels) who can turn ideas into visually compelling short-form content. You’ll edit fast-paced, on-brand videos for our newsletters and social media channels, shaping narratives that connect with a global audience.",
      popupContent2:
        "This role suits someone creative and detail-oriented who understands pacing, hooks, and trends, and can adapt serious topics like geopolitics and business into engaging visuals.",
      button: "Apply",
      theme: "#01261E",
      slug: "video-editor",
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
                className="group relative w-full h-[270px] lg:h-[316px] text-white p-3 lg:p-4 rounded-[14px] overflow-hidden flex flex-col justify-between cursor-pointer transform-gpu transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
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

                {/* ===== MOBILE CONTENT SIMPLE VERSION ===== */}
                <div className="relative z-10 block lg:hidden flex flex-col h-full">
                  <div className="mt-4">
                    <h5 className="text-[14px] font-[700] leading-[101%]">
                      {item.title}
                    </h5>
                    <p className="text-[12px] text-white/60 font-[400] leading-[101%] py-1">
                      {item.experience}
                    </p>
                  </div>

                  {/* Content that grows but doesn't scroll */}
                  <div className="flex-1">
                    <p className="text-[11px] leading-normal text-white/90">
                      {item.content}
                    </p>
                  </div>

                  {/* Button at bottom */}
                  <div className="pt-4">
                    <button
                      onClick={() => handleImageClick(index)}
                      className="text-[12px] w-full bg-white/10 text-white py-1.5 rounded-[6px]"
                    >
                      {item.button}
                    </button>
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
