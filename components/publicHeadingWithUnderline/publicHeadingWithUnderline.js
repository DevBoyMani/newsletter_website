export default function PublicHeadingWithUnderline({ text }) {
  return (
    <div>
      <h2 className="w-full text-[30px] lg:text-[56px] text-[#01261E] border-b-2 border-[#01261E] leading-[1.2] ">
        {text}
      </h2>
    </div>
  );
}
