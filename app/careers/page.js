"use client";

import React, { useState, useRef } from "react";
import ViewAll from "../../components/viewAll/viewAll";
import Leadership from "../../components/leadership/leadership";
import Others from "../../components/others/others";
import Design from "../../components/design/design";
import Engineering from "../../components/engineering/engineering";
import Journalism from "../../components/journalism/journalism";
import Tech from "../../components/tech/tech";
import Marketing from "../../components/marketing/marketing";

import CareersTestimonialsTab from "../../components/careersTestimonialTab/careersTestimonialsTab";
import CareersStepAccordionSection from "../../components/careersStepAccordionSection/careersStepAccordionSection";
import CareersVideoBanner from "../../components/careersVideoBanner/careersVideoBanner";
import CareersWhatWeOffer from "../../components/careersWhatWeOffer/careersWhatWeOffer";
import CareersPeopleSay from "../../components/careersPeopleSay/careersPeopleSay";

const Careers = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeStepImage, setActiveStepImage] = useState(null);

  const steps = [
    { id: 1, source: "/careers/step-1.png", name: "step-1" },
    { id: 2, source: "/careers/step-2.png", name: "step-2" },
    { id: 3, source: "/careers/step-3.png", name: "step-3" },
    { id: 4, source: "/careers/step-4.png", name: "step-4" },
    { id: 5, source: "/careers/step-5.png", name: "step-5" },
  ];

  const testimonials = [
    { name: "View All", component: <ViewAll /> },
    { name: "Design", component: <Design /> },
    { name: "Engineering", component: <Engineering /> },
    { name: "Journalism", component: <Journalism /> },
    { name: "Tech", component: <Tech /> },
    { name: "Leadership", component: <Leadership /> },
    { name: "Marketing", component: <Marketing /> },
    { name: "Others", component: <Others /> },
  ];

  const handleStepChange = (stepNumber) => {
    const selected = steps.find((s) => s.id === stepNumber);
    setActiveStepImage(selected);
  };

  return (
    <>
      {/* Header */}
      <div className="md:px-28 px-4 lg:pt-28 pt-[170px] mx-auto bg-[#FAFAFA]">
        <div className="pb-8 text-start ">
          <p className="lg:text-[25px] text-[12px] font-[600] text-[#020715] uppercase">
            Tired of endless job searching?
          </p>
          <h2 className="text-[53px] lg:text-[80px] text-[#01261E] py-2 leading-[104%] w-[80%] lg:w-[46%]">
            Join a team built on trust
          </h2>
          <div className="lg:pt-14 pt-8 border-black border-b flex justify-between">
            <h2 className="lg:text-[56px] text-[30px] text-[#01261E]">
              Open Positions
            </h2>
            <div className="hidden lg:flex space-x-4 mt-8 text-[#020715] text-[17px]">
              <a
                href=""
                target="_blank"
                className="hover:underline hover:text-[#01261E]"
              >
                LinkedIn ↗
              </a>
              <a
                href=""
                target="_blank"
                className="hover:underline hover:text-[#01261E]"
              >
                Glassdoor ↗
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Tabs */}
      <div className="w-full md:px-28 px-4 bg-[#FAFAFA]">
        <CareersTestimonialsTab
          testimonials={testimonials}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* Active Tab Section */}
      <div className="mt-0 md:px-28 px-4 bg-[#FAFAFA]">
        {testimonials[activeTab].component}
      </div>
      {/* Step Accordion Section */}
      <CareersStepAccordionSection
        activeStepImage={activeStepImage}
        handleStepChange={handleStepChange}
      />
      {/* Video Section */}
      <CareersVideoBanner />
      {/* What We Offer */}
      <CareersWhatWeOffer />
      {/* people say */}
      <CareersPeopleSay />
    </>
  );
};

export default Careers;
