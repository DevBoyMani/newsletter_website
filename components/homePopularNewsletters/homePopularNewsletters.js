import Link from "next/link";
import HeadingWithUnderline from "../../components/readersPageComponents/stuff/headingWithUnderline/headingwithUnderline";
export default function HomePopularNewsletters() {
  return (
    <>
      {/* desktop */}
      <div className="bg-[#FAFAFA]">
        <div className="pt-[70px] pb-[82px] px-[110px]">
          <h2 className="text-[56px] text-[#01261E] font-[400] leading-[100%] ">
            Popular newsletters
          </h2>
          <div className="flex justify-between pt-[35px]">
            <p className="w-[42%] text-[#737373] text-[16px] font-[400] leading-[149%]">
              We are the top digital marketing agency for branding corp. We
              offer a full range of services to help clients improve their
              search engine rankings and drive more traffic to their websites.
            </p>
            <Link
              href="/readers#ourNewsletters"
              className="mt-8 text-[18px] text-[#000] font-[400] leading-[104%] hover:underline"
            >
              All newsletters &rarr;
            </Link>
          </div>

          {/* card */}
          <div className="flex lg:flex-row flex-col gap-[24px] pt-[35px] w-full">
            {/* 1 */}
            <div className="flex-1 bg-[#FFF] rounded-[10px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
              <div className="p-[32px]">
                <div className="flex justify-between">
                  <img
                    src="/home/ps-dot.png"
                    alt="PS"
                    className="w-[14px] h-[14px]"
                  />
                  <p className="text-[#878C91] text-[14px] font-[500] leading-[160%]">
                    Daily news
                  </p>
                </div>
                <p className="pt-[24px] text-[#010205] text-[26px] font-[600] leading-[150%] tracking-[-0.78px]">
                  Presidential Summary
                </p>
                <div className="pt-[56px] flex justify-between items-center gap-[19px]">
                  {/* w-[68%] */}
                  <p className="w-[220px] text-[#878C91] text-[14px] font-[500] leading-[160%]">
                    We are the top digital marketing agency for branding corp.
                    We offer a full rang engine.
                  </p>
                  {/* w-[32%] */}
                  <div className="w-[88px]">
                    <button className="group relative w-full flex justify-center items-center border border-[#01261E] hover:bg-[#0B4337] rounded-[70px] py-[8px] px-[32px] transition-all duration-300 hover:scale-[1.05]">
                      <img
                        src="/home/r-arr.png"
                        alt="Green Arrow"
                        className="w-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src="/home/w-r-arr.png"
                        alt="White Arrow"
                        className="w-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-1 bg-[#FFF] rounded-[10px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
              <div className="p-[32px]">
                <div className="flex justify-between">
                  <img
                    src="/home/gs-dot.png"
                    alt="PS"
                    className="w-[14px] h-[14px]"
                  />
                  <p className="text-[#878C91] text-[14px] font-[500] leading-[160%]">
                    Daily news
                  </p>
                </div>
                <p className="pt-[24px] text-[#010205] text-[26px] font-[600] leading-[150%] tracking-[-0.78px]">
                  Geopolitical Summary
                </p>
                <div className="pt-[56px] flex justify-between items-center gap-[19px]">
                  {/* w-[68%] */}
                  <p className="w-[220px] text-[#878C91] text-[14px] font-[500] leading-[160%]">
                    Working with this digital marketing agency has been a true
                    partnership.
                  </p>
                  {/* w-[32%] */}
                  <div className="w-[88px]">
                    <button className="group relative w-full flex justify-center items-center border border-[#01261E] hover:bg-[#0B4337] rounded-[70px] py-[8px] px-[32px] transition-all duration-300 hover:scale-[1.05]">
                      <img
                        src="/home/r-arr.png"
                        alt="Green Arrow"
                        className="w-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src="/home/w-r-arr.png"
                        alt="White Arrow"
                        className="w-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-1 bg-[#FFF] rounded-[10px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
              <div className="p-[32px]">
                <div className="flex justify-between">
                  <img
                    src="/home/bh-dot.png"
                    alt="PS"
                    className="w-[14px] h-[14px]"
                  />
                  <p className="text-[#878C91] text-[14px] font-[500] leading-[160%]">
                    Daily news
                  </p>
                </div>
                <p className="pt-[24px] text-[#010205] text-[26px] font-[600] leading-[150%] tracking-[-0.78px]">
                  Business History
                </p>
                <div className="pt-[56px] flex justify-between items-center gap-[19px]">
                  {/* w-[68%] */}
                  <p className="w-[220px] text-[#878C91] text-[14px] font-[500] leading-[160%]">
                    What sets this digital marketing agency apart is their
                    commitment to transparency.
                  </p>
                  {/* w-[32%] */}
                  <div className="w-[88px]">
                    <button className="group relative w-full flex justify-center items-center border border-[#01261E] hover:bg-[#0B4337] rounded-[70px] py-[8px] px-[32px] transition-all duration-300 hover:scale-[1.05]">
                      <img
                        src="/home/r-arr.png"
                        alt="Green Arrow"
                        className="w-6 absolute transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <img
                        src="/home/w-r-arr.png"
                        alt="White Arrow"
                        className="w-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </button>
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
