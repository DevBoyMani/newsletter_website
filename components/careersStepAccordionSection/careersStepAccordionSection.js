"use client";

import React from "react";
import CustomAccordion from "../../components/customAccordion/customAccordion";

const CareersStepAccordionSection = ({ activeStepImage, handleStepChange }) => {
  return (
    <>
      {/* desktop faq */}
      <div className="hidden lg:block py-10  md:px-28 flex justify-end bg-[#FAFAFA]">
        <div className="lg:pb-20">
          <div className="px-4 text-[#01261E] lg:text-[56px] text-[51px]   font-[400] lg:leading-[104%] leading-[84%] lg:text-right">
            <h2>
              What happens when
              <br /> you apply?
            </h2>
          </div>
        </div>
      </div>

      <div className="hidden lg:block py-10 md:px-28 md:pb-24 bg-[#FAFAFA]">
        <div className="flex flex-col md:flex-row justify-between ">
          {/* Left side – Image */}
          <div className="md:w-[46%] lg:py-0 pb-8">
            {activeStepImage ? (
              <img
                src={activeStepImage.source}
                alt={activeStepImage.name}
                className="w-[86%] mt-[-80px]"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
            ) : (
              <img
                src="/careers/normal-state-image.png"
                alt="step doesn't selected"
                className="w-[86%] mt-[-80px]"
                style={{ maxHeight: "80vh", objectFit: "contain" }}
              />
            )}
          </div>

          {/* Right side – Accordion / mobile too*/}
          <div className="md:w-[47.5%]">
            <CustomAccordion onStepChange={handleStepChange} />
          </div>
        </div>
      </div>
      {/*/ desktop faq */}

      {/* mobile faq */}
      <div className="lg:hidden block py-10 bg-[#FAFAFA]">
        <div className=" lg:pb-20">
          <div className="px-4 text-[#01261E] text-[30px]    font-[400] lg:leading-[104%] leading-[84%] ">
            <h2>
              How do we work with
              <br /> your application?
            </h2>
          </div>
        </div>
      </div>

      <div className="lg:hidden block bg-[#FAFAFA]">
        {/* Right side – Accordion / mobile too*/}
        <div className="">
          <CustomAccordion onStepChange={handleStepChange} />
        </div>
      </div>
      {/*/mobile faq */}
    </>
  );
};

export default CareersStepAccordionSection;
