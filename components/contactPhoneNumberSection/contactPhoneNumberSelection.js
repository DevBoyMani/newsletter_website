"use client";

import { Listbox } from "@headlessui/react";
import { useState, useEffect } from "react";
import countries from "../../data/countries/countries";

export default function ContactPhoneNumberSelection({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://geolocation-db.com/json/");
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        const countryCode = data.country_code; // e.g., "IN", "US"
        const match = countries.find((c) => c.code === countryCode);
        if (match) {
          setSelectedCountry(match);
        } else {
          // fallback if country not found
          const fallback = countries.find((c) => c.code === "US");
          if (fallback) setSelectedCountry(fallback);
        }
      } catch (error) {
        console.error("Failed to detect country:", error);
        const fallback = countries.find((c) => c.code === "US");
        if (fallback) setSelectedCountry(fallback);
      }
    };

    detectCountry();
  }, []);

  const handlePhoneChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="lg:max-w-md mx-auto">
      <div className="flex items-center">
        <Listbox value={selectedCountry} onChange={setSelectedCountry}>
          <div className="relative">
            <Listbox.Button className="shrink-0 z-10 inline-flex items-center py-1.5   text-[#8D8D8D] text-[14px] border-b border-[#8D8D8D] focus:outline-none focus:border-[#01261E]">
              {selectedCountry.flag}
              <span className="ml-1">{selectedCountry.dial_code}</span>
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Listbox.Button>
            <Listbox.Options className="text-[14px] absolute mt-1 max-h-60 w-52 overflow-auto rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              {countries.map((country, index) => (
                <Listbox.Option
                  key={index}
                  value={country}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? "bg-gray-100" : "text-gray-700"
                    }`
                  }
                >
                  <span className="inline-flex items-center">
                    {country.flag}
                    {country.name} ({country.dial_code})
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <input
          type="tel"
          placeholder=""
          value={value}
          onChange={handlePhoneChange}
          className={`border-b text-[14px] border-[#8D8D8D] rounded-none focus:outline-none focus:border-[#01261E] block w-[100%] px-4 py-1.5 focus:placeholder-transparent group focus-within:text-[#01261E] ${
            value ? "text-[#1A1A1A]" : "text-[#8D8D8D]"
          }`}
        />
      </div>
    </div>
  );
}
