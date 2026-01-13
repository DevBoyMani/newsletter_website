export default function advertiseMotionText() {
  return (
    <>
      {/* /desktop */}
      <div className="lg:block hidden">
        <a
          href="/contact"
          className="hidden lg:block w-[806px] border border-[#01261E] rounded-[153px] overflow-hidden relative group mt-10
      text-[#01261E] hover:bg-[#01261E] hover:text-white"
        >
          <span
            className="flex py-[31px] justify-end items-center text-[100px] font-[800] uppercase whitespace-nowrap
      animate-scroll transition-transform duration-500 ease-in-out group-hover:pause"
          >
            {Array(24).fill("ADVERTISE").join(" ")}&nbsp;
          </span>
        </a>
      </div>
      {/* mobile */}
      <div className="block lg:hidden">
        <a
          href="/contact"
          className="block lg:hidden w-full max-w-[269px] border border-[#01261E] rounded-full overflow-hidden
      relative group bg-[#01261E] text-white font-[800]"
        >
          <span
            className="flex py-2 justify-end items-center text-[37px] uppercase whitespace-nowrap
      animate-scroll-mobile transition-transform duration-500 ease-in-out group-hover:pause"
          >
            {Array(24).fill("ADVERTISE").join(" ")}&nbsp;
          </span>
        </a>
      </div>
    </>
  );
}
