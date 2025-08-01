"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { day: "MON", desktop: 186 },
  { day: "TUE", desktop: 305 },
  { day: "WED", desktop: 237 },
  { day: "THU", desktop: 73 },
  { day: "FRI", desktop: 209 },
  { day: "SAT", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export function ActiveUsers() {
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
                <div className="text-[18px] text-[#9291A5]">Active users</div>
                <CardDescription className="text-[22px] font-bold text-[#1E1B39] mt-0">
                  6,345
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="w-full h-[200px] px-4"
              >
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#657C75"
                        stopOpacity="0.58"
                      />
                      <stop offset="100%" stopColor="#657C75" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={true} />

                  <YAxis
                    width={20} // Controls the space for the Y-axis labels
                    tickLine={false} // Hides tick marks
                    axisLine={false} // Hides axis line
                    tick={{ fill: "#515151", fontSize: 12 }} // Custom styling
                    domain={["auto", "auto"]} // Auto-scale
                  />

                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" hideLabel />}
                  />
                  <Area
                    dataKey="desktop"
                    type="linear"
                    fill="url(#areaGradient)"
                    stroke="#657C75"
                    strokeWidth={4}
                    // fillOpacity={0.4}
                    // opacity={0.33}
                    // style={{ mixBlendMode: "multiply" }}
                  />
                </AreaChart>
              </ChartContainer>
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
              className="absolute top-6 right-8  rounded-full "
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
                  6,345
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              Etiam et convallis dolor. Praesent pulvinar molestie leo, in
              finibus felis porttitor eget. Suspendisse vel aliquet tellus. Cras
              ac venenatis mi. Maecenas lobortis nisi enim, eget accumsan risus
              viverra in. Nunc semper neque porta ipsum porta dignissim.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full h-full flex justify-center items-center mt-4">
        {/* 3D Perspective Container */}
        <div
          className="relative w-full h-[215px] transition-transform duration-500"
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <Card className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6">
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6 rounded-full "
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>
            <CardHeader className="p-0">
              <div className="w-full border-b border-[#515151] pb-2">
                <div className="text-[11px] text-[#9291A5]">Active users</div>
                <CardDescription className="text-[12px] font-bold text-[#1E1B39] mt-0">
                  6,345
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[120px] sm:h-[100px] px-2 p-0"
              >
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#657C75"
                        stopOpacity="0.58"
                      />
                      <stop offset="100%" stopColor="#657C75" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={true} />

                  <YAxis
                    width={20} // Controls the space for the Y-axis labels
                    tickLine={false} // Hides tick marks
                    axisLine={false} // Hides axis line
                    tick={{ fill: "#515151", fontSize: 12 }} // Custom styling
                    domain={["auto", "auto"]} // Auto-scale
                  />

                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" hideLabel />}
                  />
                  <Area
                    dataKey="desktop"
                    type="linear"
                    fill="url(#areaGradient)"
                    stroke="#657C75"
                    strokeWidth={4}
                    // fillOpacity={0.4}
                    // opacity={0.33}
                    // style={{ mixBlendMode: "multiply" }}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-6"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-6  rounded-full "
            >
              <img
                src="/advertise/flip-green-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[11px] text-[#D3D3D3]">Statistics</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  6,345
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[11px] pb-4 pt-4">
              Etiam et convallis dolor. Praesent pulvinar molestie leo, in
              finibus felis porttitor eget. Suspendisse vel aliquet tellus. Cras
              ac venenatis mi. Maecenas lobortis nisi enim, eget accumsan risus
              viverra in. Nunc semper neque porta ipsum porta dignissim.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
