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
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavWhite, setMobileNavWhite] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith("/blogs");
  const isDarkHeader = isBlogPage && !navBgWhite;
  const isDarkMobile = isBlogPage && !mobileNavWhite;

  // Detect desktop vs mobile
  useEffect(() => {
    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024;
      setIsMobile(isMobileNow);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop scroll logic
  useEffect(() => {
    const handleScroll = () => {
      let heroHeight = 560;
      if (pathname === "/blogs") heroHeight = 880;
      else if (pathname.startsWith("/blogs/")) heroHeight = 560;
      setNavBgWhite(window.scrollY > heroHeight);
    };

    if (isBlogPage && !isMobile) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPage, pathname, isMobile]);

  // Mobile scroll logic
  useEffect(() => {
    const handleMobileScroll = () => {
      let heroHeight = 560;
      if (pathname === "/blogs") heroHeight = 900;
      else if (pathname.startsWith("/blogs/")) heroHeight = 460;
      setMobileNavWhite(window.scrollY > heroHeight);
    };

    if (isBlogPage && isMobile) {
      window.addEventListener("scroll", handleMobileScroll);
      handleMobileScroll();
    }
    return () => window.removeEventListener("scroll", handleMobileScroll);
  }, [isBlogPage, pathname, isMobile]);

  if (pathname.includes("/analytics") && !isMobile) return null;

  // Background class
  // const headerBg = isDarkHeader ? "bg-[#01261E]" : "bg-white";
  const headerBg = isDarkHeader ? "bg-[#01261E]" : "bg-white";
  const mobileHeaderBg = isDarkMobile ? "bg-[#01261E]" : "bg-white";
  const mobileTextColor = isDarkMobile ? "text-white" : "text-black";
  const mobileLogoSrc = isDarkMobile ? "/blogs/logo-white.png" : "/logo.png";
  const mobileMenuIconColor = isDarkMobile ? "bg-white" : "bg-black";

  return (
    <nav className="pt-16">
      {/* === Desktop Header === */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
      >
        <div className="w-[86%] mx-auto">
          <div className="py-4 flex items-center justify-between">
            <Link href="/">
              <div className="w-32 md:w-36">
                <img
                  src={isDarkHeader ? "/blogs/logo-white.png" : "/logo.png"}
                  alt="Logo"
                />
              </div>
            </Link>

            <div className="lg:text-[17px] font-[400] flex items-center text-xl">
              <div className="flex items-center space-x-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`ml-2 md:ml-6 py-2 transition-colors duration-300 ${
                      pathname === route.path
                        ? "text-[#C7A262]"
                        : isDarkHeader
                        ? "text-white hover:text-[#C7A262]"
                        : "text-black hover:text-[#C7A262]"
                    }`}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className={`ml-20 px-3.5 py-1.5 rounded-full transition-colors duration-300 lg:text-[16px] ${
                  isDarkHeader
                    ? "text-[#FFF] hover:bg-[#DAEBE8] hover:text-[#000] font-[300] bg-[#C7A262]"
                    : "bg-[#C7A262] text-white hover:bg-[#121212] font-[300]"
                }`}
              >
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* === Mobile Header === */}
      <header
        className={`block lg:hidden fixed top-0 left-0 w-full border-b z-50 shadow-lg transition-all duration-300 h-16 ${mobileHeaderBg}`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/">
            <div className="w-32">
              <img src={mobileLogoSrc} alt="Logo" />
            </div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center`}
          >
            <div className="relative w-6 h-4 flex flex-col justify-between items-center">
              {/* Hamburger/X icons */}
              <span
                className={`absolute top-0 left-0 w-full h-[2px] ${mobileMenuIconColor} transition-all duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : "top-0 opacity-100"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-[2px] ${mobileMenuIconColor} transition-all duration-500 ease-in-out ${
                  isOpen ? "opacity-0" : "top-[44%] opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-full h-[2px] ${mobileMenuIconColor} transition-all duration-500 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-full opacity-0"
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-full h-[2px] ${mobileMenuIconColor} transition-all duration-500 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-full opacity-0"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`px-4 py-4 mt-16 h-screen fixed top-0 right-0 w-full transition-transform duration-300 ease-out bg-white ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-4 text-3xl">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`block ${mobileTextColor} ${
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
