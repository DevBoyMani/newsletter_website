"use client";

import { useEffect, useRef, useState } from "react";

const sectionsWithContent = [
  {
    id: 1,
    title: "Eligibility for Refunds",
    topContent: (
      <>
        <p className="lg:text-[16px] text-[14px] text-[#000000] font-[400] leading-[157%]">
          House of Summary ("Website") is a website owned and operated by House
          of Summary LLC. We are committed to ensuring that our customers are
          satisfied with their experience. This Refund Policy outlines the
          conditions under which refunds may be issued.
        </p>
      </>
    ),
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          Refunds are available to advertisers under the following
          circumstances:
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          1.1 Non-Delivery of Newsletter
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          If the scheduled newsletter is not delivered due to a fault on our
          part, we offer two options:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          Non-delivery refers to technical issues on our end that result in the
          newsletter not being sent to the subscribers.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          1.2 Errors in Ad Placement
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          If there is an error in the placement of your advertisement (e.g.,
          incorrect placement, incorrect size, or misrepresentation of the ad),
          you may be eligible for a partial or full refund depending on the
          nature of the error.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          Refunds will not be issued in the following cases:
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          2.1 Change of Mind
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          If you change your mind about advertising after the ad has been
          scheduled or published, a refund will not be granted.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          2.2 Performance of Advertisement
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          We do not guarantee specific results from your advertisement (such as
          clicks, leads, or sales). Refunds will not be issued based on the
          performance or return on investment (ROI) of your advertisement.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          To request a refund, please follow these steps:
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          3.1 Contact Us
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          Email us at contact@houseofsummary.com within 7 days of the scheduled
          newsletter publication date. Please include your advertisement
          details, the issue encountered, and any supporting documentation.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
          3.2 Review Process
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[22px]">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pb-[70px]">
          If you have any questions or concerns about this Refund Policy, please
          contact us at contact@houseofsummary.com.
        </p>
      </>
    ),
  },
];
export default function RefundPolicyMobileBody() {
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
            Refund policy
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
              <p className="text-[#000] text-[22px] font-[700] leading-normal pt-[13px] pb-[25px]">
                {section.title}
              </p>
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
