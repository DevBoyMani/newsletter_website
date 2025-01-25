// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useState } from "react";


// // import { usePathname } from "next/navigation";

// // const routes = [
// //   { path: "/newsletters", name: "Newsletters" },
// //   { path: "/advertise", name: "Advertise" },
// //   { path: "/about", name: "About" },
  

// // ];

// // const contactSales = [
// //     { path: "/contact", name: "Contact sales",key: "letstalk" },
// // ]

// // export default function Navbar(){

// //     const [isOpen, setIsOpen] = useState(false);
// //     const pathname = usePathname();

// //     return(

// //     <header className="sticky top-0 bg-nl_sec_background px-4 md:px-16 py-6 flex justify-between items-center border-b border-nl_button_border z-10">
// //       <Link href="/">
// //         <div className="w-32 md:w-48">
// //           <img src="/logo.png" alt="Logo" />
// //         </div>
// //       </Link>

// //       <nav className="text-[12px] sm:text-xl hidden lg:block">
// //         {routes.map((route) => (
// //           <Link
// //             key={route.path}
// //             href={route.path}
// //             className={`ml-2 md:ml-6 text-black ${
// //               pathname === route.path && "underline underline-offset-4"
// //             }isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
// //                 }`}
// //           >
// //             {route.name}
// //           </Link>
// //         ))}

// //      <div className={`flex items-center space-x-8 text-lg md:text-lg `}>
// //         {contactSales.map((contactSales)=>{
// //         const isLetsTalk=contactSales.key==="letstalk";
        
// //         return (
// //             <Link
// //             key={contactSales.key}
// //             href={contactSales.path}
// //             className={`${
// //                 isLetsTalk
// //                 ? "px-4 py-1 rounded-lg bg-black text-white font-bold overflow-hidden relative"
// //                 : "text-black"
// //             }`}
// //           >
// //             <span className="block">
// //               {contactSales.name}
// //             </span>
// //           </Link>
// //           )
// //         })}
// //     </div>

// //       </nav>
// //     </header>
// //     )
// // }

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// const routes = [
//   { path: "/newsletters", name: "Newsletters" },
//   { path: "/advertise", name: "Advertise" },
//   { path: "/about", name: "About" },
// ];

// const contactSales = [
//   { path: "/contact", name: "Contact sales", key: "letstalk" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <main className="pt-16">
//         {/* desktop nav */}
//         <header className="bg-white fixed top-0 left-0 w-full md:px-0 py-4 border-b border-nl_button_border z-50 shadow-sm">
//             <div className="flex h-14 items-center justify-between px-8 ">
//             <Link href="/">
//                 <div className="w-32 md:w-48">
//                 <img src="/logo.png" alt="Logo" />
//                 </div>
//             </Link>

//             <nav className="sm:text-xl flex items-center space-x-8 text-xl ">
//                 {routes.map((route) => (
//                 <Link
//                     key={route.path}
//                     href={route.path}
//                     className={`ml-2 md:ml-6 text-black py-2 ${
//                     pathname === route.path
//                         ? "underline underline-offset-4"
//                         : "hover:underline underline-offset-8 hover:decoration-[#46DE46] hover:decoration-4"
//                     }`}
//                 >
//                     {route.name}
//                 </Link>
//                 ))}

//         {/* button section */}

//                 <div className="sm:text-xl flex items-center space-x-8 text-xl ">
//                 {contactSales.map((contact) => {
//                     // const isLetsTalk = contact.key === "letstalk";

//                     return (
//                     <Link
//                         key={contact.key}
//                         href={contact.path}
//                         // className={`${
//                         //   isLetsTalk
//                         //     ? "px-4 py-4 rounded-lg bg-[#46DE46] text-black  overflow-hidden relative "
//                         //     : "text-black"
//                         // } hover:bg-[0C3D3D]`}
//                         className="px-4 py-3 rounded-lg bg-[#46DE46] text-black  overflow-hidden relative hover:bg-[#0C3D3D] hover:text-white"
//                     >
//                         <span className="block">{contact.name} &rarr;</span>
//                     </Link>
//                     );
//                 })}
//                 </div>
//             </nav>
//             </div>
//         </header>

//         {/* mobile nav */}

 
//     </main>

   
//   );
// }


"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const routes = [
  { path: "/newsletters", name: "Newsletters" },
  { path: "/advertise", name: "Advertise" },
  { path: "/about", name: "About" },
];

const contactSales = [
  { path: "/contact", name: "Contact sales", key: "letstalk" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="pt-16">
      {/* Desktop View */}
      <header className="bg-white fixed top-0 left-0 w-full py-4 border-b border-nl_button_border z-50 shadow-sm hidden md:block">
        <div className="flex h-14 items-center justify-between px-8">
          <Link href="/">
            <div className="w-32 md:w-48">
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>

          <nav className="sm:text-xl flex items-center space-x-8 text-xl">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`ml-2 md:ml-6 text-black py-2 ${
                  pathname === route.path
                    ? "underline underline-offset-4"
                    : "hover:underline underline-offset-8 hover:decoration-[#46DE46] hover:decoration-4"
                }`}
              >
                {route.name}
              </Link>
            ))}

            {/* Button Section */}
            <div className="sm:text-xl flex items-center space-x-8 text-xl">
              {contactSales.map((contact) => (
                <Link
                  key={contact.key}
                  href={contact.path}
                  className="px-4 py-3 rounded-lg bg-[#46DE46] text-black  overflow-hidden relative hover:bg-[#0C3D3D] hover:text-white"
                >
                  <span className="block">{contact.name} &rarr;</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile View */}
      <header className={`bg-white fixed top-0 left-0 w-full z-50 shadow-lg md:hidden transition-all duration-300 ${
          isOpen ? "h-screen" : "h-16"
        }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <div className="w-32">
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>

          <div className="sm:text-lg flex items-center text-lg ml-8">
              {contactSales.map((contact) => (
                <Link
                  key={contact.key}
                  href={contact.path}
                  className="px-4 py-2 rounded-lg bg-[#46DE46] text-black  overflow-hidden relative hover:bg-[#0C3D3D] hover:text-white"
                >
                  <span className="block">contact</span>
                </Link>
              ))}
            </div>

            <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-black"
          >
            {isOpen ? <div className="sm:text-xl flex items-center px-2 py-2 text-lg">
                    <h3 className="black">close</h3>
                </div> : <div className="sm:text-xl flex items-center px-2 py-2 text-lg">
                    <h3 className="black">menu</h3>
                </div>}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="bg-white px-4 py-2 mt-4">
            <ul className="space-y-4 text-3xl">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`block  text-black ${
                      pathname === route.path
                        ? "underline underline-offset-4"
                        : "hover:underline"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
              {/* <li>
                {contactSales.map((contact) => (
                  <Link
                    key={contact.key}
                    href={contact.path}
                    className="block px-2 py-2 rounded-lg bg-[#46DE46] text-black hover:bg-[#0C3D3D] hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {contact.name}
                  </Link>
                ))}
              </li> */}
            </ul>
          </nav>
        )}
      </header>
    
    </main>
  );
}
