export default function HomeSocialConversations() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block bg-[#FAFAFA]">
        <div className="pt-[80px] lg:pt-[141px]">
          <div
            className="bg-[url('/home/conversations-new.png')] 
                 bg-contain lg:bg-[length:100%_auto] bg-no-repeat bg-center
                 w-full min-h-[400px] md:min-h-[600px] lg:min-h-[1058px] 2xl:min-h-[1258px] 
                 relative"
          >
            <div
              className="absolute left-[20px] md:left-[50px] lg:left-[183px] 
                   top-[40px] md:top-[80px] lg:top-[135px] 
                   w-[90%] md:w-[80%] lg:w-auto px-4 md:px-0"
            >
              <div className="flex items-center gap-[8px]">
                <div className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]">
                  <img
                    src="/home/star.png"
                    alt="star"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[#000] text-[16px] md:text-[20px] lg:text-[24px] font-[400] leading-[20px] md:leading-[22px] lg:leading-[24px] tracking-[-0.16px] md:tracking-[-0.20px] lg:tracking-[-0.24px]">
                  Introducing social media
                </p>
              </div>

              <h2
                className="mt-[12px] md:mt-[15px] lg:mt-[18px] text-[#01261E] 
                     text-[32px] md:text-[44px] lg:text-[56px] font-[400] 
                     leading-[110%] md:leading-[108%] lg:leading-[104%] 
                     tracking-[-0.96px] md:tracking-[-1.32px] lg:tracking-[-1.76px] 
                     w-full lg:w-[40%]"
              >
                Where global stories meet social conversations
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="block lg:hidden bg-[#FAFAFA]">
        <div className="pt-[40px]">
          <div
            className="relative w-full 
                 bg-[url('/home/conversations-new-home.png')]
                 bg-cover bg-no-repeat bg-center
                 min-h-[350px] sm:min-h-[400px] 
                 flex items-start justify-start"
          >
            {/* Content container */}
            <div
              className="absolute top-[20px] sm:top-[40px] left-[40px] sm:left-[85px] 
                   w-[50%] sm:w-[50%]"
            >
              {/* Tagline */}
              <div className="flex items-center gap-[8px]">
                <div className="w-[12px] h-[12px]">
                  <img
                    src="/home/star.png"
                    alt="star"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[#000] text-[12px] sm:text-[13px] font-[400] leading-[24px] tracking-[-0.24px]">
                  Introducing social media
                </p>
              </div>

              {/* Heading */}
              <h2
                className="mt-[6px]
                     text-[#01261E] 
                     text-[24px] sm:text-[26px] 
                     font-[400] leading-[107%] tracking-[-0.3px] 
                     "
              >
                Where global stories meet social conversations
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
