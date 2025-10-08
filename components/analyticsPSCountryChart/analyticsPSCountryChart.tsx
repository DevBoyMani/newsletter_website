"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Chart data
const chartData = [
  { country: "United States", value: 400, fill: "#E19F20" }, // Yellow
  { country: "United Kingdom", value: 300, fill: "#9A4831" }, // Red
  { country: "European Union", value: 250, fill: "#657C75" }, // Green
  { country: "Other", value: 100, fill: "#3A4E65" }, // Blue-gray
];

export default function AnalyticsPSCountryChart() {
  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[40px] h-[308px]">
          <CardHeader className="">
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Country
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] pb-[20px]">
              This chart displays the geographic distribution of our audience by
              country, highlighting where our users are located.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex items-center justify-between -mt-9">
            {/* Legend */}
            <div className="flex flex-col gap-[16px] mt-5">
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

            <div className="w-[50%] max-w-[162px] aspect-square mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="age"
                    innerRadius="60%" // responsive donut thickness
                    outerRadius="100%" // fills container
                    stroke="transparent"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* mobile */}
      <div className="block lg:hidden ">
        <Card className="px-[16px] pt-[16px]">
          <CardHeader className="">
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Country
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] pb-[20px] mt-0">
              This chart displays the geographic distribution of our audience by
              country, highlighting where our users are located.
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
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.country}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}

            <div className="w-[45%] max-w-[160px] aspect-square -mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="age"
                    innerRadius="60%" // responsive donut thickness
                    outerRadius="100%" // fills container
                    stroke="transparent"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
