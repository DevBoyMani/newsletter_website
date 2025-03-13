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
    <>
    {/* desktop view */}
    <div className="hidden lg:block flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when }) => {
          const slug = formatSlug(name);

          return (
            <div key={slug} className="relative flex items-center ">
              <div
                onClick={() => onSelect(slug)}
                className={`flex justify-between items-center py-1 px-6 my-1  cursor-pointer w-full
                  ${activeSlug === slug ? "bg-[#121212]/20 rounded-full" : "hover:bg-[#121212]/10 rounded-full"}
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


{/* mobile view */}
    <div className="block lg:hidden flex justify-start">
      <div className="h-full py-4 space-y-2 px-4">
        {advertiseList.map(({ name, issue, when }) => {
          const slug = formatSlug(name);

          return (
            <div key={slug} className="relative flex items-center ">
              <div
                onClick={() => onSelect(slug)}
                className={`flex justify-between items-center py-1 px-6 my-1  cursor-pointer w-full
                  ${activeSlug === slug ? "bg-[#121212]/20 rounded-full " : "hover:bg-[#121212]/10 rounded-full "}
                `}
              >
                <Link href={`/advertise/${slug}`} className="w-full mr-4">
                  <span className="text-left text-base w-full">{name}</span>
                </Link>
                <div className="flex space-x-6 text-xs pl-6">
                  <span className="bg-[#121212]/20 rounded-3xl px-2 py-1 font-medium">
                    {when}
                  </span>
                  {activeSlug === slug && (
                      <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">
                        &#8599;
                      </span>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default AdvertiseSidebar;
