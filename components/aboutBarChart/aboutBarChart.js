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
} from "recharts";

// fallback if website_id has no color
function getFallbackColorForIndex(index) {
  const hue = (index * 53) % 360;
  return `hsl(${hue}, 70%, 45%)`;
}

export default function AboutBarChart({ data, websiteColorMap = {} }) {
  const chartData = Array.isArray(data) ? data : [];

  return (
    <div className="w-full bg-[#FAFAFA] p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          barSize={49}
          barCategoryGap="10px"
          barGap={0}
        >
          {/* ✅ Define your gradient here */}
          <defs>
            <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="9.09%" stopColor="#EECA66" />
              <stop offset="95.69%" stopColor="#102341" />
            </linearGradient>
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
              value: "Average open rate",
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

          {/* Bars */}
          <Bar dataKey="value">
            {chartData.map((item, index) => {
              const color =
                websiteColorMap[item.website_id] ||
                getFallbackColorForIndex(index);

              return <Cell key={`cell-${index}`} fill={color} />;
            })}

            {/* Custom % + top line */}
            <LabelList
              dataKey="value"
              content={({ x, y, value, index }) => {
                const item = chartData[index];
                const color =
                  websiteColorMap[item.website_id] ||
                  getFallbackColorForIndex(index);

                const isGradient =
                  typeof color === "string" && color.startsWith("url");

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
                      stroke={isGradient ? "#EECA66" : color}
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
