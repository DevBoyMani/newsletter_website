"use client";

import { motion } from "framer-motion";
import { AboutBarChart } from "../aboutBarChart/aboutBarChart";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutNewslettersStatistics() {
  const newslettersLine1 = [
    { id: 1, name: "Geopolitical Summary", colorImage: "about/gs.png" },
    { id: 2, name: "Long and Short", colorImage: "about/ls.png" },
    { id: 3, name: "Movie Suggestions", colorImage: "about/ms.png" },
  ];
  const newslettersLine2 = [
    { id: 4, name: "Presidential Summary", colorImage: "about/ps.png" },
    { id: 5, name: "Business History", colorImage: "about/bh.png" },
  ];

  // mobile data
  const newslettersLine = [
    { id: 1, name: "Geopolitical Summary", colorImage: "about/gs.png" },
    { id: 2, name: "Long and Short", colorImage: "about/ls.png" },
    { id: 3, name: "Movie Suggestions", colorImage: "about/ms.png" },
    { id: 4, name: "Presidential Summary", colorImage: "about/ps.png" },
    { id: 5, name: "Business History", colorImage: "about/bh.png" },
  ];

  const lines = [
    { text: "Writing awesome", color: "#151515" },
    { text: "newsletters is hard.", color: "#151515" },
    { text: "We’ve done it over", color: "#B3B3B3" },
    { text: "600 times.", color: "#B3B3B3" },
  ];

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="bg-[#FAFAFA] md:px-28">
          <div className="flex flex-col md:flex-row justify-start items-start py-10">
            {/* left */}
            {/* <div className="w-full md:w-1/2 mb-8">
              <h1 className="text-[#151515] text-[48px] md:text-[60px] leading-[109.922%] tracking-[-0.6px] font-semibold">
                Writing awesome
                <br />
                newsletters is hard.
                <br />
              </h1>
              <h1 className="text-[#B3B3B3] text-[48px] md:text-[60px] leading-[109.922%] tracking-[-0.6px] font-semibold">
                We’ve done it over
                <br />
                600 times.
              </h1>
            </div> */}

            <motion.div
              className="w-full md:w-1/2 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% of block is in view
            >
              {lines.map((line, i) => (
                <motion.h1
                  key={i}
                  custom={i}
                  variants={textVariants}
                  className="text-[60px] leading-[109.922%] tracking-[-0.6px] font-semibold"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.h1>
              ))}
            </motion.div>

            <div className="border-t md:border-l border-black h-auto mx-2 md:mx-6 mt-10 md:mt-0 self-stretch"></div>

            {/* right */}
            <div className="w-full md:w-1/2">
              <div className="pl-14">
                <h4 className="text-[#151515] text-[24px] md:text-[27px] font-bold leading-[127%]">
                  Newsletter <span className="text-[#B3B3B3]">emails</span>
                  <br />
                  <span className="text-[#B3B3B3]">average</span> 20–25% open
                  <br />
                  rates{" "}
                  <span className="text-[#B3B3B3]">across industries.</span>
                </h4>
              </div>

              <div className="flex space-x-7 mt-6 pl-14">
                {newslettersLine1.map((item) => (
                  <div key={item.id} className="flex  items-center space-x-2 ">
                    <img
                      src={item.colorImage}
                      alt={item.name}
                      className="w-2 h-2 object-contain"
                    />
                    <p className="text-[14px] font-[600] text-[#151515] leading-[109.922%]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex space-x-7 mt-2 pl-14">
                {newslettersLine2.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-2 mr-0.5"
                  >
                    <img
                      src={item.colorImage}
                      alt={item.name}
                      className="w-2 h-2 object-contain"
                    />
                    <p className="text-sm text-[#151515] font-[600] leading-[109.922%]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="py-10">
                <AboutBarChart />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="bg-[#FAFAFA] md:px-28 pt-[24px]">
          {/*top*/}
          {/* <div className="w-full px-4 py-6">
            <h1 className="text-[#151515] text-[34px] leading-[109.922%] tracking-[-0.6px] font-semibold">
              Writing awesome
              <br />
              newsletters is hard.
              <br />
            </h1>
            <h1 className="text-[#B3B3B3] text-[34px] leading-[109.922%] tracking-[-0.6px] font-semibold">
              We’ve done it over
              <br />
              600 times.
            </h1>
          </div> */}

          <motion.div
            className="w-full px-4 py-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // triggers when 50% of block is in view
          >
            {lines.map((line, i) => (
              <motion.h1
                key={i}
                custom={i}
                variants={textVariants}
                className="text-[34px] leading-[109.922%] tracking-[-0.6px] font-semibold"
                style={{ color: line.color }}
              >
                {line.text}
              </motion.h1>
            ))}
          </motion.div>

          {/* <div className="border-t md:border-l border-black h-auto mx-2 md:mx-6 mt-10 md:mt-0 self-stretch"></div> */}

          {/* bottom*/}
          <div className="w-full">
            {/* <div className="flex space-x-7 mt-6 pl-14">
                        {newslettersLine1.map((item) => (
                            <div key={item.id} className="flex  items-center space-x-2 ">
                                <img
                                    src={item.colorImage}
                                    alt={item.name}
                                    className="w-2 h-2 object-contain"
                                />
                                <p className="text-[14px] font-[600] text-[#151515] leading-[109.922%]">{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex space-x-7 mt-2 pl-14">
                        {newslettersLine2.map((item) => (
                            <div key={item.id} className="flex items-center space-x-2 mr-0.5">
                                <img
                                    src={item.colorImage}
                                    alt={item.name}
                                    className="w-2 h-2 object-contain"
                                />
                                <p className="text-sm text-[#151515] font-[600] leading-[109.922%]">{item.name}</p>
                            </div>
                        ))}
                    </div> */}

            <div className="px-4">
              <div className="grid grid-cols-2 gap-2 ">
                {newslettersLine.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <img
                      src={item.colorImage}
                      alt={item.name}
                      className="w-2 h-2 object-contain"
                    />
                    <p className="text-[14px] font-[600] text-[#151515] leading-[109.922%]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-10">
              <AboutBarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
