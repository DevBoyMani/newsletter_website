"use client";

import React, { useRef } from "react";
import CareersCardItem from "../../components/careersCardItem/careersCardItem";

const CareersWhatWeOffer = () => {
  const sectionRefs = useRef([]);
  const whatWeOfferCol1 = [
    {
      id: 1,
      logo: "/careers/supportive.png",
      heading: "Supportive and collaborative environment",
      content: (
        <>
          We believe the best ideas come from teamwork. Our motto:{" "}
          <strong>there are no stupid ideas</strong>.
        </>
      ),
    },
    {
      id: 2,
      logo: "/careers/trust.png",
      heading: "We trust our employees",
      content: (
        <>
          <strong>We don’t micromanage</strong>. If you take ownership, you
          don’t need someone watching your screen. You receive the goal, the
          context, and the deadline, and how you get there is your
          responsibility.
        </>
      ),
    },
    {
      id: 3,
      logo: "/careers/benefits.png",
      heading: "High standards, always",
      content: (
        <>
          We take pride in doing things well. Details matter, writing matters,
          clarity matters. If something can be improved, we improve it.{" "}
          <strong>Quality is the way we work</strong> (and live) every day.
        </>
      ),
    },
  ];
  const whatWeOfferCol2 = [
    {
      id: 1,
      logo: "/careers/create-opportunities.png",
      heading: "We invest in potential",
      content: (
        <>
          You don’t need years of experience to join. We teach and support those
          who show{" "}
          <strong>ownership, consistency, initiative, and adaptability</strong>.
          Skill can be developed. Discipline and attitude come first.
        </>
      ),
    },
    {
      id: 2,
      logo: "/careers/flexibility.png",
      heading: "Flexibility and work-life balance",
      content: (
        <>
          We don’t need you to sit at a desk all day. If you can take a call
          from the beach and still deliver your work{" "}
          <strong>on time and at a high standard</strong>, that works for us.
        </>
      ),
    },
    {
      id: 3,
      logo: "/careers/celebrate-diversity.png",
      heading: "Diversity and inclusion",
      content: (
        <>
          We don’t do diversity because it is a requirement. We do it because it
          makes the work (and workplace) better. And we look for people who{" "}
          <strong>think differently</strong>, not just look different.
        </>
      ),
    },
  ];

  return (
    <>
      {/* What we offer desktop*/}
      <div className="hidden lg:block md:px-28 md:pb-10 md:pt-16 bg-[#FAFAFA]">
        <div className="md:flex h-full gap-10">
          {/* Left: Sticky Section */}
          <div className="w-[40%] sticky top-28 h-fit">
            <div className="text-[#000]">
              <span className="text-[16px] font-[400] leading-normal ">
                Join our dream team
              </span>
              <h2 className="text-[56px] font-[400] leading-normal ">
                What we offer
              </h2>
            </div>
          </div>

          {/* Right: Scroll Sections */}
          <div className="w-[60%] space-y-24">
            <div
              ref={(el) => (sectionRefs.current[0] = el)}
              // className="scroll-mt-24"
              className="flex justify-end space-x-6 scroll-mt-28"
            >
              {/* col-1 */}
              <section
              // ref={(el) => (sectionRefs.current[0] = el)}
              // className="scroll-mt-24"
              >
                <div className="flex gap-6  mt-20">
                  <div className="flex flex-col gap-6">
                    {whatWeOfferCol1.map((item) => (
                      <div
                        key={item.id}
                        className="border p-5 max-w-[300px] bg-[#B6B6B633]"
                      >
                        <img
                          src={item.logo}
                          alt={item.heading}
                          className="w-14 h-14 mb-3"
                        />
                        <p className="text-[#000] text-[20px] font-[400] mb-4 leading-[128%]">
                          {item.heading}
                        </p>
                        <p className="text-[#000] text-[16px] font-[400] pb-2 leading-[149%]">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* col-2 */}
              <section
              // ref={(el) => (sectionRefs.current[1] = el)}
              // className="scroll-mt-24"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col gap-6">
                    {whatWeOfferCol2.map((item) => (
                      <div
                        key={item.id}
                        className="border p-5 max-w-[300px] bg-[#B6B6B633]"
                      >
                        <img
                          src={item.logo}
                          alt={item.heading}
                          className="w-14 h-14 mb-3"
                        />
                        <h3 className="text-[#000] font-[manrope] text-[20px] font-[400] mb-4 leading-[128%]">
                          {item.heading}
                        </h3>
                        <p className="text-[#000] text-[16px] font-[400] pb-2 leading-[149%]">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* What we offer mobile*/}
      <div className="block lg:hidden px-4 pb-10 pt-10 bg-[#FAFAFA]">
        {/* Top Section: Heading */}
        <div className="mb-10 text-[#000]">
          <span className="text-[16px] font-[400] leading-normal">
            Join our dream team
          </span>
          <h2 className="text-[34px] font-[400] leading-normal ">
            What we offer
          </h2>
        </div>

        {/* Column 1 */}
        <div className="space-y-6 mb-10 bg-[#FAFAFA]">
          {whatWeOfferCol1.map((item, index) => (
            <CareersCardItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-6 bg-[#FAFAFA]">
          {whatWeOfferCol2.map((item, index) => (
            <CareersCardItem
              key={item.id}
              item={item}
              index={index + whatWeOfferCol1.length}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CareersWhatWeOffer;
