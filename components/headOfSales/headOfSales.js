import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const jobCriteria = [
  { label: "Experience level", data: "Senior", id: "1" },
  { label: "Type", data: "Full-time", id: "2" },
  { label: "Location", data: "100% Remote", id: "3" },
  {
    label: "Salary range",
    data: "$24,000–$36,000 (depending on experience)",
    id: "4",
  },
  { label: "Work hours", data: "40 hours per week", id: "5" },
];

export default function HeadOfSales() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

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

  const handleCopy = () => {
    const email = "careers@houseofsummary.com";

    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1500); // Hide after 1.5 seconds
    });
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="md:px-28 pt-14 pb-4 bg-[#FAFAFA]">
          <div className="flex md:flex-row justify-start flex-col w-full h-full">
            {/* left default*/}
            <div className="max-w-[40%] w-full  h-fit sticky top-24 self-start pb-[115px]">
              <div className="h-auto">
                <Link
                  href="/careers"
                  className="text-[14px] font-[600] text-[#000] leading-[normal] hover:underline "
                >
                  <span className="text-[20px]"> &#8592;</span> All open
                  positions
                </Link>
                <div className="w-[80%] h-auto  bg-[#01261E] mt-10 p-8 rounded-[10px]">
                  <div className="">
                    <p className="text-[#fff] text-[20px] font-[600] leading-[141%]">
                      Apply now!
                    </p>
                    <p className="w-[100%] text-[#fff] text-[16px] font-[300] leading-[141%] pt-6 pb-4">
                      If you’re ready to join a fast-moving global media company
                      and work with ambitious, creative people who value quality
                      and initiative, we’d love to hear from you.
                    </p>
                    <div className="flex flex-row ">
                      <p
                        className="text-[#fff] text-[16px] font-[400]
                                     hover:underline cursor-pointer"
                      >
                        careers@houseofsummary.com
                      </p>
                      <img
                        src="/careers/content-copy.png"
                        alt="copy-icon"
                        className="w-6 h-6 ml-1 cursor-pointer"
                        onClick={handleCopy}
                      />
                      {showPopup && (
                        <div className="absolute top-48 left-40 -translate-x-1/2 bg-[#000] text-white text-xs px-3 py-1 rounded-md shadow-md z-10 whitespace-nowrap">
                          Email copied!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="md:w-[60%] w-full space-y-24 pt-14">
              <div
                className=" scroll-mt-28"
                ref={(el) => (sectionRefs.current[0] = el)}
              >
                {/* 1 */}
                <div className="flex md:flex-row justify-between">
                  <div className="flex flex-row space-x-[13px]">
                    <p className="py-1 px-[12px] bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                      Remote
                    </p>
                    <p className="py-1 px-[12px] bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                      Full-time
                    </p>
                  </div>
                  {/* date */}
                  {/* <div>
                    <p className="text-[#000] text-[15px] font-[400] leading-normal">
                      November 15th, 2025
                    </p>
                  </div> */}
                </div>
                {/* 2 */}
                <div className="pt-[30px]">
                  <p className="text-[#000] text-[13px] font-[500] leading-normal">
                    Leadership
                  </p>
                  <h2 className=" text-[#000] text-[56px] font-[400] leading-[1.2]">
                    Head of Ad Sales
                  </h2>
                </div>
                {/* 3 */}
                <div className="pt-[68px]">
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
                {/* assignment navigation label default*/}
                <div className="py-[44px]">
                  <div className="flex items-center px-4 md:px-6 lg:px-8 py-6 bg-[#FEF5F6] border border-[#E5C8CD] rounded-lg max-w-[720px]">
                    <div className="flex-shrink-0">
                      <img
                        src="/careers/job-alert.png"
                        alt="alert"
                        className="w-[21px] h-[21px]"
                      />
                    </div>
                    <div className="flex flex-wrap items-center ml-5">
                      <span className="text-[16px] text-[#000] mr-2">
                        Before applying for the job, completing the task is
                        mandatory.
                      </span>
                      <a
                        href="#assignment"
                        onClick={(e) => {
                          e.preventDefault();

                          const section = document.querySelector("#assignment");
                          if (!section) return;

                          const yOffset = -100; // adjust for sticky left panel
                          const y =
                            section.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;

                          // ✅ update slug (same as mobile)
                          window.history.pushState(null, "", "#assignment");

                          window.scrollTo({ top: y, behavior: "smooth" });
                        }}
                      >
                        <div className="flex items-center font-[600] text-[#000]">
                          <span className="whitespace-nowrap">
                            Go to assignment
                          </span>
                          <div className="ml-2">
                            <img
                              src="/careers/alert-down.png"
                              alt="arrow"
                              className="w-3 h-full"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* intro*/}
                <div className="">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Position summary
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    We are looking for a driven and strategic Head of Ad Sales
                    to lead monetization across our global newsletter network.
                    You will develop sales strategies, build advertiser
                    relationships, and lead a small team dedicated to scaling
                    high-value partnerships. The right candidate will be both
                    analytical and creative, capable of identifying
                    opportunities, crafting premium offers, and turning audience
                    insights into results. This is a remote, full-time
                    leadership role.
                  </p>
                </div>
                {/* assignment */}
                <div id="assignment" className="pt-[30px]">
                  <div className="px-[25px] py-[30px] bg-[#DAEBE8] rounded-[10px]">
                    <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                      Assignment
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      We want to understand how you think, structure, and
                      execute monetization. This isn’t about guessing our
                      numbers; it’s about how you’d build an ad engine that
                      scales.
                    </p>
                    <div>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <strong>Task Overview</strong>
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        You’ll show how you would:
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Build a pipeline of brand partners
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Design pricing and inventory strategy
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Leverage sponsorship platforms and data tools
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Create a pitch narrative that converts
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <strong>1. Strategic Foundations</strong>
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        Answer briefly (2-4 sentences each):
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Which of our newsletters has the greatest short-term
                          monetization potential, and why?
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          What industries or advertiser categories would you
                          prioritize in the first 90 days?
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          What does “premium positioning” mean to you in
                          newsletter advertising, and how would you maintain it
                          while scaling?
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <strong>2. Monetization Angles (pick 3 angles)</strong>
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        Choose any three angles and outline your approach for
                        each:
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Direct Sponsorships & Native Ads
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Platform Leverage & Ad Tech
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Pricing & Packaging Strategy
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Revenue Diversification
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Analytics, Reporting & Retention
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Partnerships & Ecosystem Expansion
                        </span>
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        Each should include what you’d do, why it matters, and
                        how you’d measure success.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <strong>3. Practical Scenario</strong>
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        You’re pitching a luxury brand (e.g., Montblanc,
                        Emirates, or Julius Baer) that wants to reach global
                        executives.
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        Write a{" "}
                        <strong>
                          200–300-word pitch email or deck outline
                        </strong>
                        explaining:
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Which newsletter would you recommend and why
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          The type of placement or sponsorship
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Key audience stats or positioning language
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Expected ROI or campaign goal
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <strong>4. Platform Advantage</strong>
                      </p>
                      <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          Which sponsorship platforms do you think are
                          underutilized by premium newsletters, and how could we
                          take advantage of them?
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          How would you combine direct sales and platform sales
                          without cannibalizing value?
                        </span>
                        <span className="block pl-6 -indent-4">
                          <span className="mr-2">-</span>
                          What’s one automation or tech stack upgrade you’d
                          implement in the first 60 days?
                        </span>
                      </p>
                    </div>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <strong>How to submit:</strong>
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <span className="block pl-6 -indent-4">
                        <span className="mr-2">-</span>
                        Send your assignment as a single PDF (maximum five
                        pages)
                      </span>
                      <span className="block pl-6 -indent-4">
                        <span className="mr-2">-</span>
                        Subject line: Head of Ad Sales – [Your Name]
                      </span>
                      <span className="block pl-6 -indent-4">
                        <span className="mr-2">-</span>
                        Email it to careers@houseofsummary.com
                      </span>
                    </p>
                  </div>
                </div>
                {/* job des */}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Job description
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    As Head of Ad Sales, you’ll define and execute the
                    monetization strategy across all House of Summary brands.
                    You’ll cultivate high-value relationships with advertisers
                    and agencies, create pricing models and media kits, and lead
                    a growing sales team focused on long-term partnerships.
                    You’ll collaborate with editorial, design, and analytics
                    teams to deliver measurable results while maintaining our
                    premium brand positioning in the global newsletter market.
                  </p>
                </div>
                {/* experience*/}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Experience
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>
                      Proven experience in media or digital advertising sales
                    </li>
                    <li>
                      Strong understanding of performance marketing and
                      newsletter advertising
                    </li>
                    <li>
                      Excellent negotiation, presentation, and relationship
                      management skills
                    </li>
                    <li>
                      Analytical mindset with the ability to translate metrics
                      into strategy
                    </li>
                    <li>
                      Self-starter with a record of exceeding revenue targets
                    </li>
                    <li>
                      Ability to combine strategic vision with hands-on
                      execution
                    </li>
                  </ul>
                </div>
                {/*Nice to have */}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Nice to have
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>
                      Experience with newsletter ad platforms (Beehiiv,
                      ConvertKit, Paved)
                    </li>
                    <li>
                      Familiarity with UTM tracking, CPC models, and analytics
                      dashboards
                    </li>
                    <li>
                      Understanding of luxury, finance, or global brand markets
                    </li>
                    <li>
                      Established network of marketing decision makers or media
                      buyers
                    </li>
                  </ul>
                </div>
                {/* benefits */}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Benefits
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>
                      Full ownership of the monetization strategy across all
                      newsletters
                    </li>
                    <li>Work directly with the CEO</li>
                    <li>
                      Direct relationships with leading global advertisers
                    </li>
                    <li>
                      Competitive base salary with incentives for performance
                    </li>
                    <li>Flexible working setup and results-driven culture</li>
                  </ul>
                </div>
                {/* join our team & how to apply default*/}
                <div className="pt-[30px] pb-[115px]">
                  <h2 className="text-[#000] text-[42px] font-[400] leading-normal ">
                    Join our team
                  </h2>
                  <p className="text-[#000] text-[16px] font-[400] leading-[141%]">
                    We’re a global remote-first team of curious, driven, and
                    creative people building the future of independent media. At
                    House of Summary, you’ll work alongside editors, designers,
                    and developers who value clarity, precision, and
                    originality. We move fast, stay curious, and care deeply
                    about what we create.
                  </p>
                  <div className="mt-8">
                    <div className="px-[30px] py-[35px] bg-[#DAEBE8] rounded-[17px]">
                      <p className="text-[#000] text-[22px] font-[700] leading-[141%]">
                        How to apply
                      </p>
                      <div className="flex flex-row space-x-2 py-3">
                        <div className="w-[85%]">
                          <p className="text-[#000] text-[16px] font-[400] leading-[174%]">
                            Send your CV, a motivational letter, and the
                            completed assignment to{" "}
                            <span
                              className="underline cursor-pointer hover:text-blue-600 transition-colors duration-200"
                              onClick={() => {
                                const email = "careers@hourseofsummary.com";
                                navigator.clipboard
                                  .writeText(email)
                                  // .then(() => {
                                  //   alert(
                                  //     `Email copied to clipboard: ${email}`
                                  //   );
                                  // })
                                  .catch((err) => {
                                    console.error("Failed to copy: ", err);
                                    // Fallback for older browsers
                                    const textarea =
                                      document.createElement("textarea");
                                    textarea.value = email;
                                    document.body.appendChild(textarea);
                                    textarea.select();
                                    document.execCommand("copy");
                                    document.body.removeChild(textarea);
                                    alert(
                                      `Email copied to clipboard: ${email}`
                                    );
                                  });
                              }}
                              title="Click to copy email"
                            >
                              careers@hourseofsummary.com
                            </span>{" "}
                            with the name of the position in the subject of the
                            email.{" "}
                            <strong>
                              Note: We do not review applications without the
                              assignment
                            </strong>
                            .
                          </p>
                        </div>
                        <div className="md:w-[20%] w-full mt-6">
                          <a
                            href="mailto:careers@hourseofsummary.com"
                            className="block text-center bg-[#01261E] hover:bg-[#014134] text-white text-[14px] font-[600] px-4 py-2 rounded-full w-full"
                          >
                            Apply now
                          </a>
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
      {/* Careers banner */}
      <div className="block lg:hidden fixed top-0 left-0 w-full z-[999]">
        <div className="bg-[#E5C8CD] w-full px-4 py-[11px] flex items-center justify-center">
          <span className="text-[#000000] text-[12px] font-[600] leading-normal">
            The assignment is mandatory.
          </span>
          {/* <Link
                             href="/careers/#assignment"
                             className="ml-2 text-[#582719] hover:underline inline-flex items-center text-[12px] font-[800] leading-normal uppercase"
                           >
                             <span>Go to assignment</span>
                             <img
                               src="/careers/down.png"
                               alt="arrow"
                               className="w-[11px] h-[11px] ml-[15px]"
                             />
                           </Link> */}
          <Link
            href="#assignment"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();

              const section = document.querySelector("#assignment");
              if (!section) return;

              const yOffset = 760; // height of mobile banner
              const y =
                section.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

              window.history.pushState(null, "", "#assignment"); // ✅ updates slug
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className="ml-2 text-[#582719] hover:underline inline-flex items-center text-[12px] font-[800] leading-normal uppercase"
          >
            <span>Go to assignment</span>
            <img
              src="/careers/down.png"
              alt="arrow"
              className="w-[11px] h-[11px] ml-[15px]"
            />
          </Link>
        </div>
      </div>
      <div className="block lg:hidden ">
        <div className="px-4 pt-[187px] pb-[45px] bg-[#FAFAFA]">
          {/* 1 */}
          <div className="flex flex-row space-x-[13px]">
            <p className="px-[12px] py-1 bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
              Remote
            </p>
            <p className="px-[12px] py-1 bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
              Full-time
            </p>
          </div>
          {/* date */}
          {/* <div className="pt-[9px]">
            <p className="text-[#6B6B6F] text-[15px] font-[400] leading-normal">
              November 15th, 2025
            </p>
          </div> */}

          {/* 2 */}
          <div className="pt-[28px]">
            <p className="text-[#9493A5] text-[13px] font-[500] leading-normal">
              Leadership
            </p>
            <h2 className=" text-[#01261E] text-[30px] font-[400] leading-[1.2]">
              Head of Ad Sales
            </h2>
          </div>
          {/* 3 */}
          <div className="pt-[34px]">
            <div className="grid lg:grid-cols-3 gap-[23px]">
              {jobCriteria.map((item, index) => (
                <div key={index} className="">
                  <p className="text-[#9493A5] text-[13px] font-[500] leading-normal">
                    {item.label}
                  </p>
                  <p className="text-[#000] text-[15px] font-[500] leading-normal pt-[2px]">
                    {item.data}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* position summary */}
          <div className="pt-[40px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%]">
              Position summary
            </p>
            <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              We are looking for a driven and strategic Head of Ad Sales to lead
              monetization across our global newsletter network. You will
              develop sales strategies, build advertiser relationships, and lead
              a small team dedicated to scaling high-value partnerships. The
              right candidate will be both analytical and creative, capable of
              identifying opportunities, crafting premium offers, and turning
              audience insights into results. This is a remote, full-time
              leadership role.
            </p>
          </div>
          {/* Assignment*/}
          <div className="px-[16px] py-[30px] bg-[#DAEBE8] rounded-[5px] mt-[35px]">
            <div className="">
              <p
                id="assignment"
                className="text-[#121212] text-[22px] font-[700] leading-[141%]"
              >
                Assignment
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                We want to understand how you think, structure, and execute
                monetization. This isn’t about guessing our numbers; it’s about
                how you’d build an ad engine that scales.
              </p>
              <div>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <strong>Task Overview</strong>
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  You’ll show how you would:
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Build a pipeline of brand partners
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Design pricing and inventory strategy
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Leverage sponsorship platforms and data tools
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Create a pitch narrative that converts
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <strong>1. Strategic Foundations</strong>
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  Answer briefly (2-4 sentences each):
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Which of our newsletters has the greatest short-term
                    monetization potential, and why?
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    What industries or advertiser categories would you
                    prioritize in the first 90 days?
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    What does “premium positioning” mean to you in newsletter
                    advertising, and how would you maintain it while scaling?
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <strong>2. Monetization Angles (pick 3 angles)</strong>
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  Choose any three angles and outline your approach for each:
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Direct Sponsorships & Native Ads
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Platform Leverage & Ad Tech
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Pricing & Packaging Strategy
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Revenue Diversification
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Analytics, Reporting & Retention
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Partnerships & Ecosystem Expansion
                  </span>
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  Each should include what you’d do, why it matters, and how
                  you’d measure success.
                </p>
              </div>
              <div>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <strong>3. Practical Scenario</strong>
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  You’re pitching a luxury brand (e.g., Montblanc, Emirates, or
                  Julius Baer) that wants to reach global executives.
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  Write a{" "}
                  <strong>200–300-word pitch email or deck outline</strong>{" "}
                  explaining:
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Which newsletter would you recommend and why
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    The type of placement or sponsorship
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Key audience stats or positioning language
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Expected ROI or campaign goal
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <strong>4. Platform Advantage</strong>
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    Which sponsorship platforms do you think are underutilized
                    by premium newsletters, and how could we take advantage of
                    them?
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    How would you combine direct sales and platform sales
                    without cannibalizing value?
                  </span>
                  <span className="block pl-6 -indent-4">
                    <span className="pr-2">-</span>
                    What’s one automation or tech stack upgrade you’d implement
                    in the first 60 days?
                  </span>
                </p>
              </div>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                <strong>How to submit:</strong>
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                <span className="block pl-6 -indent-4">
                  <span className="pr-2">-</span>
                  Send your assignment as a single PDF (maximum five pages)
                </span>
                <span className="block pl-6 -indent-4">
                  <span className="pr-2">-</span>
                  Subject line: Head of Ad Sales – [Your Name]
                </span>

                <span className="block pl-6 -indent-4">
                  <span className="pr-2">-</span>
                  Email it to careers@houseofsummary.com
                </span>
              </p>
            </div>
          </div>
          {/* Job description */}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%]">
              Job description
            </p>
            <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              As Head of Ad Sales, you’ll define and execute the monetization
              strategy across all House of Summary brands. You’ll cultivate
              high-value relationships with advertisers and agencies, create
              pricing models and media kits, and lead a growing sales team
              focused on long-term partnerships. You’ll collaborate with
              editorial, design, and analytics teams to deliver measurable
              results while maintaining our premium brand positioning in the
              global newsletter market.
            </p>
          </div>
          {/* Experience */}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%] ">
              Experience
            </p>
            <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              <li>Proven experience in media or digital advertising sales</li>
              <li>
                Strong understanding of performance marketing and newsletter
                advertising
              </li>
              <li>
                Excellent negotiation, presentation, and relationship management
                skills
              </li>
              <li>
                Analytical mindset with the ability to translate metrics into
                strategy
              </li>
              <li>Self-starter with a record of exceeding revenue targets</li>
              <li>
                Ability to combine strategic vision with hands-on execution
              </li>
            </ul>
          </div>
          {/* Nice to have*/}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%]">
              Nice to have
            </p>
            <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              <li>
                Experience with newsletter ad platforms (Beehiiv, ConvertKit,
                Paved)
              </li>
              <li>Collaborative, fast-moving environment</li>
              <li>
                Familiarity with UTM tracking, CPC models, and analytics
                dashboards
              </li>
              <li>Understanding of luxury, finance, or global brand markets</li>
              <li>
                Established network of marketing decision makers or media buyers
              </li>
            </ul>
          </div>
          {/* Benefits */}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%]">
              Benefits
            </p>
            <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              <li>
                Full ownership of the monetization strategy across all
                newsletters
              </li>
              <li>Work directly with the CEO</li>
              <li>Direct relationships with leading global advertisers</li>
              <li>Competitive base salary with incentives for performance</li>
              <li>Flexible working setup and results-driven culture</li>
            </ul>
          </div>
          {/* Join our team */}
          <div className="pt-[45px]">
            <h2 className="text-[#000] text-[30px] font-[400] leading-normal">
              Join our team
            </h2>
            <p className="text-[#000] text-[14px] font-[400] leading-[141%] pt-[25px] ">
              We’re a global remote-first team of curious, driven, and creative
              people building the future of independent media. At House of
              Summary, you’ll work alongside editors, designers, and developers
              who value clarity, precision, and originality. We move fast, stay
              curious, and care deeply about what we create.
            </p>
          </div>
          {/* how to apply */}
          {/* <div className="px-4 py-[30px] bg-[#DAEBE8] rounded-[5px] mt-8">
                <p className="text-[#000] text-[22px] font-[700] leading-[141%]">
                  How to apply
                </p>
                <div className=" flex flex-col py-3">
                  <div className="w-[85%]">
                    <p className="text-[#000] text-[14px] font-[400] leading-[174%]">
                      Send your CV, a motivational letter, and the completed
                      assignment to  
                      <span className="underline cursor-pointer">
                        careers@hourseofsummary.com
                      </span>{" "}
                      with the name of the position in the subject of the email.{" "}
                      <strong>
                        Note: We do not review applications without the
                        assignment
                      </strong>
                      .
                    </p>
                  </div>
                  <div className="w-fit mt-6">
                    <a
                      href="mailto:careers@sagravia.com"
                      className="block text-center bg-[#01261E] hover:bg-[#014134] text-white text-[14px] font-[600] px-4 py-2 rounded-full w-full"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div> */}
          {/* apply  */}
          <div className="w-full bg-[#01261E] mt-[45px] px-[30px] py-[25px] rounded-[10px]">
            <p className="text-[#fff] text-[20px] font-[600] leading-[141%]">
              Apply now!
            </p>
            <p className="text-[#fff] text-[14px] font-[300] leading-[141%] py-4">
              If you’re ready to join a fast-moving global media company and
              work with ambitious, creative people who value quality and
              initiative, we’d love to hear from you.
            </p>
            <div className="flex flex-row relative">
              <p
                className="text-[#fff] text-[13px] font-[400]
                                    leading-[141%] underline"
              >
                careers@houseofsummary.com
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
    </>
  );
}
