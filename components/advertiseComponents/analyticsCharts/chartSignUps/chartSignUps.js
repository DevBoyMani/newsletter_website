"use client"

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis,YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { week: "week1", desktop: 186, mobile: 80 },
  { week: "week2", desktop: 305, mobile: 200 },
  { week: "week3", desktop: 237, mobile: 120 },
  { week: "week4", desktop: 73, mobile: 190 },
  { week: "week5", desktop: 209, mobile: 130 },
  { week: "week6", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Last Month",
    // color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "This Month",
    // color: "hsl(var(--chart-2))",
  },
}

export function SignInUps() {
  const [flipped, setFlipped] = useState(false);
  return (
  <>

  {/* desktop view */}
    <div className="hidden lg:block relative w-full h-full flex justify-center items-center ">
      {/* 3D Perspective Container */}
      <div
        className="relative w-[674px] h-[365px] transition-transform duration-500"
        style={{
          perspective: "1000px",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
        }}
      >
    <Card className="absolute w-full h-full bg-[#DAEBE8] flex flex-col justify-between p-4">
    <button
        onClick={() => setFlipped(true)}
        className="absolute top-4 right-4 p-2 rounded-full bg-[#ffffff]"
        >
        <Plus className="w-6 h-6" />
      </button>
      <CardHeader className="p-0">
        <div className="w-full border-b border-[#515151] pb-2">
          <div className="text-[18px] text-[#9291A5]">Sign-ups</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <CardDescription className="text-[22px] font-bold text-[#1E1B39]">9,845</CardDescription>
              <div className="ml-4 ">
                <h5 className="text-sm text-[#9291A5]">past 30 days</h5>
              </div>
            </div>
            <div className="flex mr-8 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <img src="/advertise/charts-analytics/male.png" alt="Male" className="w-[8px] h-[7.504px]" />
                <span className="text-[18px]">Last Month</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/advertise/charts-analytics/female.png" alt="Female" className="w-[8px] h-[7.504px]" />
                <span className="text-[18px]">This Month</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-[250px] px-4">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
             <YAxis
                          width={20} // Controls the space for the Y-axis labels
                          tickLine={true} // Hides tick marks
                          axisLine={true} // Hides axis line
                          tick={{ fill: "#515151", fontSize: 12 }} // Custom styling
                          domain={["auto", "auto"]} // Auto-scale
                        />
            <XAxis
              dataKey="week"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="#01261E"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="linear"
              stroke="#95FFE8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
    {/* Back Side */}
    <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white"
            >
              <X className="w-6 h-6" />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[18px] text-[#D3D3D3]">Sign-ups</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                9,845
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font-Manrope font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
            Etiam et convallis dolor. Praesent pulvinar molestie leo, in finibus felis porttitor eget. Suspendisse vel aliquet tellus. Pellentesque vel lorem purus. Sed sapien ipsum, vehicula vel faucibus ut, pulvinar vitae orci. Cras ac venenatis mi. Maecenas lobortis nisi enim, eget accumsan risus viverra in. Nunc semper neque porta ipsum porta dignissim.
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
    <Card className="absolute w-full h-full bg-[#DAEBE8] flex flex-col justify-between p-4">
    <button
        onClick={() => setFlipped(true)}
        className="absolute top-4 right-4 p-2 rounded-full bg-[#ffffff]"
        >
        <Plus className="w-4 h-4" />
      </button>
      <CardHeader className="p-0">
        <div className="w-full border-b border-[#515151] pb-2">
          <div className="text-[9px] text-[#9291A5]">Sign-ups</div>
          <div className="flex items-center justify-start">
            <div className="flex items-center justify-start">
              <CardDescription className="text-[10px] font-bold text-[#1E1B39]">9,845</CardDescription>
              <div className="ml-4 ">
                <h5 className="text-[8px] text-[#9291A5]">past 30 days</h5>
              </div>
            </div>
            <div className="flex mr-8 gap-4 text-sm ml-8">
              <div className="flex items-center gap-2">
                <img src="/advertise/charts-analytics/male.png" alt="Male" className="w-[5px] h-[5px]" />
                <span className="text-[8px]">Last Month</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/advertise/charts-analytics/female.png" alt="Female" className="w-[5px] h-[5px]" />
                <span className="text-[8px]">This Month</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer config={chartConfig} className="w-full h-[120px] sm:h-[100px] px-2">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
             <YAxis
                          width={20} // Controls the space for the Y-axis labels
                          tickLine={true} // Hides tick marks
                          axisLine={true} // Hides axis line
                          tick={{ fill: "#515151", fontSize: 12 }} // Custom styling
                          domain={["auto", "auto"]} // Auto-scale
                        />
            <XAxis
              dataKey="week"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 6)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="linear"
              stroke="#01261E"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="linear"
              stroke="#95FFE8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
    {/* Back Side */}
    <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-4"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white"
            >
              <X className="w-4 h-4" />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[9px] text-[#D3D3D3]">Sign-ups</div>
                <CardDescription className="text-[10px] text-[#DAEBE8] font-bold">
                9,845
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font-Manrope font-[400px] leading-[1.5]  max-w-[550px] text-[10px] pb-4 pt-4">
            Etiam et convallis dolor. Praesent pulvinar molestie leo, in finibus felis porttitor eget. Suspendisse vel aliquet tellus. Pellentesque vel lorem purus. Sed sapien ipsum, vehicula vel faucibus ut, pulvinar vitae orci. Cras ac venenatis mi. Maecenas lobortis nisi enim, eget accumsan risus viverra in. Nunc semper neque porta ipsum porta dignissim.
            </p>
    </Card>
    </div>
  </div>
  </>
  )
}
