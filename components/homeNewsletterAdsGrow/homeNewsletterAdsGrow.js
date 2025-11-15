"use client";

import { motion } from "framer-motion";
export default function HomeNewsletterAdsGrow() {
  const cardDataMobile = [
    {
      id: 1,
      image: "/home/peoples-mobile.png",
      icon: "/home/reach-everyone-logo.png",
      title: "Reach everyone the same day",
      description: (
        <>
          When a newsletter goes out, it lands directly in thousands of inboxes
          instantly. No waiting for social media algorithms or hoping people are
          online at the right time.{" "}
          <strong>Your message arrives. People read it</strong>. Simple.
        </>
      ),
      imgPosition: "right",
    },
    {
      id: 2,
      image: "/home/rect-1-mobile.png",
      icon: "/home/ad-blocker-red.png",
      title: "Ad blockers don’t stop email ads",
      description: (
        <>
          Ad blockers are designed to stop ads on websites, but{" "}
          <strong>they don’t work on emails</strong>. When someone subscribes to
          a newsletter, your message arrives as part of the content they asked
          to receive.
        </>
      ),
    },
    {
      id: 3,
      image: "/home/rect-2-mobile.png",
      icon: "/home/ad.png",
      title: "No banner blindness",
      description: (
        <>
          People have trained themselves to ignore online ads and this is called
          banner blindness. Newsletter ads appear inside the reading flow, where
          <strong>attention is already present</strong>, so they actually get
          noticed.
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
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="py-[70px] px-[118px]">
          <div className="mx-auto text-center ">
            <h3 className="font-[Manrope] text-[#000] text-[24px] font-[400] leading-[24px] tracking-[-0.24px] ">
              Why brands use newsletter ads to grow
            </h3>
          </div>
          {/* 1 */}
          <div className="py-[40px]">
            <div className="flex rounded-[12px] bg-[#fff] h-[220px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
              <div className="pl-[30px] pt-[54px] pb-[52px] w-[50%]">
                <div className="flex">
                  <img
                    src="/home/reach-everyone-logo.png"
                    alt="peoples"
                    className="w-6 h-6"
                  />
                  <p className="pl-4 text-[18px] font-[400] leading-normal tracking-[0.2px]">
                    Reach everyone the same day
                  </p>
                </div>
                <p className="w-[85%] pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                  When a newsletter goes out, it lands directly in thousands of
                  inboxes instantly. No waiting for social media algorithms or
                  hoping people are online at the right time.{" "}
                  <strong>Your message arrives. People read it</strong>. Simple.
                </p>
              </div>
              <div className="w-[50%]">
                <div className="absolute right-[18%]">
                  <img
                    src="/home/peoples.png"
                    alt="peoples"
                    className="h-[220px] "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex space-x-[40px]">
            {/* Left Card */}

            <div className="w-1/2">
              <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="/home/rect-1.png"
                  alt="ad blocker"
                  className="w-full object-cover"
                />
                <div className="p-[25px]">
                  <div className="flex items-center">
                    <img
                      src="/home/ad-blocker-red.png"
                      alt="icon"
                      className="w-6 h-6"
                    />
                    <p className="pl-4 text-[#000] text-[18px] font-[400] tracking-[0.2px]">
                      Ad blockers don’t stop email ads
                    </p>
                  </div>
                  <p className="pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                    Ad blockers are designed to stop ads on websites, but{" "}
                    <strong>they don’t work on emails</strong>. When someone
                    subscribes to a newsletter, your message arrives as part of
                    the content they asked to receive.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            {/* w-1/2 */}
            <div className="w-1/2">
              <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="/home/rect-2.png"
                  alt="newsletter reach"
                  className="w-full object-cover"
                />
                <div className="p-[25px]">
                  <div className="flex items-center">
                    <img src="/home/ad.png" alt="icon" className="w-6 h-6" />
                    <p className="pl-4 text-[#000] text-[18px] font-[400] tracking-[0.2px]">
                      No banner blindness
                    </p>
                  </div>
                  <p className="pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                    People have trained themselves to ignore online ads and this
                    is called banner blindness. Newsletter ads appear inside the
                    reading flow, where{" "}
                    <strong>attention is already present</strong>, so they
                    actually get noticed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  mobile */}
      <div className="block lg:hidden bg-[#FAFAFA] pb-[30px]">
        <div className="">
          {/* Heading */}
          <div className="text-center pt-[60px] pb-[40px]">
            <h3 className="font-[Manrope] text-[#000] text-[24px] font-[400] leading-[28px] tracking-[-0.24px] text-center">
              Why brands use
              <br /> newsletter ads to grow
            </h3>
          </div>
          {/* cards */}
          <div className="px-4">
            {cardDataMobile.map((card, index) => (
              <motion.div
                key={card.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-[5px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden mb-[30px] cursor-default"
              >
                {/* Image Section */}
                <div
                  className={`${
                    card.imgPosition === "right"
                      ? "flex justify-end items-center"
                      : ""
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="pt-[25px] pb-[16px] px-[16px]">
                  <div className="flex items-start">
                    <img src={card.icon} alt="icon" className="w-5 h-5" />
                    <p className="pl-[16px] text-[16px] font-[400] leading-normal tracking-[0.2px] text-[#000]">
                      {card.title}
                    </p>
                  </div>
                  <p className="pt-[15px] text-[#878C91] text-[14px] font-[500] leading-[22.4px] tracking-[0.2px]">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
