"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Shape from API: countryBreakdown[]
interface CountryRow {
  country: string;
  totalOpeners: number;
}

interface AnalyticsPSCountryChartProps {
  countryBreakdown?: CountryRow[];
}

type CountryChartItem = {
  country: string;
  value: number;
  fill: string;
};

const COUNTRY_COLORS = ["#E19F20", "#9A4831", "#657C75", "#3A4E65", "#4B5563"];

// Build chart data from API response
function buildChartData(
  countryBreakdown: CountryRow[] = []
): CountryChartItem[] {
  const sorted = [...(countryBreakdown || [])].sort(
    (a, b) => (b.totalOpeners || 0) - (a.totalOpeners || 0)
  );

  const top = sorted.slice(0, 4); // top 4 countries

  // Fallback if no data
  if (!top.length) {
    return [
      { country: "United States", value: 0, fill: COUNTRY_COLORS[0] },
      { country: "United Kingdom", value: 0, fill: COUNTRY_COLORS[1] },
    ];
  }

  return top.map((row, idx) => ({
    country: row.country || "Unknown",
    value: Number(row.totalOpeners || 0),
    fill: COUNTRY_COLORS[idx % COUNTRY_COLORS.length],
  }));
}

// Bubble-style tooltip (like your GeoTooltip)
function GeoTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const country = item.name || item.payload.country;
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
        {country}
      </span>
      <span className="font-semibold text-[#111827]">{formatted}</span>
    </div>
  );
}

export default function AnalyticsPSCountryChart({
  countryBreakdown = [],
}: AnalyticsPSCountryChartProps) {
  const chartData = buildChartData(countryBreakdown);

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
              Where our readers are based, ranked by engagement.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-between">
            {/* Legend */}
            <div className="flex flex-col gap-[16px]">
              {chartData.map((item) => (
                <div key={item.country} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.country}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[50%] max-w-[162px] aspect-square mt-[0%]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="country"
                    innerRadius="60%"
                    outerRadius="100%"
                    stroke="transparent"
                  />
                  <Tooltip content={<GeoTooltip />} />
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
              Where our readers are based, ranked by engagement.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-between pb-[16px]">
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
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.country}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[45%] max-w-[160px] aspect-square mt-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="country"
                    innerRadius="60%"
                    outerRadius="100%"
                    stroke="transparent"
                  />
                  <Tooltip content={<GeoTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
