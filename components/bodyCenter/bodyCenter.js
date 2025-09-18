export default function BodyCenter({ sectionsWithContent, sectionRefs }) {
  return (
    <div className="md:w-[55%] w-full flex flex-col gap-8 pl-[37px] pr-[64px]">
      {sectionsWithContent.map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="scroll-mt-28"
        >
          <p className="text-[#000] text-[30px] font-[500] leading-[120%] pb-2 pt-6">
            {section.title}
          </p>
          <div>{section.content}</div>
        </div>
      ))}
    </div>
  );
}
