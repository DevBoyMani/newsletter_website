"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RefundPolicyMobileBody from "../../components/refundPolicyMobileBody/refundPolicyMobileBody";

// Step 1: Define sections with title and unique content
const sectionsWithContent = [
  {
    id: 1,
    title: "Eligibility for Refunds",
    topContent: (
      <>
        <p className="text-[16px] text-[#000000] font-[400] leading-[157%]">
          House of Summary ("Website") is a website owned and operated by House
          of Summary LLC. We are committed to ensuring that our customers are
          satisfied with their experience. This Refund Policy outlines the
          conditions under which refunds may be issued.
        </p>
      </>
    ),
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          Refunds are available to advertisers under the following
          circumstances:
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          1.1 Non-Delivery of Newsletter
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          If the scheduled newsletter is not delivered due to a fault on our
          part, we offer two options:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          <li>
            Rescheduling: We can reschedule your advertisement to appear in a
            different newsletter or on a different day that aligns with your
            marketing goals.
          </li>
          <li>
            Full Refund: If rescheduling is not feasible or preferred, a full
            refund will be issued.
          </li>
        </ul>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          Non-delivery refers to technical issues on our end that result in the
          newsletter not being sent to the subscribers.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          1.2 Errors in Ad Placement
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          If there is an error in the placement of your advertisement (e.g.,
          incorrect placement, incorrect size, or misrepresentation of the ad),
          you may be eligible for a partial or full refund depending on the
          nature of the error.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          1.3 Duplicate Payment
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          If you are charged more than once for the same advertisement, a refund
          will be issued for the duplicate payment.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Non-Refundable Situations",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          Refunds will not be issued in the following cases:
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          2.1 Change of Mind
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          If you change your mind about advertising after the ad has been
          scheduled or published, a refund will not be granted.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          2.2 Performance of Advertisement
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          We do not guarantee specific results from your advertisement (such as
          clicks, leads, or sales). Refunds will not be issued based on the
          performance or return on investment (ROI) of your advertisement.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          2.3 Delays Outside Our Control
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          Refunds will not be issued for delays in the publication of the
          newsletter due to events outside our control, such as technical issues
          on the advertiser’s end or force majeure events.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Refund Request Process",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          To request a refund, please follow these steps:
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          3.1 Contact Us
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          Email us at contact@houseofsummary.com within 7 days of the scheduled
          newsletter publication date. Please include your advertisement
          details, the issue encountered, and any supporting documentation.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          3.2 Review Process
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[16px]">
          Our team will review your request within 5 business days and may
          contact you for additional information if necessary.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          3.3 Decision Notification
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          You will be notified of our decision via email within 10 business
          days. If approved, the refund will be processed within 14 business
          days to the original payment method.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Partial Refunds",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          In cases where a partial refund is appropriate, we will work with you
          to determine a fair amount based on the nature of the issue and the
          extent to which the advertisement was delivered as agreed.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Changes to the Refund Policy",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          We reserve the right to modify or update this Refund Policy at any
          time. Any changes will be effective immediately upon posting on the
          Website. It is your responsibility to review this policy periodically
          to stay informed about our refund practices.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Contact Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
          If you have any questions or concerns about this Refund Policy, please
          contact us at contact@houseofsummary.com.
        </p>
      </>
    ),
  },
];
const navbarHeight = 65;
export default function RefundPolicyBody() {
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
              Refund policy
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
        <RefundPolicyMobileBody />
      </div>
    </>
  );
}
