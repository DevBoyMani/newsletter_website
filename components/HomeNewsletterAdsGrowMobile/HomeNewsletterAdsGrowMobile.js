"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardDataMobile = [
  {
    id: 1,
    image: "/home/mobile/peoples-mobile.webp",
    icon: "/home/reach-everyone-logo.png",
    title: "Reach everyone the same day",
    description: (
      <>
        When a newsletter goes out, it lands directly in thousands of inboxes
        instantly. <strong>Your message arrives. People read it</strong>.
        Simple.
      </>
    ),
    imgPosition: "right",
  },
  {
    id: 2,
    image: "/home/mobile/rect-1-mobile.webp",
    icon: "/home/ad-blocker-red.png",
    title: "Ad blockers don’t stop email ads",
    description: (
      <>
        Ad blockers are designed to stop ads on websites, but{" "}
        <strong>they don’t work on emails</strong>.
      </>
    ),
  },
  {
    id: 3,
    image: "/home/mobile/rect-2-mobile.webp",
    icon: "/home/ad.png",
    title: "No banner blindness",
    description: (
      <>
        Newsletter ads appear inside the reading flow, where{" "}
        <strong>attention is already present</strong>.
      </>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HomeNewsletterAdsGrowMobile() {
  return (
    <div className="block lg:hidden bg-[#FAFAFA] pb-[30px]">
      <div className="text-center pt-[60px] pb-[40px]">
        <h3 className="font-[Manrope] text-[#000] text-[24px] font-[400] leading-[28px] tracking-[-0.24px]">
          Why brands use
          <br /> newsletter ads to grow
        </h3>
      </div>

      <div className="px-4">
        {cardDataMobile.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-[5px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden mb-[30px]"
          >
            {/* Reserve image space to avoid CLS */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="100vw"
                // only the first above-the-fold image should be priority
                priority={index === 0}
              />
            </div>

            <div className="pt-[25px] pb-[16px] px-[16px]">
              <div className="flex items-start">
                <Image src={card.icon} alt="" width={20} height={20} />
                <p className="pl-[16px] text-[16px] font-[400] text-[#000]">
                  {card.title}
                </p>
              </div>
              <p className="pt-[15px] text-[#878C91] text-[14px] font-[500] leading-[22.4px]">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
