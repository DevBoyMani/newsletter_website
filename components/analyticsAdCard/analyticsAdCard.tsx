export default function AnalyticsAdCard() {
  return (
    <div className="h-[308px] max-w-md rounded-[20px] p-10 bg-gradient-to-br from-[#116150] to-[#01261E] text-[#fff]">
      <h4 className="text-[22px] font-[600] leading-[22px] tracking-[0.5px] font-[manrope] pb-[20px]">
        Advertise with Sagravia
      </h4>
      <p className="text-[14px] font-[400] leading-[139%] text-[#fff] pb-[19px]">
        Promote your brand to a targeted, engaged audience. We offer flexible ad
        options to fit your goals and budget.
      </p>
      <p className="text-[14px] leading-[139%] text-[#fff] pb-[36px]">
        Email us at{" "}
        <span className="font-[700] text-[#fff]">sales@sagravia.com</span> or
        click the button below.
      </p>

      <div className="flex gap-4">
        <button className="bg-[#fff] text-[#01261E] text-[14px] font-[600] py-[9px] px-[18px] rounded-full">
          Contact sales
        </button>
        <button className="border border-[#fff] text-[#fff] text-[14px] font-[600] py-[9px] px-[18px] rounded-full">
          Visit website
        </button>
      </div>
    </div>
  );
}
