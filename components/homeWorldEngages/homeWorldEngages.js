import AnalyticsPSNumberOfClicksChart from "@/components/analyticsPSNumberOfClicksChart/analyticsPSNumberOfClicksChart";
export default function HomeWorldEngages() {
  return (
    <>
      {/* desktop */}
      <div className="bg-[#FAFAFA]">
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
          <div className="pt-[63px]">
            <div className="flex justify-between">
              {/* left */}
              <div className="w-[40%]">
                <AnalyticsPSNumberOfClicksChart />
              </div>
              {/* right */}
              {/* <div className="w-[40%] flex flex-col justify-center">
                <h2 className="font-[manrope] text-[33px] font-[500] text-[#151515] leading-[37px] tracking-[-0.33px]">
                  Global Reader Analytics anywhere around the world
                </h2>
                <p className="mt-[16px] text-[19px] text-[#000] leading-[145%] tracking-[-0.57px]">
                  By tracking readership across continents, time zones, and
                  topics, we uncover the trends that shape public interest and
                  influence discourse.
                </p>
                <button className="mt-6 w-[fit-content] flex items-center gap-2 bg-[#01261E] hover:bg-[#0B4337] text-white py-3 px-6 rounded-[70px]">
                  View analytics <span className="text-[20px]">→</span>
                </button>
              </div> */}
              <div
                className="w-[50%] flex flex-col justify-center 
             bg-[url('/home/map-bg-2.png')] 
             bg-cover bg-center bg-no-repeat"
              >
                <div className="pl-[85px] pt-[25px] pb-[20px] pr-[12px]">
                  <h2 className="font-[manrope] text-[33px] font-[500] text-[#151515] leading-[37px] tracking-[-0.33px]">
                    Global Reader Analytics
                    <br /> anywhere around the world
                  </h2>
                  <p className="mt-[16px] text-[19px] text-[#000] leading-[145%] tracking-[-0.57px]">
                    By tracking readership across continents, time zones, and
                    topics, we uncover the trends that shape public interest and
                    influence discourse.
                  </p>
                  <button className="mt-[34px] w-[fit-content] flex items-center gap-[10px] bg-[#01261E] hover:bg-[#0B4337] text-white py-1 px-7 rounded-[70px] text-[16px] font-[500] leading-[30px] tracking-[-0.15px]">
                    View analytics <span className="text-[14px]">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
