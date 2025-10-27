export default function HomeSocialConversations() {
  return (
    <>
      {/* desktop */}

      {/* <div className="bg-[#FAFAFA]">
        <div className="pt-[141px]">

          <div
            className="bg-[url('/home/conversations.png')] 
                 bg-cover bg-no-repeat 
                 min-h-[1058px] w-full relative"
          >
     
            <div className="absolute left-[183px] top-[135px]">
              <div className="flex items-center gap-[8px]">
                <div className="w-[18px] h-[18px]">
                  <img
                    src="/home/star.png"
                    alt="star"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[#000] text-[24px] font-[400] leading-[24px] tracking-[-0.24px]">
                  Introducing social media
                </p>
              </div>

              <h2 className="mt-[18px] text-[#01261E] text-[56px] font-[400] leading-[104%] tracking-[-1.76px] w-[40%]">
                Where global stories meet social conversations
              </h2>
            </div>
          </div>
        </div>
      </div>
       */}
      <div className="bg-[#FAFAFA]">
        <div className="pt-[80px] lg:pt-[141px]">
          <div
            className="bg-[url('/home/conversations.png')] 
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
    </>
  );
}
