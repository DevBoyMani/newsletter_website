"use client";

import Link from "next/link";

const AdvertiseSidebarHomepage = () => {
  const advertiseList = [
    { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024", path: "/analytics/geopolitical-summary" },
    { name: "Presidential Summary", issue: "Geopoliticals", when: "2024", path: "/analytics/presidential-summary" },
    { name: "Long and Short", issue: "Geopoliticals", when: "2024", path: "/analytics/long-and-short" },
    { name: "Business History", issue: "Geopoliticals", when: "2024", path: "/analytics/business-history" },
    { name: "Photo Summary", issue: "Geopoliticals", when: "2024", path: "/analytics/photo-summary" },
  ];

  return (
    <>
    <div className="hidden lg:block flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when, path }, index) => (
          <div key={index} className="relative flex items-center">
            <div className="flex justify-between items-center py-1 px-6 my-1 cursor-pointer w-full hover:bg-[#121212]/10 rounded-full">
              <Link href={path} prefetch={true} className="w-full mr-4">
                <span className="text-left text-lg w-full">{name}</span>
              </Link>
              <div className="flex space-x-6 text-xs pl-6">
                <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">{issue}</span>
                <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">{when}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

{/* mobile view */}
    <div className="block lg:hidden flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when, path }, index) => (
          <div key={index} className="flex ">
            <div className="flex justify-between space-x-8 items-center py-1 my-1 cursor-pointer w-full hover:bg-[#121212]/10 rounded-full">
              <Link href={path} prefetch={true} className="w-full mr-4 ">
                <span className="text-left text-lg w-full">{name}</span>
              </Link>
              <div className="text-xs pl-6">
                
                <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">{when}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AdvertiseSidebarHomepage;

