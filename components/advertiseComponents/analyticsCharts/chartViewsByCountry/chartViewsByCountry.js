"use client"

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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
  { browser: "US", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Canada", visitors: 200, fill: "var(--color-safari)" },
  { browser: "U.K.", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Australia", visitors: 173, fill: "var(--color-edge)" },
  // { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

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
}

const chartDatas =[
  {
    Country:"USA",percentage:"39.11%",livePercentage:"(+2.11%)",id:"1",dot:"/advertise/charts-analytics/usa.png"
  },
  {
    Country:"Canada",percentage:"28.02%",livePercentage:"(-3.25%)",id:"2",dot:"/advertise/charts-analytics/canada.png"
  },
  {
    Country:"U.K.",percentage:"23.11%",livePercentage:"(+0.14%)",id:"3",dot:"/advertise/charts-analytics/uk.png"
  },
  {
    Country:"Australia",percentage:"5.03%",livePercentage:"(+1.11%)",id:"4",dot:"/advertise/charts-analytics/australia.png"
  },
]

export function ViewsCountry() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="relative w-full h-full flex justify-center items-center ">
      {/* 3D Perspective Container */}
      <div
        className="relative w-[478px] h-[365px] transition-transform duration-500"
        style={{
          perspective: "1000px",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
        }}
      >
      <Card className="absolute w-full h-full bg-[#DAEBE8] flex flex-col justify-between p-4" style={{ backfaceVisibility: "hidden" }}>
        <button
            onClick={() => setFlipped(true)}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#ffffff]"
              >
            <Plus className="w-6 h-6" />
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
        <ChartContainer config={chartConfig} className="w-full h-[200px] px-4">
          <div className="flex justify-center items-center ">
            {/* Pie Chart */}
            <div>
              <PieChart width={200} height={200}>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartData} dataKey="visitors" nameKey="browser" />
              </PieChart>
            </div>

            {/* Country List */}
            <div className="ml-4 space-y-2">
              {chartDatas.map((data) => (
                <div key={data.id} className="flex items-center justify-between w-full">
                 
                  <img src={data.dot} alt={data.Country} className="w-[8px] h-[7.504px] mr-2" />
                  
               
                  <div className="text-[#1E1B39] text-sm w-20">{data.Country}</div>
                  
                
                  <div className="text-sm text-[#515151] w-16">{data.percentage}</div>
                  
                
                  <div className={`text-sm ${data.livePercentage.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
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
                <div className="text-[18px] text-[#D3D3D3]">Statistics</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                Views by country
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font-Manrope font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">Etiam et convallis dolor. Praesent pulvinar molestie leo, in finibus felis porttitor eget. Suspendisse vel aliquet tellus. Cras ac venenatis mi. Maecenas lobortis nisi enim, eget accumsan risus viverra in. Nunc semper neque porta ipsum porta dignissim.
            </p>
          </Card>
    </div>
  </div>
  )
}
