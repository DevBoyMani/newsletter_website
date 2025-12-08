"use client";

import { Listbox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const options = [
  { label: "Presidential Summary", value: "presidential-summary" },
  { label: "Geopolitical Summary", value: "geopolitical-summary" },
  // { label: "Business History", value: "business-history" },
  // { label: "Long and Short", value: "long-and-short" },
  // { label: "Movie Suggestions", value: "movie-suggestions" },
  { label: "Dubai Summary", value: "dubai-summary" },
];

export default function AnalyticsComboList({ selected, onChange }) {
  const router = useRouter();

  // selected will be the slug (eg "geopolitical-summary")
  const selectedOption =
    options.find((o) => o.value === selected) || options[0];

  const handleChange = (opt) => {
    const value = opt?.value;
    if (!value) return;

    if (typeof onChange === "function") {
      // If parent passed a handler (old pattern), use it
      onChange(value);
    } else {
      // Fallback: navigate directly (server-page use case)
      router.push(`/analytics/${value}`);
    }
  };

  return (
    <div className="px-4 pb-[32px] pt-[2px] lg:pb-0 lg:px-0 w-full lg:max-w-[40%] z-10">
      <Listbox value={selectedOption} onChange={handleChange}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer text-left text-[16px] bg-[#01261E] rounded-full py-2 focus:outline-none text-[#fff] font-[600] lg:font-[400] leading-normal">
              <p className="ml-4">{selectedOption.label}</p>
              {open ? (
                <Image
                  src="/analytics/icon-up.png"
                  alt="Up"
                  width={12}
                  height={7}
                  className="absolute right-6 top-4"
                />
              ) : (
                <Image
                  src="/analytics/icon-down.png"
                  alt="Down"
                  width={12}
                  height={7}
                  className="absolute right-6 top-4"
                />
              )}
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 mt-1 w-full px-[20px] py-[10px] rounded-[10px] bg-[#01261E] text-[16px] font-[600] leading-[104%]">
              {options
                .filter((item) => item.value !== selectedOption.value)
                .map((item) => (
                  <Listbox.Option
                    key={item.value}
                    value={item}
                    className="text-[16px] font-[400] leading-[104%] text-[#FFFFFF99] 
                   cursor-pointer hover:text-[#fff] 
                   hover:bg-[#0B4337]
                   -mx-[20px] px-[20px] py-[10px]"
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
