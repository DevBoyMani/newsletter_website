"use client";

import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Map genders to display labels + colors
const GENDER_META = {
  male: { label: "Male", fill: "#E19F20" },
  female: { label: "Female", fill: "#9A4831" },
};

// Build data from API response, excluding "unknown"
function buildChartData(genderBreakdown = []) {
  const filtered = (genderBreakdown || []).filter((row) => {
    const key = (row.gender || "").toLowerCase();
    return key === "male" || key === "female";
  });

  const total = filtered.reduce(
    (sum, row) => sum + Number(row.totalOpeners || 0),
    0
  );

  return filtered.map((row) => {
    const key = (row.gender || "").toLowerCase();
    const meta = GENDER_META[key];

    const value = Number(row.totalOpeners || 0);
    const pct = total ? (value / total) * 100 : 0;

    return {
      genderKey: key,
      label: meta.label,
      value,
      percentage: Number(pct.toFixed(1)),
      fill: meta.fill,
    };
  });
}

// Geo-style bubble tooltip: color dot + label + count
function GenderTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0]?.payload;
  if (!item) return null;

  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(item.value);

  return (
    <div className="flex items-center gap-2 rounded-[999px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm shadow-[0px_22px_45px_rgba(15,23,42,0.18)]">
      <span
        className="h-[10px] w-[10px] rounded-[4px]"
        style={{ backgroundColor: item.fill || "#394E65" }}
      />
      <span className="font-medium text-[#111827] whitespace-nowrap">
        {item.label}
      </span>
      <span className="font-semibold text-[#111827]">{formatted}</span>
    </div>
  );
}

export default function AnalyticsPSAgeChart({ genderBreakdown = [] }) {
  const chartData = buildChartData(genderBreakdown);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[40px] h-[308px]">
          <CardHeader>
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Reader profile by gender
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] pb-[35px] mt-0">
              Shows how our regular readers are distributed by gender.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex justify-between items-center -mt-9">
            {/* Legend (only labels, no counts/readers) */}
            <div className="flex flex-col gap-[16px] -mt-4 pt-0">
              {chartData.map((item) => (
                <div key={item.genderKey} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[50%] max-w-[162px] aspect-square">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<GenderTooltip />} />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="60%"
                    outerRadius="100%"
                    stroke="transparent"
                  />
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
              Reader profile by gender
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] pb-[20px] mt-0">
              Gender split of people who open the newsletter.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex justify-between items-center pb-[16px] -mt-9">
            {/* Legend (only labels) */}
            <div className="flex flex-col gap-[10px] -mt-7">
              {chartData.map((item) => (
                <div
                  key={item.genderKey}
                  className="flex items-center gap-[13px] h-[16px]"
                >
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[45%] max-w-[160px] aspect-square">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<GenderTooltip />} />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="label"
                    innerRadius="60%"
                    outerRadius="100%"
                    stroke="transparent"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
