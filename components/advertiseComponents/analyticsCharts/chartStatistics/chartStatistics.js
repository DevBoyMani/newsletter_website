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
  { ageGroup: "18-24", male: 10, female: 5, percentage: "3.3%" },
  { ageGroup: "25-34", male: 35, female: 20, percentage: "12.7%" },
  { ageGroup: "35-44", male: 45, female: 25, percentage: "15.2%" },
  { ageGroup: "45-64", male: 60, female: 35, percentage: "25.3%" },
  { ageGroup: "65+", male: 80, female: 40, percentage: "33.5%" },
];

const colors = {
  male: "#657C75",
  female: "#E19F20",
  // background: "#DAEBE8",
  // border: "#515151",
};

// Custom capsule bar
// Male Capsule Bar (both ends rounded)
// Male Capsule Bar (both ends rounded)
const MaleCapsuleBar = ({ x, y, width, height, fill }) => {
  const radius = height / 2;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={fill}
    />
  );
};

// Female Bar (left side curve merging with male, no gap)
const FemaleMergeBar = ({ x, y, width, height, fill }) => {
  const radius = height / 2;
  const overlap = 6; // small overlap to kill the gap
  return (
    <path
      d={`
        M ${x - overlap} ${y}
        H ${x + width - radius}
        A ${radius} ${radius} 0 0 1 ${x + width - radius} ${y + height}
        H ${x - overlap}
        A ${radius} ${radius} 0 0 0 ${x - overlap} ${y}
        Z
      `}
      fill={fill}
    />
  );
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
                      <span className="inline-block w-3 h-3 rounded-full bg-[#3C6255]" />
                      <span className="text-[18px]">Male</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-[#E5A800]" />
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
                  barGap={8}
                  barSize={12}
                  margin={{ left: 0, right: 40 }}
                >
                  {/* Hide grid for clean look */}
                  <CartesianGrid horizontal={false} vertical={false} />

                  {/* Age group labels on the left */}
                  <YAxis
                    dataKey="ageGroup"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#1E1B39", fontSize: 14 }}
                  />

                  {/* Percentages on the right */}
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    type="category"
                    dataKey="percentage"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9291A5", fontSize: 14 }}
                  />

                  <XAxis type="number" hide />

                  {/* Tooltip */}
                  <Tooltip cursor={{ fill: "transparent" }} />

                  {/* Bars */}
                  {/* Male Bar (left capsule + rounded junction) */}

                  <Bar
                    dataKey="male"
                    stackId="a"
                    fill={colors.male}
                    shape={(props) => <MaleCapsuleBar {...props} />}
                  />

                  <Bar
                    dataKey="female"
                    stackId="a"
                    fill={colors.female}
                    shape={(props) => <FemaleMergeBar {...props} />}
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
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6"
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
                      <span className="inline-block w-2 h-2 rounded-full bg-[#3C6255]" />
                      <span>Male</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#E5A800]" />
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
                  barGap={6}
                  barSize={10}
                  margin={{ top: 0, right: -20, left: -20, bottom: 0 }}
                >
                  {/* Clean chart (no extra grid lines) */}
                  <CartesianGrid horizontal={false} vertical={false} />

                  {/* Age group labels (left) */}
                  <YAxis
                    dataKey="ageGroup"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9, fill: "#1E1B39" }}
                  />

                  {/* Percentages (right side) */}
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    type="category"
                    dataKey="percentage"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 9, fill: "#9291A5" }}
                  />

                  <XAxis type="number" hide />
                  <Tooltip cursor={{ fill: "transparent" }} />

                  {/* Background Bar (total = male + female) */}

                  <Bar
                    dataKey="male"
                    stackId="a"
                    fill={colors.male}
                    shape={(props) => <MaleCapsuleBar {...props} />}
                  />

                  <Bar
                    dataKey="female"
                    stackId="a"
                    fill={colors.female}
                    shape={(props) => <FemaleMergeBar {...props} />}
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
