// import { ChevronDown } from "lucide-react";
// import { useState } from "react";



// const accordionData = [
//   { id: "item-1", title: "Recruitment team chat", content: "Yes. It adheres to the WAI-ARIA design pattern.", step: 1 },
//   { id: "item-2", title: "Team member interview", content: "Help your new team understand your field of knowledge.", step: 2 },
//   { id: "item-3", title: "Technical exercise", content: "Yes. It's animated by default, but you can disable it if you prefer.", step: 3 },
//   { id: "item-4", title: "Leadership chat", content: "Yes. It's animated by default, but you can disable it if you prefer.", step: 4 },
//   { id: "item-5", title: "Offer time", content: "Yes. It's animated by default, but you can disable it if you prefer.", step: 5 },
// ];

// export default function CustomAccordion() {
//   const [openItem, setOpenItem] = useState(null);

//   const toggleItem = (id) => {
//     setOpenItem(openItem === id ? null : id);
//   };

//   return (
//     <div className="w-full space-y-4">
//       {accordionData.map((item) => (
//         <div
//           key={item.id}
//           className={` rounded-lg transition ${
//             openItem === item.id ? "bg-white shadow-lg" : "bg-[#DAEBE8]"
//           }`}
//         >
//           {/* Accordion Trigger */}
//           <div
//             className="flex justify-between items-center px-4 py-3 rounded-lg text-lg font-medium cursor-pointer transition"
//             onClick={() => toggleItem(item.id)}
//           >
//             {item.title}
//             <ChevronDown
//               className={`w-5 h-5 transition-transform duration-300 ${
//                 openItem === item.id ? "rotate-180" : ""
//               }`}
//             />
//           </div>

//           {/* Accordion Content with Open State Design */}
//           {openItem === item.id && (
//             <div className="px-4 py-3 bg-white rounded-lg shadow-md ">
//               <div className="text-sm font-medium text-gray-500 bg-green-100 px-2 py-1 rounded-full w-fit">
//                 Step {item.step}
//               </div>
//               <p className="text-gray-600 py-2">{item.content}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const accordionData = [
  { id: "item-1", title: "Recruitment team chat", content: "Help us get to know you beyond your CV", step: 1 },
  { id: "item-2", title: "Team member interview", content: "Help your new team understand your field of knowledge", step: 2 },
  { id: "item-3", title: "Technical exercise", content: "Put your skills to the test and show us how you shine.", step: 3 },
  { id: "item-4", title: "Leadership chat", content: "Help us get to know you beyond your CV", step: 4 },
  { id: "item-5", title: "Offer time", content: "Your now just a signature away from joining the greatest team", step: 5 },
];

export default function CustomAccordion() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full space-y-4">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg transition ${
            openItem === item.id ? "bg-white shadow-lg" : "bg-[#DAEBE8]"
          }`}
        >
          <div
            className="px-4 py-3 rounded-lg text-lg font-medium cursor-pointer transition"
            onClick={() => toggleItem(item.id)}
          >
            {openItem === item.id ? (
             
              <>
                <div className="flex justify-between">
                    <div className="">
                      <div className="text-sm font-medium text-black bg-[#D6FFEC] px-2 py-1 rounded-full w-fit mb-1">
                        Step {item.step}
                      </div>
                      <div className="">
                        <h4 className="text-xl">{item.title}</h4>
                        <p className="text-sm py-2">{item.content}</p>
                      </div>
                    </div>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                </div>
              </>
            ) : (
              // Normal heading when closed
              <div className="flex justify-between items-center">
                <p>{item.title}</p>
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              </div>
            )}
          </div>

        
          {/* {openItem === item.id && (
            <div className="px-4 py-2 bg-white rounded-lg shadow-md">
              
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
}
