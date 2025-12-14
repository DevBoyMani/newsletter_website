"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export const description = "Monthly number of emails opened.";

// Static mock of opensMonthly from API
// const opensMonthly = [
//   {
//     month: "2024-12-01",
//     count: 15705,
//   },
//   {
//     month: "2025-01-01",
//     count: 39388,
//   },
//   {
//     month: "2025-02-01",
//     count: 108552,
//   },
//   {
//     month: "2025-03-01",
//     count: 116890,
//   },
//   {
//     month: "2025-04-01",
//     count: 118544,
//   },
//   {
//     month: "2025-05-01",
//     count: 216724,
//   },
//   {
//     month: "2025-06-01",
//     count: 605878,
//   },
//   {
//     month: "2025-07-01",
//     count: 1077573,
//   },
//   {
//     month: "2025-08-01",
//     count: 1217735,
//   },
//   {
//     month: "2025-09-01",
//     count: 1445221,
//   },
//   {
//     month: "2025-10-01",
//     count: 1619861,
//   },
//   {
//     month: "2025-11-01",
//     count: 2334333,
//   },
// ];

// Convert "2025-01-01" → "Jan 25"
function formatMonthLabel(monthStr) {
  const d = new Date(monthStr);
  if (Number.isNaN(d.getTime())) return monthStr;
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
  });
}

// Compact number formatter: 141K, 2.3M, 1.1B
const compactNumber = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

// Tooltip formatter (bubble)
function BubbleTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md bg-white shadow-lg px-3 py-2 border border-gray-200">
      <p className="text-[11px] font-medium">{label}</p>
      <p className="text-[12px] font-semibold text-[#01261E]">
        {compactNumber.format(payload[0].value)} opens
      </p>
    </div>
  );
}

const chartConfig = {
  opens: { label: "Emails opened", color: "#01261E" },
};

export default function HomeScrollNumberOfOpensChart({ opensMonthly = [] }) {
  console.log("opensMonthly", opensMonthly);
  // Shape data for Recharts
  const chartData = opensMonthly.map((item) => ({
    month: formatMonthLabel(item.month),
    opens: item.count,
  }));
  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden w-full shadow-[0_4px_37px_0_rgba(0,0,0,0.05)]">
        <Card className="p-[30px] h-[315px] rounded-[10px] bg-[#fff]">
          <CardHeader>
            <CardTitle className="rounded-[10px] text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Emails opened
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[120.222%] pt-[6px] mt-0">
              Number of emails opened each month, measuring audience interest,
              trust, and retained attention.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[15px]">
            <ChartContainer config={chartConfig} className="w-full h-[156px]">
              <LineChart
                data={chartData}
                margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#E5E7EB" />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  fontSize={11}
                />

                <YAxis
                  domain={[0, "auto"]}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  width={40}
                  fontSize={11}
                  tickFormatter={(value) => compactNumber.format(value)}
                />

                {/* Bubble Tooltip */}
                <Tooltip
                  content={<BubbleTooltip />}
                  cursor={{ stroke: "#01261E", strokeDasharray: "3 3" }}
                />

                <Line
                  dataKey="opens"
                  type="monotone"
                  stroke={chartConfig.opens.color}
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>

          <div className="flex gap-6 justify-center items-center pt-[9.5px]">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Number of emails opened
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* mobile */}
      <div className="block lg:hidden shadow-[0_0_44px_rgba(0,0,0,0.06)]">
        <Card className="px-[16px] pt-[16px] rounded-[5px] h-[266px] bg-[#fff]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114%]">
              Emails opened
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              Number of emails opened each month, measuring audience interest,
              trust, and retained attention.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[10px] px-0">
            <div className="w-[100%] overflow-visible">
              <ChartContainer config={chartConfig} className="w-full h-[125px]">
                <LineChart
                  data={chartData}
                  margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                  width={500}
                >
                  <CartesianGrid vertical={false} stroke="#E5E7EB" />

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fontSize: 8, fill: "#77838F" }}
                  />

                  <YAxis
                    domain={[0, "auto"]}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fontSize: 8, fill: "#77838F" }}
                    width={40}
                    tickFormatter={(value) => compactNumber.format(value)}
                  />

                  <Tooltip
                    content={<BubbleTooltip />}
                    cursor={{ stroke: "#01261E", strokeDasharray: "3 3" }}
                  />

                  <Line
                    dataKey="opens"
                    type="monotone"
                    stroke={chartConfig.opens.color}
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>

          <div className="flex gap-[10px] justify-center items-center pb-[16px] pt-[7px]">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Number of emails opened
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
