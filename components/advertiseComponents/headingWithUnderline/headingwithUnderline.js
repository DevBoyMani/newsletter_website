export default function HeadingWithUnderline({ text }) {
  return (
    <div>
      <h2 className="w-full pb-2 text-[30px] lg:text-[56px] text-[#01261E] border-b border-[#01261E] leading-[1.2] ">
        {text}
      </h2>
    </div>
  );
}
