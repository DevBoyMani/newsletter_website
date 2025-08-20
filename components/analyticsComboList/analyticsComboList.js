"use client";

import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const options = [
  { label: "Presidential Summary", value: "presidential-summary" },
  { label: "Geopolitical Summary", value: "geopolitical-summary" },
  { label: "Dubai Summary", value: "dubai-summary" },
  { label: "Movie Suggestions", value: "movie-suggestions" },
  { label: "Business History", value: "business-history" },
];

export default function AnalyticsComboList({ selected, onChange }) {
  // selected will be the slug (e.g. "geopolitical-summary")
  const selectedOption =
    options.find((o) => o.value === selected) || options[0];

  return (
    <div className="w-full max-w-[40%]">
      <Listbox value={selectedOption} onChange={(opt) => onChange(opt.value)}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer text-left text-[16px] bg-[#01261E] rounded-full py-2 focus:outline-none text-white">
            <p className="ml-4">{selectedOption.label}</p>
            <ChevronDownIcon className="absolute right-2 top-2 h-6 w-6 text-white" />
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-1 w-full py-4 rounded-[10px] bg-[#0B4337] text-[16px] font-[600] leading-[104%]">
            {options.map((item) => (
              <Listbox.Option
                key={item.value}
                value={item}
                className={({ active }) =>
                  `cursor-pointer px-4 py-2 ${
                    active ? "bg-[#116150] text-white" : "text-white"
                  }`
                }
              >
                {item.label}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
