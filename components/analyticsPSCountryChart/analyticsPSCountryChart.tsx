"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Color palette for up to 5 countries
const COUNTRY_COLORS = [
  "#E19F20", // gold
  "#9A4831", // brick
  "#657C75", // green/grey
  "#3A4E65", // blue-grey
  "#6B7280", // slate
];

// Build data from API response
function buildCountryData(countryBreakdown = []) {
  return (countryBreakdown || [])
    .map((row, idx) => ({
      country: row.country || "Unknown",
      value: Number(row.totalOpeners || 0),
      fill: COUNTRY_COLORS[idx % COUNTRY_COLORS.length],
    }))
    .filter((d) => d.value > 0);
}

// Bubble-style tooltip like GeoTooltip
function CountryTooltip({ active, payload }) {
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
        {item.country}
      </span>
      <span className="font-semibold text-[#111827]">{formatted}</span>
    </div>
  );
}

export default function AnalyticsPSCountryChart({ countryBreakdown = [] }) {
  const chartData = buildCountryData(countryBreakdown);

  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[40px] h-[308px]">
          <CardHeader>
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Country
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] pb-[20px]">
              Where our readers are opening from. Top countries by engaged
              readers.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-between -mt-9">
            {/* Legend (names only, no counts) */}
            <div className="flex flex-col gap-[16px] mt-5">
              {chartData.map((item) => (
                <div key={item.country} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal">
                    {item.country}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[50%] max-w-[162px] aspect-square mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<CountryTooltip />} />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="country"
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
      <div className="block lg:hidden ">
        <Card className="px-[16px] pt-[16px]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Country
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] pb-[20px] mt-0">
              Top countries where people open this newsletter.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-between pb-[16px] -mt-9">
            {/* Legend */}
            <div className="flex flex-col gap-[10px]">
              {chartData.map((item) => (
                <div
                  key={item.country}
                  className="flex items-center gap-[13px] h-[16px]"
                >
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal">
                    {item.country}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[45%] max-w-[160px] aspect-square mt-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<CountryTooltip />} />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="country"
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
