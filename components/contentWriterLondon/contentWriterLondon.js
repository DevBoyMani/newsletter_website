import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const jobCriteria = [
  { label: "Experience Level", data: "Mid-level", id: "1" },
  { label: "Type", data: "Full Time", id: "2" },
  { label: "Location", data: "100% Remote", id: "3" },
  {
    label: "Salary",
    data: "$12,000–$24,000 (depending on experience)",
    id: "4",
  },
  { label: "Time", data: "40 hours per week", id: "5" },
];

export default function ContentWriterLondon() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target,
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
      },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCopy = () => {
    const email = "careers@hourseofsummary.com";

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
                  <span className="text-[20px]"> &#8592;</span> All job offers
                </Link>
                <div className="w-[80%] h-auto  bg-[#01261E] mt-10 p-8 rounded-[10px]">
                  <div className="">
                    <p className="text-[#fff] text-[20px] font-[600] leading-[141%]">
                      Apply now!
                    </p>
                    <p className="w-[100%] text-[#fff] text-[16px] font-[300] leading-[141%] pt-6 pb-4">
                      If you're interested in end-to-end development and want to
                      work with cutting-edge technologies, come on board.
                    </p>
                    <div className="flex flex-row ">
                      <p
                        className="text-[#fff] text-[16px] font-[400]
                                     hover:underline cursor-pointer"
                      >
                        careers@hourseofsummary.com
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
                    Editorial
                  </p>
                  <h1 className=" text-[#000] text-[56px] font-[400] leading-[1.2]">
                    Content Writer
                  </h1>
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
                      <Link href="#assignment">
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
                      </Link>
                    </div>
                  </div>
                </div>

                {/* intro*/}
                <div className="">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Position summary
                  </p>
                  <p className="text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    We’re looking for a sharp, curious, and culturally tuned-in
                    Content Writer to join the team behind London Summary, a
                    growing newsletter that curates the most interesting
                    stories, people, and happenings across the city. You’ll be
                    part writer, part editor, and part detective, someone who
                    can capture London’s essence in a few smart, engaging
                    paragraphs. Your work will span news, business, culture, and
                    lifestyle, helping readers feel more connected to London
                    every morning. This is a remote role, but you must be based
                    in the UK, with a genuine familiarity and feel for life in
                    London.
                  </p>
                </div>
                {/* assignment */}
                <div id="assignment" className="pt-[30px]">
                  <div className="px-[25px] py-[30px] bg-[#DAEBE8] rounded-[10px]">
                    <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                      Assignment
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      We want to see how you think, research, and write with
                      clarity and voice. This task tests your ability to combine
                      news judgment, storytelling, and editorial tone, the three
                      traits that define our writers at House of Summary.
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <strong>Task Overview</strong>
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      Create a short piece for London Summary, a daily
                      newsletter that covers business, culture, city life, and
                      the people shaping London today. Your goal is to show how
                      you can write smart, concise, and engaging content that
                      informs and entertains readers in just a few minutes.
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      Use the examples on the{" "}
                      <a
                        className="underline"
                        href="https://www.londonsummary.com/"
                        target="_blank"
                      >
                        London Summary website
                      </a>{" "}
                      as a guide for tone, structure, and style.
                    </p>

                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <strong>How to submit:</strong>
                    </p>
                    <p className="text-[#121212] text-[16px] font-[400] leading-[141%] py-2">
                      <span className="block pl-6 -indent-4">
                        <span className="mr-2">-</span>
                        Send your assignment as a single PDF (maximum two pages)
                      </span>
                      <span className="block pl-6 -indent-4">
                        <span className="mr-2">-</span>
                        Subject line: Content Writer – [Your Name]
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
                    As a Content Writer for London Summary, you’ll be
                    responsible for researching, writing, and editing stories
                    that bring the city to life, from emerging business trends
                    and cultural shifts to quirky local happenings. You’ll
                    curate complex topics into short, witty, and human pieces
                    that resonate with busy readers. You’ll also help shape the
                    newsletter’s tone, pitch story ideas, and collaborate with
                    editors, designers, and growth teams to refine the overall
                    voice and experience. The ideal candidate has a sharp
                    editorial instinct, a feel for London’s rhythm, and an
                    ability to turn insight into irresistible copy.
                  </p>
                </div>
                {/* experience*/}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Experience
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>Excellent written English and editorial judgment</li>
                    <li>Strong research and summarization skills</li>
                    <li>
                      Experience writing for newsletters, magazines, or digital
                      media
                    </li>
                    <li>
                      Deep curiosity about London’s people, culture, and
                      politics
                    </li>
                    <li>
                      Attention to detail and comfort with fast-paced deadlines
                    </li>
                  </ul>
                </div>
                {/* Nice to have*/}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Nice to have
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>
                      Familiarity with SEO, analytics, and headline testing
                    </li>
                    <li>Knowledge of local London publications and trends</li>
                    <li>Experience with CMS tools like Substack or Beehiiv</li>
                    <li>Light design instincts for layout or visuals</li>
                  </ul>
                </div>
                {/* benefits */}
                <div className="pt-[30px]">
                  <p className="text-[#121212] text-[18px] font-[700] leading-[141%] pb-2">
                    Benefits
                  </p>
                  <ul className="custom-list text-[#121212] text-[16px] font-[400] leading-[141%] pt-2">
                    <li>
                      Be part of London Summary’s editorial core as it grows
                    </li>
                    <li>Freedom to pitch stories and shape tone</li>
                    <li>Flexible hours and creative autonomy</li>
                    <li>
                      Work with a small, ambitious team that values quality,
                      curiosity, and good humor
                    </li>
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
                                      `Email copied to clipboard: ${email}`,
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

          <Link
            href="#assignment"
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
              Editorial
            </p>
            <h1 className=" text-[#01261E] text-[30px] font-[400] leading-[1.2]">
              Content Writer
            </h1>
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
              We’re looking for a sharp, curious, and culturally tuned-in
              Content Writer to join the team behind London Summary, a growing
              newsletter that curates the most interesting stories, people, and
              happenings across the city. You’ll be part writer, part editor,
              and part detective, someone who can capture London’s essence in a
              few smart, engaging paragraphs. Your work will span news,
              business, culture, and lifestyle, helping readers feel more
              connected to London every morning. This is a remote role, but you
              must be based in the UK, with a genuine familiarity and feel for
              life in London.
            </p>
          </div>
          {/* Assignment*/}
          <div className="px-[16px] py-[30px] bg-[#DAEBE8] rounded-[5px] mt-[35px]">
            <div id="assignment" className="">
              <p className="text-[#121212] text-[22px] font-[700] leading-[141%]">
                Assignment
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                We want to see how you think, research, and write with clarity
                and voice. This task tests your ability to combine news
                judgment, storytelling, and editorial tone, the three traits
                that define our writers at House of Summary.
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                <strong>Task Overview</strong>
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                Create a short piece for London Summary, a daily newsletter that
                covers business, culture, city life, and the people shaping
                London today. Your goal is to show how you can write smart,
                concise, and engaging content that informs and entertains
                readers in just a few minutes.
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                Use the examples on the{" "}
                <a
                  className="underline"
                  href="https://www.londonsummary.com/"
                  target="_blank"
                >
                  London Summary website
                </a>{" "}
                as a guide for tone, structure, and style.
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                <strong>How to submit:</strong>
              </p>
              <p className="text-[#121212] text-[14px] font-[400] leading-[141%] pt-4">
                <span className="block pl-6 -indent-4">
                  <span className="pr-2">-</span>
                  Send your assignment as a single PDF (maximum two pages)
                </span>
                <span className="block pl-6 -indent-4">
                  <span className="pr-2">-</span>
                  Subject line: Content Writer – [Your Name]
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
              As a Content Writer for London Summary, you’ll be responsible for
              researching, writing, and editing stories that bring the city to
              life, from emerging business trends and cultural shifts to quirky
              local happenings. You’ll curate complex topics into short, witty,
              and human pieces that resonate with busy readers. You’ll also help
              shape the newsletter’s tone, pitch story ideas, and collaborate
              with editors, designers, and growth teams to refine the overall
              voice and experience. The ideal candidate has a sharp editorial
              instinct, a feel for London’s rhythm, and an ability to turn
              insight into irresistible copy.
            </p>
          </div>
          {/* Experience */}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%] ">
              Experience
            </p>
            <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              <li>Excellent written English and editorial judgment</li>
              <li>Strong research and summarization skills</li>
              <li>
                Experience writing for newsletters, magazines, or digital media
              </li>
              <li>
                Deep curiosity about London’s people, culture, and politics
              </li>
              <li>Attention to detail and comfort with fast-paced deadlines</li>
            </ul>
          </div>
          {/* Nice to have */}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%] ">
              Nice to have
            </p>
            <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              <li>Familiarity with SEO, analytics, and headline testing</li>
              <li>Knowledge of local London publications and trends</li>
              <li>Experience with CMS tools like Substack or Beehiiv</li>
              <li>Light design instincts for layout or visuals</li>
            </ul>
          </div>
          {/* Benefits */}
          <div className="mt-[35px]">
            <p className="text-[#121212] text-[22px] font-[700] leading-[141%]">
              Benefits
            </p>
            <ul className="custom-list text-[#121212] text-[14px] font-[400] leading-[141%] pt-[25px]">
              <li>Be part of London Summary’s editorial core as it grows</li>
              <li>Freedom to pitch stories and shape tone</li>
              <li>Flexible hours and creative autonomy</li>
              <li>
                Work with a small, ambitious team that values quality,
                curiosity, and good humor
              </li>
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
                    <p className="text-[#000] text-[16px] font-[400] leading-[174%]">
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
