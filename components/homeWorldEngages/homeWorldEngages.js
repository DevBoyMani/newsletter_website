import AnalyticsPSNumberOfClicksChart from "@/components/analyticsPSNumberOfClicksChart/analyticsPSNumberOfClicksChart";
import HomeAutoScrollImages from "../homeAutoScrollCharts/homeAutoScrollCharts";
import HomeAutoScrollCharts from "../homeAutoScrollCharts/homeAutoScrollCharts";

export default function HomeWorldEngages() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="pt-[85px] pb-[70px] px-[110px]">
          {/* 1 */}
          <div className="flex justify-between">
            <h2 className="text-[56px] text-[#01261E] font-[400] leading-[100%] ">
              See how the world engages
              <br /> with news
            </h2>
            <p className="text-[#878C91] text-right w-[38%] mt-10 text-[15px] font-[500] leading-[140%]">
              Understanding your audience means understanding the world. Our
              analytics go beyond numbers - they reveal how, when, and where
              people engage with global stories.
            </p>
          </div>
          {/* 2 */}
          <div className="pt-[63px] overflow-hidden">
            <div className="flex flex-row justify-between items-stretch gap-[4vw] xl:gap-[106px]">
              {/* Left side - Carousel */}
              <div className="flex-1 flex justify-center items-center min-w-0">
                <div
                  className="relative w-full"
                  style={{
                    aspectRatio: "16/9",
                    minHeight: "320px",
                    maxHeight: "600px",
                  }}
                >
                  <HomeAutoScrollCharts />
                </div>
              </div>

              {/* Right side - Text section */}
              <div className="flex-1 min-w-0">
                <div
                  className="relative w-full bg-[url('/home/map-bg-3.png')] bg-contain xl:bg-cover bg-no-repeat bg-center"
                  style={{
                    aspectRatio: "16/9",
                    maxHeight: "600px",
                    minHeight: "320px",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col justify-start mt-[8px]">
                    <div className="px-[3vw] xl:pl-[85px] xl:pr-[12px] pt-[25px] pb-[20px]">
                      <h2
                        className="font-[manrope] font-[500] text-[#151515] tracking-[-0.33px]"
                        style={{
                          fontSize: "clamp(22px, 2vw, 33px)",
                          lineHeight: "1.2",
                        }}
                      >
                        Global Reader Analytics
                        <br /> anywhere around the world
                      </h2>
                      <p
                        className="mt-[16px] text-[#000] tracking-[-0.57px]"
                        style={{
                          fontSize: "clamp(15px, 1.2vw, 19px)",
                          lineHeight: "1.45",
                        }}
                      >
                        By tracking readership across continents, time zones,
                        and topics, we uncover the trends that shape public
                        interest and influence discourse.
                      </p>
                      <button
                        className="mt-[34px] w-fit flex items-center gap-[10px] bg-[#01261E] hover:bg-[#0B4337] text-white py-1 px-7 rounded-[70px] font-[400] leading-[30px] tracking-[-0.15px]"
                        style={{
                          fontSize: "clamp(14px, 1vw, 16px)",
                        }}
                      >
                        View analytics <span className="text-[14px]">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
