"use client";

import { useState, useMemo } from "react";
import { Pie, PieChart, Cell } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";

// Minimal chart config so ChartContainer/chart.tsx is happy
const chartConfig = {
  opens: {
    label: "Opens",
    color: "#394E65",
  },
};

// Fallback data if API hasn't loaded
const fallbackOpensByCountry = [
  {
    country: "United States",
    totalOpens: 6808059,
    totalPercentage: 74.8,
  },
  {
    country: "United Arab Emirates",
    totalOpens: 966935,
    totalPercentage: 10.62,
  },
  {
    country: "United Kingdom",
    totalOpens: 135500,
    totalPercentage: 1.49,
  },
  {
    country: "India",
    totalOpens: 125181,
    totalPercentage: 1.38,
  },
];

const COLORS = ["#394E65", "#657C75", "#E19F20", "#582719"];

// Custom tooltip so we fully control spacing & layout
function GeoTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  const item = payload[0];
  const country = item.name;
  const value = item.value || 0;
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="flex items-center gap-2 rounded-[999px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm shadow-[0px_22px_45px_rgba(15,23,42,0.18)]">
      <span
        className="h-[10px] w-[10px] rounded-[4px]"
        style={{ backgroundColor: item.payload.fill || "#394E65" }}
      />
      <span className="font-medium text-[#111827] whitespace-nowrap">
        {country}
      </span>
      <span className="font-semibold text-[#111827]">{formatted}</span>
    </div>
  );
}

export function ViewsCountry(props) {
  const { opensByCountry = [] } = props || {};
  const [flipped, setFlipped] = useState(false);

  const data = useMemo(() => {
    const base =
      opensByCountry && opensByCountry.length
        ? opensByCountry
        : fallbackOpensByCountry;

    // Only top 4
    return base.slice(0, 4).map((item, idx) => ({
      ...item,
      value: item.totalOpens,
      fill: COLORS[idx % COLORS.length],
    }));
  }, [opensByCountry]);

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
          {/* Front Side */}
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
                <div className="text-[18px] text-[#9291A5]">Engagement</div>
                <CardDescription className="text-[22px] text-[#1E1B39] font-bold">
                  Geographic distribution
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig}
                className="w-full h-[200px] px-4"
              >
                <div className="flex justify-center items-center ">
                  {/* Pie Chart */}
                  <div>
                    <PieChart width={200} height={200}>
                      <ChartTooltip cursor={false} content={<GeoTooltip />} />
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="country"
                        innerRadius={0}
                        outerRadius={90}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={entry.country || index}
                            fill={entry.fill}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>

                  {/* Country List */}
                  <div className="ml-4 space-y-2">
                    {data.map((item, idx) => (
                      <div
                        key={item.country || idx}
                        className="flex items-center justify-between w-full"
                      >
                        <span
                          className="mr-2 h-[9px] w-[9px] rounded-full"
                          style={{ backgroundColor: item.fill }}
                        />
                        <div className="text-[#1E1B39] text-sm min-w-[120px]">
                          {item.country}
                        </div>
                        <div className="text-sm text-[#515151] w-16 text-right">
                          {item.totalPercentage?.toFixed
                            ? `${item.totalPercentage.toFixed(2)}%`
                            : `${item.totalPercentage}%`}
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
                <div className="text-[18px] text-[#D3D3D3]">Engagement</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                  Geographic distribution
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              This chart shows where our readers are located across key global
              regions. Understanding where your audience is most active helps
              you target campaigns to specific markets.
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
          {/* Front Side */}
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
                <div className="text-[11px] text-[#9291A5]">Engagement</div>
                <CardDescription className="text-[12px] text-[#1E1B39] font-bold">
                  Geographic distribution
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer config={chartConfig} className="w-full h-[120px]">
                <div className="flex justify-start items-center -ml-4">
                  {/* Pie Chart */}
                  <div className="m-0 p-0">
                    <PieChart width={140} height={140}>
                      <ChartTooltip cursor={false} content={<GeoTooltip />} />
                      <Pie
                        data={data}
                        dataKey="value"
                        nameKey="country"
                        innerRadius={0}
                        outerRadius={60}
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={entry.country || index}
                            fill={entry.fill}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </div>

                  {/* Country List */}
                  <div className="w-full space-y-2 mx-2">
                    {data.map((item, idx) => (
                      <div
                        key={item.country || idx}
                        className="flex items-center "
                      >
                        <span
                          className="mr-2 h-[5px] w-[5px] rounded-full"
                          style={{ backgroundColor: item.fill }}
                        />
                        <div className="text-[#1E1B39] text-[9px] min-w-[70px]">
                          {item.country}
                        </div>
                        <div className="text-[9px] text-[#515151] ml-4">
                          {item.totalPercentage?.toFixed
                            ? `${item.totalPercentage.toFixed(2)}%`
                            : `${item.totalPercentage}%`}
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
                <div className="text-[11px] text-[#D3D3D3]">Engagement</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Geographic distribution
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[300px] leading-[1.5]  max-w-[550px] text-[11px] pb-4 pt-4">
              This chart highlights where your audience is concentrated, helping
              you understand which regions drive the most engagement for your
              campaigns.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
