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

const routesMob = [
  { path: "/about", name: "About" },
  { path: "/advertise", name: "Advertise" },
  { path: "/blogs", name: "Blogs" },
  { path: "/careers", name: "Careers" },
  { path: "/readers", name: "Readers" },
  { path: "/contact", name: "contact" },
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

  // border hide for blog/slug
  const noBorderOn =
    (pathname.startsWith("/blogs/") && pathname !== "/blogs") ||
    pathname.startsWith("/policy");
  const mobileNavBorder = noBorderOn
    ? "" // no border on /blogs/[slug]
    : isDarkMobile
    ? "border-b-[1px] border-[#FFFFFF80]"
    : "border-b-[1px] border-[#12121280]";
  // /

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

  const headerBg = isDarkHeader ? "bg-[#01261E]" : "bg-[#FAFAFA]";
  const mobileHeaderBg = isDarkMobile ? "bg-[#01261E]" : "bg-[#FAFAFA]";
  const mobileTextColor = isDarkMobile ? "text-black" : "text-black";
  const mobileLogoSrc = isDarkMobile ? "/blogs/logo-white.png" : "/logo.png";
  const mobileMenuIconColor = isDarkMobile ? "bg-white" : "bg-black";

  const isContactPage = pathname === "/contact";
  const isCareersSlugPage = pathname.startsWith("/careers/");

  // contact button hovering
  const origins = [
    "origin-bottom",
    "origin-bottom-left",
    "origin-bottom-right",
    "origin-top",
  ];

  const [index, setIndex] = useState(0);
  const originClass = origins[index];
  const handleHoverOut = () => {
    setIndex((prev) => (prev + 1) % origins.length);
  };
  return (
    <>
      {/* === Desktop  === */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
      >
        <div className="w-[86%] h-[61px] mx-auto my-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="w-32 md:w-36">
                <img
                  src={isDarkHeader ? "/blogs/logo-white.png" : "/logo.png"}
                  alt="Logo"
                  className="mt-3"
                />
              </div>
            </Link>

            <div className="lg:text-[17px] font-[400] flex items-center text-xl">
              <div className="flex items-center space-x-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`relative group ml-2 md:ml-6 overflow-hidden h-[24px] ${
                      pathname === route.path
                        ? "text-[#C7A262]"
                        : isDarkHeader
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {/* Default state */}
                    <span className="block transform transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      {route.name}
                    </span>

                    {/* Hover state (slides in from bottom) */}
                    <span className="block absolute left-0 top-0 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                      {route.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Contact button */}
              <Link
                href="/contact"
                onMouseLeave={handleHoverOut} // 🔑 cycle after hover-out
                className="relative inline-block ml-20 mt-2 px-6 py-2 bg-[#C7A262] text-white lg:text-[16px] font-[300] rounded-full overflow-hidden group"
              >
                {/* <span
                  className={`absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0 ${originClass}`}
                ></span> */}
                <span
                  className={`absolute inset-0 bg-black rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0 ${originClass}`}
                />

                {/* Text always on top */}
                <span className="relative z-10">Contact Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* === Mobile=== */}
      <header
        className={`block lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[97px] ${mobileHeaderBg} ${
          isContactPage || isCareersSlugPage ? "mt-[32px] " : ""
        }`}
      >
        {/* Border line with side cut via margin */}
        <div className={`${mobileNavBorder} mx-4`}>
          <div className="flex items-center justify-between h-[97px] px-0">
            {/* Logo */}
            <Link href="/">
              <div className="w-32">
                <img src={mobileLogoSrc} alt="Logo" />
              </div>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center"
            >
              <div className="relative w-6 h-4 flex flex-col justify-between items-center">
                <span
                  className={`absolute top-0 left-0 w-full h-[2px] ${mobileMenuIconColor} ${
                    isOpen ? "opacity-0" : "top-0 opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-0 w-full h-[2px] ${mobileMenuIconColor} ${
                    isOpen ? "opacity-0" : "top-[44%] opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-[2px] ${mobileMenuIconColor} ${
                    isOpen ? "rotate-45" : "-translate-y-full opacity-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-[2px] ${mobileMenuIconColor} ${
                    isOpen ? "-rotate-45" : "translate-y-full opacity-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav menu */}
        <div
          className={`px-4 py-4 mt-[97px] bg-[#FAFAFA] h-screen fixed top-0 right-0 w-full transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-4 text-3xl">
            {routesMob.map((route) => (
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
    </>
  );
}
