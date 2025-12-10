"use client";
import React, { useState } from "react";
import CareersJobCardsWeb from "../../components/careersJobCardsWeb/careersJobCardsWeb";
import CareersJobCardsMobile from "../../components/careersJobCardsMobile/careersJobCardsMobile";
import CareersAssignmentPopup from "../../components/careersAssignmentPopup/careersAssignmentPopup";

export default function ViewAll({ activeCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      slug: "head-of-sales",
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
    {
      tag: "other",
      name: "Other",
      title: "Assistant to the COO",
      experience: "Junior",
      content:
        "Support the COO with daily operations, coordination, and communication across teams in a fast-growing international media company.",
      popupSalary: "$12,000–$24,000",
      popupVenue: "remote",
      popupContent1:
        "House of Summary is looking for a proactive Assistant to the COO to help streamline operations and communication across departments. You’ll work directly with leadership, helping manage schedules, follow-ups, and team coordination.",
      popupContent2:
        "This role is ideal for someone organized, curious, and eager to learn how global media operations function from the inside. You’ll support everything from project planning to internal communications.",
      button: "Apply",
      theme: "#33a4b9",
      slug: "assistant-to-the-coo",
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

  const filteredImages =
    activeCategory === "View All"
      ? images
      : images.filter(
          (item) => item.tag.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="text-white py-10 lg:py-8 mx-auto relative">
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-5 gap-x-4 gap-y-4">
        {filteredImages.map((item, index) => (
          <React.Fragment key={index}>
            {/* DESKTOP */}
            <div key={`w-${index}`} className="hidden lg:block">
              <CareersJobCardsWeb
                item={item}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                handleImageClick={handleImageClick}
              />
            </div>
            {/* MOBILE */}
            <div key={`m-${index}`} className="lg:hidden">
              <CareersJobCardsMobile
                item={item}
                index={index}
                handleImageClick={handleImageClick}
                setHoveredIndex={setHoveredIndex}
                hoveredIndex={hoveredIndex}
              />
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* POPUP */}
      {selectedIndex !== null && (
        <CareersAssignmentPopup
          selectedIndex={selectedIndex}
          closeSidebar={closeSidebar}
          images={images}
        />
      )}
    </div>
  );
}
