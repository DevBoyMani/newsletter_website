'use client';

import { Listbox } from '@headlessui/react';
import { useState } from 'react';

const countries = [
  {
    name: 'United States',
    code: '+1',
    flag: (
      <svg fill="none" aria-hidden="true" className="h-4 w-4 me-2" viewBox="0 0 20 15">
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <mask id="a" mask-type="luminance" x="0" y="0" width="20" height="15">
          <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        </mask>
        <g mask="url(#a)">
          <path
            fill="#D02F44"
            fillRule="evenodd"
            d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
            clipRule="evenodd"
          />
          <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
        </g>
      </svg>
    ),
  },
  {
    name: 'United Kingdom',
    code: '+44',
    flag: (
      <svg className="h-4 w-4 me-2" fill="none" viewBox="0 0 20 15">
        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
        <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
        <path fill="#E6273E" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" />
      </svg>
    ),
  },
];

export default function ContactPhoneNumberSelection({ value, onChange }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    // Combine country code + user input
    onChange(`${selectedCountry.code} ${phoneValue}`);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center">
        <Listbox value={selectedCountry} onChange={(country) => {
          setSelectedCountry(country);
          // Update with new country code + current phone digits
          const digits = value.replace(/^\+\d+\s*/, ''); // strip old code
          onChange(`${country.code} ${digits}`);
        }}>
          <div className="relative">
            <Listbox.Button className="shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-[#01261E]">
              {selectedCountry.flag}
              {selectedCountry.code}
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-52 overflow-auto rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none text-sm z-10">
              {countries.map((country, index) => (
                <Listbox.Option
                  key={index}
                  value={country}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? 'bg-gray-100' : 'text-gray-700'
                    }`
                  }
                >
                  <span className="inline-flex items-center">
                    {country.flag}
                    {country.name} ({country.code})
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>

        <input
          type="tel"
          placeholder="123-456-7890"
          value={value.replace(/^\+\d+\s*/, '')} // show only digits
          onChange={handlePhoneChange}
          className="ml-2 text-[#8D8D8D] border-b border-[#8D8D8D] focus:outline-none focus:border-[#01261E] block w-full px-4 py-1.5"
        />
      </div>
    </div>
  );
}
