"use client";

import { PieChart, Pie, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Chart data
const chartData = [
  { country: "United States", value: 400, fill: "#E2A300" }, // Yellow
  { country: "United Kingdom", value: 300, fill: "#B53C2F" }, // Red
  { country: "European Union", value: 250, fill: "#4C6356" }, // Green
  { country: "Other", value: 100, fill: "#3D5661" }, // Blue-gray
];

export default function AnalyticsPSCountryChart() {
  return (
    <Card className="p-[24px] h-[308px]">
      <CardHeader className="">
        <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
          Country
        </CardTitle>
        <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] mt-0">
          This chart displays the geographic distribution of our audience by
          country, highlighting where our users are located.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex items-center gap-6">
        {/* Legend */}
        <div className="flex flex-col gap-3">
          {chartData.map((item) => (
            <div key={item.country} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-[#464E5F] text-[12px] font-[manrope] font-[500] leading-normal ">
                {item.country}
              </span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="w-[160px] h-[160px]">
          <PieChart width={160} height={160}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="country"
              innerRadius={50}
              outerRadius={70}
              stroke="transparent"
            />
            <Tooltip />
          </PieChart>
        </div>
      </CardContent>
    </Card>
  );
}
