"use client";

import Image from "next/image";
import styles from "../aboutOurCompany.module.css";
import HeadingWithUnderline from "../advertiseComponents/headingWithUnderline/headingwithUnderline";
import { useState } from "react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const buttons = [
  {
    id: 1,
    label: "Accuracy",
    p1: "We verify everything before it reaches your inbox. If it cannot be confirmed, we do not include it.",
    p2: "Accuracy protects trust. It ensures that each story reflects what actually happened, not what is assumed or implied. We would rather be slightly slower and correct than fast and wrong. Good information should hold up tomorrow, not just today.",
    top: "3%",
    left: "50%",
  },
  {
    id: 2,
    label: "Objectivity",
    p1: "We do not take sides. We present what is true, not what is convenient for any group, ideology, or narrative. Personal opinions stay out, emotional language stays out, and the focus is on the facts and their real impact.",
    p2: "Instead of choosing a side, we give you the context and the verified details so you can draw your own conclusions.",
    top: "20%",
    left: "80%",
  },
  {
    id: 3,
    label: "Respect for time",
    p1: "Your attention is valuable and we write with purpose. Every sentence must earn its place. If something can be explained clearly in ten words, we do not use twenty.",
    p2: "The result is information that is fast to read and easy to understand, without losing meaning. You don’t waste your time, we don’t waste your time.",
    top: "70%",
    left: "88%",
  },
  {
    id: 4,
    label: "Readers First",
    p1: "Everything we create is made for you (the reader). Readers first means clarity over clicks. It means substance over sensationalism. It means we measure our work by how useful it is to you.",
    p2: "We also listen. When you ask questions or offer suggestions, we adapt. The newsletter grows with its audience, not away from it.",
    top: "93%",
    left: "53%",
  },
  {
    id: 5,
    label: "High quality",
    p1: "Our readers are smart and they pay attention. They know that good writing matters, structure matters, and tone matters. We aim for clarity, precision, and coherence in every edition.",
    p2: "We believe quality reflects respect. Respect for the reader, for the subject, and for the work itself.",
    top: "70%",
    left: "15%",
  },
  {
    id: 6,
    label: "Consistency",
    p1: "The standards stays the same every day. We do not rely on inspiration or mood. We follow a clear process, review our work carefully, and make sure the quality is steady from issue to issue.",
    p2: "Consistency is another thing that builds trust. When you open our newsletters, you know what to expect. The goal is not to be impressive once; it is to be reliable always.",
    top: "20%",
    left: "18%",
  },
];

export default function AboutOurStandards() {
  const [selected, setSelected] = useState("Accuracy");

  // orbit scroll for mobile
  const orbitRef = useRef(null);
  const contentRef = useRef(null);

  const handleDotClick = (label) => {
    setSelected(label);
    setTimeout(() => {
      if (orbitRef.current) {
        orbitRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          window.scrollBy({ top: -96, behavior: "smooth" }); // adjust -40px as needed
        }, 300); // match the scrollIntoView duration (~300ms)
      }
    }, 50);
  };

  // orbit scroll for mobile
  const activeContent = buttons.find((item) => item.label === selected);
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="px-4 md:px-28 md:py-20">
          <div className="flex lg:flex-row">
            {/* left */}
            <div className="w-[50%]">
              <div className="w-[80%]">
                <HeadingWithUnderline text="Our standards" />

                {activeContent && (
                  <div>
                    <h5 className="pt-8 pb-4 text-[31px] text-[#000] font-[400] leading-normal ">
                      {activeContent.label}
                    </h5>
                    <p className="text-[18px] font-[400] leading-[124.251%] tracking-[0.36px]">
                      {activeContent.p1}
                    </p>
                    <p className="text-[18px] font-[400] leading-[124.251%] tracking-[0.36px] py-4">
                      {activeContent.p2}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* right */}
            <div className="w-[50%]">
              <div className="relative w-full flex justify-center items-center">
                {/* Orbit background image */}
                <video
                  src="/about/our-standards.mp4"
                  className="w-[92%] h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>

                {/* Radio buttons around the circle */}
                {buttons.map((btn) => (
                  <div
                    key={btn.label}
                    style={{
                      top: btn.top,
                      left: btn.left,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="absolute flex flex-col items-center space-y-1 cursor-pointer"
                    onClick={() => setSelected(btn.label)}
                  >
                    <span
                      className={`text-[15px] ${
                        selected === btn.label
                          ? "font-[500] leading-normal text-[#000] "
                          : "text-[#00000099] font-[400] leading-normal"
                      }`}
                    >
                      {btn.label}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border-[5px] transition-all ${
                        selected === btn.label
                          ? "border-[#00261E] bg-white"
                          : "border-transparent bg-[#00261E]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="px-4">
          <div className="pb-10">
            <HeadingWithUnderline text="Our standards" />
          </div>

          <div className="pt-4 pb-2" ref={orbitRef}>
            <div className="relative w-full flex justify-center items-center">
              {/* Orbit background image */}
              <video
                src="/about/our-standards.mp4"
                className="w-[92%] h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>

              {/* Radio buttons around the circle */}
              {buttons.map((btn) => (
                <div
                  key={btn.label}
                  style={{
                    top: btn.top,
                    left: btn.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute flex flex-col items-center space-y-1 cursor-pointer"
                  onClick={() => handleDotClick(btn.label)}
                >
                  <span
                    className={`text-[12px] ${
                      selected === btn.label
                        ? "font-[500] leading-normal text-[#000] "
                        : "text-[#00000099] font-[400] leading-normal"
                    }`}
                  >
                    {btn.label}
                  </span>
                  <div
                    className={`w-[17px] h-[17px] rounded-full border-[4px] transition-all ${
                      selected === btn.label
                        ? "border-[#00261E] bg-white"
                        : "border-transparent bg-[#00261E]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div ref={contentRef} className="">
            {activeContent && (
              // <div>
              //   <div className="pt-4 pb-4">
              //     <h5 className=" leading-normal text-[22px] text-[#000] font-[400] underline underline-offset-[6px] decoration-[1px]">
              //       {activeContent.label}
              //     </h5>
              //   </div>
              //   <p className="text-[14px] font-[400] leading-normal">
              //     {activeContent.p1}
              //   </p>
              //   <p className="text-[14px] font-[400] leading-normal py-4">
              //     {activeContent.p2}
              //   </p>
              // </div>

              <AnimatePresence mode="wait">
                {activeContent && (
                  <motion.div
                    key={activeContent.label} // this ensures exit/enter triggers on change
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="pt-4 pb-4">
                      <h5 className="leading-normal text-[22px] text-[#000] font-[400] underline underline-offset-[6px] decoration-[1px]">
                        {activeContent.label}
                      </h5>
                    </div>
                    <p className="text-[14px] font-[400] leading-normal">
                      {activeContent.p1}
                    </p>
                    <p className="text-[14px] font-[400] leading-normal py-4">
                      {activeContent.p2}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
