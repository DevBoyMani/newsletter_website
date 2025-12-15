"use client";

import { useState, useMemo } from "react";
import { Pie, PieChart, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

// ✅ Gender chart config (colors you gave)
const chartConfig = {
  male: {
    label: "Male",
    color: "#3C6255",
  },
  female: {
    label: "Female",
    color: "#E5A800",
  },
};

// Fallback data (same structure as your API)
const fallbackGenderData = [
  { gender: "male", totalOpeners: 88054, percentage: 57.95 },
  { gender: "female", totalOpeners: 63885, percentage: 42.04 },
  { gender: "unknown", totalOpeners: 6, percentage: 0 },
];

// Helper: "male" -> "Male"
function titleCase(s) {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

// Custom tooltip (same style as you already use)
function GenderTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const label = item?.name || "—";
  const percentage = item?.payload?.percentage ?? 0;

  return (
    <div className="flex items-center gap-2 rounded-[999px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm shadow-[0px_22px_45px_rgba(15,23,42,0.18)]">
      <span
        className="h-[10px] w-[10px] rounded-[4px]"
        style={{ backgroundColor: item.payload.fill }}
      />
      <span className="font-medium text-[#111827] whitespace-nowrap">
        {label}
      </span>
      <span className="font-semibold text-[#111827]">
        {percentage.toFixed(2)}%
      </span>
    </div>
  );
}

export function Statistics(props) {
  // ✅ expected prop: genderOpeners = [{ gender, totalOpeners, percentage }]
  const { genderOpeners = [] } = props || {};
  const [flipped, setFlipped] = useState(false);

  const data = useMemo(() => {
    const base = genderOpeners?.length ? genderOpeners : fallbackGenderData;

    // ✅ remove unknown (keep this if you want only male/female)
    const cleaned = base.filter(
      (x) => (x.gender || "").toLowerCase() !== "unknown"
    );

    // map to recharts format
    return cleaned.map((item) => {
      const g = (item.gender || "").toLowerCase();
      const fill = chartConfig[g]?.color || "#394E65"; // fallback if something unexpected arrives

      return {
        ...item,
        name: chartConfig[g]?.label || titleCase(item.gender),
        value: item.totalOpeners,
        fill,
      };
    });
  }, [genderOpeners]);

  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block relative w-full h-full flex justify-center items-center ">
        <div
          className="relative w-full h-[365px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-8 rounded-full"
            >
              <img
                src="/advertise/flip-white-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2">
                <div className="text-[18px] text-[#9291A5]">Engagement</div>
                <CardDescription className="text-[22px] text-[#1E1B39] font-bold">
                  Gender distribution
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="w-full h-[200px] px-4"
              >
                <div className="flex justify-center items-center">
                  {/* Pie Chart */}
                  <div>
                    <PieChart width={200} height={200}>
                      <ChartTooltip
                        cursor={false}
                        content={<GenderTooltip />}
                      />
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={0}
                        outerRadius={90}
                      >
                        {data.map((entry, index) => (
                          <Cell key={entry.gender || index} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>

                  {/* List */}
                  <div className="ml-4 space-y-2">
                    {data.map((item, idx) => (
                      <div
                        key={item.gender || idx}
                        className="flex items-center justify-between w-full"
                      >
                        <span
                          className="mr-2 h-[9px] w-[9px] rounded-full"
                          style={{ backgroundColor: item.fill }}
                        />
                        <div className="text-[#1E1B39] text-sm min-w-[120px]">
                          {item.name}
                        </div>
                        <div className="text-sm text-[#515151] w-16 text-right">
                          {item.percentage?.toFixed
                            ? `${item.percentage.toFixed(2)}%`
                            : `${item.percentage}%`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-6 right-8 rounded-full"
            >
              <img
                src="/advertise/flip-green-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[18px] text-[#D3D3D3]">Engagement</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                  Gender distribution
                </CardDescription>
              </div>
            </CardHeader>

            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5] max-w-[550px] text-[20px] pb-4 pt-8">
              This chart shows the gender composition of our readership. It
              helps advertisers understand the balance of male and female
              audiences engaging with our content and align campaigns with who’s
              actually reading.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full h-full flex justify-center items-center ">
        <div
          className="relative w-full h-[215px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6 rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6 rounded-full"
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2">
                <div className="text-[11px] text-[#9291A5]">Engagement</div>
                <CardDescription className="text-[12px] text-[#1E1B39] font-bold">
                  Gender distribution
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <ChartContainer config={chartConfig} className="w-full h-[120px]">
                <div className="flex justify-start items-center -ml-4">
                  {/* Pie Chart */}
                  <div className="m-0 p-0">
                    <PieChart width={140} height={140}>
                      <ChartTooltip
                        cursor={false}
                        content={<GenderTooltip />}
                      />
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={0}
                        outerRadius={60}
                      >
                        {data.map((entry, index) => (
                          <Cell key={entry.gender || index} fill={entry.fill} />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>

                  {/* List */}
                  <div className="w-full space-y-2 mx-2">
                    {data.map((item, idx) => (
                      <div
                        key={item.gender || idx}
                        className="flex items-center"
                      >
                        <span
                          className="mr-2 h-[5px] w-[5px] rounded-full"
                          style={{ backgroundColor: item.fill }}
                        />
                        <div className="text-[#1E1B39] text-[9px] min-w-[70px]">
                          {item.name}
                        </div>
                        <div className="text-[9px] text-[#515151] ml-4">
                          {item.percentage?.toFixed
                            ? `${item.percentage.toFixed(2)}%`
                            : `${item.percentage}%`}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-6 rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-6 rounded-full"
            >
              <img
                src="/advertise/flip-green-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[11px] text-[#D3D3D3]">Engagement</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Gender distribution
                </CardDescription>
              </div>
            </CardHeader>

            <p className="text-[#FAFAFA] font- font-[300px] leading-[1.5] max-w-[550px] text-[11px] pb-4 pt-4">
              This chart shows the gender composition of our readership. It
              helps advertisers understand the balance of male and female
              audiences engaging with our content and align campaigns with who’s
              actually reading.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
