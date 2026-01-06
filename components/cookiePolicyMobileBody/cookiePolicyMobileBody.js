"use client";

import { useEffect, useRef, useState } from "react";

const sectionsWithContent = [
  {
    id: 1,
    title: "What Are Cookies?",
    topContent: (
      <>
        <p className="text-[16px] text-[#000000] font-[400] leading-[157%]">
          House of Summary ("Website") is a website owned and operated by House
          of Summary LLC. Our website uses cookies and similar tracking
          technologies to enhance your browsing experience, analyze website
          traffic, and personalize content. This Cookie Policy explains what
          cookies are, how we use them, and how you can manage your cookie
          preferences.
        </p>
      </>
    ),
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          Cookies are small text files stored on your device (computer, tablet,
          or mobile) when you visit a website. They help the website recognize
          your device on subsequent visits, enabling various features and
          functionalities.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Types of Cookies We Use",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          We use the following types of cookies on our website:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] ">
          <li>
            Essential Cookies: These cookies are necessary for the website to
            function properly. They enable basic functionalities such as page
            navigation and access to secure areas of the website. Without these
            cookies, the website cannot operate efficiently.
          </li>
          <li>
            Performance Cookies: These cookies collect information about how
            visitors use our website, such as which pages are visited most
            often. This information is used to improve the website’s performance
            and user experience. These cookies do not collect personal
            information.
          </li>
          <li>
            Functional Cookies: These cookies allow the website to remember
            choices you make (such as your username, language, or region) and
            provide enhanced, personalized features. They may also be used to
            provide services you have requested, such as watching a video or
            commenting on a blog.
          </li>
          <li>
            Marketing Cookies: These cookies track your browsing habits to
            deliver advertisements relevant to you and your interests. They also
            help measure the effectiveness of advertising campaigns. These
            cookies may be set by third-party advertising networks with our
            permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "How We Use Cookies",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          We use cookies to:
        </p>

        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] ">
          <li>
            Enhance your browsing experience by remembering your preferences and
            settings.
          </li>
          <li>
            Understand how you use our website and improve its performance and
            functionality.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Third-Party Cookies",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the website, deliver
          advertisements, and improve the overall user experience. These third
          parties may include analytics providers, advertising networks, and
          social media platforms.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Your Cookie Choices",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          You have the right to manage your cookie preferences. Most web
          browsers automatically accept cookies, but you can usually modify your
          browser settings to decline cookies if you prefer. Please note that
          disabling cookies may affect the functionality and features of our
          website.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          To manage your cookie preferences:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] ">
          <li>
            Browser Settings: You can adjust your browser settings to block or
            alert you about cookies. Check your browser’s help section for
            instructions on how to do this.
          </li>
          <li>
            Opt-Out Tools: Some third parties provide opt-out tools to manage
            cookies used for advertising purposes. Examples include the Network
            Advertising Initiative (NAI) opt-out page and the Digital
            Advertising Alliance (DAA) opt-out page.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Changes to This Cookie Policy",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any significant changes by posting the
          new Cookie Policy on this page. We encourage you to review this Cookie
          Policy periodically for any updates.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Contact Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[70px]">
          If you have any questions about this Policy, please contact us at
          contact@houseofsummary.com.
        </p>
      </>
    ),
  },
];
export default function CookiePolicyMobileBody() {
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
      <div className="px-4 bg-[#FAFAFA]">
        {/* Scroll Progress Bar */}
        <div className=" fixed top-[125px] left-0 w-full z-50 px-0">
          <div className="h-[4px] w-full ">
            <div
              id="scroll-progress-bar"
              className="h-full bg-[#C7A262]"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>

        {/* hero */}
        <div className="pt-[125px]">
          <h1 className="text-[30px] font-[400] leading-[104%] text-[#01261E] ">
            Cookie Policy
          </h1>
          <p className="text-[15px] text-[#6B6B6F] font-[400] leading-[157%] pt-[16px] pb-[35px]">
            Latest updated November 15, 2025
          </p>
        </div>

        {/* body */}

        <div className=" w-full flex flex-col">
          {sectionsWithContent.map((section, index) => (
            <div
              key={index}
              id={`section-${index}`}
              //   ref={(el) => (sectionRefs.current[index] = el)}
              className="scroll-mt-28"
            >
              <div className="text-[14px] text-[#000000] font-[400] leading-normal pb-[22px]">
                {section.topContent}
              </div>
              <h2 className="text-[#000] text-[22px] font-[700] leading-normal pt-[13px] pb-[25px] font-[manrope]">
                {section.title}
              </h2>
              <div className="text-[14px] text-[#000000] font-[400] leading-normal">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
