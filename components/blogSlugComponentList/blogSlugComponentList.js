"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const options = [
  "Table of content", // index 0
  "Summary", // index 1
  "Is social media marketing better ", // 2
  "What is newsletter advertising?", // 3
  "Advantages of Newsletter Advertising", // 4
  "Final Thoughts", // 5
];

export default function BlogSlugComponentList({ onItemClick }) {
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (value) => {
    setSelected(value);

    const index = options.findIndex((option) => option === value);
    if (index > 0 && onItemClick) {
      // skip "Table of content" since it's just a label
      onItemClick(index);
    }
  };

  return (
    <div className="w-full max-w-full">
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative">
          <Listbox.Button
            className={`relative w-full cursor-pointer text-left text-[16px] bg-[#01261E] rounded-full py-2 focus:outline-none ${
              selected !== "Table of content" ? "text-[#FFF]" : "text-[#FFF]"
            }`}
          >
            <p className="ml-4">{selected}</p>
            <ChevronDownIcon className="absolute right-2 top-2.5 h-5 w-5 text-[#FFF]" />
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 w-full py-4 rounded-[10px] bg-[#0B4337] text-[16px] font-[600] leading-[104%]">
            {options.map((item, idx) => (
              <Listbox.Option
                key={idx}
                value={item}
                className={({ active }) =>
                  `cursor-pointer px-4 py-2 ${
                    active ? "bg-[#0B4337] text-[#FFF]" : "text-[#FFF]"
                  }`
                }
              >
                {({ selected }) => (
                  <span className="flex items-center gap-2">{item}</span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
