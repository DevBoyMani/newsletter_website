"use client"

import { TrendingUp } from "lucide-react"
import {
  Cell,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
}

const barColors = [
  "#4D3060",
  "#6A6F5B",
  "#8E3321",
  "#06266D",
  "#F9D342",
]

export function AboutBarChart() {
  return (
    <Card className="bg-[#FAFAFA] lg:p-6 lg:mx-0 mx-auto border-none shadow-none">
      <ChartContainer config={chartConfig}>
        <BarChart width={600} height={300} data={chartData} className="">
          {/* ✅ Move defs here */}
          <defs>
            {chartData.map((_, index) => {
              const color = barColors[index % barColors.length]
              return (
                <linearGradient
                  id={`barGradient-${index}`}
                  key={`grad-${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={color} stopOpacity={1} />
                  <stop offset="20%" stopColor={color} stopOpacity={0.7} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.2} />
                </linearGradient>
              )
            })}
          </defs>

          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="none"
            tickLine={false}
            tickMargin={10}
            axisLine={true}
            label={{
              value: "Newsletters",
              position: "insideBottom",
              offset: -5,
              style: {
                fill: "#000",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "109.922%",
                textAnchor: "middle"
              },
            }}
          />
          <YAxis
            tick={false}
            tickLine={false}
            axisLine={true}
            tickMargin={8}
            label={{
              value: "Number of newsletters",
              angle: -90,
              position: "insideLeft",
              offset: 25,
              style: {
                fill: "#000",
                fontSize: 12,
                fontWeight: 600,
                lineHeight: "109.922%",
                textAnchor: "middle"
              },
            }}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" radius={0}>
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#barGradient-${index})`}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
