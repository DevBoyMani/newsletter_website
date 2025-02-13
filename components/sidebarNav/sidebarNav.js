// export default function SidebarNav({ listNames, activeIndex }) {
//     return (
//         <div className="md:w-1/4 text-black md:pr-10 pr-4 sticky h-screen top-0 overflow-hidden">
//             {listNames.map((name, index) => (
//                 <div 
//                     key={index} 
//                     className={`py-4 px-4 border-b-2 text-lg md:text-xl cursor-pointer transition-all duration-300 ${
//                         activeIndex === index ? "bg-green-500 text-white" : ""
//                     }`}
//                 >
//                     {name}
//                 </div>
//             ))}
//         </div>
//     );
// }


export default function SidebarNav({ listNames, activeIndex }) {
    return (
        <div className="w-1/4 sticky top-0 h-screen overflow-y-auto pr-10">
            {listNames.map((name, index) => (
                <div
                    key={index}
                    className={`py-4 px-4 border-b text-lg md:text-xl cursor-pointer transition-all
                        ${index === activeIndex ? "bg-[#CD853F] text-black" : "text-black hover:bg-[#C4A484]"}`}
                >
                    {name}
                </div>
            ))}
        </div>
    );
}
