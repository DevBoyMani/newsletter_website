"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "After project completion, who owns the intellectual property?",
    answer:
      "We recognize the significance of intellectual property rights and their role in fostering innovation and creativity. As such, once a work-for-hire project is completed and all obligations are fulfilled, the intellectual property typically transfers to you, the client. This ensures that you hold the reins to the work we’ve created together, empowering.",
  },
  {
    id: 2,
    question:
      "What measures does Sagravia take to ensure the excellence of its output?",
    answer:
      "We follow a rigorous QA process, maintain open communication, and iterate based on feedback.",
  },
  {
    id: 3,
    question: "Can you support my B2B / Enterprise software needs?",
    answer:
      "Yes, we specialize in scalable and secure enterprise-grade solutions tailored to your business.",
  },
  {
    id: 4,
    question: "How much does hiring you for a project cost?",
    answer:
      "Our pricing depends on project scope, timeline, and complexity. Contact us for a custom quote.",
  },
];

export default function AdvertiseNewFaq() {
  const [activeId, setActiveId] = useState(faqs[0]?.id);

  const handleCardClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#FAFAFA] md:px-28 py-10 hidden lg:block">
      {/* Top section */}
      <div className="flex justify-between">
        <div className="text-[#01261E] w-[40%] text-[56px]  font-[400] leading-[111%]">
          Frequently Asked Questions
        </div>
        <div className="mt-16 w-[27%]">
          Find answers to common questions about our services, project process,
          and <br />
          technical expertise
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="flex items-start gap-6 py-24 bg-[#f9f9f9]">
        {faqs.map((faq) => {
          const isActive = activeId === faq.id;

          return (
            <motion.div
              key={faq.id}
              onClick={() => handleCardClick(faq.id)}
              className={`relative rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 flex flex-col ${
                isActive
                  ? "bg-[#00261E] text-white justify-start"
                  : "bg-white text-[#7F8382] justify-end"
              }`}
              style={{
                width: isActive ? "33.5%" : "21%",
                height: 451,
                padding: isActive
                  ? "66px 40px 35px 40px"
                  : "0px 40px 25px 40px",
              }}
            >
              {/* Question */}
              <motion.p
                initial={false}
                animate={{
                  fontSize: isActive ? "30px" : "27px",
                  fontWeight: isActive ? 400 : 400,
                }}
                transition={{ duration: 0.3 }}
                className="leading-tight font- w-[85%]"
              >
                {faq.question}
              </motion.p>

              {/* Answer */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: 10 }}
                    // transition={{ duration: 0.4 }}
                    className="mt-[15px]"
                  >
                    <p className="text-[13px] font-[400] leading-[152%] text-[#FFFFFFB2]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
