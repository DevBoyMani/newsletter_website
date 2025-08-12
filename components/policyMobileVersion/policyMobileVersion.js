"use client";

import { useEffect, useRef, useState } from "react";

const sectionsWithContent = [
  {
    id: 1,
    title: "Information We Collect",
    topContent: (
      <>
        <p className="pb-[22px]">
          Welcome to the web site (the “Site”) of Sagravia, Inc. (“Sagravia”,
          “we”, “us” and/or “our”). We believe that protecting our customers’
          and business partners’ privacy is crucial to our business and values.
        </p>
        <p className="pb-[22px]">
          This Site is operated by Sagravia and has been created to provide
          information about our company and advertising automation services and
          related services (together with the Site, the “Services”) to our
          Service visitors (“you”, “your”). This Privacy Policy sets forth
          Sagravia’s policy with respect to information including personally
          identifiable data (“Personal Data”) and other information that is
          collected from visitors to the Site and Services.
        </p>
        <p className="pb-[35px]">
          Unless otherwise expressly stated herein, the terms used in this
          Privacy Policy shall have the meaning set forth in the General Data
          Protection Regulation (EU) 2016/679 (the “GDPR”).
        </p>
      </>
    ),
    content: (
      <>
        <p className="pb-[22px]">
          The marketing world is constantly evolving, and email marketing is the
          future of advertising. It is a fast, flexible, and cost-effective way
          to promote products or services. Email has become a daily habit for
          many. It is perceived as reliable, safe, and free from intrusive
          pop-ups, malicious bots, or fraud. This trust translates into higher
          engagement in email newsletters than in other marketing channels.
        </p>
        <p className="pb-[22px]">
          The marketing world is constantly evolving, and email marketing is the
          future of advertising. It is a fast, flexible, and cost-effective way
          to promote products or services. Email has become a daily habit for
          many. It is perceived as reliable, safe, and free from intrusive
          pop-ups, malicious bots, or fraud. This trust translates into higher
          engagement in email newsletters than in other marketing channels.
        </p>
        <p className="pb-[35px]">
          The marketing world is constantly evolving, and email marketing is the
          future of advertising. It is a fast, flexible, and cost-effective way
          to promote products or services. Email has become a daily habit for
          many. It is perceived as reliable, safe, and free from intrusive
          pop-ups, malicious bots, or fraud. This trust translates into higher
          engagement in email newsletters than in other marketing channels.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Other information",
    content: (
      <>
        <p className="pb-[22px]">
          Email marketing is a broad umbrella, and one of the most effective
          ways to leverage it is through newsletter advertising. It is a
          powerful strategy that is taking the marketing world by storm.
        </p>
        <ul className="custom-list pb-[22px]">
          <li>
            There are 4.5 billion email users, and this is expected to reach 4.8
            billion by 2027.
          </li>
          <li>
            4 in 5 customers prefer email over any other form of communication.
          </li>
          <li>
            95% of marketers agree it delivers excellent return on investment
            (ROI).
          </li>
          <li>
            Email marketing revenue is expected to grow by 287% worldwide by
            2032.
          </li>
          <li>
            Hands-on experience with more than one payroll software (Dayforce,
            ADP WFN, UKG, Workday, Employeur D, Nethris...)
          </li>
          <li>
            Email open rates range from 15-25%, 275% better than organic social
            media engagement. 
          </li>
        </ul>
        <p className="pb-[35px]">
          While social media offers broad reach and engagement, newsletter
          advertising often provides a more targeted and focused audience,
          potentially leading to higher conversion rates and a stronger return
          on investment. Unlike intrusive ads on platforms like YouTube,
          newsletters are a deliberate choice made by the user. They can’t be
          skipped, but are actively chosen by users.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Our Use of Your Personal Data and Other Information",
    content: (
      <>
        <p className="pb-[22px]">
          Newsletter advertising is a partnership between advertisers and
          newsletter publishers, offering a direct and highly targeted way to
          reach audiences. Instead of curating content and building a mailing
          list from scratch, businesses can leverage established newsletters
          that have already cultivated a dedicated readership.
        </p>
        <p className="pb-[22px]">
          Newsletters are entirely optional. Businesses can only reach out to
          customers after they subscribe. When a customer takes the extra step
          of joining a mailing list, they are essentially signaling that they
          want to hear more from the brand. They’re interested in the brand, the
          latest updates, exclusive offers, discounts and more.
        </p>
        <p className="pb-[22px]">
          These are not passive consumers but engaged customers who trust the
          brand and want to stay connected. Given how frequently the average
          person checks their email, newsletters become more than a marketing
          tool by seamlessly but a lifestyle add-on.
        </p>
        <p className="pb-[22px]">
          In its simplest form, newsletter advertising means paying a publisher
          to place your ad within their content. These newsletters have already
          built a loyal community around their niches. By partnering with them,
          you gain access to a highly engaged audience.
        </p>
        <p className="pb-[35px]">
          Imagine you're a business selling supplements and vitamins. By placing
          ads in a well-established health and lifestyle newsletter, you
          instantly reach an audience actively seeking wellness tips, a
          concentrated pool of people already interested in products like yours.
          This targeted approach ensures your ad lands in front of the right
          eyes rather than being ignored by an uninterested audience.
          <br />
          Newsletters bridge the gap between businesses and highly relevant
          consumers, making ads more impactful and effective
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "We processes Personal Data on the following basis",
    content: (
      <>
        <p className="pb-[22px]">
          More and more users are now installing ad blockers, preventing ads
          from interrupting their experience but making it harder for businesses
          to reach their audience.
        </p>
        <p className="pb-[22px]">
          As a result, advertisers pay for ad placements, but with ad blockers
          in place, many ads never even reach their audience. This makes their
          campaign efforts ineffective.
        </p>

        <p className="pb-[22px]">
          Newsletters bypass ad blockers since email ads don’t function like
          traditional media ads. This means that with newsletter ads, you reach
          your intended audience and achieve the ROI and engagement you planned
          for your campaign.
        </p>

        <p className="pb-[22px]">
          Social media and search engines rely on constantly evolving
          algorithms. With ever-shifting content rules, social media can be
          unpredictable. Since algorithms determine ad exposure, content ad
          visibility can be negatively impacted or even buried in searches,
          making it harder to track progress.
        </p>
        <p className="pb-[22px]">
          Newsletters offer a more reliable option. They don’t operate under
          algorithmic preferences but instead, work on a simple and direct
          approach. Newsletters go straight to subscribers’ inboxes, giving you
          full control over who sees your content without fighting for
          visibility.
        </p>

        <p className="pb-[22px]">
          Newsletters have their own personality and brand identity, making them
          a helpful partner for advertisers. Finding a newsletter that
          complements the advertiser's brand allows it to reach a focused and
          engaged mailing list.
        </p>
        <p className="pb-[22px]">
          One of the biggest strengths of newsletter advertising is its ability
          to target niche audiences. By partnering with the relevant
          newsletters, advertisers ensure their message reaches the right
          people.
        </p>
        <p className="pb-[35px]">
          Newsletters exist in every industry, from real estate to tech and
          beyond. They offer a direct medium to the ideal customers. The right
          partnership allows advertisers to leverage the authority a newsletter
          has built and bridges the gap between interest and expertise.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Our Disclosure of Your Personal Data and Other Information",
    content: (
      <>
        <p className="pb-[70px]">
          You can buy newsletter ad space through programmatic direct buys,
          private marketplaces (PMPs), or open exchanges. Programmatic direct
          buys allow you to purchase ad inventory directly from a publisher,
          creating a one-to-one relationship. Private marketplaces (PMPs) offer
          exclusive access to premium ad slots, while open exchanges function as
          public auctions where multiple advertisers bid for available
          inventory.
        </p>
      </>
    ),
  },
];

export default function PolicyMobileVersion() {
  return (
    <>
      <div className="px-4">
        {/* hero */}
        <div className="pt-[125px]">
          <h2 className="text-[30px] font-[400] leading-[104%] text-[#01261E] ">
            Privacy Policy
          </h2>
          <p className="text-[15px] text-[#6B6B6F] font-[400] leading-[157%] pt-[16px] pb-[35px]">
            Latest updated 24 June 2025
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
              <div className="text-[14px] text-[#000000] font-[400] leading-normal">
                {section.topContent}
              </div>
              <p className="text-[#000] text-[22px] font-[700] leading-normal pb-[25px]">
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
