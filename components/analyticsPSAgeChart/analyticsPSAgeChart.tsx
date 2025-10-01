"use client";

import { PieChart, Pie, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Chart data (Age groups)
const chartData = [
  { age: "18 - 30", value: 400, fill: "#E19F20" }, // Yellow
  { age: "30 - 50", value: 300, fill: "#9A4831" }, // Red
  { age: "50+", value: 250, fill: "#657C75" }, // Green
];

export default function AnalyticsPSAgeChart() {
  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[40px] h-[308px]">
          <CardHeader className="">
            <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Age
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] pb-[35px] mt-0 ">
              This chart shows the age distribution of <br />
              our audience.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex justify-between items-center -mt-9">
            {/* Legend */}
            <div className="flex flex-col gap-[16px] -mt-4 pt-0">
              {chartData.map((item) => (
                <div key={item.age} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.age}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[50%] max-w-[162px] aspect-square">
              {" "}
              {/* adjust container size */}
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
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <Card className="px-[16px] pt-[16px]">
          <CardHeader className="">
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Age
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[130%] pt-[6px] pb-[20px] mt-0">
              This chart shows the age distribution of <br />
              our audience.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex justify-between items-center pb-[16px] -mt-9">
            {/* Legend */}
            <div className="flex flex-col justify-start items-start gap-[16px] mt-0 pt-0">
              {chartData.map((item) => (
                <div key={item.age} className="flex items-center gap-2 ">
                  <span
                    className="w-3 h-3 rounded-[2px]"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-[#464E5F] text-[14px] font-[manrope] font-[500] leading-normal ">
                    {item.age}
                  </span>
                </div>
              ))}
            </div>

            {/* Donut Chart */}
            <div className="w-[45%] max-w-[160px] aspect-square">
              {" "}
              {/* adjust container size */}
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
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
