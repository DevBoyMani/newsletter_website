export default function CareersJobCardsWeb({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
  handleImageClick,
}) {
  const isHover = hoveredIndex === index;

  return (
    <div
      key={index}
      className="group relative w-full h-[316px] text-white p-4 rounded-[14px] overflow-hidden flex flex-col justify-between cursor-pointer transform transition-transform duration-300"
      style={{
        backgroundColor: item.theme,
        "--card": item.theme,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Hover wipe animation */}
      <div
        className="pointer-events-none absolute inset-0 z-0 will-change-transform"
        style={{
          clipPath: "inset(var(--wipe, 100%) 0 0 0 round 14px)",
          transition: "clip-path 380ms cubic-bezier(0.2,0.65,0.3,0.9)",
          background: "color-mix(in oklab, var(--card) 80%, black)",
          ["--wipe"]: isHover ? "0%" : "100%",
        }}
      />

      {/* Top Label */}
      <h2 className="relative z-10 font-[manrope] text-[12px] font-[400] leading-[101%] mt-2">
        {item.name}
      </h2>

      {/* Desktop animated content */}
      <div className="relative z-10 w-full h-auto">
        <div className="relative min-h-[140px]">
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all ${
              isHover ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-[17px] font-[700] leading-[101%] py-2 text-white">
              {item.title}
            </h3>
            <p className="text-[14px] text-white/75 leading-[101%]">
              {item.experience}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <h3
              className={`text-[17px] font-[700] leading-[101%] py-2 text-white transition-[opacity,transform] duration-260 ${
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{
                transitionDelay: hoveredIndex === index ? "80ms" : "0ms",
              }}
            >
              {item.title}
            </h3>

            <p
              className={`text-[14px] text-white/85 leading-[101%] transition-[opacity,transform] duration-260 ${
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{
                transitionDelay: hoveredIndex === index ? "160ms" : "0ms",
              }}
            >
              {item.experience}
            </p>

            <p
              className={`text-[12px] text-white/95 leading-normal pt-2 transition-[opacity,transform] duration-260 ${
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{
                transitionDelay: hoveredIndex === index ? "240ms" : "0ms",
              }}
            >
              {item.content}
            </p>
            <div
              className={`pt-4 transition-[opacity,transform] duration-260 ${
                hoveredIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{
                transitionDelay: hoveredIndex === index ? "320ms" : "0ms",
              }}
            >
              <button
                onClick={() => handleImageClick(index)}
                className="w-full bg-white/25 hover:bg-white/30 text-white py-2 rounded-lg transition-colors"
              >
                {item.button}
              </button>
            </div>
          </div>
        </div>
      </div>

      <span className="pointer-events-none absolute inset-0 rounded-[14px] ring-0 ring-transparent group-hover:ring-1 group-hover:ring-white/25 transition-all" />
    </div>
  );
}
