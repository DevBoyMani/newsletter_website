import Link from "next/link";
import { useState } from "react";

const AdvertiseSidebar = ({ activeSlug, onSelect }) => {
  // const [selectedSlug, setSelectedSlug] = useState(activeSlug);

  const advertiseList = [
    { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024",sourceLink:"https://www.geopoliticalsummary.com/", },
    { name: "Presidential Summary", issue: "Geopoliticals", when: "2024",sourceLink:"https://www.presidentialsummary.com/" },
    { name: "Long and Short", issue: "Geopoliticals", when: "2024",sourceLink:"https://www.longandshort.com/" },
    { name: "Business History", issue: "Geopoliticals", when: "2024",sourceLink:"https://www.businesshistory.co/" },
    { name: "Photo Summary", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "New Users", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Returning Users", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Organic Search", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Social Media", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Direct Traffic", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Summary", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Summary1", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Long", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Business", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Photo", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Users", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Returning", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Organic", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Socials", issue: "Geopoliticals", when: "2024",sourceLink:"" },
    { name: "Direct", issue: "Geopoliticals", when: "2024",sourceLink:"" },
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
    <div className="block lg:hidden flex justify-start px-4 ">
      <div className="h-full w-full py-4 space-y-2 ">
        {advertiseList.map(({ name, issue, when,sourceLink }) => {
          const slug = formatSlug(name);

          return (
            <div key={slug} className="relative flex items-center ">
              <div
                onClick={() => onSelect(slug)}
                className={`flex justify-between items-center py-1 px-4 my-1  cursor-pointer w-full
                  ${activeSlug === slug ? "bg-[#121212]/20 rounded-full " : "hover:bg-[#121212]/10 rounded-full "}
                `}
              >
                <Link href={`/advertise/${slug}`} prefetch={true} className="w-[192px] mr-4">
                  <span className="text-left text-base w-full">{name}</span>
                </Link>

                <div className="flex space-x-6 text-xs">
                  <span className="bg-[#121212]/20 rounded-3xl px-2 py-1 font-medium">
                    {when}
                  </span>
                  {activeSlug === slug && (
                      <Link href={sourceLink} target="_blank" prefetch={true} className="mt-1">
                      <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">
                        &#8599;
                      </span>
                      </Link>
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
