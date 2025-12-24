import Image from "next/image";
import HomeNewsletterAdsGrowMobile from "../HomeNewsletterAdsGrowMobile/HomeNewsletterAdsGrowMobile";

export default function HomeNewsletterAdsGrow() {
  return (
    <>
      {/* desktop (no motion needed) */}
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
                  When a newsletter goes out, it lands directly in thousands of
                  inboxes instantly. No waiting for social media algorithms or
                  hoping people are online at the right time.{" "}
                  <strong>Your message arrives. People read it</strong>. Simple.
                </p>
              </div>
              <div className="relative w-[50%]">
                <div className="absolute right-[18%] top-0">
                  <Image
                    src="/home/peoples.webp"
                    alt="peoples"
                    width={400}
                    height={220}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex space-x-[40px]">
            {/* Left Card */}

            <div className="w-1/2">
              <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="/home/rect-1.webp"
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
                    Ad blockers are designed to stop ads on websites, but{" "}
                    <strong>they don’t work on emails</strong>. When someone
                    subscribes to a newsletter, your message arrives as part of
                    the content they asked to receive.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card */}
            {/* w-1/2 */}
            <div className="w-1/2">
              <div className="bg-white rounded-[12px] shadow-[0_0_44px_0_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="/home/rect-2.webp"
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
                    People have trained themselves to ignore online ads and this
                    is called banner blindness. Newsletter ads appear inside the
                    reading flow, where{" "}
                    <strong>attention is already present</strong>, so they
                    actually get noticed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile: only this part needs framer-motion */}
      <HomeNewsletterAdsGrowMobile />
    </>
  );
}
