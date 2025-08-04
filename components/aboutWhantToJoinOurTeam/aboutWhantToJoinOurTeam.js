export default function AboutWhantToJoinOurTeam() {
  return (
    <>
      {/* desktop */}

      <div className="hidden lg:block">
        <div className="py-10">
          <h2 className="w-full pb-2 text-[30px] lg:text-[56px] text-[#01261E] leading-[1.2]  text-center">
            Want to join our team?
          </h2>
          <div className="flex justify-center">
            <p className="text-[#000] w-[45%] text-center text-[18px] font-[400] leading-[150%] tracking-[0.36px]">
              If you're looking to grow in a dynamic environment and contribute
              to something greater, we invite you to explore our open positions
              and become a part of our journey.
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
      {/* <div className="block lg:hidden relative overflow-hidden">
        <div
          className="bg-[#01261E] relative pt-16 pb-10"
          style={{ borderRadius: "100px 100px 0 0" }}
        >
          <div className="relative z-20 flex flex-col items-center text-center px-4">
            <h2 className="text-[30px] font-[400] leading-[106%] mb-4 text-white">
              Want to join our
              <br /> team? We can’t
              <br /> do it alone.
            </h2>

            <a
              href="/about"
              className="bg-[#E1F4EF] text-[#01261E] text-[14px] font-[500] py-2 px-6 rounded-full mb-2"
            >
              See open positions
            </a>

            <p className="text-[#ffffff] text-[12px] font-[300] leading-[123%] tracking-[0.24px] pt-[10px]">
              and become Sagravia member
            </p>
          </div>
        </div>
      </div> */}
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
        <div className="bg-[#01261E] pt-10 pb-10 px-4 text-center">
          <h2 className="text-[30px] font-[400] leading-[106%] mb-4 text-white">
            Want to join our
            <br /> team? We can’t
            <br /> do it alone.
          </h2>

          <a
            href="/about"
            className="bg-[#E1F4EF] text-[#01261E] text-[14px] font-[500] py-2 px-6 rounded-full mb-2 inline-block"
          >
            See open positions
          </a>

          <p className="text-[#ffffff] text-[12px] font-[300] leading-[123%] tracking-[0.24px] pt-[10px]">
            and become Sagravia member
          </p>
        </div>
      </div>
    </>
  );
}
