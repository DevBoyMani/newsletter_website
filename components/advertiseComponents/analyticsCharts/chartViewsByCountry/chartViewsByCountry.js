"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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
  { browser: "US", visitors: 275, fill: "#394E65" },
  { browser: "Canada", visitors: 200, fill: "#657C75" },
  { browser: "U.K.", visitors: 187, fill: "#E19F20" },
  { browser: "Australia", visitors: 173, fill: "#582719" },
  // { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#01261E",
  },
  safari: {
    label: "Safari",
    color: "#0F5C4B",
  },
  firefox: {
    label: "Firefox",
    color: "#95FFE8",
  },
  edge: {
    label: "Edge",
    color: "#BDFAED",
  },
  other: {
    label: "Other",
    color: "#E3F9F4",
  },
};

const chartDatas = [
  {
    Country: "USA",
    percentage: "39.11%",
    livePercentage: "(+2.11%)",
    id: "1",
    dot: "/advertise/chart-usa.png",
  },
  {
    Country: "Canada",
    percentage: "28.02%",
    livePercentage: "(-3.25%)",
    id: "2",
    dot: "/advertise/chart-canada.png",
  },
  {
    Country: "U.K.",
    percentage: "23.11%",
    livePercentage: "(+0.14%)",
    id: "3",
    dot: "/advertise/chart-uk.png",
  },
  {
    Country: "Australia",
    percentage: "5.03%",
    livePercentage: "(+1.11%)",
    id: "4",
    dot: "/advertise/chart-australia.png",
  },
];

export function ViewsCountry() {
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
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-8  rounded-full "
            >
              <img
                src="/advertise/flip-white-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2">
                <div className="text-[18px] text-[#9291A5]">Statistics</div>
                <CardDescription className="text-[22px] text-[#1E1B39] font-bold">
                  Views by country
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[200px] px-4"
              >
                <div className="flex justify-center items-center ">
                  {/* Pie Chart */}
                  <div>
                    <PieChart width={200} height={200}>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="browser"
                      />
                    </PieChart>
                  </div>

                  {/* Country List */}
                  <div className="ml-4 space-y-2">
                    {chartDatas.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center justify-between w-full"
                      >
                        <img
                          src={data.dot}
                          alt={data.Country}
                          className="w-2 h-2 mr-2"
                        />

                        <div className="text-[#1E1B39] text-sm w-20">
                          {data.Country}
                        </div>

                        <div className="text-sm text-[#515151] w-16">
                          {data.percentage}
                        </div>

                        <div
                          className={`text-sm ${
                            data.livePercentage.includes("+")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {data.livePercentage}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                  Views by country
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font-Manrope font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              Etiam et convallis dolor. Praesent pulvinar molestie leo, in
              finibus felis porttitor eget. Suspendisse vel aliquet tellus. Cras
              ac venenatis mi. Maecenas lobortis nisi enim, eget accumsan risus
              viverra in. Nunc semper neque porta ipsum porta dignissim.
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
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
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
              <div className="border-b border-[#515151] pb-2">
                <div className="text-[9px] text-[#9291A5]">Statistics</div>
                <CardDescription className="text-[10px] text-[#1E1B39] font-bold">
                  Views by country
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[120px] sm:h-[100px] px-2"
              >
                <div className="flex justify-start items-center">
                  {/* Pie Chart */}
                  <div className="m-0 p-0">
                    <PieChart width={120} height={120} className="">
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="browser"
                      />
                    </PieChart>
                  </div>

                  {/* Country List */}
                  <div className="w-full space-y-2 mx-2">
                    {chartDatas.map((data) => (
                      <div key={data.id} className="flex items-center ">
                        <img
                          src={data.dot}
                          alt={data.Country}
                          className="w-[5px] h-[5px] mr-2"
                        />

                        <div className="text-[#1E1B39] text-[8px] w-10 ">
                          {data.Country}
                        </div>

                        <div className="text-[8px] text-[#515151] w-8 ml-4">
                          {data.percentage}
                        </div>

                        <div
                          className={`text-[8px] ml-4  ${
                            data.livePercentage.includes("+")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {data.livePercentage}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                <div className="text-[9px] text-[#D3D3D3]">Statistics</div>
                <CardDescription className="text-[10px] text-[#DAEBE8] font-bold">
                  Views by country
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font-Manrope font-[400px] leading-[1.5]  max-w-[550px] text-[10px] pb-4 pt-4">
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
