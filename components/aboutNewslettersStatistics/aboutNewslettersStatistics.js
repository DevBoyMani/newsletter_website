"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutBarChart from "../aboutBarChart/aboutBarChart";
import selectedIds from "../../data/selectedWebsites";
const textVariants = {
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

// fixed colors per website_id
const websiteColorMap = {
  1: "#4D3060", // Presidential Summary
  3: "#06266D", // Geopolitical Summary
  7: "#80011F", // Dubai Summary
};

// format total reads into label like "1.5 million"
function formatTotalReadsLabel(totalReads) {
  if (!totalReads || totalReads <= 0) return "0";

  if (totalReads >= 1_000_000) {
    const millions = totalReads / 1_000_000;
    // 1 decimal, e.g. 8.9 million
    return `${millions.toFixed(1)} million`;
  }

  // below 1M, just show exact number with commas
  return totalReads.toLocaleString("en-US");
}

// format total campaigns into label like "3,421"
function formatTotalCampaignsLabel(totalCampaigns) {
  if (!totalCampaigns || totalCampaigns <= 0) return "100"; // fallback
  return totalCampaigns.toLocaleString("en-US");
}

export default function AboutNewslettersStatistics() {
  const [aboutStats, setAboutStats] = useState([]);
  const [totalReadsLabel, setTotalReadsLabel] = useState("1.5 million"); // fallback
  const [totalCampaignsLabel, setTotalCampaignsLabel] = useState("100"); // fallback

  const newsletters = [
    { id: 1, name: "Presidential Summary", colorImage: "about/ps.png" },
    { id: 2, name: "Geopolitical Summary", colorImage: "about/gs.png" },
    { id: 3, name: "Dubai Summary", colorImage: "about/ds-small.png" },
  ];

  // first 3 lines stay static
  const lines = [
    { text: "Writing a good ", color: "#151515" },
    { text: "newsletter is hard", color: "#151515" },
    { text: "We’ve done it over", color: "#B3B3B3" },
  ];

  const linesMob = [
    { text: "Writing a good ", color: "#151515" },
    { text: "newsletter is hard", color: "#151515" },
    { text: "We’ve done it over", color: "#B3B3B3" },
  ];

  // fetch about stats once
  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`/api/about?website_ids=${selectedIds}`);
        if (!res.ok) {
          console.error("About API error:", res.status);
          return;
        }

        const json = await res.json();

        if (Array.isArray(json)) {
          setAboutStats(json);

          // total reads across these websites
          const totalReads = json.reduce(
            (sum, item) => sum + (Number(item.total_reads) || 0),
            0
          );
          setTotalReadsLabel(formatTotalReadsLabel(totalReads));

          // total campaigns across these websites
          const totalCampaigns = json.reduce(
            (sum, item) => sum + (Number(item.campaigns_count) || 0),
            0
          );
          setTotalCampaignsLabel(formatTotalCampaignsLabel(totalCampaigns));
        }
      } catch (err) {
        console.error("Error fetching about stats:", err);
      }
    }

    fetchStats();
  }, []);

  // build chart data from aboutStats
  const chartData = Array.isArray(aboutStats)
    ? aboutStats.map((item) => ({
        website_id: item.website_id,
        name: item.website_name || `Website ${item.website_id}`,
        value: Number(item.average_open_rate || 0),
      }))
    : [];

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="bg-[#FAFAFA] md:px-28">
          <div className="flex flex-col md:flex-row justify-start items-start pb-10 pt-[164px]">
            {/* left */}
            <motion.div
              className="w-full md:w-1/2 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
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

              {/* dynamic 4th line */}
              <motion.p
                custom={lines.length}
                variants={textVariants}
                className="text-[60px] leading-[109.922%] tracking-[-0.6px] font-semibold"
                style={{ color: "#B3B3B3" }}
              >
                {` ${totalCampaignsLabel} times.`}
              </motion.p>
            </motion.div>

            <div className="border-t md:border-l border-black h-auto mx-2 md:mx-6 mt-10 md:mt-0 self-stretch"></div>

            {/* right */}
            <div className="w-full md:w-1/2">
              <div className="pl-14">
                <p className="text-[#151515] text-[24px] md:text-[27px] font-bold leading-[127%]">
                  Our emails have been
                  <br />
                  read
                  <span className="text-[#B3B3B3]">
                    {" "}
                    over {totalReadsLabel}
                  </span>
                  <br />
                  times.
                </p>
              </div>

              <div className="flex space-x-7 mt-6 pl-14">
                {newsletters.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2 ">
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

              <div className="py-10">
                <AboutBarChart
                  data={chartData}
                  websiteColorMap={websiteColorMap}
                />
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
            viewport={{ once: true, amount: 0.5 }}
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

            {/* dynamic 4th line (mobile) */}
            <motion.p
              custom={linesMob.length}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="text-[34px] leading-[109.922%] tracking-[-0.6px] font-semibold"
              style={{ color: "#B3B3B3" }}
            >
              {` ${totalCampaignsLabel} times.`}
            </motion.p>
          </motion.div>

          {/* bottom*/}
          <div className="w-full">
            <div className="px-4">
              <div className="grid grid-cols-2 gap-2 ">
                {newsletters.map((item) => (
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
              <AboutBarChart
                data={chartData}
                websiteColorMap={websiteColorMap}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
