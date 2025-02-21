import Link from "next/link";

const AdvertiseSidebarHomepage = () => {
  const advertiseList = [
    { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024" },
    { name: "Presidential Summary", issue: "Geopoliticals", when: "2024" },
    { name: "Long and Short", issue: "Geopoliticals", when: "2024" },
    { name: "Business History", issue: "Geopoliticals", when: "2024" },
    { name: "Photo Summary", issue: "Geopoliticals", when: "2024" },
  ];

  return (
    <div className="flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when }, index) => (
          <div key={index} className="relative flex items-center ">
            <div className="flex justify-between items-center py-1 px-6 my-1 transition-all cursor-pointer w-full">
              <Link href="#" className="w-full mr-4">
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
  );
};

export default AdvertiseSidebarHomepage;
