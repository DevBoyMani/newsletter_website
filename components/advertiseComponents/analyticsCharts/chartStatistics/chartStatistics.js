"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { ageGroup: "18-24", male: 10, female: 5, percentage: "3.3" },
  { ageGroup: "25-34", male: 35, female: 20, percentage: "12.7" },
  { ageGroup: "35-44", male: 45, female: 25, percentage: "15.2" },
  { ageGroup: "45-64", male: 60, female: 35, percentage: "25.3" },
  { ageGroup: "65+", male: 80, female: 40, percentage: "33.5" },
];

const colors = {
  male: "#657C75",
  female: "#E19F20",
  // background: "#DAEBE8",
  // border: "#515151",
};

export function Statistics() {
  const [flipped, setFlipped] = useState(false);
  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block relative w-full h-full flex justify-center items-center ">
        {/* 3D Perspective Container */}
        <div
          className="relative w-full h-[365px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <Card className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8">
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-8 rounded-full "
            >
              <img
                src="/advertise/flip-white-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="w-full border-b border-[#515151] pb-2">
                <div className="text-[18px] text-[#9291A5]">Statistics</div>
                <div className="flex items-center justify-start">
                  <CardDescription className="text-[22px] text-[#1E1B39] font-bold">
                    Age and gender
                  </CardDescription>
                  <div className="flex ml-8 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <img
                        src="/advertise/chart-canada.png"
                        alt="Male"
                        className="w-2 h-2"
                      />
                      <span className="text-[18px]">Male</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/advertise/chart-uk.png"
                        alt="Female"
                        className="w-2 h-2"
                      />
                      <span className="text-[18px]">Female</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  layout="vertical"
                  data={chartData}
                  barGap={2}
                  barSize={14}
                  margin={{ left: 4, right: 50 }}
                >
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" />

                  <YAxis
                    dataKey="ageGroup"
                    orientation="left"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    dataKey="percentage"
                    type="category"
                    orientation="left"
                    axisLine={false}
                    tickLine={false}
                    // tick={{ fill: "#000", fontSize: 12 }}
                    // tickFormatter={(value) => `${value}%`}
                  />

                  <XAxis type="number" hide />
                  <Tooltip cursor={{ fill: "transparent" }} />

                  {/* Bars */}
                  <Bar
                    dataKey="male"
                    stackId="a"
                    fill={colors.male}
                    radius={[8, 8, 8, 8]}
                    background={{ fill: "#FFFFFF", radius: 8 }}
                  />
                  <Bar
                    dataKey="female"
                    stackId="a"
                    fill={colors.female}
                    radius={[8, 8, 8, 8]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-8"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-6 right-8 rounded-full "
            >
              <img
                src="/advertise/flip-green-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[18px] text-[#D3D3D3]">Statistics</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                  Age and gender
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              Etiam et convallis dolor. Praesent pulvinar molestie leo, in
              finibus felis porttitor eget. Suspendisse vel aliquet tellus.
              Pellentesque vel lorem purus. Sed sapien ipsum, vehicula vel
              faucibus ut, pulvinar vitae orci. Cras ac venenatis mi. Maecenas
              lobortis nisi enim, eget accumsan risus viverra in. Nunc semper
              neque porta ipsum porta dignissim.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full flex justify-center items-center">
        {/* Inner Flip Layer */}
        <div
          className="relative w-full h-[215px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6 "
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6"
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2 w-full">
                <div className="text-[11px] text-[#9291A5]">Statistics</div>
                <div className="flex flex-wrap items-center justify-start mt-0">
                  <CardDescription className="text-[12px] text-[#1E1B39] font-bold">
                    Age and gender
                  </CardDescription>
                  <div className="flex gap-3 text-[9px] ml-4 mt-1">
                    <div className="flex items-center gap-1">
                      <img
                        src="/advertise/chart-canada.png"
                        alt="Male"
                        className="w-1 h-1"
                      />
                      <span>Male</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src="/advertise/chart-uk.png"
                        alt="Female"
                        className="w-1 h-1"
                      />
                      <span>Female</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0 pt-2">
              <ResponsiveContainer width="100%" height={120}>
                <BarChart
                  layout="vertical"
                  data={chartData}
                  barGap={2}
                  barSize={14}
                  margin={{ left: 4, right: 30 }}
                >
                  <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                  <YAxis
                    dataKey="ageGroup"
                    orientation="left"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9 }}
                  />
                  <YAxis
                    dataKey="percentage"
                    type="category"
                    orientation="left"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9 }}
                  />
                  <XAxis type="number" hide />
                  <Tooltip cursor={{ fill: "transparent" }} />
                  <Bar
                    dataKey="male"
                    stackId="a"
                    fill={colors.male}
                    radius={[8, 8, 8, 8]}
                    background={{ fill: "#FFFFFF", radius: 8 }}
                  />
                  <Bar
                    dataKey="female"
                    stackId="a"
                    fill={colors.female}
                    radius={[8, 8, 8, 8]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-6 rounded-xl shadow-md"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-6 rounded-full "
            >
              <img
                src="/advertise/flip-green-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>

            <CardHeader className="p-0">
              <div className="border-b border-white pb-2">
                <div className="text-[11px] text-[#D3D3D3]">Statistics</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Age and gender
                </CardDescription>
              </div>
            </CardHeader>

            <div className="text-[#FAFAFA] text-[11px] pt-4 leading-snug font-light">
              Etiam et convallis dolor. Praesent pulvinar molestie leo, in
              finibus felis porttitor eget. Suspendisse vel aliquet tellus.
              Pellentesque vel lorem purus. Sed sapien ipsum, vehicula vel
              faucibus ut, pulvinar vitae orci.
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
