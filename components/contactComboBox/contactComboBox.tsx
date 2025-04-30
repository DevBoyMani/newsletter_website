'use client'

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Select...' },
  { id: 2, name: 'Google' },
  { id: 3, name: 'Social Media' },
  { id: 4, name: 'Friend' },
  { id: 5, name: 'Other' },
]

export default function ContactComboBox() {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="pt-2">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxButton
            className={clsx(
              'relative w-full cursor-default bg-white text-left text-[14px] border-b border-[#8D8D8D] p-1.5 focus:outline-none focus:border-b-1 focus:border-[#01261E]'
            )}
          >
            {selected.name}
            <ChevronDownIcon
              className="pointer-events-none absolute inset-y-0 right-2 top-2.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none text-sm">
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className={({ active }) =>
                  clsx(
                    'cursor-default select-none px-4 py-2',
                    active ? 'bg-[#DAEBE8] text-[#01261E]' : 'text-gray-900'
                  )
                }
              >
                {({ selected }) => (
                  <span className="flex items-center gap-2">
                    <CheckIcon
                      className={clsx(
                        'h-4 w-4',
                        selected ? 'text-[#01261E]' : 'invisible'
                      )}
                      aria-hidden="true"
                    />
                    {person.name}
                  </span>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  )
}
