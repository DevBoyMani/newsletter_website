"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

export const description =
  "A multiple line chart (Loyal, New, Unique Customers)";

const chartData = [
  { year: 2014, loyal: 0.75, new: 0.7, unique: 0.78 },
  { year: 2015, loyal: 0.72, new: 0.6, unique: 0.8 },
  { year: 2016, loyal: 0.65, new: 0.55, unique: 0.7 },
  { year: 2017, loyal: 0.7, new: 0.65, unique: 0.68 },
  { year: 2018, loyal: 0.8, new: 0.82, unique: 0.79 },
  { year: 2019, loyal: 0.78, new: 0.75, unique: 0.77 },
  { year: 2020, loyal: 0.6, new: 0.55, unique: 0.65 },
  { year: 2021, loyal: 0.58, new: 0.52, unique: 0.68 },
];

const chartConfig = {
  loyal: { label: "Loyal Customers", color: "#F5A623" },
  new: { label: "New Customers", color: "#B03C2F" },
  unique: { label: "Unique Customers", color: "#5C7D73" },
};

export default function AnalyticsPSNumberOfClicksChart() {
  return (
    <Card className="p-[24px] h-[465px]">
      <CardHeader>
        <CardTitle className="text-[22px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
          Number of clicks
        </CardTitle>
        <CardDescription className="text-[#6E6E6E] text-[14px] font-[manrope] font-[400] leading-[120.222%] pt-[19px] mt-0">
          This chart shows the total number of clicks over time, helping track
          user engagement and activity.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-[27px]">
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="year"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              domain={[0.5, 0.9]}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />

            {/* Tooltip with moving vertical line */}
            <Tooltip
              cursor={{ stroke: "#000", strokeDasharray: "3 3" }}
              content={<ChartTooltipContent />}
            />

            {/* Lines */}
            {/* <Line
              dataKey="loyal"
              type="monotone"
              stroke={chartConfig.loyal.color}
              strokeWidth={2.5}
              dot={false}
            /> */}
            <Line
              dataKey="new"
              type="monotone"
              stroke={chartConfig.new.color}
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              dataKey="unique"
              type="monotone"
              stroke={chartConfig.unique.color}
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      {/* labels */}
      <div className="flex gap-6 justify-center items-center pt-[35px]">
        {/* <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[2px] bg-[#E19F20]"></span>
          <span className="text-[12px] text-[#464E5F] font-[500] leading-normal">
            Lead Customers
          </span>
        </div> */}

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[2px] bg-[#9A4831]"></span>
          <span className="text-[12px] text-[#464E5F] font-[500] leading-normal">
            New Customers
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-[2px] bg-[#657C75]"></span>
          <span className="text-[12px] text-[#464E5F] font-[500] leading-normal">
            Unique Customers
          </span>
        </div>
      </div>
    </Card>
  );
}
