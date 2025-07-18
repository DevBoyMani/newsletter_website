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
      <div className="block lg:hidden">
        <div className="py-10">
          <h2 className="w-full pb-2 text-[30px] text-[#01261E] leading-[1.2]  text-center">
            Want to join our team?
          </h2>
          <div className="flex justify-center">
            <p className="text-[#000] w-[75%] text-center text-[14px] font-[400] leading-[123%] tracking-[0.28px]">
              If you're looking to grow in a dynamic environment and contribute
              to something greater, we invite you to explore our open positions
              and become a part of our journey.
            </p>
          </div>
          <div className="w-fit mx-auto py-6">
            <a
              href="/about"
              className="block text-center bg-[#01261E] hover:bg-[#014134] text-[#FAFAFA] text-[14px] font-[600] px-4 py-2 rounded-full w-full"
            >
              Join our team
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
