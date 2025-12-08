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

// Types
type SubscribersRow = {
  month: string; // "2025-06-01"
  subscribersCount?: number;
  subscribers_count?: number;
};

interface AnalyticsPSNumberOfSubscribersChartProps {
  subscribersByMonth?: SubscribersRow[];
}

// number -> "590,055"
function formatNumber(value: number | null | undefined): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value ?? 0);
}

// keys must match dataKey
const chartConfig = {
  subscribersCount: {
    label: "Subscribers",
    color: "#657C75",
  },
};

function buildChartData(subscribersByMonth: SubscribersRow[] = []) {
  return (subscribersByMonth || []).map((row) => {
    const d = new Date(row.month); // "2025-06-01"
    const monthLabel = d.toLocaleString("en-US", { month: "short" }); // Jun, Jul...

    return {
      month: monthLabel,
      subscribersCount: Number(
        row.subscribersCount ?? row.subscribers_count ?? 0
      ),
    };
  });
}

// Bubble tooltip for subscribers
function SubscribersTooltip({
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
  const value = formatNumber(item.value as number | undefined);

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex flex-col gap-1 text-sm">
      {/* month */}
      <div className="font-medium text-[#111827]">{label}</div>

      {/* row */}
      <div className="flex items-center gap-2">
        <span
          className="h-[10px] w-[10px] rounded-[4px]"
          style={{
            backgroundColor: item.color || chartConfig.subscribersCount.color,
          }}
        />
        <span className="text-[#6B7280]">Subscribers</span>
        <span className="font-semibold text-[#111827]">{value}</span>
      </div>
    </div>
  );
}

export default function AnalyticsPSNumberOfSubscribersChart({
  subscribersByMonth = [],
}: AnalyticsPSNumberOfSubscribersChartProps) {
  const chartData = buildChartData(subscribersByMonth);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="px-[35px] py-[40px] h-[465px]">
          <CardHeader>
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Subscriber growth over time
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] mt-0">
              Shows how quickly our audience is growing month over month.
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
                  width={60}
                  tickFormatter={(value: number) =>
                    new Intl.NumberFormat("en-US", {
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }).format(value)
                  }
                />

                <Tooltip
                  cursor={{ stroke: "#000", strokeDasharray: "3 3" }}
                  content={<SubscribersTooltip />}
                />

                <Line
                  dataKey="subscribersCount"
                  type="monotone"
                  stroke={chartConfig.subscribersCount.color}
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>

          {/* labels */}
          <div className="flex gap-6 justify-center items-center pt-[36px]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-[2px] bg-[#657C75]"></span>
              <span className="text-[12px] text-[#464E5F] font-[500] leading-normal">
                Subscribers
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <Card className="px-[16px] pt-[16px]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Subscriber growth over time
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              Month-on-month subscriber growth from the newsletter.
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
                    width={50}
                    tick={{ fontSize: 8, fill: "#77838F" }}
                    tickFormatter={(value: number) =>
                      new Intl.NumberFormat("en-US", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                      }).format(value)
                    }
                  />

                  <Tooltip
                    cursor={{ stroke: "#000", strokeDasharray: "3 3" }}
                    content={<SubscribersTooltip />}
                  />

                  <Line
                    dataKey="subscribersCount"
                    type="monotone"
                    stroke={chartConfig.subscribersCount.color}
                    strokeWidth={2.3}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>

          {/* labels */}
          <div className="flex gap-6 justify-center items-center pb-[16px] pt-[15px]">
            <div className="flex items-center gap-2">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#657C75]"></span>
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Subscribers
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
