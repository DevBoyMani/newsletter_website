import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const jobCriteria = [
  { label: "Experience level", data: "Entry", id: "1" },
  { label: "Type", data: "Part Time", id: "2" },
  { label: "Location", data: "100% Remote", id: "3" },
  { label: "Salary range", data: "Internship", id: "4" },
  { label: "Work hours", data: "20–25 hours per week", id: "5" },
];

export default function SocialMediaIntern() {
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
    const email = "careers@sagravia.com";

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
            {/* left */}
            <div className="max-w-[40%] w-full  h-fit sticky top-24 self-start pb-[115px]">
              <div className="h-auto">
                <Link
                  href="/careers"
                  className="text-[16px] font-[600] text-[#000] leading-[normal] hover:underline "
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
                  <div className="flex flex-row space-x-2">
                    <p className="py-1 px-2 bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                      Remote
                    </p>
                    <p className="py-1 px-2 bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                      Part-time
                    </p>
                  </div>
                  {/* date */}
                  <div>
                    <p className="text-[#000] text-[15px] font-[400] leading-normal">
                      November 15th, 2025
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="pt-[30px]">
                  <p className="text-[#000] text-[13px] font-[500] leading-normal">
                    Marketing
                  </p>
                  <h2 className=" text-[#000] text-[56px] font-[400] leading-[1.2]">
                    Social Media Intern
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
                {/* assignment navigation label */}
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
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          const section = document.querySelector("#assignment");
                          if (!section) return; // prevent error if not found

                          const yOffset = -100; // adjust for sticky header height if needed
                          const y =
                            section.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;
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
                    Help grow our newsletters across social platforms through
                    daily content, smart copy, and iterative testing. You will
                    learn how to turn attention into measurable actions while
                    keeping our brand voice sharp and consistent.
                  </p>
                </div>
                {/* assignment */}
                <div id="assignment" className="pt-[30px]">
                  <div className="px-[25px] py-[30px] bg-[#DAEBE8] rounded-[10px]">
                    <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                      Assignment
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      We’d love to see how you think about social media; how you
                      plan, create, and communicate ideas that work.
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <strong>Your task:</strong>
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      Imagine you’re managing social media for one of our
                      newsletters:
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <span className="mx-6">-</span>
                      <a
                        href="https://www.presidentialsummary.com/"
                        target="_blank"
                      >
                        <span className="underline">Presidential Summary</span>
                      </a>
                      &nbsp; (global news)
                      <br />
                      <span className="mx-6">-</span>
                      <a
                        href="https://www.geopoliticalsummary.com/"
                        target="_blank"
                      >
                        <span className="underline">Geopolitical Summary</span>
                      </a>
                      &nbsp;(international politics)
                      <br />
                      <span className="mx-6">-</span>
                      <a href="https://www.dubaisummary.com/" target="_blank">
                        <span className="underline">Dubai Summary</span>
                      </a>{" "}
                      &nbsp;(UAE news and lifestyle)
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                      Pick one newsletter and create a short 3-day content plan
                      for it.
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <strong>What to include:</strong>
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <span className="mx-6">-</span>
                      Which newsletter did you choose and why?
                      <br />
                      <span className="mx-6">-</span>
                      Who is the typical audience? (Age, interests, and why
                      they’d follow this account)
                      <br />
                      <span className="mx-6">-</span>
                      Three posts for three days:
                      <br />
                      <span className="ml-16 mr-6">-</span>
                      Give each post a title or hook
                      <br />
                      <span className="ml-16 mr-6">-</span>
                      Add a short caption (1-2 sentences)
                      <br />
                      <span className="ml-16 mr-6">-</span>
                      Say which platform it’s for (e.g., Instagram, Threads,
                      LinkedIn)
                      <br />
                      <span className="ml-16 mr-6">-</span>
                      Add a quick note on why it would perform well
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <strong>How to submit:</strong>
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <span className="mx-6">-</span>
                      Send your short plan as a 1-page PDF
                      <br />
                      <span className="mx-6">-</span>
                      Subject line: Social Media Intern – [Your Name]
                      <br />
                      <span className="mx-6">-</span>
                      Email it to careers@houseofsummary.com
                    </p>
                  </div>
                </div>
                {/* job des */}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Job description
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    As a Social Media Intern, you’ll create and publish
                    short-form posts and videos across all major platforms.
                    You’ll write catchy captions, manage posting calendars, and
                    monitor trends and audience engagement in real time. Working
                    closely with our editorial and analytics teams, you’ll help
                    refine strategies and discover what makes content perform.
                    This internship offers a unique opportunity to learn the ins
                    and outs of digital media, brand storytelling, and audience
                    psychology while building a strong creative portfolio.
                  </p>
                </div>
                {/* experience*/}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Experience
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>
                      Familiarity with Facebook, Instagram, Threads, X, Reddit,
                      and LinkedIn
                    </li>
                    <li>Strong writing and basic visual judgment</li>
                    <li>
                      Organized, reliable, and curious about analytics and
                      testing
                    </li>
                    <li>
                      Bonus: experience with creator collaborations or analytics
                      tools
                    </li>
                  </ul>
                </div>
                {/* benefits */}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Benefits
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>Real ownership of posts and weekly campaigns</li>
                    <li>Mentorship from editors and marketers</li>
                    <li>Portfolio pieces with measurable outcomes</li>
                    <li>Flexible schedule and fully remote setup</li>
                    <li>
                      Potential for extension or recommendation based on
                      performance
                    </li>
                  </ul>
                </div>
                {/* join our team & how to apply */}
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
                            completed assignment to  
                            <span className="underline cursor-pointer">
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
                            href="mailto:careers@sagravia.com"
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
      <div className="block lg:hidden ">
        <div className="md:px-28 pt-[190px] pb-[45px] bg-[#FAFAFA]">
          <div className="px-4 w-full">
            <div className="">
              {/* 1 */}

              <div className="flex flex-row space-x-2">
                <p className="w-[37px] h-[32px] bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                  Remote
                </p>
                <p className="w-[83px] h-[32px] bg-[#DAEBE8] text-[15px] text-[#000] font-[400] leading-normal text-center items-center flex justify-center rounded-[5px]">
                  Part-time
                </p>
              </div>
              {/* date */}
              <div className="pt-3">
                <p className="text-[#6B6B6F] text-[15px] font-[400] leading-normal">
                  November 15th, 2025
                </p>
              </div>

              {/* 2 */}
              <div className="py-6">
                <p className="text-[#9493A5] text-[13px] font-[500] leading-normal">
                  Marketing
                </p>
                <h2 className=" text-[#01261E] text-[30px] font-[400] leading-[1.2]">
                  Social Media Intern
                </h2>
              </div>
              {/* 3 */}
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
              {/* position summary */}
              <div className="py-4">
                <p className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Position summary
                </p>
                <p className="text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                  Help grow our newsletters across social platforms through
                  daily content, smart copy, and iterative testing. You will
                  learn how to turn attention into measurable actions while
                  keeping our brand voice sharp and consistent.
                </p>
              </div>
              {/* 5 */}
              <div className="px-[16px] py-[30px] bg-[#DAEBE8] rounded-[5px]">
                <div className="">
                  <p className="text-[#121212] text-[22px] font-[700] leading-[141%] pb-2">
                    Assignment
                  </p>
                  <p className="text-[#121212] text-[14px] font-[400] leading-[141%] py-2">
                    We’d love to see how you think about social media; how you
                    plan, create, and communicate ideas that work.
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    <strong>Your task:</strong>
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    Imagine you’re managing social media for one of our
                    newsletters:
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    <span className="mx-4">-</span>
                    <a>
                      <span className="underline">Presidential Summary</span>
                    </a>
                    &nbsp; (global news)
                    <br />
                    <span className="mx-4">-</span>
                    <a>
                      <span className="underline">Geopolitical Summary</span>
                    </a>
                    &nbsp; (international politics)
                    <br />
                    <span className="mx-4">-</span>
                    <a>
                      <span className="underline">Dubai Summary</span>
                    </a>
                    &nbsp; (UAE news and lifestyle)
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    Pick one newsletter and create a short 3-day content plan
                    for it.
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    <strong>What to include:</strong>
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                    <span className="mx-4">-</span>
                    <a>
                      <span className="underline">Presidential Summary</span>
                    </a>
                  </p>
                </div>
              </div>
              {/* 6 */}
              <div className="py-4">
                <p className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Job description
                </p>
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
              {/* 7 */}
              <div className="pb-4">
                <p className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Experience
                </p>
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
              {/* 8 */}
              <div className="">
                <p className="text-[#121212] text-[22px] font-[700] leading-[141%] py-2">
                  Benefits
                </p>
                <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-2">
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
              {/* 9 */}
              <div className="pt-[55px]">
                <h2 className="text-[#000] text-[30px] font-[400] leading-normal ">
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
                <div className="w-full bg-[#01261E] mt-10 px-[30px] py-[25px] rounded-[10px]">
                  <div className="">
                    <p className="text-[#fff] text-[20px] font-[600] leading-[141%]">
                      Apply now!
                    </p>
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
      </div>
    </>
  );
}
