"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis,YAxis } from "recharts"

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
  { month: "January", desktop: 186, sales: 2800 },
  { month: "February", desktop: 305, sales: 3000 },
  { month: "March", desktop: 237, sales: 2000 },
  { month: "April", desktop: 73, sales: 2900 },
  { month: "May", desktop: 209, sales: 3600 },
  { month: "June", desktop: 214, sales: 3200 },
  { month: "July", desktop: 186, sales: 2800 },
  { month: "Augest", desktop: 305, sales: 2200 },
  { month: "September", desktop: 237, sales: 3000 },
  { month: "October", desktop: 73, sales: 2100 },
  { month: "November", desktop: 209, sales: 1300 },
  { month: "December", desktop: 214, sales: 3400 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} 

export function Component() {
  return (
    <Card className="rounded-[34px]">
      <CardHeader>
      <CardDescription>Sales 2024</CardDescription>
        <div className="flex justify-start space-x-2">
          <div>
            <h2 className="text-3xl font-semibold">$12.7k</h2>
          </div>
          <div className="mt-3">
            <p className="text-sm "><span className="bg-[#46DE46]  text-white rounded-full px-1 ">&#8599;</span><span className="ml-2 text-[#46DE46] font-bold">1.3%</span> <span className="text-gray-400">VS LAST YEAR</span></p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
  accessibilityLayer
  data={chartData}
  margin={{
    left: 12,
    right: 12,
  }}
>
  {/* Gradient Definition */}
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
  <YAxis
    tickLine={false}
    axisLine={false}
    tickMargin={8}
    orientation="right" // Moves Y-axis to the right side
    // domain={[0, 5000]} // Ensures range from 0 to 5000
    // ticks={[0, 1000, 2000, 3000, 4000, 5000]} // Sets specific tick values
    tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)} // Formats labels
  />

  <ChartTooltip
    cursor={false}
    content={<ChartTooltipContent indicator="dot" />}
  />

  {/* Apply the Gradient */}
  <Area
    dataKey="sales"
    type="basis"
    fill="url(#fadeGradient)" // Apply the gradient
    stroke="hsl(221, 90%, 23%)"
    strokeWidth={3}
  />
</AreaChart>

        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex gap-2 text-sm ">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}
