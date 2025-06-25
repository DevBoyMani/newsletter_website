"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const jobCriteria = [
  { label: "Experience Level", data: "Senior", id: "1" },
  { label: "Type", data: "Full Time", id: "2" },
  { label: "Location", data: "100% Remote", id: "3" },
  { label: "Salary", data: "Upon experience", id: "4" },
  { label: "Time", data: "40hrs/week", id: "5" },
];

export default function BlogSlugBody() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const [scrollPercent, setScrollPercent] = useState(0);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = sectionRefs.current[0]?.parentElement; // main content wrapper
      if (!container) return;

      const offsetTop = container.offsetTop;
      const scrollTop = window.scrollY;
      const contentHeight = container.scrollHeight;
      const windowHeight = window.innerHeight;

      const maxScroll = contentHeight - windowHeight + offsetTop;
      let percent = ((scrollTop - offsetTop) / (maxScroll - offsetTop)) * 100;

      percent = Math.min(100, Math.max(0, percent)); // Clamp
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
          <div className="flex md:flex-row justify-start flex-col w-full h-full space-x-4">
            {/* left */}
            <div className="max-w-[21%] w-full  h-fit sticky top-24 self-start">
              <div className="h-auto">
                <div className="">
                  <p className="text-[12px] font-[400] leading-[104%] py-2">
                    {scrollPercent}%
                  </p>
                </div>
                <div className="h-auto  bg-[#DAEBE8] py-6 px-4 rounded-[5px]">
                  <div className="">
                    <h3 className="text-[#000] text-[15px] font-[600] leading-[104%]  pb-6">
                      Table of content
                    </h3>
                    <div className="space-y-4 text-[#676A71] text-[12px] font-[400] leading-[143%]">
                      <p>Summary</p>
                      <p>
                        Is social media marketing better than email marketing?
                      </p>
                      <p>What is newsletter advertising?</p>
                      <p>Advantages of Newsletter Advertising</p>
                      <p>Final Thoughts </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* center */}
            <div className="md:w-[57%] w-full space-y-24">
              <div
                className="p-2 scroll-mt-28"
                ref={(el) => (sectionRefs.current[0] = el)}
              >
                <div className="pb-4">
                  <h4 className="text-[#000] text-[30px] font-[500] leading-[120%] py-2">
                    Summary
                  </h4>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    The marketing world is constantly evolving, and email
                    marketing is the future of advertising. It is a fast,
                    flexible, and cost-effective way to promote products or
                    services. Email has become a daily habit for many. It is
                    perceived as reliable, safe, and free from intrusive
                    pop-ups, malicious bots, or fraud. This trust translates
                    into higher engagement in email newsletters than in other
                    marketing channels.
                  </p>
                </div>
                {/* 6 */}
                <div className="py-4">
                  <h4 className="text-[#000] text-[30px] font-[500] leading-[120%] py-2">
                    Is social media marketing better than email marketing?
                  </h4>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Email marketing is a broad umbrella, and one of the most
                    effective ways to leverage it is through newsletter
                    advertising. It is a powerful strategy that is taking the
                    marketing world by storm.
                  </p>
                  <ul className="custom-list text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    <li>
                      There are 4.5 billion email users, and this is expected to
                      reach 4.8 billion by 2027.
                    </li>
                    <li>
                      4 in 5 customers prefer email over any other form of
                      communication.
                    </li>
                    <li>
                      95% of marketers agree it delivers excellent return on
                      investment (ROI).
                    </li>
                    <li>
                      Email marketing revenue is expected to grow by 287%
                      worldwide by 2032.
                    </li>
                    <li>
                      Hands-on experience with more than one payroll software
                      (Dayforce, ADP WFN, UKG, Workday, Employeur D, Nethris...)
                    </li>
                    <li>
                      Email open rates range from 15-25%, 275% better than
                      organic social media engagement. 
                    </li>
                  </ul>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    While social media offers broad reach and engagement,
                    newsletter advertising often provides a more targeted and
                    focused audience, potentially leading to higher conversion
                    rates and a stronger return on investment. Unlike intrusive
                    ads on platforms like YouTube, newsletters are a deliberate
                    choice made by the user. They can’t be skipped, but are
                    actively chosen by users.
                  </p>
                </div>
                {/* 7 */}
                <div className="pb-4">
                  <h4 className="text-[#000] text-[30px] font-[500] leading-[120%] py-2">
                    What is newsletter advertising?
                  </h4>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Newsletter advertising is a partnership between advertisers
                    and newsletter publishers, offering a direct and highly
                    targeted way to reach audiences. Instead of curating content
                    and building a mailing list from scratch, businesses can
                    leverage established newsletters that have already
                    cultivated a dedicated readership.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Newsletters are entirely optional. Businesses can only reach
                    out to customers after they subscribe. When a customer takes
                    the extra step of joining a mailing list, they are
                    essentially signaling that they want to hear more from the
                    brand. They’re interested in the brand, the latest updates,
                    exclusive offers, discounts and more.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    These are not passive consumers but engaged customers who
                    trust the brand and want to stay connected. Given how
                    frequently the average person checks their email,
                    newsletters become more than a marketing tool by seamlessly
                    but a lifestyle add-on.
                  </p>
                  <div className="py-4">
                    <img
                      src="/blogs/blog-s-1.png"
                      alt="image-1"
                      className="w-full object-cover "
                    />
                  </div>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    In its simplest form, newsletter advertising means paying a
                    publisher to place your ad within their content. These
                    newsletters have already built a loyal community around
                    their niches. By partnering with them, you gain access to a
                    highly engaged audience.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Imagine you're a business selling supplements and vitamins.
                    By placing ads in a well-established health and lifestyle
                    newsletter, you instantly reach an audience actively seeking
                    wellness tips, a concentrated pool of people already
                    interested in products like yours. This targeted approach
                    ensures your ad lands in front of the right eyes rather than
                    being ignored by an uninterested audience.
                    <br />
                    Newsletters bridge the gap between businesses and highly
                    relevant consumers, making ads more impactful and effective
                  </p>
                </div>
                {/* 8 */}
                <div className="pb-4">
                  <h4 className="text-[#000] text-[30px] font-[500] leading-[120%] py-2">
                    What is newsletter advertising?
                  </h4>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] pt-2 pl-2">
                    &bull; No Adblockers
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    More and more users are now installing ad blockers,
                    preventing ads from interrupting their experience but making
                    it harder for businesses to reach their audience.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    As a result, advertisers pay for ad placements, but with ad
                    blockers in place, many ads never even reach their audience.
                    This makes their campaign efforts ineffective.
                  </p>
                  <div className="py-4">
                    <img
                      src="/blogs/blog-s-1.png"
                      alt="image-1"
                      className="w-full object-cover "
                    />
                  </div>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Newsletters bypass ad blockers since email ads don’t
                    function like traditional media ads. This means that with
                    newsletter ads, you reach your intended audience and achieve
                    the ROI and engagement you planned for your campaign.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] pt-2 pl-2">
                    &bull; No Algorithms
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Social media and search engines rely on constantly evolving
                    algorithms. With ever-shifting content rules, social media
                    can be unpredictable. Since algorithms determine ad
                    exposure, content ad visibility can be negatively impacted
                    or even buried in searches, making it harder to track
                    progress.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Newsletters offer a more reliable option. They don’t operate
                    under algorithmic preferences but instead, work on a simple
                    and direct approach. Newsletters go straight to subscribers’
                    inboxes, giving you full control over who sees your content
                    without fighting for visibility.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] pt-2 pl-2">
                    &bull; Niche Markets
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Newsletters have their own personality and brand identity,
                    making them a helpful partner for advertisers. Finding a
                    newsletter that complements the advertiser's brand allows it
                    to reach a focused and engaged mailing list.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    One of the biggest strengths of newsletter advertising is
                    its ability to target niche audiences. By partnering with
                    the relevant newsletters, advertisers ensure their message
                    reaches the right people.
                  </p>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] py-2">
                    Newsletters exist in every industry, from real estate to
                    tech and beyond. They offer a direct medium to the ideal
                    customers. The right partnership allows advertisers to
                    leverage the authority a newsletter has built and bridges
                    the gap between interest and expertise.
                  </p>
                </div>
                {/* 9 */}
                <div className="pb-4">
                  <h4 className="text-[#000] text-[30px] font-[500] leading-[120%] py-2">
                    Final Thoughts
                  </h4>
                  <p className="text-[#000] text-[16px] font-[400] leading-[174%] pt-2 pl-2">
                    You can buy newsletter ad space through programmatic direct
                    buys, private marketplaces (PMPs), or open exchanges.
                    Programmatic direct buys allow you to purchase ad inventory
                    directly from a publisher, creating a one-to-one
                    relationship. Private marketplaces (PMPs) offer exclusive
                    access to premium ad slots, while open exchanges function as
                    public auctions where multiple advertisers bid for available
                    inventory.
                  </p>
                </div>
                {/* 10 */}
                <div className="pb-4">
                  <div className="mt-8">
                    <div className="pb-4 pt-6 px-6 bg-[#C7A26233] rounded-[7px]">
                      <div className="pt-4 pb-2 flex space-x-2">
                        <img
                          src="/blogs/p-1.png"
                          alt="profile-1"
                          className="w-10 h-10 object-cover rounded-full"
                        />
                        <p className="flex items-center gap-2 text-[#000] text-[18px] font-[400] leading-[104%]">
                          <span>John Cena</span>
                        </p>
                      </div>
                      <div className="flex ">
                        <div className="w-[85%]">
                          <p className="text-[#000] text-[16px] font-[400] leading-[174%]">
                            John Felix Anthony Cena is an American actor and
                            professional wrestler. As a wrestler, he has been
                            signed to WWE since 2001, where he is the current
                            Undisputed WWE Champion in his record 14th reign.
                          </p>
                          <div className="pt-4">
                            <a
                              href="/"
                              className="text-[#000] text-[16px] font-[400] leading-[174%]"
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
            </div>
            {/* right */}
            <div className="md:w-[21%] w-full pl-9">
              <div
                className="scroll-mt-28"
                ref={(el) => (sectionRefs.current[0] = el)}
              >
                <div className="h-auto">
                  <p className="text-[14px] font-[500] text-[#000] leading-[174%]">
                    Share this article
                  </p>
                  <div className="pt-8">
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
                  <div className="pt-16">
                    <div className="border border-[#01261E] rounded-[10px]">
                      <div className="py-3 px-3">
                        <p className="text-[#01261E] font-[800] text-[16px] leading-normal">
                          Sagravia Newsletter
                        </p>
                        <p className="text-[#01261E] font-[400] text-[12px] leading-[141%]">
                          Do you want to get tips and sfsftactics to grow the
                          way you want?
                        </p>
                        <form
                          onSubmit={handleSubmit}
                          className="pt-8 space-y-2"
                        >
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="px-4 py-1.5 rounded-[3px] border border-[#9CA3AF] text-[14px] w-full focus:outline-none focus:ring-1 focus:ring-[#01261E]"
                          />
                          <button
                            type="submit"
                            className="w-full bg-[#01261E] text-[#FFF] text-[14px] px-4 py-1.5 rounded-[3px] hover:bg-[#0B4337] transition"
                          >
                            Subscribe for free
                          </button>
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
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      {/* <div className="block lg:hidden">
        <div className="md:px-28 pt-10 pb-4">
          <div className="px-4 w-full">
            <div className="p-2">
           

              <div className="flex flex-row space-x-2">
                <p className="w-[37px] h-[32px] bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                  IT
                </p>
                <p className="w-[83px] h-[32px] bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                  REMOTE
                </p>
              </div>
     
              <div className="pt-3">
                <p className="text-[#6B6B6F] text-[15px] font-[400] leading-normal">
                  May 22nd, 2025
                </p>
              </div>

 
              <div className="py-6">
                <p className="text-[#9493A5] text-[13px] font-[500] leading-normal">
                  Software developer
                </p>
                <h2 className="font-[GT-Super-Ds-Trial] text-[#01261E] text-[30px] font-[400] leading-[1.2]">
                  Mid or Senior-Level
                  <br /> Software Engineer
                </h2>
              </div>

              <div className="py-4">
                <div className="grid lg:grid-cols-3 gap-4">
                  {jobCriteria.map((item, index) => (
                    <div key={index} className="">
                      <p className="text-[#9493A5] text-[13px] font-[500] leading-normal">
                        {item.label}
                      </p>
                      <p className="text-[#000] text-[15px] font-[500] leading-normal">
                        {item.data}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-4">
                <h4 className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Position summary
                </h4>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                  As a Payroll Advisor, you will be responsible for supporting
                  and executing payroll operation mandates for our clients. You
                  will play a key coordinating role and contribute to the
                  successful completion of payroll processing, analyses and
                  identified customer needs. You will work as part of a team or
                  independently on specific mandates.
                </p>
              </div>

              <div className="py-4 bg-[#DAEBE8] rounded-[10px]">
                <div className="px-4">
                  <h4 className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                    Assignment
                  </h4>
                  <p className="text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                    Do you excel at understanding client needs and turning them
                    into lasting partnerships? Join our team as a Sales Manager
                    and be the driving force behind our client acquisition and
                    business growth efforts. You will work on global projects,
                    pitch innovative solutions, and collaborate with a diverse
                    and talented team.
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    We are looking for someone who takes initiative,
                    communicates effectively, and is ready to be part of a
                    company that values growth and teamwork. If you are eager to
                    put your skills to work and take your career to the next
                    level, this is the opportunity you have been waiting for.
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    Email Content: Write 3-5 emails for each stage (awareness,
                    consideration, decision), keeping in mind personalization
                    and dynamic content.Design an email nurturing campaign that.
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    Define the Target Audience: Describe the characteristics of
                    the leads you will target for the campaign (e.g., industry,
                    job title, website interaction history, etc.).
                    <br />
                    Customer Journey Mapping: Map out the customer journey
                    stages (awareness, consideration, decision) for these leads
                    and align them with relevant content for each stage.
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    Customer Journey Mapping: Map out the customer journey
                    stages (awareness, consideration, decision) for these leads
                    and align them with relevant content for each stage. The
                    campaign should use a Marketing Automation Platform (like
                    HubSpot, Marketo, or Pardot) an. The campaign should use a
                    Marketing Automation Platform (like HubSpot, Marketo, or
                    Pardot) an.
                  </p>
                </div>
              </div>

              <div className="py-4">
                <h4 className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Job description
                </h4>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                  Design an email nurturing campaign that targets leads who have
                  shown interest in your product/service but have not yet made a
                  purchase. The campaign should use a Marketing Automation
                  Platform (like HubSpot, Marketo, or Pardot) and include the
                  following:
                </p>
                <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                  Define the Target Audience: Describe the characteristics of
                  the leads you will target for the campaign (e.g., industry,
                  job title, website interaction history, etc.).
                  <br />
                  Customer Journey Mapping: Map out the customer journey stages
                  (awareness, consideration, decision) for these leads and align
                  them with relevant content for each stage.
                </p>
                <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                  Email Content: Write 3-5 emails for each stage (awareness,
                  consideration, decision), keeping in mind personalization and
                  dynamic content.Design an email nurturing campaign that.
                </p>
                <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                  Define the Target Audience: Describe the characteristics of
                  the leads you will target for the campaign (e.g., industry,
                  job title, website interaction history, etc.).
                  <br />
                  Customer Journey Mapping: Map out the customer journey stages
                  (awareness, consideration, decision) for these leads and align
                  them with relevant content for each stage.
                </p>
                <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                  Customer Journey Mapping: Map out the customer journey stages
                  (awareness, consideration, decision) for these leads and align
                  them with relevant content for each stage. The campaign should
                  use a Marketing Automation Platform (like HubSpot, Marketo, or
                  Pardot) an. The campaign should use a Marketing Automation
                  Platform (like HubSpot, Marketo, or Pardot) an.
                </p>
              </div>
       
              <div className="pb-4">
                <h4 className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Experience
                </h4>
                <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                  <li>Minimum 3 years' experience in payroll operation</li>
                  <li>
                    Payroll management experience in different Canadian
                    provinces (an asset)
                  </li>
                  <li>Work experience in a unionized environment (an asset)</li>
                  <li>US payroll knowledge (an asset)</li>
                  <li>
                    Hands-on experience with more than one payroll software
                    (Dayforce, ADP WFN, UKG, Workday, Employeur D, Nethris...)
                  </li>
                  <li>DEC in administration or accounting</li>
                  <li>
                    National Payroll Institute designation (PCP, PLP) (an asset)
                  </li>
                  <li>
                    Very good knowledge of MS Office (especially Excel: pivot
                    table and VLOOKUP)
                  </li>
                  <li>Bilingualism both oral and written (French / English)</li>
                </ul>
              </div>

              <div className="pb-4">
                <h4 className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Benefits
                </h4>
                <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                  <li>100% telecommuting</li>
                  <li>Competitive salary based on experience</li>
                  <li>
                    Option of working in a shared space in Downtown Montreal, to
                    have a real coffee with your colleagues!
                  </li>
                  <li>Flexible working hours</li>
                  <li>
                    Full range of benefits available from the moment you join us
                  </li>
                  <li>
                    Variable compensation based on organizational performance
                  </li>
                  <li>Group RRSP with employer contribution</li>
                  <li>
                    Allowance to make your workspace a pleasant place to work
                  </li>
                  <li>Telemedecine and employee assistance programs</li>
                  <li>Work tools provided</li>
                </ul>
              </div>

              <div className="">
                <h2 className="text-[#000] text-[30px] font-[400] leading-normal font-[GT-Super-Ds-Trial]">
                  Come & join our team
                </h2>
                <p className="text-[#000] text-[14px] font-[400] leading-[141%]">
                  We are a US-based young team of hard-working and enthusiastic
                  experts located right in the city center in the beautiful new
                  offices, dedicated to providing custom software development
                  and other product lifecycle services, which includes both
                  internal and external projects. We are a leader in energy
                  transition using optimization and machine learning to
                  facilitate green economy.
                </p>
                <div className="w-full bg-[#01261E] mt-10 p-6 rounded-[10px]">
                  <div className="">
                    <h3 className="text-[#fff] text-[20px] font-[600] leading-[141%]">
                      Apply now!
                    </h3>
                    <p className="text-[#fff] text-[14px] font-[300] leading-[141%] py-4">
                      If you're interested in end-to-end development and want to
                      work with cutting-edge technologies, come on board.
                    </p>
                    <div className="flex flex-row relative">
                      <p
                        className="text-[#fff] text-[13px] font-[400]
                                    leading-[141%] underline cursor-pointer"
                      >
                        careers@sagravia.com
                      </p>
                      <img
                        src="/careers/content-copy.png"
                        alt="copy-icon"
                        className="w-5 h-5 ml-1 cursor-pointer"
                        onClick={handleCopy}
                      />
                      {showPopup && (
                        <div className="absolute bottom-6 left-28 -translate-x-1/2 bg-[#000] text-white text-xs px-3 py-1 rounded-md shadow-md z-10 whitespace-nowrap">
                          Email copied!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
