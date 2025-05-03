"use client";

export default function ContactRadioButtonsInput({ value, onChange }) {
  const subjects = ['Advertisements', 'Reader', 'Newsletters', 'Others'];

  const handleChange = (event) => {
    onChange(event.target.value); // send value to parent
  };

  return (
    <>
    {/* desk top */}
    <div className="hidden lg:block mt-10">
      <div>
        <p className="text-[#000] text-[14px] font-[600] leading-[20px]">Selected Subject?</p>
      </div>
      <div className="flex gap-4 mt-2">
        {subjects.map((subject) => (
          <label key={subject} className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="subject"
              value={subject}
              checked={value === subject}
              onChange={handleChange}
              className="appearance-none w-3 h-3 rounded-full bg-[#E0E0E0] checked:bg-[#01261E] checked:bg-[url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 24 24\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M20 6L9 17L4 12\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>')] bg-center bg-no-repeat mr-2"
            />
            <span className="text-sm text-[#333]">{subject}</span>
          </label>
        ))}
      </div>
    </div>

    {/* mobile */}
    <div className="block lg:hidden">
      <div>
        <p className="text-[#000] text-[14px] font-[600] leading-[20px]">Selected Subject?</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {subjects.map((subject) => (
          <label key={subject} className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="subject"
              value={subject}
              checked={value === subject}
              onChange={handleChange}
              className="appearance-none w-3 h-3 rounded-full bg-[#E0E0E0] checked:bg-[#01261E] checked:bg-[url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 24 24\' fill=\'white\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M20 6L9 17L4 12\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>')] bg-center bg-no-repeat mr-2"
            />
            <span className="text-sm text-[#333]">{subject}</span>
          </label>
        ))}
      </div>
    </div>
    </>
  );
}
