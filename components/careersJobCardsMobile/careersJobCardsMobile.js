export default function CareersJobCardsMobile({
  item,
  index,
  // hoveredIndex,
  setHoveredIndex,
  handleImageClick,
}) {
  return (
    <div
      className="group relative w-full h-[270px] text-white p-3 rounded-[10px] flex flex-col justify-between cursor-pointer lg:hidden"
      style={{ backgroundColor: item.theme }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Top Label */}
      <h2 className="font-[manrope] text-[12px] font-[400] leading-[101%] mt-2">
        {item.name}
      </h2>

      {/* Title + Experience */}
      <div className="mt-4">
        <h5 className="text-[14px] font-[700] leading-[101%]">{item.title}</h5>
        <p className="text-[12px] text-white/60 font-[400] leading-[101%] py-1">
          {item.experience}
        </p>
      </div>

      {/* Content that grows */}
      <div className="flex-1">
        <p className="text-[11px] leading-normal text-white/90">
          {item.content}
        </p>
      </div>

      {/* Button at bottom */}
      <div className="pt-4">
        <button
          onClick={() => handleImageClick(index)}
          className="text-[12px] w-full bg-white/10 text-white py-1.5 rounded-[6px]"
        >
          {item.button}
        </button>
      </div>
    </div>
  );
}
