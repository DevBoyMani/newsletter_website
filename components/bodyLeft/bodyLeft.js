import Link from "next/link";

export default function BodyLeft({
  scrollPercent,
  sectionsWithContent,
  activeIndex,
  handleClick,
}) {
  return (
    <div className="max-w-[21%] w-full sticky top-24 self-start">
      <p className="text-[12px] font-[400] pb-2 mt-1">{scrollPercent}%</p>
      <div className="bg-[#DAEBE8] py-[20px] px-[15px] rounded-[5px]">
        <p className="text-[#000] text-[15px] font-[600] pb-6">
          Table of content
        </p>
        <div className="flex flex-col space-y-4">
          {sectionsWithContent.map((item, index) => (
            <Link
              key={index}
              href={`#section-${index}`}
              scroll={true}
              onClick={(e) => {
                e.preventDefault();
                handleClick(index);
              }}
              className="text-[12px] leading-[143%]"
            >
              <p
                className={`cursor-pointer ${
                  activeIndex === index
                    ? "text-[#000] font-[400]"
                    : "text-[#676A71] font-[400]"
                }`}
              >
                {activeIndex === index && <span className="pr-2">→</span>}
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
