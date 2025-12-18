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

export const description = "Monthly emails sent / subscribers reached.";

// "2025-01-01" -> "Jan 25"
function formatMonthLabel(monthStr) {
  const d = new Date(monthStr);
  if (Number.isNaN(d.getTime())) return monthStr;
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
  });
}

// Compact number formatter: 4.7K, 1.2M, 1B
const compactNumber = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

// Ensure X-axis shows an even number of ticks
function getEvenTicks(labels) {
  if (!labels || labels.length === 0) return [];

  // For very small datasets, keep as-is
  if (labels.length <= 2) return labels;

  // Already even
  if (labels.length % 2 === 0) return labels;

  // Odd → drop last
  return labels.slice(0, labels.length - 1);
}

// Bubble tooltip
function BubbleTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-md bg-white shadow-lg px-3 py-2 border border-gray-200">
      <p className="text-[11px] font-medium mb-[2px]">{label}</p>
      <p className="text-[12px] font-semibold text-[#01261E]">
        {compactNumber.format(payload[0].value)} emails sent
      </p>
    </div>
  );
}

// Chart config for ChartContainer / legend / tooltip context
const chartConfig = {
  sent: { label: "Emails sent", color: "#5C7D73" },
};

export default function HomeScrollNumberOfSubscribersChart({
  subscribersMonthly = [],
}) {
  const chartData = subscribersMonthly.map((item) => ({
    month: formatMonthLabel(item.month),
    sent: item.count,
  }));

  const labels = chartData.map((d) => d.month);
  const evenTicks = getEvenTicks(labels);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden shadow-[0_4px_37px_0_rgba(0,0,0,0.05)]">
        <Card className="p-[30px] h-[315px] rounded-[10px] bg-[#fff]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Emails sent
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[120.222%] pt-[6px] mt-0">
              Number of emails sent each month, reflecting subscriber growth and
              overall reach.
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

                {/* Single line for emails sent */}
                <Line
                  dataKey="sent"
                  type="monotone"
                  stroke={chartConfig.sent.color}
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>

          {/* labels */}
          <div className="flex gap-6 justify-center items-center pt-[9.5px]">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Number of emails sent
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
              Emails sent
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              Number of emails sent each month, reflecting subscriber growth and
              overall reach.
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
                    dataKey="month"
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
                    dataKey="sent"
                    type="monotone"
                    stroke={chartConfig.sent.color}
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
                Number of emails sent
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
