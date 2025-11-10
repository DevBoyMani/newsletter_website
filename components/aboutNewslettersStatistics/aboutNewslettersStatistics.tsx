"use client";

import { motion } from "framer-motion";
import AboutBarChart from "../../components/aboutBarChart/aboutBarChart";

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
    // { id: 2, name: "Long and Short", colorImage: "about/ls.png" },
    { id: 2, name: "Dubai Summary", colorImage: "about/ds-small.png" },
    { id: 3, name: "Movie Suggestions", colorImage: "about/ms.png" },
  ];
  const newslettersLine2 = [
    { id: 4, name: "Presidential Summary", colorImage: "about/ps.png" },
    // { id: 5, name: "Business History", colorImage: "about/bh.png" },
    { id: 5, name: "London Summary", colorImage: "about/las-small.png" },
  ];

  // mobile data
  const newslettersLine = [
    { id: 1, name: "Geopolitical Summary", colorImage: "about/gs.png" },
    // { id: 2, name: "Long and Short", colorImage: "about/ls.png" },
    { id: 2, name: "Dubai Summary", colorImage: "about/ds-small.png" },
    { id: 3, name: "Movie Suggestions", colorImage: "about/ms.png" },
    { id: 4, name: "Presidential Summary", colorImage: "about/ps.png" },
    // { id: 5, name: "Business History", colorImage: "about/bh.png" },
    { id: 5, name: "London Summary", colorImage: "about/las-small.png" },
  ];

  const lines = [
    { text: "Writing a good ", color: "#151515" },
    { text: "newsletter is hard", color: "#151515" },
    { text: "We’ve done it over", color: "#B3B3B3" },
    { text: "1000 times.", color: "#B3B3B3" },
  ];

  const linesMob = [
    { text: "Writing a good ", color: "#151515" },
    { text: "newsletter is hard", color: "#151515" },
    { text: "We’ve done it over", color: "#B3B3B3" },
    { text: "1000 times.", color: "#B3B3B3" },
  ];

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="bg-[#FAFAFA] md:px-28">
          <div className="flex flex-col md:flex-row justify-start items-start py-10">
            {/* left */}
            <motion.div
              className="w-full md:w-1/2 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // triggers when 50% of block is in view
            >
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={textVariants}
                  className="text-[60px] leading-[109.922%] tracking-[-0.6px] font-semibold"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.p>
              ))}
            </motion.div>

            <div className="border-t md:border-l border-black h-auto mx-2 md:mx-6 mt-10 md:mt-0 self-stretch"></div>

            {/* right */}
            <div className="w-full md:w-1/2">
              <div className="pl-14">
                <p className="text-[#151515] text-[24px] md:text-[27px] font-bold leading-[127%]">
                  Average <span className="text-[#B3B3B3]">newsletter</span>
                  <br />
                  <span className="text-[#B3B3B3]">open rates</span> are around
                  <br />
                  <span className="text-[#B3B3B3]">20–25%</span>.
                </p>
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
        <div className="bg-[#FAFAFA] pt-[60px]">
          <motion.div
            className="w-full px-4 pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Trigger again every time it's visible
          >
            {linesMob.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="text-[34px] leading-[109.922%] tracking-[-0.6px] font-semibold"
                style={{ color: line.color }}
              >
                {line.text}
              </motion.p>
            ))}
          </motion.div>

          {/* bottom*/}
          <div className="w-full">
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
