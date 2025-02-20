import Link from "next/link";
import { useState } from "react";

const AdvertiseSidebar = ({ activeSlug }) => {
  const [selectedSlug, setSelectedSlug] = useState(activeSlug);

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
    <div className="flex justify-start space-x-2">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when }) => {
          const slug = formatSlug(name);

          return (
            <div key={slug} className="relative flex items-center">
              <div
                onClick={() => setSelectedSlug(slug)}
                className={`flex justify-between items-center py-2 px-3 transition-all cursor-pointer w-full
                  ${selectedSlug === slug ? "bg-gray-400 rounded-full" : "hover:bg-gray-300 rounded-full"}
                `}
              >

                <Link href={`/advertise/${slug}`} className="w-full">
                  <span className="text-left text-lg w-full">{name}</span>
                </Link>
                <div className="flex space-x-4 text-sm pl-6">
                  <span className="bg-gray-100 rounded-3xl px-2 py-1">{issue}</span>
                  <span className="bg-gray-100 rounded-3xl px-2 py-1">{when}</span>
                </div>
              </div>

              {selectedSlug === slug && (
                <span className="absolute right-[-18px] text-xl text-black">•</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdvertiseSidebar;
