import Link from "next/link";
import { useState } from "react";

const AdvertiseSidebar = ({ activeSlug, onSelect }) => {
  // const [selectedSlug, setSelectedSlug] = useState(activeSlug);

  const advertiseList = [
    { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024" },
    { name: "Presidential Summary", issue: "Geopoliticals", when: "2024" },
    { name: "Long and Short", issue: "Geopoliticals", when: "2024" },
    { name: "Business History", issue: "Geopoliticals", when: "2024" },
    { name: "Photo Summary", issue: "Geopoliticals", when: "2024" },
    { name: "New Users", issue: "Geopoliticals", when: "2024" },
    { name: "Returning Users", issue: "Geopoliticals", when: "2024" },
    { name: "Organic Search", issue: "Geopoliticals", when: "2024" },
    { name: "Social Media", issue: "Geopoliticals", when: "2024" },
    { name: "Direct Traffic", issue: "Geopoliticals", when: "2024" },
  ];

  const formatSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when }) => {
          const slug = formatSlug(name);

          return (
            <div key={slug} className="relative flex items-center ">
              <div
                onClick={() => onSelect(slug)}
                className={`flex justify-between items-center py-1 px-6 my-1  cursor-pointer w-full
                  ${activeSlug === slug ? "bg-[#121212]/20 rounded-full" : " "}
                `}
              >
                <Link href={`/advertise/${slug}`} className="w-full mr-4">
                  <span className="text-left text-lg w-full">{name}</span>
                </Link>
                <div className="flex space-x-6 text-xs pl-6">
                  <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">
                    {issue}
                  </span>
                  <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">
                    {when}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvertiseSidebar;
