"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BlogSlugComponentList from "../blogSlugComponentList/blogSlugComponentList";
import PolicyMobileVersion from "../policyMobileVersion/policyMobileVersion";

// Step 1: Define sections with title and unique content
const sectionsWithContent = [
  {
    id: 1,
    title: "Information We Collect",
    topContent: (
      <>
        <p className="text-[16px] text-[#000000] font-[500] leading-[157%] pb-[35]">
          Welcome to the web site (the “Site”) of Sagravia, Inc. (“Sagravia”,
          “we”, “us” and/or “our”). We believe that protecting our customers’
          and business partners’ privacy is crucial to our business and values.
        </p>
        <p className="text-[16px] text-[#000000] font-[500] leading-[157%] pb-[35]">
          This Site is operated by Sagravia and has been created to provide
          information about our company and advertising automation services and
          related services (together with the Site, the “Services”) to our
          Service visitors (“you”, “your”). This Privacy Policy sets forth
          Sagravia’s policy with respect to information including personally
          identifiable data (“Personal Data”) and other information that is
          collected from visitors to the Site and Services.
        </p>
        <p className="text-[16px] text-[#000000] font-[500] leading-[157%] pb-[35]">
          Unless otherwise expressly stated herein, the terms used in this
          Privacy Policy shall have the meaning set forth in the General Data
          Protection Regulation (EU) 2016/679 (the “GDPR”).
        </p>
      </>
    ),
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          The marketing world is constantly evolving, and email marketing is the
          future of advertising. It is a fast, flexible, and cost-effective way
          to promote products or services. Email has become a daily habit for
          many. It is perceived as reliable, safe, and free from intrusive
          pop-ups, malicious bots, or fraud. This trust translates into higher
          engagement in email newsletters than in other marketing channels.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          The marketing world is constantly evolving, and email marketing is the
          future of advertising. It is a fast, flexible, and cost-effective way
          to promote products or services. Email has become a daily habit for
          many. It is perceived as reliable, safe, and free from intrusive
          pop-ups, malicious bots, or fraud. This trust translates into higher
          engagement in email newsletters than in other marketing channels.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Email marketing is a broad umbrella, and one of the most effective
          ways to leverage it is through newsletter advertising. It is a
          powerful strategy that is taking the marketing world by storm.
        </p>
        <ul className="custom-list text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Newsletter advertising is a partnership between advertisers and
          newsletter publishers, offering a direct and highly targeted way to
          reach audiences. Instead of curating content and building a mailing
          list from scratch, businesses can leverage established newsletters
          that have already cultivated a dedicated readership.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Newsletters are entirely optional. Businesses can only reach out to
          customers after they subscribe. When a customer takes the extra step
          of joining a mailing list, they are essentially signaling that they
          want to hear more from the brand. They’re interested in the brand, the
          latest updates, exclusive offers, discounts and more.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          These are not passive consumers but engaged customers who trust the
          brand and want to stay connected. Given how frequently the average
          person checks their email, newsletters become more than a marketing
          tool by seamlessly but a lifestyle add-on.
        </p>
        {/* <div className="py-4">
          <img
            src="/blogs/blog-s-1.png"
            alt="image-1"
            className="w-full object-cover "
          />
        </div> */}
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          In its simplest form, newsletter advertising means paying a publisher
          to place your ad within their content. These newsletters have already
          built a loyal community around their niches. By partnering with them,
          you gain access to a highly engaged audience.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pt-2 pl-2">
          &bull; No Adblockers
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          More and more users are now installing ad blockers, preventing ads
          from interrupting their experience but making it harder for businesses
          to reach their audience.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          As a result, advertisers pay for ad placements, but with ad blockers
          in place, many ads never even reach their audience. This makes their
          campaign efforts ineffective.
        </p>
        {/* <div className="py-4">
          <img
            src="/blogs/blog-s-1.png"
            alt="image-1"
            className="w-full object-cover "
          />
        </div> */}
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Newsletters bypass ad blockers since email ads don’t function like
          traditional media ads. This means that with newsletter ads, you reach
          your intended audience and achieve the ROI and engagement you planned
          for your campaign.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pt-2 pl-2">
          &bull; No Algorithms
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Social media and search engines rely on constantly evolving
          algorithms. With ever-shifting content rules, social media can be
          unpredictable. Since algorithms determine ad exposure, content ad
          visibility can be negatively impacted or even buried in searches,
          making it harder to track progress.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Newsletters offer a more reliable option. They don’t operate under
          algorithmic preferences but instead, work on a simple and direct
          approach. Newsletters go straight to subscribers’ inboxes, giving you
          full control over who sees your content without fighting for
          visibility.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pt-2 pl-2">
          &bull; Niche Markets
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          Newsletters have their own personality and brand identity, making them
          a helpful partner for advertisers. Finding a newsletter that
          complements the advertiser's brand allows it to reach a focused and
          engaged mailing list.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
          One of the biggest strengths of newsletter advertising is its ability
          to target niche audiences. By partnering with the relevant
          newsletters, advertisers ensure their message reaches the right
          people.
        </p>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] py-2">
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
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pt-2">
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

export default function PolicyBody() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const sectionRefs = useRef([0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleIndex = -1;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleIndex = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
          }
        });

        if (mostVisibleIndex !== -1) {
          setActiveIndex(mostVisibleIndex);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // finer ratio detection
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleClick = (index) => {
    const element = sectionRefs.current[index];
    if (element) {
      const topOffset =
        element.getBoundingClientRect().top + window.scrollY - 100; // Adjust -100 based on your `top-24`
      window.scrollTo({ top: topOffset, behavior: "smooth" });
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
            <h2 className="text-[56px] font-[400] leading-[104%] text-[#000] ">
              Privacy Policy
            </h2>
            <p className="text-[16px] text-[#595959] font-[500] leading-[157%] py-[35px]">
              Latest updated 24 June 2025
            </p>
          </div>

          {/* 2 */}
          <div className="flex md:flex-row justify-between flex-col w-full h-full ">
            {/* left*/}
            <div className="md:w-[68%] w-full flex flex-col gap-8 ">
              {sectionsWithContent.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-28"
                >
                  <div className="text-[16px] text-[#000000] font-[500] leading-[157%] pb-[35]">
                    {section.topContent}
                  </div>
                  <p className="text-[#000] text-[30px] font-[500] leading-[120%] pb-2 pt-6">
                    {section.title}
                  </p>
                  <div>{section.content}</div>
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
        <PolicyMobileVersion />
      </div>
    </>
  );
}
