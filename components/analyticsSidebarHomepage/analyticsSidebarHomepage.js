"use client";

import Link from "next/link";

const AnalyticsSidebarHomepage = () => {
  const advertiseList = [
    { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024", path: "/analytics/geopolitical-summary" },
    { name: "Presidential Summary", issue: "Geopoliticals", when: "2024", path: "/analytics/presidential-summary" },
    { name: "Long and Short", issue: "Geopoliticals", when: "2024", path: "/analytics/long-and-short" },
    { name: "Business History", issue: "Geopoliticals", when: "2024", path: "/analytics/business-history" },
    { name: "Photo Summary", issue: "Geopoliticals", when: "2024", path: "/analytics/photo-summary" },
    { name: "New Users", issue: "Geopoliticals", when: "2024",path: "/analytics/new-users" },
    { name: "Returning Users", issue: "Geopoliticals", when: "2024",path: "/analytics/returning-users" },
    { name: "Organic Search", issue: "Geopoliticals", when: "2024",path: "/analytics/organic-search" },
    { name: "Social Media", issue: "Geopoliticals", when: "2024",path: "/analytics/social-media" },
    { name: "Direct Traffic", issue: "Geopoliticals", when: "2024",path: "/analytics/direct-traffic" },
    { name: "Summary", issue: "Geopoliticals", when: "2024",path: "/analytics/summary" },
    { name: "Summary1", issue: "Geopoliticals", when: "2024",path: "/analytics/summary1" },
    { name: "Long", issue: "Geopoliticals", when: "2024",path: "/analytics/long" },
    { name: "Business", issue: "Geopoliticals", when: "2024",path: "/analytics/business" },
    { name: "Photo", issue: "Geopoliticals", when: "2024",path: "/analytics/photo" },
    { name: "Users", issue: "Geopoliticals", when: "2024",path: "/analytics/users" },
    { name: "Returning", issue: "Geopoliticals", when: "2024",path: "/analytics/returning" },
    { name: "Organic", issue: "Geopoliticals", when: "2024",path: "/analytics/organic" },
    { name: "Socials", issue: "Geopoliticals", when: "2024",path: "/analytics/socials" },
    { name: "Direct", issue: "Geopoliticals", when: "2024",path: "/analytics/direct" },
   
  ];

  return (
    <>
    <div className="hidden lg:block flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when, path }, index) => (
          <div key={index} className="relative flex items-center w-[80%]">
            <div className="flex justify-start items-center py-1 px-4 my-1 cursor-pointer w-full hover:bg-[#121212]/10 rounded-full">
              <Link href={path} prefetch={true} className="w-[60%]">
                <span className="text-left text-[17px] leading-normal font-[400]">{name}</span>
              </Link>
              <div className="flex space-x-6 text-[11px] pl-6">
                <span className="bg-[#121212]/20 rounded-full px-2 py-1">{issue}</span>
                <span className="bg-[#121212]/20 rounded-full px-2 py-1">{when}</span>
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

export default AnalyticsSidebarHomepage;

