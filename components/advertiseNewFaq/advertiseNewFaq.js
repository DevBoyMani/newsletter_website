"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Can I sponsor multiple newsletters at once?",
    answer:
      "Yes. Most advertisers do. We operate multiple newsletters across business, geopolitics, current affairs, movies, and city-focused audiences. You can sponsor one or bundle several depending on your campaign goals. Multi-newsletter buys often get priority placement and better pricing.",
  },
  {
    id: 2,
    question: "Do you help with ad copy and design?",
    answer:
      "Yes. We know our audience better than any external copywriter. We help write or refine your copy, suggest hooks, and optimize for clicks. If you don’t have creatives, we can also design a clean visual asset that matches the newsletter style.",
  },
  {
    id: 3,
    question: "Can I include a tracking link or UTM parameters?",
    answer:
      "Absolutely. We encourage tracking links and UTM parameters, and we can even generate them for you so you can measure performance in Google Analytics, HubSpot, or whatever dashboard you worship. After the campaign, we send a performance report that includes impressions (send count), opens, clicks, and CTR so you know exactly how your ad performed.",
  },
  {
    id: 4,
    question: "Do you guarantee results?",
    answer:
      "We guarantee visibility, not specific outcomes. Your brand will be placed in front of a highly engaged audience with strong attention and high intent. However, the number of clicks or conversions ultimately depends on your offer, landing page experience, and timing. We operate with transparency, not unrealistic promises.",
  },
];

export default function AdvertiseNewFaq() {
  const [activeId, setActiveId] = useState(faqs[0]?.id);

  const handleCardClick = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#FAFAFA] md:px-28 pb-[147px] pt-[73px] hidden lg:block">
      {/* Top section */}
      <div className="flex justify-between">
        <h2 className="text-[#01261E] w-[40%] text-[56px]  font-[400] leading-[111%] ">
          Frequently Asked Questions
        </h2>
        <div className="mt-16 text-right w-[290px]">
          Got questions about how we work, who we reach, or how to advertise
          with us? You’ll find the answers here.
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="flex items-start gap-6 pt-24 bg-[#f9f9f9]">
        {faqs.map((faq) => {
          const isActive = activeId === faq.id;

          return (
            <motion.div
              key={faq.id}
              layout
              onClick={() => handleCardClick(faq.id)}
              className={`relative rounded-[25px] cursor-pointer overflow-hidden flex-shrink-0 flex flex-col transition-colors duration-300 ${
                isActive ? "bg-[#00261E] text-white" : "bg-white text-[#7F8382]"
              }`}
              style={{
                width: isActive ? "33.5%" : "21%",
                height: 451,
              }}
            >
              {/* Inner wrapper to control padding without jump */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
                className="flex flex-col justify-end"
                style={{
                  padding: isActive
                    ? "66px 40px 35px 40px"
                    : "40px 40px 25px 40px",
                }}
              >
                {/* Question */}
                <motion.p
                  layout="position"
                  animate={{
                    fontSize: isActive ? "30px" : "27px",
                  }}
                  transition={{ duration: 0.25 }}
                  className="leading-tight w-[85%]"
                >
                  {faq.question}
                </motion.p>

                {/* Answer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, y: 30 }} // starts lower, so animation goes upward (smooth)
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.3 }}
                      className="mt-[15px]"
                    >
                      <p className="text-[13px] font-[400] leading-[152%] text-[#FFFFFFB2]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
