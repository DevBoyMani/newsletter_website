"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BlogSlugComponentList from "../blogSlugComponentList/blogSlugComponentList";

// Step 1: Define sections with title and unique content
const sectionsWithContent = [
  {
    id: 1,
    title: "Summary",
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
    title: "Is social media marketing better than email marketing?",
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
    title: "What is newsletter advertising?",
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
        <div className="py-4">
          <img
            src="/blogs/blog-s-1.png"
            alt="image-1"
            className="w-full object-cover "
          />
        </div>
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
    title: "Advantages of Newsletter Advertising",
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
        <div className="py-4">
          <img
            src="/blogs/blog-s-1.png"
            alt="image-1"
            className="w-full object-cover "
          />
        </div>
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
    title: "Final Thoughts",
    content: (
      <>
        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%] pt-2 pl-2">
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

export default function BlogSlugBody() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const sectionRefs = useRef([0]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const index = sectionRefs.current.findIndex(
  //             (ref) => ref === entry.target
  //           );
  //           if (index !== -1) {
  //             setActiveIndex(index);
  //           }
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px 0px -60% 0px", // Trigger earlier when section top enters view
  //       threshold: 0.1, // Lower = more sensitive
  //     }
  //   );

  //   sectionRefs.current.forEach((ref) => {
  //     if (ref) observer.observe(ref);
  //   });

  //   return () => {
  //     sectionRefs.current.forEach((ref) => {
  //       if (ref) observer.unobserve(ref);
  //     });
  //   };
  // }, []);

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
    // You can send the email to a backend or API here
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="md:px-28 pt-14 pb-4">
          <div className="flex md:flex-row justify-start flex-col w-full h-full ">
            {/* Left */}
            <div className="max-w-[21%] w-full sticky top-24 self-start">
              <p className="text-[12px] font-[400] pb-2 mt-1">
                {scrollPercent}%
              </p>
              <div className="bg-[#DAEBE8] py-[20px] px-[15px] rounded-[5px]">
                <h3 className="text-[#000] text-[15px] font-[600] pb-6">
                  Table of content
                </h3>
                <div className="flex flex-col space-y-4">
                  {/* {tocItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`#section-${index}`}
                    scroll={false}
                    className="text-[12px] leading-[143%]"
                    onClick={() => handleClick(index)}
                  >
                    <p
                      className={`cursor-pointer ${
                        activeIndex === index
                          ? "text-[#000] font-[700]"
                          : "text-[#676A71] font-[400]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </Link>
                ))} */}

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
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="md:w-[57%] w-full flex flex-col gap-8 pl-[37px] pr-[64px]">
              {sectionsWithContent.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-28"
                >
                  <h4 className="text-[#000] text-[30px] font-[500] leading-[120%] pb-2 pt-6">
                    {section.title}
                  </h4>
                  <div>{section.content}</div>
                </div>
              ))}

              {/* 10 */}
              <div className="">
                <div className="mt-8">
                  <div className="px-[30px] pt-[25px] pb-[20px] bg-[#C7A26233] rounded-[7px] ">
                    <div className="pb-2 flex space-x-2">
                      <img
                        src="/blogs/p-1.png"
                        alt="profile-1"
                        className="w-10 h-10 object-cover border-[0.5px] border-[#01261E] rounded-full"
                      />
                      <p className="flex items-center gap-2 text-[#000] text-[18px] font-[400] leading-[104%]">
                        <span>John Cena</span>
                      </p>
                    </div>
                    <div className="flex ">
                      <div className="">
                        <p className="text-[#000] lg:text-[16px] text-[14px] font-[400] leading-[174%]">
                          John Felix Anthony Cena is an American actor and
                          professional wrestler. As a wrestler, he has been
                          signed to WWE since 2001, where he is the current
                          Undisputed WWE Champion in his record 14th reign.
                        </p>
                        <div className="pt-4">
                          <a
                            href="/"
                            className="text-[#000] text-[16px] font-[400] leading-[174%] hover:underline"
                          >
                            More blogs from John{" "}
                            <span className="text-[20px]">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="md:w-[18%] w-full sticky top-24 self-start pt-6">
              <div
                className="scroll-mt-28"
                // ref={(el) => (sectionRefs.current[0] = el)}
              >
                <div className="h-auto">
                  <p className="text-[14px] pb-[17px] font-[500] text-[#000] leading-[174%] border-b border-[#E8ECF0]">
                    Share this article
                  </p>
                  <div className="pt-[34px] pb-[62px]">
                    <div className="flex justify-start space-x-6">
                      <img
                        src="/blogs/blog-x.png"
                        alt="x"
                        className="w-8 h-8"
                      />
                      <img
                        src="/blogs/blog-insta.png"
                        alt="x"
                        className="w-8 h-8"
                      />
                      <img
                        src="/blogs/blog-ln.png"
                        alt="x"
                        className="w-8 h-8"
                      />
                      <img
                        src="/blogs/blog-t.png"
                        alt="x"
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="border border-[#01261E] rounded-[10px]">
                      <div className="py-[17] px-[15]">
                        <p className="text-[#01261E] font-[800] text-[16px] leading-normal">
                          Sagravia Newsletter
                        </p>
                        <p className="text-[#01261E] font-[400] text-[12px] leading-[141%] pt-[8px]">
                          Do you want to get tips and sfsftactics to grow the
                          way you want?
                        </p>
                        <form
                          onSubmit={handleSubmit}
                          className="pt-[16px] space-y-2"
                        >
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="px-2 rounded-[3px] border border-[#9CA3AF] text-[14px] w-full h-[37px] focus:outline-none focus:ring-1 focus:ring-[#01261E]"
                          />
                          <button
                            type="submit"
                            className="w-full h-[37px] bg-[#01261E] text-[#FFF] text-[14px] rounded-[3px] hover:bg-[#0B4337] transition"
                          >
                            Subscribe for free
                          </button>
                        </form>
                        <div className="pt-[2px] pl-[2px]">
                          <p className="text-[#767676] font-[400] text-[8px] leading-[141%]">
                            Unsubscribe at any time.{" "}
                            <span className="underline underline-[#767676]">
                              Terms
                            </span>{" "}
                            &{" "}
                            <span className="underline underline-[#767676]">
                              Privacy
                            </span>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className=" pt-[60px] px-4">
          <BlogSlugComponentList />

          {/* Center */}
          <div className="w-full flex flex-col gap-8 pt-[24px] pb-[81px]">
            {sectionsWithContent.map((section, index) => {
              const isTargetSection =
                section.title === "What is newsletter advertising?";
              return (
                <div key={index} id={`section-${index}`} className="">
                  {/* Inject subscribe box above the specific section */}
                  {isTargetSection && (
                    <div className="block lg:hidden pt-[20px] pb-[21px]">
                      <div className="border border-[#01261E] rounded-[10px]">
                        <div className="py-3 px-3">
                          <p className="text-[#01261E] font-[800] text-[16px] leading-normal">
                            Sagravia Newsletter
                          </p>
                          <p className="text-[#01261E] font-[400] text-[14px] leading-[141%]">
                            Do you want to get tips and tactics to grow
                            <br /> the way you want?
                          </p>
                          <form
                            onSubmit={handleSubmit}
                            className="pt-4 space-y-2"
                          >
                            <div className="flex flex-row space-x-2">
                              <div className="w-[60%]">
                                <input
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  placeholder="Email"
                                  required
                                  className="px-4 py-1.5 rounded-[3px] border border-[#9CA3AF] text-[14px] w-full focus:outline-none focus:ring-1 focus:ring-[#01261E]"
                                />
                              </div>
                              <div className="w-[40%]">
                                <button
                                  type="submit"
                                  className="w-full bg-[#01261E] text-[#FFF] text-[14px] px-4 py-1.5 rounded-[3px] hover:bg-[#0B4337] transition"
                                >
                                  Subscribe
                                </button>
                              </div>
                            </div>
                          </form>
                          <div className="pt-2">
                            <p className="text-[#767676] font-[400] text-[8px] leading-[141%]">
                              Unsubscribe at any time.{" "}
                              <span className="underline underline-[#767676]">
                                Terms
                              </span>{" "}
                              &{" "}
                              <span className="underline underline-[#767676]">
                                Privacy
                              </span>
                              .
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Section heading and content */}
                  <h4 className="text-[#000] text-[22px] font-[500] leading-[120%] py-2">
                    {section.title}
                  </h4>
                  <div>{section.content}</div>
                </div>
              );
            })}
          </div>

          <div className="">
            <div className="pt-[20px]">
              <div className="p-[15px] bg-[#C7A26233] rounded-[7px] ">
                <div className="pb-[12px] flex space-x-2">
                  <img
                    src="/blogs/p-1.png"
                    alt="profile-1"
                    className="w-10 h-10 object-cover border-[0.5px] border-[#01261E] rounded-full"
                  />
                  <p className="flex items-center gap-2 text-[#000] text-[16px] font-[400] leading-[104%]">
                    <span>John Cena</span>
                  </p>
                </div>
                <div className="flex ">
                  <div className="">
                    <p className="text-[#000] text-[14px] font-[400] leading-[174%]">
                      John Felix Anthony Cena is an American actor and
                      professional wrestler. As a wrestler, he has been signed
                      to WWE since 2001, where he is the current Undisputed WWE
                      Champion in his record 14th reign.
                    </p>
                    <div className="pt-4">
                      <a
                        href="/"
                        className="text-[#000] text-[16px] font-[400] leading-[174%] underline"
                      >
                        More blogs from John{" "}
                        <span className="text-[20px]">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="h-auto">
              <div className="pt-10">
                <div className="border border-[#01261E] rounded-[10px]">
                  <div className="py-3 px-3">
                    <p className="text-[#01261E] font-[800] text-[16px] leading-normal">
                      Sagravia Newsletter
                    </p>
                    <p className="text-[#01261E] font-[400] text-[14px] leading-[141%]">
                      Do you want to get tips and sfsftactics to grow
                      <br /> the way you want?
                    </p>
                    <form onSubmit={handleSubmit} className="pt-4 space-y-2">
                      <div className="flex flex-row space-x-2">
                        <div className="w-[60%]">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="px-4 py-1.5 rounded-[3px] border border-[#9CA3AF] text-[14px] w-full focus:outline-none focus:ring-1 focus:ring-[#01261E]"
                          />
                        </div>
                        <div className="w-[40%]">
                          <button
                            type="submit"
                            className="w-full bg-[#01261E] text-[#FFF] text-[14px] px-4 py-1.5 rounded-[3px] hover:bg-[#0B4337] transition"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="pt-2">
                      <p className="text-[#767676] font-[400] text-[8px] leading-[141%]">
                        Unsubscribe at any time.{" "}
                        <span className="underline underline-[#767676]">
                          Terms
                        </span>{" "}
                        &{" "}
                        <span className="underline underline-[#767676]">
                          Privacy
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-[60px]">
            <p className="text-[14px] pb-[15px] font-[500] text-[#000] leading-[174%] border-b border-[#E8ECF0]">
              Share this article
            </p>
            <div className="flex justify-start space-x-6 pt-[29px]">
              <img src="/blogs/blog-x.png" alt="x" className="w-8 h-8" />
              <img src="/blogs/blog-insta.png" alt="x" className="w-8 h-8" />
              <img src="/blogs/blog-ln.png" alt="x" className="w-8 h-8" />
              <img src="/blogs/blog-t.png" alt="x" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
