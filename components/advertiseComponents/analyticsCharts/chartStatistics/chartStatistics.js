"use client";

import { useState, useMemo } from "react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

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

// Geo-style pill tooltip, but for gender
function GenderTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const name = item.name;
  const slicePayload = item.payload || {};
  const percentage = slicePayload.percentage ?? "";

  return (
    <div className="flex items-center gap-2 rounded-[999px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm shadow-[0px_22px_45px_rgba(15,23,42,0.18)]">
      <span
        className="h-[10px] w-[10px] rounded-[4px]"
        style={{ backgroundColor: slicePayload.fill || "#394E65" }}
      />
      <span className="font-medium text-[#111827] whitespace-nowrap">
        {name}
      </span>
      {/* show only percentage, no raw totalOpeners */}
      {percentage && (
        <span className="font-semibold text-[#111827]">{percentage}</span>
      )}
    </div>
  );
}

export function Statistics(props) {
  const { opensByGender = [] } = props || {};
  const [flipped, setFlipped] = useState(false);

  const chartData = useMemo(() => {
    return opensByGender
      .filter((g) => g.gender === "male" || g.gender === "female")
      .map((g) => {
        const isMale = g.gender === "male";
        return {
          name: isMale ? "Male" : "Female",
          key: isMale ? "male" : "female",
          // Used only for slice size, never displayed
          value: g.totalOpeners,
          percentage: `${g.percentage.toFixed(2)}%`,
          fill: isMale ? "#3C6255" : "#E5A800",
        };
      });
  }, [opensByGender]);

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
          {/* Front */}
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-8 rounded-full "
            >
              <img
                src="/advertise/flip-white-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>

            <CardHeader className="p-0">
              <div className="w-full border-b border-[#515151] pb-2">
                <div className="text-[18px] text-[#9291A5]">Audience</div>
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
                  {/* Pie */}
                  <div>
                    <PieChart width={200} height={200}>
                      <ChartTooltip
                        cursor={false}
                        content={<GenderTooltip />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        strokeWidth={0}
                      />
                    </PieChart>
                  </div>

                  {/* Legend */}
                  <div className="ml-6 space-y-3">
                    {chartData.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between w-full gap-4"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-block w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.fill }}
                          />
                          <span className="text-[#1E1B39] text-sm">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-sm text-[#9291A5]">
                          {item.percentage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-6 right-8 rounded-full "
            >
              <img
                src="/advertise/flip-green-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[18px] text-[#D3D3D3]">Audience</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                  Gender distribution
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font-[400] leading-[1.5] max-w-[550px] text-[20px] pb-4 pt-8">
              This chart shows the gender composition of our readership. It
              helps advertisers understand the balance of male and female
              audiences engaging with our content and align campaigns with who’s
              actually reading.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full flex justify-center items-center">
        <div
          className="relative w-full h-[215px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front */}
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6 rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6"
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2 w-full">
                <div className="text-[11px] text-[#9291A5]">Audience</div>
                <div className="flex flex-wrap items-center justify-start mt-0">
                  <CardDescription className="text-[12px] text-[#1E1B39] font-bold">
                    Gender distribution
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 pt-2">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[120px] sm:h-[100px] px-0"
              >
                <div className="flex justify-start items-center -ml-2">
                  {/* Pie */}
                  <div>
                    <PieChart width={140} height={140}>
                      <ChartTooltip
                        cursor={false}
                        content={<GenderTooltip />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        strokeWidth={0}
                      />
                    </PieChart>
                  </div>

                  {/* Legend */}
                  <div className="w-full space-y-2 mx-2">
                    {chartData.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-start gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.fill }}
                          />
                          <span className="text-[#1E1B39] text-[9px]">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[9px] text-[#9291A5]">
                          {item.percentage}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-6 rounded-xl shadow-md rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-6 rounded-full "
            >
              <img
                src="/advertise/flip-green-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-white pb-2">
                <div className="text-[11px] text-[#D3D3D3]">Audience</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Gender distribution
                </CardDescription>
              </div>
            </CardHeader>

            <div className="text-[#FAFAFA] text-[11px] pt-4 leading-snug font-light">
              This chart shows the gender composition of our readership. It
              helps advertisers understand who engages with our content and tune
              campaigns for better resonance.
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
