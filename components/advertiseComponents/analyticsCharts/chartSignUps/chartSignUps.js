"use client";

import { useState, useMemo } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

const chartConfig = {
  lastMonth: {
    label: "Last Month",
    color: "#657C75",
  },
  thisMonth: {
    label: "This Month",
    color: "#E19F20",
  },
};

// Format y-axis values with commas
const formatNumber = (value) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

// Bubble tooltip
function ClickTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  const labelMap = {
    lastMonth: "Last Month",
    thisMonth: "This Month",
  };

  const rows = payload.map((item) => {
    const key = item.dataKey || item.name;
    const labelText = labelMap[key] || key;
    const value = formatNumber(item.value || 0);

    return {
      id: key,
      label: labelText,
      color: item.color || "#657C75",
      value,
    };
  });

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex flex-col gap-2 text-sm">
      {/* Top: week label */}
      <div className="font-medium text-[#111827]">{label}</div>

      {/* Rows for each series */}
      <div className="flex flex-col gap-1">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-2">
            <span
              className="h-[10px] w-[10px] rounded-[4px]"
              style={{ backgroundColor: row.color }}
            />
            <span className="text-[#6B7280]">{row.label}</span>
            <span className="font-semibold text-[#111827]">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SignInUps(props) {
  const { adClickActivity = [] } = props || {};
  const [flipped, setFlipped] = useState(false);

  // Shape incoming API data
  const chartData = useMemo(
    () =>
      adClickActivity.map((item) => ({
        week: item.week,
        lastMonth: item.lastMonth,
        thisMonth: item.thisMonth,
      })),
    [adClickActivity]
  );

  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block relative w-full h-full flex justify-center items-center ">
        {/* 3D Perspective Container */}
        <div
          className="relative w-full h-[365px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front */}
          <Card className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]">
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
                <div className="text-[18px] text-[#9291A5]">Campaigns</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start">
                    <CardDescription className="text-[22px] font-bold text-[#1E1B39]">
                      Ad clicks
                    </CardDescription>
                    <div className="ml-4 ">
                      <h5 className="text-sm text-[#9291A5]">past 30 days</h5>
                    </div>
                  </div>
                  <div className="flex mr-8 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <img
                        src="/advertise/chart-canada.png"
                        alt="Last Month"
                        className="w-2 h-2"
                      />
                      <span className="text-[18px]">Last Month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/advertise/chart-uk.png"
                        alt="This Month"
                        className="w-2 h-2"
                      />
                      <span className="text-[18px]">This Month</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="w-full h-[250px] pt-5"
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 40, // extra space so Y-axis labels don't get cut
                    right: 20,
                    top: 10,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <YAxis
                    width={40}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#515151", fontSize: 12 }}
                    tickFormatter={formatNumber}
                    domain={["auto", "auto"]}
                  />
                  <XAxis
                    dataKey="week"
                    tickLine={true}
                    axisLine={true}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 6)}
                  />
                  <ChartTooltip cursor={false} content={<ClickTooltip />} />
                  <Line
                    dataKey="lastMonth"
                    type="linear"
                    stroke="#657C75"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="thisMonth"
                    type="linear"
                    stroke="#E19F20"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
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
                <div className="text-[18px] text-[#D3D3D3]">Campaigns</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                  Ad click activity
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              This chart measures how many readers interact directly with
              advertisements by clicking through. It reflects engagement beyond
              impressions; a key metric for evaluating campaign effectiveness
              and reader interest. For advertisers, strong click activity means
              your placements don’t just reach an audience, they motivate action
              and deliver measurable results.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full h-full flex justify-center items-center">
        {/* 3D Perspective Container */}
        <div
          className="relative w-full h-[215px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front */}
          <Card className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6 rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]">
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
                <div className="text-[11px] text-[#9291A5]">Campaigns</div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center justify-start">
                    <CardDescription className="text-[12px] font-bold text-[#1E1B39]">
                      Ad click activity
                    </CardDescription>
                    <div className="ml-4 ">
                      <p className="text-[8px] text-[#9291A5]">past 30 days</p>
                    </div>
                  </div>
                  <div className="flex mr-0 gap-2 text-sm ml-2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/advertise/chart-canada.png"
                        alt="Last Month"
                        className="w-[5px] h-[5px]"
                      />
                      <span className="text-[8px]">Last Month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/advertise/chart-uk.png"
                        alt="This Month"
                        className="w-[5px] h-[5px]"
                      />
                      <span className="text-[8px]">This Month</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 ">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[140px] px-0 pt-4"
              >
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 36,
                    right: 16,
                    top: 8,
                    bottom: 8,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <YAxis
                    width={32}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#515151", fontSize: 10 }}
                    tickFormatter={formatNumber}
                    domain={["auto", "auto"]}
                  />
                  <XAxis
                    dataKey="week"
                    tickLine={true}
                    axisLine={true}
                    tickMargin={6}
                    tickFormatter={(value) => value.slice(0, 6)}
                    tick={{ fill: "#515151", fontSize: 10 }}
                  />
                  <ChartTooltip cursor={false} content={<ClickTooltip />} />
                  <Line
                    dataKey="lastMonth"
                    type="linear"
                    stroke="#657C75"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    dataKey="thisMonth"
                    type="linear"
                    stroke="#E19F20"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back */}
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
                <div className="text-[11px] text-[#D3D3D3]">Campaigns</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Ad click activity
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[11px] pb-4 pt-4">
              This chart measures how many readers interact directly with
              advertisements by clicking through. It reflects engagement beyond
              impressions; a key metric for evaluating campaign effectiveness
              and reader interest. For advertisers, strong click activity means
              your placements don’t just reach an audience, they motivate action
              and deliver measurable results.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
