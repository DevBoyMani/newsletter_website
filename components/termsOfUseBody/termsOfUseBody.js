"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TermsOfUseMobileBody from "../../components/termsOfUseMobileBody/termsOfUseMobileBody";
// Step 1: Define sections with title and unique content
const sectionsWithContent = [
  {
    id: 1,
    title: "Use of the Website",
    topContent: (
      <>
        <p className="text-[16px] text-[#000000] font-[400] leading-[157%]">
          Welcome to House of Summary ("Website"), a website owned and operated
          by House of Summary LLC ("Company," "we," "us," or "our"). By
          accessing or using the Website, you agree to comply with and be bound
          by these Terms & Conditions ("Terms"). If you do not agree to these
          Terms, please do not use the Website.
        </p>
      </>
    ),
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          1.1 Eligibility
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          You must be at least 18 years old to use the Website. By using the
          Website, you represent and warrant that you meet this age requirement.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          1.2 License to Use
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          We grant you a limited, non-exclusive, non-transferable, and revocable
          license to access and use the Website for your personal,
          non-commercial use, subject to these Terms.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          1.3 Prohibited Uses
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          You agree not to use the Website for any unlawful purpose or in any
          way that could damage, disable, overburden, or impair the Website.
          Prohibited uses include, but are not limited to: copying,
          distributing, or disclosing any part of the Website in any medium;
          using any automated system, including without limitation "robots,"
          "spiders," or "offline readers," to access the Website; transmitting
          spam, chain letters, or other unsolicited emails; attempting to
          interfere with, compromise the system integrity or security, or
          decipher any transmissions to or from the servers running the Website.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Content",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          2.1 Intellectual Property
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          All content on the Website, including text, graphics, images, and
          logos, is the property of the Company or its content suppliers and is
          protected by copyright and other intellectual property laws. You may
          not reproduce, distribute, or create derivative works based on this
          content without our express written permission.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          2.2 User Submissions
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          If you submit any content to the Website, you grant us a
          non-exclusive, worldwide, royalty-free, perpetual, and irrevocable
          license to use, reproduce, modify, adapt, publish, translate,
          distribute, and display such content in any media. You represent and
          warrant that you own or have the necessary rights to grant this
          license.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Privacy",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          By accessing and/or using our Services, you agree to our Privacy
          Notice and consent to the collection, storage, and processing of any
          personal information we may obtain about you in accordance with the
          Privacy Notice and these Terms.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Disclaimers",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          4.1 No Warranty
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          The Website is provided on an "as is" and "as available" basis. We
          make no warranties, express or implied, regarding the operation of the
          Website or the information, content, materials, or products included
          on the Website.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          4.2 Limitation of Liability
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          To the fullest extent permitted by law, the Company shall not be
          liable for any damages of any kind arising from the use of the
          Website, including but not limited to direct, indirect, incidental,
          punitive, and consequential damages.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          4.3 No Confidentiality
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] ">
          The Company has no obligation to maintain the confidentiality of any
          information or materials submitted, except as explicitly stated in
          these Terms, the Privacy Notice, or any additional terms and
          conditions, or as required by law. The commercial use, reproduction,
          transmission, or distribution of any information, software, or other
          material available without the prior written consent of the Company is
          strictly prohibited. The Company reserves the right to take
          appropriate legal action, including, but not limited to, referring
          matters to law enforcement for any illegal or unauthorized use. The
          Company has the right to fully cooperate with any law enforcement
          authorities or court orders requesting or directing us to disclose the
          identity or other information of anyone posting any materials on or
          through the Website. YOU AGREE TO INDEMNIFY AND HOLD HARMLESS THE
          COMPANY AND ITS AFFILIATES, SUBSIDIARIES, LICENSORS, AND SERVICE
          PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY THE
          COMPANY DURING, OR AS A CONSEQUENCE OF, INVESTIGATIONS BY EITHER THE
          COMPANY OR LAW ENFORCEMENT AUTHORITIES.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Communications",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          By accessing and/or using the Services, you are engaging in electronic
          communication with us and consent to receive electronic communications
          from us. You acknowledge and agree that all agreements, notices,
          disclosures, and other communications we provide to you electronically
          fulfill any legal requirement that such communications be in writing.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Indemnification",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          You agree to indemnify, defend, and hold harmless the Company, its
          officers, directors, employees, agents, and affiliates from and
          against any claims, liabilities, damages, losses, and expenses,
          including reasonable attorneys' fees, arising out of or in any way
          connected with your use of the Website or violation of these Terms.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Reliance on Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          The Company does not review any data or information provided on or
          through the Website for accuracy, security, or any other purposes. The
          Company does not guarantee the accuracy, completeness, or usefulness
          of this information. Any reliance you place on such information is
          strictly at your own risk.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Third Party Content",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] ">
          The Website may include content provided by third parties, including
          but not limited to articles, advertisements, images, videos, and other
          multimedia content ("Third Party Content"). This content is for
          informational purposes only and does not imply endorsement or approval
          by us. We do not guarantee the accuracy, completeness, or reliability
          of any Third Party Content, and we are not responsible for any errors,
          omissions, or any loss or damage incurred as a result of using such
          content. Third Party Content is protected by copyright and other
          intellectual property laws, and any unauthorized use is prohibited.
          The Website may contain links to third-party websites or services over
          which we have no control, and we assume no responsibility for their
          content, privacy policies, or practices. Your interaction with third
          parties through our platform is governed by their terms and
          conditions, and we are not responsible for any disputes that arise.
          Your use of Third Party Content is at your own risk, and we disclaim
          all warranties with respect to it. By using our platform, you agree to
          indemnify and hold us harmless from any claims arising from your use
          of Third Party Content.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Sensitive Industries",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          We classify industries into two categories: Prohibited and Restricted.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          <strong>Prohibited industries</strong> are strictly banned and cannot
          advertise under any circumstances.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          <strong>Restricted industries</strong> require approval on a
          case-by-case basis, with compliance to additional guidelines, such as
          legal regulations, targeting, and certification.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          <strong>9.1 Prohibited industries</strong>
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.1 Gambling and Betting - Ads promoting gambling services,
          including online and location-based gambling (casinos, sports betting,
          lotteries).
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.2 Alcohol - Ads for alcoholic beverages, including online sales,
          brand promotions, and informational content.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.3 Get Rich Quick Schemes - Ads offering significant financial or
          material gain with little effort or risk. This includes multi-level
          marketing (MLM), work-from-home offers, online surveys, and similar
          schemes.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.4 Sexual Content and Suggestiveness - Ads that contain sexually
          suggestive material or references to sex. This includes adult services
          and sexually explicit products.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.5 Significant Skin Exposure - Ads that feature adult images with
          significant skin exposure, particularly where any part of the body
          from the sternum to mid-thigh is unclothed or clothed in revealing
          attire.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.6 Sensationalism - Ads that use exaggerated, shocking, or
          curiosity-driven messages to attract clicks. This includes ads
          centered around sensational topics like celebrity arrests, deaths, or
          scandals.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.7 Social Casino Games - Ads for simulated gambling games where
          players do not win real money or prizes. Examples include poker,
          slots, bingo, and other virtual casino games.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.8 Religion Ads advocating for or against specific religious views.
          General spiritual or non-denominational wellness content may be
          allowed but is subject to review.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.1.9 Politics - Ads for political campaigns, candidates, or any
          content addressing controversial political or social issues. This
          includes ads referencing political events such as elections, protests,
          and conflicts.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          <strong>9.2 Restricted industries</strong>
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.1 Astrology and Esoteric Practices - Ads related to astrology,
          horoscopes, psychic services, love spells, potions, and other esoteric
          practices.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.2 Cosmetic Procedures and Body Modification - Ads for cosmetic
          procedures, including surgical and non-surgical enhancements like
          lifts, suctions, lasers, hair removal, hair restoration, and tattoos.
          This also includes other body modification services.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.3 Consumer Loans - Ads promoting consumer lending services,
          including personal loans.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.4 Dating Services - Ads for dating services, online dating
          platforms, and chat sites or apps designed for meeting new people.
          This includes general social platforms that facilitate meeting or
          dating.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.5 Downloadable Utilities - Ads for downloadable software designed
          to enhance the functionality of an operating system or device.
          Examples include anti-virus programs, file converters, driver
          updaters, system cleaners, download managers, and browser toolbars.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.6 Drugs and Supplements - Ads related to pharmaceuticals,
          vitamins, supplements, and retailers offering these products. -
          Unverified health claims and non-compliant products are prohibited.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.7 Video Games (Casual & Online) - Ads promoting video games,
          including online, mobile, and downloadable games. This does not
          include ads for gaming consoles.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.8 Weight Loss Products and Programs - Ads promoting weight loss,
          dieting, and related programs. Healthy eating or general fitness
          content is not included in this restriction.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          9.2.9 Birth Control and Sexual Health - Ads related to birth control
          products, sexual health, and services for STDs, including clinics and
          medication. This includes fertility and abortion services but excludes
          normal pregnancy resources.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          We reserve the right to review and reject any advertisement that does
          not meet our policy criteria.
        </p>
      </>
    ),
  },
  {
    id: 10,
    title: "Changes to the Terms",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          We reserve the right to modify these Terms at any time. Any changes
          will be effective immediately upon posting on the Website. Your
          continued use of the Website following the posting of changes
          constitutes your acceptance of those changes.
        </p>
      </>
    ),
  },
  {
    id: 11,
    title: "Governing Law",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          These Terms shall be governed by and construed in accordance with the
          laws of the state of Wyoming, without regard to its conflict of law
          principles.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Contact Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          If you have any questions about these Terms, please contact us at
          contact@houseofsummary.com.
        </p>
      </>
    ),
  },
];
const navbarHeight = 65;
export default function TermsOfUseBody() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const sectionRefs = useRef([0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPosition = navbarHeight + 80;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPosition && rect.bottom > triggerPosition + 50) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (index) => {
    const element = sectionRefs.current[index];
    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        (navbarHeight + 20);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll percentage tracker
  useEffect(() => {
    const handleScroll = () => {
      const container = sectionRefs.current[0]?.parentElement;
      if (!container) return;

      const offsetTop = container.offsetTop;
      const scrollTop = window.scrollY;
      const contentHeight = container.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = contentHeight - windowHeight + offsetTop;
      let percent = ((scrollTop - offsetTop) / (maxScroll - offsetTop)) * 100;

      percent = Math.min(100, Math.max(0, percent));
      setScrollPercent(Math.round(percent));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    // the email will send to a backend or API here
  };

  // mobile version of the page scrolling indigator

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const progressBar = document.getElementById("scroll-progress-bar");
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // /

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="md:px-28 pt-14 pb-[130px]">
          {/* 1 hero */}
          <div className="pt-[26px]">
            <h1 className="text-[56px] font-[400] leading-[104%] text-[#000]">
              Terms of Use
            </h1>
            <p className="text-[16px] text-[#595959] font-[500] leading-[157%] py-[35px]">
              Latest updated November 15, 2025
            </p>
          </div>

          {/* 2 */}
          <div className="flex md:flex-row justify-between flex-col w-full h-full ">
            {/* left*/}
            <div className="md:w-[68%] w-full flex flex-col">
              {sectionsWithContent.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-28"
                >
                  <div className="text-[16px] text-[#000000] font-[500] leading-[157%] pb-[16px]">
                    {section.topContent}
                  </div>
                  <h2 className="text-[#000] text-[30px] font-[500] leading-[120%] pt-[24px] pb-[13px] font-[manrope]">
                    {section.title}
                  </h2>
                  <div className="pb-[16px]">{section.content}</div>
                </div>
              ))}
            </div>

            {/*right*/}
            <div className="max-w-[21%] w-full sticky top-24 self-start">
              <div className="">
                <p className="text-[12px] font-[400] pb-2 text-right">
                  {scrollPercent}%
                </p>
                <div className="bg-[#DAEBE8] py-[20px] px-[15px] rounded-[5px]">
                  <p className="text-[#000] text-[15px] font-[600] pb-6">
                    Table of content
                  </p>
                  <div className="flex flex-col space-y-4">
                    {sectionsWithContent.map((item, index) => (
                      <Link
                        key={index}
                        href={`#section-${index}`}
                        scroll={true}
                        onClick={(e) => {
                          e.preventDefault(); // <- important!
                          handleClick(index);
                        }}
                        className="text-[12px] leading-[143%]"
                      >
                        <p
                          className={`cursor-pointer ${
                            activeIndex === index
                              ? "text-[#000] font-[400]"
                              : "text-[#676A71] font-[400]"
                          }`}
                        >
                          {activeIndex === index && (
                            <span className="pr-2">→</span>
                          )}
                          {item.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden bg-[#FAFAFA]">
        <TermsOfUseMobileBody />
      </div>
    </>
  );
}
