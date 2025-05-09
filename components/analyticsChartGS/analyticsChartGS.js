'use client'

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis,ResponsiveContainer } from "recharts";
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

const chartData = [
  { month: "January", sales: 2800 },
  { month: "February", sales: 3000 },
  { month: "March", sales: 2000 },
  { month: "April", sales: 2900 },
  { month: "May", sales: 3600 },
  { month: "June", sales: 3200 },
  { month: "July", sales: 2800 },
  { month: "Augest", sales: 3000 },
  { month: "September", sales: 2000 },
  { month: "October", sales: 2900 },
  { month: "November", sales: 3600 },
  { month: "December", sales: 3200 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--chart-1))",
  },
};

export function AnalyticsChartGS() {
  const [flipped, setFlipped] = useState(false);
  // const [showBack, setShowBack] = useState(false);

  return (

    <>
    {/* desktop view */}
    <div className="hidden lg:block relative w-[98%] h-[467px] perspective-1000 ">
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <Card
          className="absolute w-full h-full rounded-[20px] bg-white flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
            <button
                onClick={() => setFlipped(true)}
                className="absolute top-6 right-10 p-2 rounded-full bg-[#D2DCF4]  "
              >
                <Plus className="w-6 h-6 relative top-0 " />
              </button>
              <CardHeader>
            <div className="text-sm  mt-10 text-[#9291A5]">
              <p>Sales 2024</p>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <h2 className="text-3xl font-bold">$12.7k</h2>
                <p className="text-sm mt-3">
                  <span className="bg-[#46DE46] text-white rounded-full px-1">&#8599;</span>
                  <span className="ml-2 text-[#46DE46] font-bold">1.3%</span>
                  <span className="ml-2 text-xs text-gray-400 tracking-widest"> VS LAST YEAR</span>
                </p>
              </div>
              <div className="">
                <div className="flex space-x-2 pl-8 pr-4">
                  <a className="text-xs leading-[1.4] bg-[#ffffffc0] px-2 py-1 rounded-full">Daily</a>
                  <a className="text-xs leading-[1.4] bg-[#ffffffc0] px-2 py-1 rounded-full">Weekly</a>
                  <a className="text-xs leading-[1.4] text-white bg-[#1E1B39] px-2 py-1 rounded-full">Annually</a>
                </div>

              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer className="w-[98%] h-[240px]" config={chartConfig}>
              <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                <defs>
                  <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(221, 90%, 23%)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="hsl(221, 90%, 23%)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis 
                dataKey="month"
                 tickLine={false} 
                 axisLine={false}
                 tickMargin={8} 
                 tickFormatter={(value) => value.slice(0, 3)}
                 />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} orientation="right" tickFormatter={(v) => `${v / 1000}k`} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Area dataKey="sales" type="basis" fill="url(#fadeGradient)" stroke="hsl(221, 90%, 23%)" strokeWidth={3} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          className="absolute w-full h-full rounded-[20px] bg-[#D2DCF4] flex flex-col justify-center items-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <button
            onClick={() => setFlipped(false)}
            className="absolute top-4 right-10 p-2 rounded-full bg-white "
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute top-20">
          <h4 className="text-[41px] font-bold mb-2">Line chart</h4>
          </div>
          <div>
            <p className="text-gray-600 text-center w-[578px] h-[185] py-8 text-xl">Nullam egestas, lorem eget placerat sodales, risus nunc condimentum nisl, nec euismod lorem lacus sed mi. Maecenas et quam semper, facilisis quam ac, pulvinar arcu. Aliquam feugiat lobortis ex vel finibus. Mauris sodales arcu eget odio placerat aliquam sed vitae justo. </p>
          </div>
        </Card>
      </div>
    </div>

    {/* mobile view */}
    <div className="block lg:hidden relative">
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
      {!flipped ? (
        // 👉 FRONT SIDE
        <Card style={{ backfaceVisibility: "hidden" }} className="w-[90%] h-[190px] rounded-[20px] bg-white flex flex-col mx-auto shadow-lg">
          <CardHeader className="px-4 pt-4 pb-2 relative">
            {/* Toggle Button */}
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#D2DCF4]"
            >
              <Plus className="w-3 h-3" />
            </button>
            <div className="text-[9px] text-[#9291A5] pt-2">
              <p>Sales 2024</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <h2 className="text-[13px] font-bold">$12.7k</h2>
                <p className="text-[4px] flex items-center">
                  <span className="bg-[#46DE46] text-white rounded-full px-1">&#8599;</span>
                  <span className="ml-1 text-[#46DE46] font-bold">1.3%</span>
                  <span className="ml-1 text-[4px] text-gray-400 tracking-widest">VS LAST YEAR</span>
                </p>
              </div>
              <div>
                <div className="flex space-x-1">
                  <a className="text-[5px] bg-[#ffffffc0] px-2 py-1 rounded-full">Daily</a>
                  <a className="text-[5px] bg-[#ffffffc0] px-2 py-1 rounded-full">Weekly</a>
                  <a className="text-[5px] text-white bg-[#1E1B39] px-2 py-1 rounded-full">Annually</a>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* <ChartContainer className="w-[100%] h-[60%] mx-auto" config={chartConfig}>
              <AreaChart data={chartData} margin={{ left: 1, right: -20 }}>
                <defs>
                  <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(221, 90%, 23%)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="hsl(221, 90%, 23%)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={6}
                  tickFormatter={(value) => value.slice(0, 3)}
                  className="text-[8px]"
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={6}
                  orientation="right"
                  tickFormatter={(v) => `${v / 1000}k`}
                  className="text-[10px]"

                />
                <ChartTooltipContent indicator="dot" />
                <Area
                  dataKey="sales"
                  type="basis"
                  fill="url(#fadeGradient)"
                  stroke="hsl(221, 90%, 23%)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ChartContainer> */}
            <div className="w-full h-[113px] sm:h-[250px] mx-auto p-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ left: 1, right: -20 }}>
                  <defs>
                    <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(221, 90%, 23%)" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="hsl(221, 90%, 23%)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={6}
                    tickFormatter={(value) => value.slice(0, 3)}
                    className="text-[8px]"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={6}
                    orientation="right"
                    tickFormatter={(v) => `${v / 1000}k`}
                    className="text-[10px]"
                  />
                  <ChartTooltipContent indicator="dot" />
                  <Area
                    dataKey="sales"
                    type="basis"
                    fill="url(#fadeGradient)"
                    stroke="hsl(221, 90%, 23%)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
          </div>


          </CardContent>
        </Card>
      ) : (
        //  BACK SIDE
        <Card style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }} className="w-[90%] h-[190px] rounded-[20px] bg-[#D2DCF4] flex flex-col justify-center items-center shadow-lg p-4 relative mx-auto">
          {/* Close Button */}
          <button
            onClick={() => setFlipped(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="text-center">
            <h4 className="text-[16px] font-[GT-Super-Txt-Trial] mb-2">Line chart</h4>
            <p className="text-gray-600 text-[9px] px-4 leading-[16px]">
            Nullam egestas, lorem eget placerat sodales, risus nunc condimentum nisl, nec euismod lorem lacus sed mi.
            Maecenas et quam semper, facilisis quam ac, pulvinar arcu. Aliquam feugiat lobortis ex vel finibus.
          </p>
          </div>
        </Card>
      
      )}
      </div>
    </div>
    </>

    
  );
}
