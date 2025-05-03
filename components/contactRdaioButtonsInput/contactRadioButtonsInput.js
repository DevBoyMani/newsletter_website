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
           className="peer hidden"
         />
         <span className={`w-3 h-3 inline-block rounded-full border-2 border-[#E0E0E0] mr-2 ${value === subject ? 'bg-[#01261E]' : ''}`}></span>
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
            className="peer hidden"
          />
          <span className={`w-3 h-3 inline-block rounded-full border-2 border-[#E0E0E0] mr-2 ${value === subject ? 'bg-[#01261E]' : ''}`}></span>
          <span className="text-sm text-[#333]">{subject}</span>
        </label>
        ))}
      </div>
    </div>
    </>
  );
}
