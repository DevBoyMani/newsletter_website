"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [
  {
    id: 1,
    question: "After project completion, who owns the intellectual property?",
    answer:
      "We recognize the significance of intellectual property rights and their role in fostering innovation and creativity. As such, once a work-for-hire project is completed and all obligations are fulfilled, the intellectual property typically transfers to you, the client. This ensures that you hold the reins to the work we’ve created together, empowering. We recognize the significance of intellectual property rights and their role in fostering innovation and creativity. As such, once a work-for-hire project is completed and all obligations are fulfilled, the intellectual property typically transfers to you, the client. This ensures that you hold the reins to the work we’ve created together, empowering.",
  },
  {
    id: 2,
    question:
      "What measures does Sagravia take to ensure the excellence of its output?",
    answer: "We follow a rigorous QA process, maintain open communication, and iterate based on feedback.",
  },
  {
    id: 3,
    question: "Can you support my B2B / Enterprise software needs?",
    answer: "Yes, we specialize in scalable and secure enterprise-grade solutions tailored to your business.",
  },
  {
    id: 4,
    question: "How much does hiring you for a project cost?",
    answer: "Our pricing depends on project scope, timeline, and complexity. Contact us for a custom quote.",
  },
];

export default function AdvertiseNewFaq(){
     const [activeId, setActiveId] = useState();
    return(
        <>
        <div className="bg-[#FAFAFA] md:px-28 py-10">
            <div className="flex justify-between ">
                    <div className="text-[#01261E] w-[40%] text-[56px] font-[GT-Super-Ds-Trial] font-[400] leading-[111%]">Frequently Asked Questions</div>
                    <div className="mt-16 w-[27%]">Find answers to common questions about our services, project process, and technical expertise</div>
            </div>
            <div className="py-10 flex justify-center items-start gap-6 px-8 py-16 bg-[#f9f9f9]">
        {faqs.map((faq) => {
            const isActive = activeId === faq.id;

            return (
            <motion.div
                key={faq.id}
                onMouseEnter={() => setActiveId(faq.id)}
                className={`relative rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 ${
                isActive ? "bg-[#00261E] text-white" : "bg-white text-[#7F8382] p-6"
                }`}
                style={{
                width: isActive ? 407 : 254,
                height: 451,
                padding: 24,
                }}
            >
                {/* Question - animates from bottom to top */}
                <motion.div
                initial={false}
                animate={{ top: isActive ? 24 : 200 }}
                transition={{ duration: 0.4 }}
                className="absolute left-6 right-6"
                >
                <motion.h3
                    initial={false}
                    animate={{
                    fontSize: isActive ? "30px" : "27px",
                    fontWeight: isActive ? 400 : 500,
                    padding:isActive ? 4:4,
                    width: isActive ? "50%" : "50%",
                    
                    
                    }}
                    transition={{ duration: 0.4 }}
                >
                    {faq.question}
                </motion.h3>
                </motion.div>

                {/* Answer appears below when active */}
                
                {isActive && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-6 right-6 top-[300px]"
                >
                    <p className="text-[13px] font-[400] leading-[152%] text-[#FFFFFFB2]">{faq.answer}</p>
                </motion.div>
                )}
            </motion.div>
        
            );
        })}
            </div>
        </div>
        </>
    )
}