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

export const description =
  "Weekly ad click activity (last month vs this month).";

// Compact number formatter: 141K, 2.3M, 1.1B
const compactNumber = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

// Ensure X-axis shows even number of ticks
function getEvenTicks(labels) {
  if (!labels || labels.length === 0) return [];

  // For very small datasets, don't be aggressive
  if (labels.length <= 2) return labels;

  // Already even
  if (labels.length % 2 === 0) return labels;

  // Odd → drop last
  return labels.slice(0, labels.length - 1);
}

// Bubble tooltip showing both lines
function BubbleTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md bg-white shadow-lg px-3 py-2 border border-gray-200">
      <p className="text-[11px] font-medium mb-[2px]">{label}</p>
      {payload.map((entry, idx) => (
        <p
          key={idx}
          className="text-[12px] font-semibold flex items-center gap-1"
          style={{ color: entry.color || "#01261E" }}
        >
          <span>{entry.name}:</span>
          <span>{compactNumber.format(entry.value)} clicks</span>
        </p>
      ))}
    </div>
  );
}

// Chart config (for your ChartContainer)
const chartConfig = {
  lastMonth: { label: "Last month", color: "#B03C2F" },
  thisMonth: { label: "This month", color: "#5C7D73" },
};

export default function HomeScrollNumberOfClicksChart({
  adClickActivity = [],
}) {
  const chartData = adClickActivity;

  const labels = chartData.map((d) => d.week);
  const evenTicks = getEvenTicks(labels);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[30px] h-full">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Clicks
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[120.222%] pt-[6px] mt-0">
              Number of times readers click on sponsored content. It shows how
              our audience responds to messaging and calls-to-action.
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
                  dataKey="week"
                  ticks={evenTicks}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  fontSize={10}
                />

                <YAxis
                  domain={[0, "auto"]}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  width={40}
                  fontSize={10}
                  tickFormatter={(value) => compactNumber.format(value)}
                />

                {/* Bubble tooltip */}
                <Tooltip
                  cursor={{ stroke: "#000", strokeDasharray: "3 3" }}
                  content={<BubbleTooltip />}
                />

                {/* Lines: last month vs this month */}
                <Line
                  dataKey="lastMonth"
                  name="Last month"
                  type="monotone"
                  stroke={chartConfig.lastMonth.color}
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  dataKey="thisMonth"
                  name="This month"
                  type="monotone"
                  stroke={chartConfig.thisMonth.color}
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>

          {/* labels */}
          <div className="flex gap-6 justify-center items-center pt-[9.5px]">
            {/* Last month */}
            <div className="flex items-center gap-2">
              <span
                className="w-[12px] h-[12px] rounded-[3px]"
                style={{ backgroundColor: "#B03C2F" }}
              />
              <span className="text-[10px] text-[#2E2E2E] font-[500]">
                Last month
              </span>
            </div>

            {/* This month */}
            <div className="flex items-center gap-2">
              <span
                className="w-[12px] h-[12px] rounded-[3px]"
                style={{ backgroundColor: "#5C7D73" }}
              />
              <span className="text-[10px] text-[#2E2E2E] font-[500]">
                This month
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <Card className="px-[16px] pt-[16px] rounded-[5px] h-full shadow-[0px_4px_37px_rgba(0,0,0,0.05)]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114%]">
              Clicks
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              Number of times readers click on sponsored content. It shows how
              our audience responds to messaging and calls-to-action.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[10px]">
            <div className="w-[100%] overflow-visible">
              <ChartContainer config={chartConfig} className="w-full h-[125px]">
                <LineChart
                  data={chartData}
                  margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                  width={500}
                >
                  <CartesianGrid vertical={false} stroke="#E5E7EB" />

                  <XAxis
                    dataKey="week"
                    ticks={evenTicks}
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
                    cursor={{ stroke: "#000", strokeDasharray: "3 3" }}
                    content={<BubbleTooltip />}
                  />

                  <Line
                    dataKey="lastMonth"
                    name="Last month"
                    type="monotone"
                    stroke={chartConfig.lastMonth.color}
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Line
                    dataKey="thisMonth"
                    name="This month"
                    type="monotone"
                    stroke={chartConfig.thisMonth.color}
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>

          {/* labels */}
          <div className="flex gap-[10px] justify-center items-center pb-[16px] pt-[7px]">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Click count (last month vs this month)
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
