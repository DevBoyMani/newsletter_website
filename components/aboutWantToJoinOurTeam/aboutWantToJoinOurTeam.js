export default function AboutWantToJoinOurTeam() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="py-10">
          <h2 className="w-full pb-2 text-[30px] lg:text-[56px] text-[#01261E] leading-[1.2]  text-center">
            Want to join our team?
          </h2>
          <div className="flex justify-center">
            <p className="text-[#000] w-[577px] mx-auto text-center text-[18px] font-[400] leading-[150%] tracking-[0.36px]">
              We work fast, think carefully, and expect a lot from ourselves and
              from each other. If that sounds like you, take a look at our open
              positions.
            </p>
          </div>
          <div className="w-[10%] mx-auto py-6">
            <a
              href="/about"
              className="block text-center bg-[#01261E] hover:bg-[#014134] text-white text-[14px] font-[600] px-4 py-2 rounded-full w-full"
            >
              Join our team
            </a>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden relative overflow-hidden bg-[#FAFAFA] pt-[75px]">
        {/* Green background curve on top */}
        <div className="relative w-full overflow-hidden -mb-[1px]">
          <svg
            className="w-full h-[100px] block"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C150,0 350,0 500,100 L500,100 L0,100 Z"
              fill="#01261E"
            />
          </svg>
        </div>

        {/* Content block */}
        <div className="bg-[#01261E] pt-[8px] pb-[51px] px-4 text-center">
          <h2 className="text-[30px] font-[400] leading-[106.68%] text-white">
            Want to join our
            <br /> team? We can’t
            <br /> do it alone.
          </h2>

          <div className="pt-[30px]">
            <a
              href="/about"
              className="bg-[#E1F4EF] text-[#01261E] text-[14px] font-[500] py-2 px-5 rounded-full mb-2 inline-block"
            >
              See open positions
            </a>
          </div>

          {/* <p className="text-[#ffffff] text-[12px] font-[300] leading-[123%] tracking-[0.24px] pt-[10px]">
            and become Sagravia member
          </p> */}
        </div>
      </div>
    </>
  );
}
