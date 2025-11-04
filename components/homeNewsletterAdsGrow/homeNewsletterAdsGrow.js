export default function HomeNewsletterAdsGrow() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="py-[70px] px-[118px]">
          <div className="mx-auto text-center ">
            <h3 className="font-[Manrope] text-[#000] text-[24px] font-[400] leading-[24px] tracking-[-0.24px] ">
              Why brands use newsletter ads to grow
            </h3>
          </div>
          {/* 1 */}
          <div className="py-[40px]">
            <div className="flex rounded-[12px] bg-[#fff] h-[220px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
              <div className="pl-[30px] pt-[54px] pb-[52px] w-[50%]">
                <div className="flex">
                  <img
                    src="/home/reach-everyone-logo.png"
                    alt="peoples"
                    className="w-6 h-6"
                  />
                  <p className="pl-4 text-[18px] font-[400] leading-normal tracking-[0.2px]">
                    Reach everyone the same day
                  </p>
                </div>
                <p className="w-[85%] pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                  When a newsletter goes out, it lands in thousands of inboxes
                  instantly. No waiting for social media algorithms or hoping
                  people are online at the right time.
                </p>
              </div>
              <div className="w-[50%]">
                <div className="absolute right-[18%]">
                  <img
                    src="/home/peoples.png"
                    alt="peoples"
                    className="h-[220px] "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          {/* <div>
            <div className="flex space-x-[40px]">
              <div className="w-[50%]">
                <div className="flex flex-col bg-[#fff] rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
                  <div className="h-[342px] max-h-[400px]">
                    <img
                      src="/home/rect-1.png"
                      alt="ad blocker"
                      className="w-full h-full"
                    />
                    <div className="p-[25px]">
                      <div className="flex">
                        <img
                          src="/home/reach-everyone-logo.png"
                          alt="peoples"
                          className="w-6 h-6"
                        />
                        <p className="pl-4 text-[#000] text-[18px] font-[400] tracking-[0.2px]">
                          Ad blockers don’t stop email ads
                        </p>
                      </div>
                      <p className="text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px] pt-[15px]">
                        Your ad goes straight to the inbox, so it’s seen by real
                        people, not blocked or hidden like most online ads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[50%]">
                <div className="flex flex-col bg-[#fff] rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)]">
                  <div className="h-[342px] max-h-[400px]">
                    <img
                      src="/home/rect-1.png"
                      alt="ad blocker"
                      className="w-full h-full"
                    />
                    <div className="p-[25px]">
                      <div className="flex">
                        <img
                          src="/home/reach-everyone-logo.png"
                          alt="peoples"
                          className="w-6 h-6"
                        />
                        <p className="pl-4 text-[#000] text-[18px] font-[400] tracking-[0.2px]">
                          Ad blockers don’t stop email ads
                        </p>
                      </div>
                      <p className="text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px] pt-[15px]">
                        Your ad goes straight to the inbox, so it’s seen by real
                        people, not blocked or hidden like most online ads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* 2 */}
          <div className="flex space-x-[40px]">
            {/* Left Card */}

            <div className="w-1/2">
              <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="/home/rect-1.png"
                  alt="ad blocker"
                  className="w-full object-cover"
                />
                <div className="p-[25px]">
                  <div className="flex items-center">
                    <img
                      src="/home/ad-blocker-red.png"
                      alt="icon"
                      className="w-6 h-6"
                    />
                    <p className="pl-4 text-[#000] text-[18px] font-[400] tracking-[0.2px]">
                      Ad blockers don’t stop email ads
                    </p>
                  </div>
                  <p className="pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                    Your ad goes straight to the inbox, so it’s seen by real
                    people, not blocked or hidden like most online ads.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            {/* w-1/2 */}
            <div className="w-1/2">
              <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="/home/rect-2.png"
                  alt="newsletter reach"
                  className="w-full object-cover"
                />
                <div className="p-[25px]">
                  <div className="flex items-center">
                    <img src="/home/ad.png" alt="icon" className="w-6 h-6" />
                    <p className="pl-4 text-[#000] text-[18px] font-[400] tracking-[0.2px]">
                      No banner blindness
                    </p>
                  </div>
                  <p className="pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                    People actually notice newsletter ads because they appear
                    inside content they already enjoy reading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  mobile */}
      <div className="block lg:hidden bg-[#FAFAFA]">
        <div className="py-[50px] px-6">
          {/* Heading */}
          <div className="text-center mb-10">
            <h3 className="font-[Manrope] text-[#000] text-[24px] font-[400] leading-[28px] tracking-[-0.24px] text-center">
              Why brands use
              <br /> newsletter ads to grow
            </h3>
          </div>

          {/* Card 1 */}
          <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden mb-8 relative">
            {/* Image at top-right */}
            <div className="relative">
              <img src="/home/peoples-mobile.png" alt="peoples" className="" />
            </div>

            {/* Content */}
            <div className="p-[25px]">
              <div className="flex items-start">
                <img
                  src="/home/reach-everyone-logo.png"
                  alt="peoples"
                  className="w-6 h-6"
                />
                <p className="pl-3 text-[18px] font-[500] leading-normal tracking-[0.2px] text-[#000]">
                  Reach everyone the same day
                </p>
              </div>
              <p className="pt-[12px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                When a newsletter goes out, it lands in thousands of inboxes
                instantly. No waiting for algorithms or hoping people are online
                at the right time.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden mb-8">
            <img
              src="/home/rect-1.png"
              alt="ad blocker"
              className="w-full object-cover"
            />
            <div className="p-[25px]">
              <div className="flex items-center">
                <img
                  src="/home/ad-blocker-red.png"
                  alt="icon"
                  className="w-6 h-6"
                />
                <p className="pl-4 text-[#000] text-[18px] font-[500] tracking-[0.2px]">
                  Ad blockers don’t stop email ads
                </p>
              </div>
              <p className="pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                Your ad goes straight to the inbox, so it’s seen by real people
                — not blocked or hidden.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
            <img
              src="/home/rect-2.png"
              alt="newsletter reach"
              className="w-full object-cover"
            />
            <div className="p-[25px]">
              <div className="flex items-center">
                <img src="/home/ad.png" alt="icon" className="w-6 h-6" />
                <p className="pl-4 text-[#000] text-[18px] font-[500] tracking-[0.2px]">
                  No banner blindness
                </p>
              </div>
              <p className="pt-[15px] text-[#878C91] text-[16px] font-[500] leading-[22.4px] tracking-[0.2px]">
                People notice newsletter ads because they appear inside content
                they already enjoy reading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
