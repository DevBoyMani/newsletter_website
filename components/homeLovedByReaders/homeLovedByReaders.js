export default function HomeLovedByReaders() {
  return (
    <>
      {/* desktop */}
      <div className="bg-[#FAFAFA]">
        <div className="pt-[110px] pb-[80px] px-[165px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-[56px] text-[#01261E] font-[400] leading-[48px] tracking-[-1.2px]">
              Loved by readers
            </h2>
            <p className="pt-[26px] text-center text-[19px] text-[#161C2D] font-[400] leading-[32px] tracking-[-0.2px] w-[50%]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          {/* cards */}
          <div className="pt-[56px]">
            <div className="flex gap-[30px] items-stretch">
              <div className="flex-1">
                <div className="h-full bg-[#fff] border border-[#E7E9ED] rounded-[10px] flex flex-col">
                  <div className="px-[33px] pt-[32px] pb-[25px] flex flex-col flex-1">
                    <div className="w-[54px] h-[54px]">
                      <img
                        src="/home/l-b-r-gs-logo.png"
                        alt="GS"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-[#161C2D] text-[21px] font-[400] leading-[32px] tracking-[-0.5px] pt-[24px]">
                      “It always keeps me updated even on the go and every day I
                      find news I hadn't heard anywhere else. Keep up the good
                      work and let the haters hate.It always keeps me updated
                      even on the go and every day I find news I hadn't heard
                      anywhere else. Keep up the good work and let the haters
                      hate.”
                    </p>
                    <div className="flex-1" />
                    <p className="text-[#161C2D] text-[17px] font-[400] leading-[29px] tracking-[-0.2px] pt-[23px] mt-auto">
                      Michael Albert
                      <span className="ml-[9px] text-[rgba(22,28,45,0.7)]">
                        Altanta, Georgia
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="h-full bg-[#fff] border border-[#E7E9ED] rounded-[10px] flex flex-col">
                  <div className="px-[33px] pt-[32px] pb-[25px] flex flex-col flex-1">
                    <div className="w-[54px] h-[54px]">
                      <img
                        src="/home/l-b-r-ps-logo.png"
                        alt="GS"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-[#161C2D] text-[21px] font-[400] leading-[32px] tracking-[-0.5px] pt-[24px]">
                      “I am a newsletter writer too and I was too lazy to
                      subscribe to your newsletter but I am now proud to say I
                      am a convert”
                    </p>
                    <div className="flex-1" />
                    <p className="text-[#161C2D] text-[17px] font-[400] leading-[29px] tracking-[-0.2px] pt-[23px] mt-auto">
                      Dr Miro Bada
                      <span className="ml-[9px] text-[rgba(22,28,45,0.7)]">
                        Austin, Texas
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="h-full bg-[#fff] border border-[#E7E9ED] rounded-[10px] flex flex-col">
                  <div className="px-[33px] pt-[32px] pb-[25px] flex flex-col flex-1">
                    <div className="w-[54px] h-[54px]">
                      <img
                        src="/home/l-b-r-gs-logo.png"
                        alt="GS"
                        className="w-full h-full"
                      />
                    </div>
                    <p className="text-[#161C2D] text-[21px] font-[400] leading-[32px] tracking-[-0.5px] pt-[24px]">
                      “I'm getting more of my kids to read this. Sometimes don't
                      agree with your analysis. But real professionals
                      understand that we have nothing without a dialectic and
                      robust debate.”
                    </p>
                    <div className="flex-1" />
                    <p className="text-[#161C2D] text-[17px] font-[400] leading-[29px] tracking-[-0.2px] pt-[23px] mt-auto">
                      Nickoai Pokrovsky
                      <span className="ml-[9px] text-[rgba(22,28,45,0.7)]">
                        Franklin Lakes, NJ
                      </span>
                    </p>
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
