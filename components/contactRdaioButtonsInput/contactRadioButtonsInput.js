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
      <div className="group focus-within:text-[#01261E]">
        <p className="text-[#000] text-[16px] font-[600] leading-[20px]">Selected Subject?</p>
      </div>
      <div className="flex gap-6 mt-3">
        {subjects.map((subject) => (
          <label
            key={subject}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="radio"
              name="subject"
              value={subject}
              checked={value === subject}
              onChange={handleChange}
              className="peer hidden"
            />
            <span
              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center 
                ${value === subject ? 'bg-[#01261E]' : 'bg-[#E0E0E0]'}
              `}
            >
              {value === subject && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <span className="text-sm text-[#000]">{subject}</span>
          </label>
        ))}
      </div>
    </div>

    {/* mobile */}
    <div className="block lg:hidden">
      <div className="group focus-within:text-[#01261E]">
        <p className="text-[#000] text-[16px] font-[600] leading-[20px]">Selected Subject?</p>
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
         <span
              className={`w-3 h-3 mr-2 rounded-full flex items-center justify-center 
                ${value === subject ? 'bg-[#01261E]' : 'bg-[#E0E0E0]'}
              `}
            >
              {value === subject && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
          <span className="text-sm text-[#333]">{subject}</span>
        </label>
        ))}
      </div>
    </div>
    </>
  );
}
