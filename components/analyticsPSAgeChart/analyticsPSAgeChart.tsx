"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Shape coming from API: genderBreakdown[]
interface GenderRow {
  gender: string;
  totalOpeners: number;
}

interface AnalyticsPSAgeChartProps {
  genderBreakdown?: GenderRow[];
}

// Build chart data from API response
function buildChartData(genderBreakdown: GenderRow[] = []) {
  const filtered = (genderBreakdown || []).filter((row) => {
    const key = (row.gender || "").toLowerCase();
    return key === "male" || key === "female";
  });

  // Fallback if no data
  if (!filtered.length) {
    return [
      { label: "Male", value: 0, fill: "#E19F20" },
      { label: "Female", value: 0, fill: "#9A4831" },
    ];
  }

  const colorMap: Record<string, string> = {
    male: "#E19F20",
    female: "#9A4831",
  };

  return filtered.map((row) => {
    const key = (row.gender || "").toLowerCase();
    const label = key.charAt(0).toUpperCase() + key.slice(1); // Male / Female

    return {
      label,
      value: row.totalOpeners ?? 0,
      fill: colorMap[key] || "#657C75",
    };
  });
}

// Bubble-style tooltip like GeoTooltip
function GenderTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const label = item.name || item.payload.label;
  const value = item.value || 0;

  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="flex items-center gap-2 rounded-[999px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm shadow-[0px_22px_45px_rgba(15,23,42,0.18)]">
      <span
        className="h-[10px] w-[10px] rounded-[4px]"
        style={{ backgroundColor: item.payload.fill || "#394E65" }}
      />
      <span className="font-medium text-[#111827] whitespace-nowrap">
        {label}
      </span>
      <span className="font-semibold text-[#111827]">{formatted}</span>
    </div>
  );
}

export default function AnalyticsPSAgeChart({
  genderBreakdown = [],
}: AnalyticsPSAgeChartProps) {
  const chartData = buildChartData(genderBreakdown);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[40px] h-[308px]">
          <CardHeader>
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Gender
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] pb-[35px] mt-0 ">
              Who our audience is, broken down by gender.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex justify-between items-center">
            {/* Legend */}
            <div className="flex flex-col gap-[16px] -mt-4 pt-0">
              {chartData.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[50%] max-w-[162px] aspect-square -mt-[5%]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="60%"
                    outerRadius="100%"
                    stroke="transparent"
                  />
                  <Tooltip content={<GenderTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <Card className="px-[16px] pt-[16px]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Gender
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] pb-[20px] mt-0">
              Who our audience is, broken down by gender.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex justify-between items-center pb-[16px] ">
            {/* Legend */}
            <div className="flex flex-col gap-[10px] -mt-7">
              {chartData.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-[13px] h-[16px]"
                >
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[45%] max-w-[160px] aspect-square -mt-[5%]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="60%"
                    outerRadius="100%"
                    stroke="transparent"
                  />
                  <Tooltip content={<GenderTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
