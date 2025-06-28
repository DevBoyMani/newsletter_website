"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const routes = [
  { path: "/about", name: "About" },
  { path: "/advertise", name: "Advertise" },
  { path: "/blogs", name: "Blogs" },
  { path: "/careers", name: "Careers" },
  { path: "/readers", name: "Readers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBgWhite, setNavBgWhite] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname === "/blogs";
  const isDarkHeader = isBlogPage && !navBgWhite;

  // Scroll listener to change navbar color on /blogs
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 500; // Adjust to your actual hero section height
      setNavBgWhite(window.scrollY > heroHeight);
    };

    if (isBlogPage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPage]);

  // Desktop check
  function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 640);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isDesktop;
  }

  const isDesktop = useIsDesktop();
  if (pathname.includes("/analytics") && isDesktop) return null;

  // Background class
  const headerBg = isDarkHeader ? "bg-[#01261E]" : "bg-white";

  return (
    <nav className="pt-16">
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
      >
        <div className="w-[84%] mx-auto border-b">
          <div className="py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <div className="w-32 md:w-40">
                  <img
                    src={isDarkHeader ? "/logo-white.png" : "/logo.png"} // <- Swap logos
                    alt="Logo"
                  />
                </div>
              </Link>

              {/* Navigation */}
              <div className="lg:text-[17px] font-[400] flex items-center space-x-8 text-xl">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`ml-2 md:ml-6 py-2 transition-colors duration-300 ${
                      pathname === route.path
                        ? isDarkHeader
                          ? "text-[#C7A262]"
                          : "text-[#C7A262]"
                        : isDarkHeader
                        ? "text-white hover:text-[#C7A262]"
                        : "text-black hover:text-[#C7A262]"
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}

                {/* Contact Sales Button */}
                <Link
                  href="/contact"
                  className={`lg:text-[16px] font-[300] ml-4 px-4 py-2 rounded-full transition-colors duration-300 ${
                    isDarkHeader
                      ? "bg-[#C7A262] text-white hover:bg-[#C7A262] hover:text-white"
                      : "bg-[#C7A262] text-white hover:bg-[#121212]"
                  }`}
                >
                  Contact Sales →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile View */}
      <header
        className={`block lg:hidden bg-white fixed top-0 left-0 w-full border-b border-nl_button_border z-50 shadow-lg md:hidden transition-all duration-300 h-16`}
      >
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
                    isOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-full opacity-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-full opacity-0"
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
