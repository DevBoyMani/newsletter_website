"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const routes = [
  { path: "/about", name: "About" },
  { path: "/advertise", name: "Advertise" },
  { path: "/analytics", name: "Analytics" },
  { path: "/careers", name: "Careers" },
  { path: "/features", name: "Features" },
  { path: "/newsletters", name: "Newsletters" },
  { path: "/readers", name: "Readers" },
];

const contactSales = [
  { path: "/contact", name: "Contact sales", key: "letstalk" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.includes("/analytics")) return null;

  return (
    <nav className="pt-16">
      {/* Desktop View */}
      <header className="hidden lg:block bg-white fixed top-0 left-0 w-full py-4 border-b border-nl_button_border z-50 shadow-sm hidden md:block">
        <div className="flex h-14 items-center justify-between px-8">
          <Link href="/">
            <div className="w-32 md:w-48">
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>

          <div className="sm:text-xl flex items-center space-x-8 text-xl">
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
          </div>
        </div>
      </header>


      {/* Mobile View */}
      <header className={`block lg:hidden bg-white fixed top-0 left-0 w-full border-b border-nl_button_border z-50 shadow-lg md:hidden transition-all duration-300 h-16`}>
        
        
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <div className="w-32">
              <img src="/logo.png" alt="Logo" />
            </div>
          </Link>

          <div className="flex space-x-1">

          {/* <div className="sm:text-lg flex items-center ml-8">
              {contactSales.map((contact) => (
                <Link
                  key={contact.key}
                  href={contact.path}
                  className="px-4 py-2 rounded-lg bg-[#46DE46] text-black  overflow-hidden relative hover:bg-[#0C3D3D] hover:text-white text-lg"
                >
                  <span className="block">Contact</span>
                </Link>
              ))}
            </div> */}

            {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-black tracking-normal"
          >
            {isOpen ? <div className="sm:text-xl flex items-center px-2 py-2 text-lg ">
                    <h4 className="black ">CLOSE</h4>
                </div> : <div className="sm:text-xl flex items-center px-2 py-2 text-lg ">
                    <h4 className="black">MENU</h4>
                </div>}
          </button> */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-black transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center"
        >
          <div className="relative w-6 h-4 flex flex-col justify-between items-center opacity-100">
            
              {/* Top Line */}
              <span
              className={`absolute top-0 left-0 w-full h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "top-0 opacity-100"
              }`}
            ></span>

            {/* Middle Line */}
            <span
              className={`absolute top-1/2 left-0 w-full h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "top-[44%] opacity-100"
              }`}
            ></span>

            {/* Bottom Line */}
            {/* <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? "opacity-0" : "bottom-0 opacity-100"
              }`}
            ></span> */}

            {/* "X" Lines */}
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-45 translate-y-0" : "-translate-y-full opacity-0"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-all duration-500 ease-in-out ${
                isOpen ? "-rotate-45 translate-y-0" : "translate-y-full opacity-0"
              }`}
            ></span>
          </div>
        </button>
        </div>
        </div>
        <div
            className={`bg-white px-4 py-4 mt-16 h-screen fixed top-0 right-0 w-full transform transition-transform duration-300 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="space-y-4 text-3xl">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`block text-black ${
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
            </ul>
        </div>
      </header>
    
    </nav>
  );
}
