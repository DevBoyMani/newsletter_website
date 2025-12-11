"use client";

import { useState, useMemo } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const chartConfig = {
  opens: {
    label: "Opens",
    color: "#657C75",
  },
};

// Bubble tooltip (same style as subscribers)
function OpensTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  const value = payload[0]?.value ?? 0;
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex items-stretch gap-3 text-sm">
      <div className="w-[3px] rounded-full bg-[#01261E]" />
      <div className="flex flex-col gap-1">
        <div className="font-medium text-[#111827]">{label}</div>
        <div className="font-semibold text-[#111827]">{formatted}</div>
      </div>
    </div>
  );
}

export function ActiveUsers(props) {
  const { opensMonthly = [] } = props || {};
  const [flipped, setFlipped] = useState(false);

  const chartData = useMemo(
    () =>
      opensMonthly.map((item) => {
        const d = new Date(item.month);
        const monthLabel = isNaN(d.getTime())
          ? item.month
          : d.toLocaleString("en-US", { month: "short" });

        return {
          month: monthLabel,
          opens: item.count,
        };
      }),
    [opensMonthly]
  );

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
          <Card className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8">
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
                <CardDescription className="text-[22px] font-bold text-[#1E1B39] mt-0">
                  Number of emails opened
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="w-full h-[200px]">
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 40, // ⬅️ more room for Y-axis labels
                    right: 12,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="areaGradientOpens"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#657C75"
                        stopOpacity="0.58"
                      />
                      <stop offset="100%" stopColor="#657C75" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={true} />

                  <YAxis
                    width={35}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#515151", fontSize: 12 }}
                    domain={["auto", "auto"]}
                    tickFormatter={(value) =>
                      new Intl.NumberFormat("en-US", {
                        maximumFractionDigits: 0,
                      }).format(value)
                    }
                  />

                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />

                  <ChartTooltip cursor={false} content={<OpensTooltip />} />

                  <Area
                    dataKey="opens"
                    type="linear"
                    fill="url(#areaGradientOpens)"
                    stroke="#657C75"
                    strokeWidth={4}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-8"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-6 right-8  rounded-full "
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
                  Number of emails opened
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              This chart reflects how many newsletters are actively opened by
              readers. It shows how many people choose to read and interact with
              our content. For advertisers, this translates directly into the
              number of eyes on your campaign and the genuine reach of each
              placement.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full h-full flex justify-center items-center mt-4">
        <div
          className="relative w-full h-[215px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <Card className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6">
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6 rounded-full "
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>
            <CardHeader className="p-0">
              <div className="w-full border-b border-[#515151] pb-2">
                <div className="text-[11px] text-[#9291A5]">Audience</div>
                <CardDescription className="text-[12px] font-bold text-[#1E1B39] mt-0">
                  Number of emails opened
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[120px] px-0 pt-4"
              >
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 40,
                    right: 12,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="areaGradientOpensMobile"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#657C75"
                        stopOpacity="0.58"
                      />
                      <stop offset="100%" stopColor="#657C75" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={true} />

                  <YAxis
                    width={35}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#515151", fontSize: 12 }}
                    domain={["auto", "auto"]}
                    tickFormatter={(value) =>
                      new Intl.NumberFormat("en-US", {
                        maximumFractionDigits: 0,
                      }).format(value)
                    }
                  />

                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: "#515151", fontSize: 8, fontWeight: 400 }}
                  />

                  <ChartTooltip cursor={false} content={<OpensTooltip />} />

                  <Area
                    dataKey="opens"
                    type="linear"
                    fill="url(#areaGradientOpensMobile)"
                    stroke="#657C75"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-6"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-6  rounded-full "
            >
              <img
                src="/advertise/flip-green-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[11px] text-[#D3D3D3]">Audience</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Number of emails opened
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[11px] pb-4 pt-4">
              This chart reflects how many newsletters are actively opened by
              readers. It shows how many people choose to read and interact with
              our content. For advertisers, this translates directly into the
              number of eyes on your campaign and the genuine reach of each
              placement.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
