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

export default function HomeScrollNumberOfSubscribersChart() {
  return (
    <>
      {/* desktop */}
      <div className="lg:block hidden">
        <Card className="p-[30px]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114.423%]">
              Number of subscribers
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[120.222%] pt-[6px] mt-0">
              This chart illustrates the growth in the number of subscribers
              over time, reflecting audience interest and retention.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[15px]">
            <ChartContainer config={chartConfig} className="w-full h-[156px]">
              <LineChart
                data={chartData}
                margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  fontSize={11}
                />
                <YAxis
                  domain={[0.5, 0.9]}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  width={25}
                  fontSize={11}
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
                {/* <Line
              dataKey="new"
              type="monotone"
              stroke={chartConfig.new.color}
              strokeWidth={2.5}
              dot={false}
            /> */}
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
          <div className="flex gap-6 justify-center items-center pt-[9.5px]">
            <div className="flex items-center gap-2">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#657C75]"></span>
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Unique Customers
              </span>
            </div>
          </div>
        </Card>
      </div>
      {/* mobile */}
      <div className="block lg:hidden bg-[#fff]">
        <Card className="px-[16px] pt-[16px] rounded-[5px] h-full shadow-[0px_4px_37px_rgba(0,0,0,0.05)]">
          <CardHeader>
            <CardTitle className="text-[16px] text-[#000] font-[manrope] font-[600] leading-[114%]">
              Number of subscribers
            </CardTitle>
            <CardDescription className="text-[#6E6E6E] text-[12px] font-[manrope] font-[400] leading-[145%] pt-[6px] mt-0">
              This chart illustrates the growth in the number of subscribers
              over time, reflecting audience interest and retention.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-[10px]">
            <div className="w-[100%]  overflow-visible">
              <ChartContainer config={chartConfig} className="w-full h-[125px]">
                <LineChart
                  data={chartData}
                  margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                  width={500}
                >
                  <CartesianGrid vertical={false} stroke="#E5E7EB" />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fontSize: 8, fill: "#77838F" }}
                  />
                  <YAxis
                    domain={[0.5, 0.9]}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fontSize: 8, fill: "#77838F" }}
                    width={25}
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
                  {/* <Line
              dataKey="new"
              type="monotone"
              stroke={chartConfig.new.color}
              strokeWidth={2.5}
              dot={false}
            /> */}
                  <Line
                    dataKey="unique"
                    type="monotone"
                    stroke={chartConfig.unique.color}
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>

          {/* labels */}
          <div className="flex gap-[10px] justify-center items-center pb-[16px] pt-[7px]">
            <div className="flex items-center gap-2">
              <span className="w-[9px] h-[9px] rounded-[2px] bg-[#657C75]"></span>
              <span className="text-[9px] text-[#464E5F] font-[500] leading-normal">
                Unique Customers
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
