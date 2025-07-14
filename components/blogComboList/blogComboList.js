"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";

const options = [
  "All",
  "Basics",
  "Advertising",
  "Analytics",
  "Case Study",
  "Inside Sagravia",
  "Perspectives",
];

export default function BlogComboList() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full max-w-full">
      <Listbox value={selected} onChange={setSelected}>
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
                  <span className="flex items-center gap-2">
                    {/* <CheckIcon
                      className={`h-4 w-4 ${
                        selected ? "text-[#FFF]" : "invisible"
                      }`}
                    /> */}
                    {item}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
