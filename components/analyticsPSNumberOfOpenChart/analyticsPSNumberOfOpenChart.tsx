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
  "Monthly newsletter readers (readers + loyal readers)";

type OpensRow = {
  month: string; // "2025-06-01"
  totalOpens?: number;
  totalOpeners?: number;
  heavyOpeners?: number;
  total_openers?: number;
  heavy_openers?: number;
};

interface AnalyticsPSNumberOfOpensChartProps {
  opensByMonth?: OpensRow[];
}

// numbers → 62,983 / 29,994 etc.
function formatNumber(value: number | null | undefined): string {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value ?? 0);
}

// API → chart data
function buildChartData(opensByMonth: OpensRow[] = []) {
  return (opensByMonth || []).map((row) => {
    const d = new Date(row.month); // "2025-06-01"
    const monthLabel = d.toLocaleString("en-US", { month: "short" }); // Jun, Jul...

    const readers = Number(row.totalOpeners ?? row.total_openers ?? 0) || 0;
    const loyalReaders =
      Number(row.heavyOpeners ?? row.heavy_openers ?? 0) || 0;

    return {
      month: monthLabel,
      readers,
      loyalReaders,
    };
  });
}

const chartConfig = {
  readers: {
    label: "Readers",
    color: "#9A4831", // brick
  },
  loyalReaders: {
    label: "Loyal readers",
    color: "#657C75", // green/grey
  },
};

function OpensTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;

  const rows = payload.map((item) => {
    const key = item.dataKey || item.name;
    const labelText =
      key === "readers"
        ? "Readers"
        : key === "loyalReaders"
        ? "Loyal readers"
        : key;
    const value = formatNumber(item.value as number | undefined);

    return {
      id: key,
      label: labelText,
      color: item.color || "#657C75",
      value,
    };
  });

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex flex-col gap-2 text-sm">
      {/* Top: month label */}
      <div className="font-medium text-[#111827]">{label}</div>

      {/* Rows */}
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

export default function AnalyticsPSNumberOfOpensChart({
  opensByMonth = [],
}: AnalyticsPSNumberOfOpensChartProps) {
  const chartData = buildChartData(opensByMonth);

  return (
    <>
      {/* DESKTOP */}
      <div className="lg:block hidden">
        <Card className="px-[35px] py-[40px] h-[465px]">
          <CardHeader>
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Daily newsletter reads
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] mt-0">
              Total readers and loyal readers (those who open multiple times in
              a month).
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

                <Tooltip content={<OpensTooltip />} />

                <Line
                  dataKey="readers"
                  type="monotone"
                  stroke={chartConfig.readers.color}
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  dataKey="loyalReaders"
                  type="monotone"
                  stroke={chartConfig.loyalReaders.color}
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
                Readers
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-[2px] bg-[#657C75]"></span>
              <span className="text-[12px] text-[#464E5F] font-[500] leading-normal">
                Loyal readers
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
              Daily newsletter reads
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              Readers and loyal readers per month.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[17px] px-0">
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

                  <Tooltip content={<OpensTooltip />} />

                  <Line
                    dataKey="readers"
                    type="monotone"
                    stroke={chartConfig.readers.color}
                    strokeWidth={2.2}
                    dot={false}
                  />
                  <Line
                    dataKey="loyalReaders"
                    type="monotone"
                    stroke={chartConfig.loyalReaders.color}
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
                Readers
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#657C75]"></span>
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Loyal readers
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
