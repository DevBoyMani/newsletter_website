export default function CareersAssignmentPopup({
  selectedIndex,
  closeSidebar,
  images,
}) {
  const item = images[selectedIndex];

  return (
    <div
      className="fixed inset-0 bg-[#121212CC] flex justify-end items-center z-50 px-4"
      onClick={closeSidebar}
    >
      <div
        className="w-full md:w-[27%] bg-[#DAEBE8] shadow-lg relative flex flex-col lg:mr-4 mx-6 mt-8 rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto pb-6 px-6 pt-4">
          <div className="flex justify-end">
            <button
              onClick={closeSidebar}
              className="w-7 h-7 text-xl text-black flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          <p className="text-[16px] font-[300] leading-[108%] tracking-[0.32px] uppercase text-[#000]">
            {item.popupVenue}
          </p>

          <h4 className="text-[22px] font-[500] leading-[108%] tracking-[0.88px] text-[#020715] py-2">
            {item.title}
          </h4>

          <p className="text-[16px] text-[#000] font-[300] leading-[108%] tracking-[0.64px]">
            {item.popupSalary}
          </p>

          <p className="text-[#000] text-[14px] font-[400] leading-[135%] pt-4 pb-4">
            {item.popupContent1}
          </p>

          <p className="text-sm text-black">{item.popupContent2}</p>

          <div className="flex justify-end mt-4">
            <a
              href={`/careers/${item.slug}`}
              className="flex justify-center w-full px-14 py-2 bg-[#01261E] text-white text-[18px] font-[500] rounded-[6px] hover:bg-[#014134] transition"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
