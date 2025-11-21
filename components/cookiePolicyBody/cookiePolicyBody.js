"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CookiePolicyMobileBody from "../../components/cookiePolicyMobileBody/cookiePolicyMobileBody";

// Step 1: Define sections with title and unique content
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          You have the right to manage your cookie preferences. Most web
          browsers automatically accept cookies, but you can usually modify your
          browser settings to decline cookies if you prefer. Please note that
          disabling cookies may affect the functionality and features of our
          website.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] ">
          If you have any questions about this Policy, please contact us at
          contact@houseofsummary.com.
        </p>
      </>
    ),
  },
];
const navbarHeight = 65;
export default function CookiePolicyBody() {
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
            <h2 className="text-[56px] font-[400] leading-[104%] text-[#000]">
              Cookie Policy
            </h2>
            <p className="text-[16px] text-[#595959] font-[500] leading-[157%] py-[35px]">
              Latest updated November 15, 2025 Latest updated November 15, 2025
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
                  <p className="text-[#000] text-[30px] font-[500] leading-[120%] pt-[24px] pb-[13px]">
                    {section.title}
                  </p>
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
        <CookiePolicyMobileBody />
      </div>
    </>
  );
}
