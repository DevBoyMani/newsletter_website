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

export const description = "Monthly ad clicks over time";

type AdClicksRow = {
  month: string; // "2025-06-01"
  totalClicks: number;
};

interface AnalyticsPSNumberOfClicksChartProps {
  adClicksMonthly?: AdClicksRow[];
}

// number → "22,257"
function formatNumber(value: number | null | undefined): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value ?? 0);
}

// API → chart data
function buildChartData(adClicksMonthly: AdClicksRow[] = []) {
  return (adClicksMonthly || []).map((row) => {
    const d = new Date(row.month); // "2025-06-01"
    const monthLabel = d.toLocaleString("en-US", { month: "short" }); // Jun, Jul...

    return {
      month: monthLabel,
      totalClicks: Number(row.totalClicks || 0),
    };
  });
}

const chartConfig = {
  totalClicks: {
    label: "Ad clicks",
    color: "#9A4831", // same brick color
  },
};

// Bubble tooltip (like your previous ClickTooltip)
function ClickTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const value = formatNumber(item?.value as number | undefined);
  const color = item?.color || "#9A4831";

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex flex-col gap-2 text-sm">
      {/* Top: month label */}
      <div className="font-medium text-[#111827]">{label}</div>

      {/* Single row */}
      <div className="flex items-center gap-2">
        <span
          className="h-[10px] w-[10px] rounded-[4px]"
          style={{ backgroundColor: color }}
        />
        <span className="text-[#6B7280]">Ad clicks</span>
        <span className="font-semibold text-[#111827]">{value}</span>
      </div>
    </div>
  );
}

export default function AnalyticsPSNumberOfClicksChart({
  adClicksMonthly = [],
}: AnalyticsPSNumberOfClicksChartProps) {
  const chartData = buildChartData(adClicksMonthly);

  return (
    <>
      {/* DESKTOP */}
      <div className="lg:block hidden">
        <Card className="py-[40px] px-[35px] h-[465px]">
          <CardHeader>
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Monthly ad clicks
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] mt-0">
              Total clicks on ads inside the newsletter each month. Where
              attention turns into revenue.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[20px]">
            <ChartContainer config={chartConfig} className="w-full h-[220px]">
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
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  width={50}
                  tickFormatter={(value) =>
                    new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }).format(value as number)
                  }
                />

                <Tooltip content={<ClickTooltip />} />

                <Line
                  dataKey="totalClicks"
                  type="monotone"
                  stroke={chartConfig.totalClicks.color}
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>

          {/* Legend */}
          <div className="flex gap-6 justify-center items-center pt-[36px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-[2px] bg-[#9A4831]"></span>
              <span className="text-[12px] text-[#464E5F] font-[500] leading-normal">
                Ad clicks
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* MOBILE */}
      <div className="block lg:hidden">
        <Card className="px-[16px] pt-[16px]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Monthly ad clicks
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              Total ad clicks per month across your newsletter issues.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[17px]">
            <div className="w-[100%] overflow-visible">
              <ChartContainer config={chartConfig} className="w-full h-full">
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
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fontSize: 8, fill: "#77838F" }}
                    width={40}
                    tickFormatter={(value) =>
                      new Intl.NumberFormat("en-US", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                      }).format(value as number)
                    }
                  />

                  <Tooltip content={<ClickTooltip />} />

                  <Line
                    dataKey="totalClicks"
                    type="monotone"
                    stroke={chartConfig.totalClicks.color}
                    strokeWidth={2.2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>

          {/* Legend */}
          <div className="flex gap-4 justify-center items-center pb-[16px] pt-[15px]">
            <div className="flex items-center gap-1.5">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#9A4831]"></span>
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Ad clicks
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
