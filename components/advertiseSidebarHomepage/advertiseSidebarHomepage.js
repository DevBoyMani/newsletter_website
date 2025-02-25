// import Link from "next/link";
// import { useState } from "react";

// const AdvertiseSidebarHomepage = () => {
//   const advertiseList = [
//     { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024",path:"/advertise/geopolitical-summary" },
//     { name: "Presidential Summary", issue: "Geopoliticals", when: "2024",path:"/advertise/presidential-summary" },
//     { name: "Long and Short", issue: "Geopoliticals", when: "2024",path:"/advertise/long-and-short" },
//     { name: "Business History", issue: "Geopoliticals", when: "2024",path:"/advertise/business-history" },
//     { name: "Photo Summary", issue: "Geopoliticals", when: "2024",path:"/advertise/photo-summary" },
//   ];

//   return (
//     <div className="relative flex items-center ">
//       <div className="h-full py-4 space-y-2">
//         {advertiseList.map(({ name, issue, when },path, index) => (
//           <div key={index} className="relative flex items-center ">
//             <div className="flex justify-between items-center py-1 px-6 my-1 transition-all cursor-pointer w-full">
//               <Link href={path} className="w-full ">
//                 <span className="text-left text-lg w-full">{name}</span>
//               </Link>
//               <div className="flex space-x-6 text-xs pl-6">
//                 <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">{issue}</span>
//                 <span className="bg-[#121212]/20 rounded-3xl px-2 py-1">{when}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdvertiseSidebarHomepage;




import Link from "next/link";

const AdvertiseSidebarHomepage = () => {
  const advertiseList = [
    { name: "Geopolitical Summary", issue: "Geopoliticals", when: "2024", path: "/advertise/geopolitical-summary" },
    { name: "Presidential Summary", issue: "Geopoliticals", when: "2024", path: "/advertise/presidential-summary" },
    { name: "Long and Short", issue: "Geopoliticals", when: "2024", path: "/advertise/long-and-short" },
    { name: "Business History", issue: "Geopoliticals", when: "2024", path: "/advertise/business-history" },
    { name: "Photo Summary", issue: "Geopoliticals", when: "2024", path: "/advertise/photo-summary" },
  ];

  return (
    <div className="flex justify-start">
      <div className="h-full py-4 space-y-2">
        {advertiseList.map(({ name, issue, when, path }, index) => (
          <div key={index} className="relative flex items-center">
            <div className="flex justify-between items-center py-1 px-6 my-1 cursor-pointer w-full hover:bg-[#121212]/10 rounded-full">
              <Link href={path} className="w-full mr-4">
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

