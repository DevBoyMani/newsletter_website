"use client";

import {
  Cell,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Tooltip,
} from "recharts";

const chartData = [
  { name: "A", value: 83 },
  { name: "B", value: 53 },
  { name: "C", value: 40 },
  { name: "D", value: 83 },
  { name: "E", value: 19 },
];

const barColors = [
  "#4D3060", // purple
  "#6A6F5B", // green
  "#8E3321", // red
  "#06266D", // blue
  "#F9D342", // yellow
];

export default function AboutBarChart() {
  return (
    <div className="w-full bg-[#FAFAFA] p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          barSize={49}
          barCategoryGap="10px"
          barGap={0}
        >
          {/* Gradients for each bar */}
          <defs>
            {chartData.map((_, index) => {
              const color = barColors[index % barColors.length];
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
                  <stop offset="100%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              );
            })}
          </defs>

          {/* Grid + axes */}
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="name"
            tick={false}
            tickLine={false}
            axisLine={true}
            label={{
              value: "Newsletters",
              position: "insideBottom",
              offset: -5,
              style: {
                fill: "#000",
                fontSize: 12,
                fontWeight: 600,
                textAnchor: "middle",
              },
            }}
          />
          <YAxis
            domain={[0, 100]}
            tick={false}
            tickLine={false}
            axisLine={true}
            label={{
              value: "Number of newsletters",
              angle: -90,
              position: "insideLeft",
              offset: 25,
              style: {
                fill: "#000",
                fontSize: 12,
                fontWeight: 600,
                textAnchor: "middle",
              },
            }}
          />

          {/* Tooltip if needed */}
          <Tooltip cursor={false} />

          {/* Bars */}
          <Bar dataKey="value">
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={`url(#barGradient-${index})`} />
            ))}

            {/* Custom % + top line */}
            <LabelList
              dataKey="value"
              content={({ x, y, value, index }) => {
                const color = barColors[index % barColors.length];
                return (
                  <>
                    {/* % value */}
                    <text
                      x={x + 25}
                      y={y - 15}
                      textAnchor="middle"
                      fill="#000"
                      fontSize={14}
                      fontWeight={600}
                    >
                      {value}%
                    </text>
                    {/* cap line */}
                    <line
                      x1={x + 10}
                      x2={x + 40}
                      y1={y - 5}
                      y2={y - 5}
                      stroke={color}
                      strokeWidth={4}
                      strokeLinecap="round"
                    />
                  </>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
