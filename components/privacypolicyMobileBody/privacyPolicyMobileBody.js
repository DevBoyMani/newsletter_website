"use client";

import { useEffect, useRef, useState } from "react";

const sectionsWithContent = [
  {
    id: 1,
    title: "Information We Collect",
    topContent: (
      <>
        <p className="lg:text-[16px] text-[14px] text-[#000000] font-[400] leading-normal">
          House of Summary ("Website") is a website owned and operated by House
          of Summary LLC. We are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our Website and subscribe to our
          newsletter. Please read this Privacy Policy carefully. By accessing or
          using the Website, you agree to the collection and use of information
          in accordance with this policy.
        </p>
      </>
    ),
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <strong>1.1 Personal Information</strong>
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We may collect personal information that you voluntarily provide to us
          when you register on the Website, subscribe to our newsletter, respond
          to a survey, fill out a form, or otherwise enter information on our
          Website. This information may include:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Mailing address</li>
          <li>Any other information you choose to provide</li>
        </ul>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We use Leadfeeder to gather information about visitors to our website,
          including your name, email, designation, and company. This data is
          collected for sales purposes to help us identify potential leads and
          improve our sales processes. Leadfeeder tracks this information based
          on visitor interactions, such as IP addresses, pages visited, and
          session duration. For more details on how Leadfeeder processes data,
          please refer to{" "}
          <a
            className="border-b-2 border-[#01261E] text-black"
            href="https://www.leadfeeder.com/privacy/"
            target="_blank"
          >
            their privacy policy
          </a>
          .
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          In compliance with the CAN-SPAM Act, all emails sent from us will
          clearly state who the email is from and provide clear information on
          how to contact the sender. In addition, all email messages will also
          contain concise information on how to remove yourself from our mailing
          list so that you receive no further email communication from us.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <strong>1.2 Non-Personal Information</strong>
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We may also collect non-personal information about you automatically
          when you access or use the Website. This information may include:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          <li>Browser type</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Pages viewed</li>
          <li>Time and date of visits</li>
          <li>
            Other anonymous statistical data involving your use of the Website
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We use the information we collect to:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal ">
          <li>Provide and manage our newsletter services.</li>
          <li>Personalize your experience on our Website.</li>
          <li>Improve our Website and newsletter content.</li>
          <li>
            Communicate with you about updates, offers, and other information
            related to our newsletters.
          </li>
          <li>
            Monitor and analyze usage and trends to improve our Website and
            services.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Sharing Your Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <li>
            Service Providers: Third-party vendors who help us operate our
            Website and provide our newsletter services, subject to
            confidentiality agreements.
          </li>
          <li>
            Legal Requirements: If required by law or in response to valid
            requests by public authorities (e.g., a court or government agency).
          </li>
          <li>
            Business Transfers: In the event of a merger, acquisition, or sale
            of all or a portion of our assets, your information may be
            transferred as part of that transaction.
          </li>
        </ul>

        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <strong>
            We may disclose Personal Data and other information as follows:
          </strong>
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          1. Third Parties that Help Provide the Messaging Service: We will not
          share your opt-in to an SMS short code campaign with a third party for
          purposes unrelated to supporting you in connection with that campaign.
          We may share your Personal Data with third parties that help us
          provide the messaging service, including, but not limited to, platform
          providers, phone companies, and other vendors who assist us in the
          delivery of text messages.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          2. Additional Disclosures: Affiliates: We may disclose the Personal
          Data to our affiliates or subsidiaries; however, if we do so, their
          use and disclosure of your Personal Data will be subject to this
          Policy. All the above categories exclude text messaging originator
          opt-in data and consent; this information will not be shared with any
          third parties. All the above categories exclude text messaging
          originator opt-in data and consent; this information will not be
          shared with any third parties.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          3. All the above categories exclude text messaging originator opt-in
          data and consent; this information will not be shared with any third
          parties.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Data Security",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          We implement a variety of security measures to maintain the safety of
          your personal information when you enter, submit, or access your
          personal information. However, please be aware that no security
          measures are perfect or impenetrable, and we cannot guarantee that
          unauthorized access, hacking, data loss, or other breaches will never
          occur.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          We use cookies and similar tracking technologies to track the activity
          on our Website and hold certain information. Cookies are files with a
          small amount of data which may include an anonymous unique identifier.
          Cookies are sent to your browser from a website and stored on your
          device. You can instruct your browser to refuse all cookies or to
          indicate when a cookie is being sent. However, if you do not accept
          cookies, you may not be able to use some portions of our Website.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Third-Party Links",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          Occasionally, at our discretion, we may include or offer third-party
          products or services on our Website. These third-party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Children's Privacy",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          Our Services are not designed for children under 13, and we do not
          intentionally or knowingly collect Personal Information from users who
          are under the age of 13 or from other websites or services directed at
          children. If we discover that a child under 13 has provided us with
          Personal Information, we will delete such information.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Your Rights",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We may send periodic promotional emails to you. You have the right to
          prevent us from contacting you for marketing purposes at any time.
          When we send a promotional communication, you can opt out of further
          communications by following the unsubscribe instructions provided in
          each email. It may take up to 10 business days for us to process
          unsubscribe requests.
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          <li className="pb-[22px]">
            Right to Know: You have the right to request information about our
            Personal Information collection practices over the past 12 months,
            including the categories of information collected, the sources, our
            business purposes for collecting or sharing it, and the categories
            of third parties with whom we shared it. You may also request a copy
            of the specific pieces of Personal Information we collected about
            you in the last 12 months.
          </li>
          <li className="pb-[22px]">
            Right to Delete: You may request that we delete your Personal
            Information, subject to certain exceptions.
          </li>
          <li className="pb-[22px]">
            Right to Opt Out: You have the right to opt out of any "sales" of
            your Personal Information if applicable. For clarity, we do not sell
            your Personal Information.
          </li>
          <li className="pb-[22px]">
            Non-Discrimination: You have the right to not be discriminated
            against for exercising these rights.
          </li>
          <li className="pb-[22px]">
            Access to Your Personal Information: You may request access to your
            Personal Information by contacting us. If required by law, we will
            provide reasonable access to the Personal Information we have about
            you. 
          </li>
          <li className="pb-[22px]">
            Changes to Your Personal Information: We rely on you to update and
            correct your Personal Information. 
          </li>
          <li className="pb-[22px]">
            Deletion of Your Personal Information: Typically, we retain your
            Personal Information for the period necessary to fulfill the
            purposes outlined in this Privacy Notice. You may request
            information about how long we keep a specific type of information or
            request that we delete your Personal Information. If required by
            law, we will grant such requests. 
          </li>
          <li className="pb-[22px]">
            Objection to Certain Processing: You may object to our use or
            disclosure of your Personal Information by contacting us.
          </li>
          <li className="pb-[22px]">
            Promotional Emails: You may choose to provide us with your email
            address for sending free newsletters, surveys, offers, and other
            promotional materials. You can stop receiving promotional emails by
            following the unsubscribe instructions in those emails. Even if you
            opt-out of promotional emails, we may still send you service-related
            communications.
          </li>
          <li className="">
            Revocation of Consent: If you revoke your consent for processing
            Personal Information, we may no longer be able to provide you with
            services. In some cases, we may limit or deny your request to revoke
            consent if permitted or required by law, or if we are unable to
            adequately verify your identity. You may revoke consent to
            processing by contacting us.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 9,
    title: "CAN-SPAM Act Compliance",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          We comply with the CAN-SPAM Act of 2003. This means:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <li>
            We do not use false or misleading subjects or email addresses.
          </li>
          <li>
            We identify the message as an advertisement in a reasonable way.
          </li>
          <li>
            We include the physical address of our business or site
            headquarters.
          </li>
          <li>
            We monitor third-party email marketing services for compliance, if
            one is used.
          </li>
          <li>We honor opt-out/unsubscribe requests quickly.</li>
          <li>
            We allow users to unsubscribe by using the link at the bottom of
            each email.
          </li>
        </ul>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          If at any time you would like to unsubscribe from receiving future
          emails, you can follow the unsubscribe instructions at the bottom of
          each email. We will promptly remove you from ALL correspondence.
        </p>
      </>
    ),
  },
  {
    id: 10,
    title: "GDPR Compliance",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights under the General Data Protection
          Regulation (GDPR). We aim to take reasonable steps to allow you to
          correct, amend, delete, or limit the use of your Personal Data.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          As a resident of the EEA, you have the following data protection
          rights:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <li>
            The right to access, update, or to delete the information we have on
            you.
          </li>
          <li>
            The right of rectification. You have the right to have your
            information rectified if that information is inaccurate or
            incomplete.
          </li>
          <li>
            The right to object. You have the right to object to our processing
            of your Personal Data.
          </li>
          <li>
            The right of restriction. You have the right to request that we
            restrict the processing of your personal information.
          </li>
          <li>
            The right to data portability. You have the right to be provided
            with a copy of your information in a structured, machine-readable,
            and commonly used format.
          </li>
          <li>
            The right to withdraw consent. You also have the right to withdraw
            your consent at any time where we relied on your consent to process
            your personal information.
          </li>
        </ul>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          To exercise these rights, please contact us at
          contact@houseofsummary.com. We may ask you to verify you identity
          before responding to such requests. Please note that we may retain
          information as necessary to comply with legal obligations or resolve
          disputes.
        </p>
      </>
    ),
  },
  {
    id: 11,
    title: "California Privacy Rights Act (CPRA) Compliance",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          Under the California Privacy Rights Act (CPRA), residents of
          California have specific rights regarding their personal information.
          If you are a California resident, you have the following rights:
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[22px]">
          <li>
            The right to know. You have the right to request that we disclose
            certain information to you about our collection and use of your
            personal information over the past 12 months.
          </li>
          <li>
            The right to delete. You have the right to request the deletion of
            personal information we have collected from you, subject to certain
            exceptions.
          </li>
          <li>
            The right to correct. You have the right to request the correction
            of inaccurate personal information that we maintain about you.
          </li>
          <li>
            The right to opt-out. You have the right to direct us to not sell
            your personal information (opt-out of sale). We do not sell your
            personal information.
          </li>
          <li>
            The right to limit use and disclosure of sensitive personal
            information. You have the right to request that we limit the use and
            disclosure of your sensitive personal information.
          </li>
          <li>
            The right to non-discrimination. We will not discriminate against
            you for exercising any of your CPRA rights. This means that we will
            not deny you goods or services, charge you different prices or
            rates, or provide you with a different level or quality of goods or
            services.
          </li>
        </ul>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          To exercise your rights under the CPRA, please contact us at
          contact@houseofsummary.com. We may need to verify your identity before
          processing your request, which may involve asking you to provide
          certain information or documentation.
        </p>
      </>
    ),
  },
  {
    id: 12,
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
        </p>
      </>
    ),
  },
  {
    id: 13,
    title: "Contact Information",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-normal pb-[70px]">
          If you have any questions about this Policy, please contact us at
          contact@houseofsummary.com.
        </p>
      </>
    ),
  },
];
export default function PrivacyPolicyMobileBody() {
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
            Privacy Policy
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
