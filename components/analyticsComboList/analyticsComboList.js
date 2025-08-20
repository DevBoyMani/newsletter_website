"use client";

import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const options = [
  { label: "Presidential Summary", value: "presidential-summary" },
  { label: "Geopolitical Summary", value: "geopolitical-summary" },
  { label: "Business History", value: "business-history" },
  { label: "Long and Short", value: "long-and-short" },
  { label: "Movie Suggestions", value: "movie-suggestions" },
  { label: "Dubai Summary", value: "dubai-summary" },
];

export default function AnalyticsComboList({ selected, onChange }) {
  // selected will be the slug (eg "geopolitical-summary")
  const selectedOption =
    options.find((o) => o.value === selected) || options[0];

  return (
    // <div className="w-full max-w-[40%]">
    //   <Listbox value={selectedOption} onChange={(opt) => onChange(opt.value)}>
    //     <div className="relative">
    //       <Listbox.Button className="relative w-full cursor-pointer text-left text-[16px] bg-[#01261E] rounded-full py-2 focus:outline-none text-[#fff] font-[400] leading-normal">
    //         <p className="ml-4">{selectedOption.label}</p>
    //         <ChevronDownIcon className="absolute right-2 top-2 h-6 w-6 text-white" />
    //       </Listbox.Button>

    //       <Listbox.Options className="absolute z-10 mt-1 w-full px-[20px] py-[10px] rounded-[10px] bg-[#01261E] text-[16px] font-[600] leading-[104%]">
    //         {options
    //           .filter((item) => item.value !== selectedOption.value) // 🚀 remove selected one
    //           .map((item) => (
    //             <Listbox.Option
    //               key={item.value}
    //               value={item}
    //               className={`text-[16px] font-[400] leading-[104%] bg-[#01261E] text-[#FFFFFF99] py-[10px] hover:text-[#fff] cursor-pointer`}
    //             >
    //               {item.label}
    //             </Listbox.Option>
    //           ))}
    //       </Listbox.Options>
    //     </div>
    //   </Listbox>
    // </div>

    <div className="w-full max-w-[40%]">
      <Listbox value={selectedOption} onChange={(opt) => onChange(opt.value)}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer text-left text-[16px] bg-[#01261E] rounded-full py-2 focus:outline-none text-[#fff] font-[400] leading-normal">
              <p className="ml-4">{selectedOption.label}</p>
              {open ? (
                <ChevronUpIcon className="absolute right-2 top-2 h-6 w-6 text-white" />
              ) : (
                <ChevronDownIcon className="absolute right-2 top-2 h-6 w-6 text-white" />
              )}
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 mt-1 w-full px-[20px] py-[10px] rounded-[10px] bg-[#01261E] text-[16px] font-[600] leading-[104%]">
              {options
                .filter((item) => item.value !== selectedOption.value)
                .map((item) => (
                  <Listbox.Option
                    key={item.value}
                    value={item}
                    className={`text-[16px] font-[400] leading-[104%] bg-[#01261E] text-[#FFFFFF99] py-[10px] hover:text-[#fff] cursor-pointer`}
                  >
                    {item.label}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </div>
        )}
      </Listbox>
    </div>
  );
}
