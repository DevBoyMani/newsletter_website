"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CareersCardItem = ({ item, index }) => (
  <motion.div
    key={item.id}
    className="border p-5 rounded-lg bg-[#B6B6B633]"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <img src={item.logo} alt={item.heading} className="w-12 h-12 mb-3" />
    <h3 className="text-[#000] text-[20px] font-[400] mb-4 leading-[128%]">
      {item.heading}
    </h3>
    <p className="text-[#000] text-[16px] font-[400] leading-[149%]">
      {item.content}
    </p>
  </motion.div>
);

export default CareersCardItem;
