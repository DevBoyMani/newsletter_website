"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  subscribers: {
    label: "Subscribers",
    color: "#8CFAE2",
  },
};

// ⬇️ Custom tooltip: same bubble + vertical line, but ONLY number on second lin
function SubscribersTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  const value = payload[0]?.value ?? 0;
  const formatted = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border flex items-stretch gap-3 text-sm">
      {/* vertical line */}
      <div className="w-[3px] rounded-full bg-[#01261E]" />

      {/* text block */}
      <div className="flex flex-col gap-1">
        <div className="font-medium text-[#111827]">{label}</div>
        {/* just the number – no 'subscribers' */}
        <div className="font-semibold text-[#111827]">{formatted}</div>
      </div>
    </div>
  );
}

export function AccountReached(props) {
  const { subscribersMonthly = [] } = props || {};
  const [flipped, setFlipped] = useState(false);

  const chartData = useMemo(
    () =>
      subscribersMonthly.map((item) => {
        const d = new Date(item.month);
        const monthLabel = isNaN(d.getTime())
          ? item.month
          : d.toLocaleString("en-US", { month: "short" }); // Jan, Feb, ...
        return {
          month: monthLabel,
          subscribers: item.count,
        };
      }),
    [subscribersMonthly]
  );

  return (
    <>
      {/* desktop view */}
      <div className="hidden lg:block relative h-full flex justify-center items-center ">
        <div
          className="relative w-full h-[365px] transition-transform duration-500 "
          style={{
            perspective: "1000px",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Side */}
          <Card
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-6 right-8  rounded-full"
            >
              <img
                src="/advertise/flip-white-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2">
                <div className="text-[18px] text-[#9291A5]">Audience</div>
                <CardDescription className="text-[22px] text-[#000] font-bold">
                  Subscriber count
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="w-full h-[200px]">
                <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#657C75"
                        stopOpacity="0.58"
                      />
                      <stop offset="100%" stopColor="#657C75" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={false} horizontal={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={{ stroke: "#000000" }}
                    tickMargin={8}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<SubscribersTooltip />}
                  />
                  <Area
                    dataKey="subscribers"
                    type="natural"
                    fill="url(#areaGradient)"
                    stroke="#657C75"
                    strokeWidth={4}
                    style={{ mixBlendMode: "multiply" }}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-8 rounded-[20px] shadow-[0px_4px_37px_0px_rgba(0,0,0,0.05)]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            <button
              onClick={() => setFlipped(false)}
              className="absolute top-6 right-8 rounded-full"
            >
              <img
                src="/advertise/flip-green-web.png"
                alt="flip not showing"
                className="w-10 h-10"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#ffffff] pb-2">
                <div className="text-[18px] text-[#D3D3D3]">Audience</div>
                <CardDescription className="text-[22px] text-[#DAEBE8] font-bold">
                  Subscriber count
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[20px] pb-4 pt-8">
              This chart illustrates the total number of active subscribers
              throughout our newsletters and how the audience has grown over
              time. A growing subscriber base means your campaigns appear in
              front of an expanding, engaged audience week after week.
            </p>
          </Card>
        </div>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden relative w-full h-full flex justify-center items-center ">
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
            className="absolute w-full h-full bg-[#fff] flex flex-col justify-between p-6 rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
            style={{ backfaceVisibility: "hidden" }}
          >
            <button
              onClick={() => setFlipped(true)}
              className="absolute top-4 right-6  rounded-full "
            >
              <img
                src="/advertise/flip-white-mob.png"
                alt="flip not showing"
                className="w-8 h-8"
              />
            </button>
            <CardHeader className="p-0">
              <div className="border-b border-[#515151] pb-2">
                <div className="text-[11px] text-[#9291A5]">Audience</div>
                <CardDescription className="text-[12px] text-[#000] font-bold">
                  Subscriber count
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ChartContainer
                config={chartConfig}
                className="w-full h-[120px] sm:h-[100px] p-0"
              >
                <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#657C75"
                        stopOpacity="0.58"
                      />
                      <stop offset="100%" stopColor="#657C75" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} horizontal={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={{ stroke: "#000000" }}
                    tickMargin={8}
                  />

                  <ChartTooltip
                    cursor={false}
                    content={<SubscribersTooltip />}
                  />
                  <Area
                    dataKey="subscribers"
                    type="natural"
                    fill="url(#areaGradient)"
                    stroke="#657C75"
                    strokeWidth={2}
                    style={{ mixBlendMode: "multiply" }}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Back Side */}
          <Card
            className="absolute w-full h-full bg-[#01261E] flex flex-col justify-start p-6 rounded-[10px] shadow-[0px_0px_7.1px_0px_rgba(0,0,0,0.16)]"
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
                <div className="text-[11px] text-[#D3D3D3]">Audience</div>
                <CardDescription className="text-[12px] text-[#DAEBE8] font-bold">
                  Subscriber count
                </CardDescription>
              </div>
            </CardHeader>
            <p className="text-[#FAFAFA] font- font-[400px] leading-[1.5]  max-w-[550px] text-[11px] pb-4 pt-4">
              This chart illustrates the total number of active subscribers
              throughout our newsletters and how the audience has grown over
              time. A growing subscriber base means your campaigns appear in
              front of an expanding, engaged audience week after week.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
