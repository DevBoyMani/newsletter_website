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

  return (
    <>
      {/* === Desktop Header === */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}
      >
        <div className="w-[86%] h-[61px] mx-auto my-auto">
          <div className=" flex items-center justify-between">
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
                  // <Link
                  //   key={route.path}
                  //   href={route.path}
                  //   className={`ml-2 md:ml-6 transition-colors duration-300 ${
                  //     pathname === route.path
                  //       ? "text-[#C7A262]"
                  //       : isDarkHeader
                  //       ? "text-white hover:text-[#C7A262]"
                  //       : "text-black hover:text-[#C7A262]"
                  //   }`}
                  // >
                  //   {route.name}
                  // </Link>
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`relative group ml-2 md:ml-6 transition-colors duration-300 overflow-hidden mt-2 ${
                      pathname === route.path
                        ? "text-[#C7A262]"
                        : isDarkHeader
                        ? "text-white hover:text-white"
                        : "text-black hover:text-[#000]"
                    }`}
                  >
                    <span className="block transition-transform duration-300 transform group-hover:-translate-y-[100%]">
                      {route.name}
                    </span>
                    <span className="block absolute left-0 top-0 transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                      {route.name}
                    </span>
                  </Link>
                ))}
              </div>
              {/* <Link
                href="/contact"
                className={`ml-20 mt-2 px-3.5 py-1.5 rounded-full transition-colors duration-300 lg:text-[16px] ${
                  isDarkHeader
                    ? "text-[#FFF] hover:bg-[#DAEBE8] hover:text-[#000] font-[300] bg-[#C7A262]"
                    : "bg-[#C7A262] text-white hover:bg-[#121212] font-[300]"
                }`}
              >
                Contact Sales
              </Link> */}

              <Link
                href="/contact"
                className={`relative inline-block ml-20 mt-2 px-6 py-2 bg-[#C7A262] text-white lg:text-[16px] font-[300] leading-normal rounded-full overflow-hidden group`}
              >
                {/* Hover animation effect only — same color as base */}
                <span className="absolute inset-0 bg-[#000] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-0"></span>

                {/* Button text stays white */}
                <span className="relative z-10 transition-colors duration-300">
                  Contact Sales
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* === Mobile Header === */}
      <header
        className={`block lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[97px] ${mobileHeaderBg} ${
          isContactPage || isCareersSlugPage ? "mt-[32px] lg:mt-0" : ""
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
