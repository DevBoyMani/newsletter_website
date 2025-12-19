"use client";

import { Listbox } from "@headlessui/react";
import { useState, useEffect } from "react";
import countries from "../../data/countries/countries";

export default function ContactPhoneNumberSelection({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [localNumber, setLocalNumber] = useState("");

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://geolocation-db.com/json/");
        const data = await res.json();
        const match = countries.find((c) => c.code === data.country_code);
        setSelectedCountry(match || countries.find((c) => c.code === "US"));
      } catch {
        setSelectedCountry(countries.find((c) => c.code === "US"));
      }
    };
    detectCountry();
  }, []);

  // whenever country or local number changes, send full phone
  useEffect(() => {
    if (!localNumber) {
      onChange("");
      return;
    }

    const dial = (selectedCountry.dial_code || "").replace(/^\+/, ""); // "+1" -> "1"
    onChange(`${dial} ${localNumber}`); // "1 9238923"
  }, [selectedCountry, localNumber]);

  return (
    <div className="lg:max-w-md mx-auto">
      <div className="flex items-center">
        <Listbox value={selectedCountry} onChange={setSelectedCountry}>
          <div className="relative">
            <Listbox.Button className="shrink-0 inline-flex items-center py-1.5 text-[#8D8D8D] text-[14px] border-b border-[#8D8D8D] focus:outline-none focus:border-[#01261E]">
              {selectedCountry.flag}
              <span className="ml-1">{selectedCountry.dial_code}</span>
              <svg className="w-2.5 h-2.5 ms-2.5" viewBox="0 0 10 6">
                <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-52 overflow-auto rounded-lg bg-white shadow-md">
              {countries.map((country, index) => (
                <Listbox.Option
                  key={index}
                  value={country}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  {country.flag} {country.name} ({country.dial_code})
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <input
          type="tel"
          value={localNumber}
          onChange={(e) => setLocalNumber(e.target.value)}
          className="border-b text-[14px] border-[#8D8D8D] w-full px-4 py-1.5 focus:outline-none focus:border-[#01261E]"
        />
      </div>
    </div>
  );
}
