"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

// Sample Chart Data
const chartData = [
  { month: "January", desktop: 86 },
  { month: "February", desktop: 5 },
  { month: "March", desktop: 37 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 9 },
  { month: "June", desktop: 14 },
];

// Fix: Properly Define `chartConfig`
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#8CFAE2", // Example color
  },
};

export function AccountReached() {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block relative h-full flex justify-center items-center ">
        {/* 3D Perspective Container */}
        <div
          className="relative w-full h-[365px] transition-transform duration-500 "
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <Card
            className="absolute w-full h-full bg-[#36454F] flex flex-col justify-between p-8"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-8  rounded-full"
            >
              <img
                src="/advertise/flip-white-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#e3e1e1] pb-2">
                <div className="text-[18px] text-[#e3e1e1]">Statistics</div>
                <CardDescription className="text-[22px] text-[#e8e8ed] font-bold">
                  Account reached
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="w-full h-[200px]">
                <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
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

                  <CartesianGrid vertical={false} horizontal={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    // axisLine={true}
                    axisLine={{ stroke: "#000000" }}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#areaGradient)"
                    stroke="#657C75"
                    strokeWidth={4}
                    style={{ mixBlendMode: "multiply" }}
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
              className="absolute top-6 right-8 rounded-full"
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
                  Account reached
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
      <div className="block lg:hidden relative w-full h-full flex justify-center items-center ">
        {/* 3D Perspective Container */}
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
            className="absolute w-full h-full bg-[#36454F] flex flex-col justify-between p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6  rounded-full "
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#e3e1e1] pb-2">
                <div className="text-[11px] text-[#e3e1e1]">Statistics</div>
                <CardDescription className="text-[12px] text-[#e8e8ed] font-bold">
                  Account reached
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[120px] sm:h-[100px] p-0"
              >
                <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
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
                  <CartesianGrid vertical={false} horizontal={false} />
                  {/* <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={true}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  /> */}
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={{ stroke: "#000000" }} // customize line above months
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />

                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="line" />}
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#areaGradient)"
                    stroke="#657C75"
                    strokeWidth={4}
                    style={{ mixBlendMode: "multiply" }}
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
                  Account reached
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[11px] pb-4 pt-4">
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
    </>
  );
}
