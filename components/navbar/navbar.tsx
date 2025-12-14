"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Customized } from "recharts";
import CustomizedHoverButton from "../customizedHoverButton/customizedHoverButton";

const routes = [
  { path: "/about", name: "About us" },
  { path: "/advertise", name: "Advertise" },
  // { path: "/blogs", name: "Blogs" },
  { path: "/readers", name: "Readers" },
  { path: "/careers", name: "Careers" },
];

const routesMob = [
  { path: "/about", name: "About us" },
  { path: "/advertise", name: "Advertise" },
  // { path: "/blogs", name: "Blogs" },
  { path: "/readers", name: "Readers" },
  { path: "/careers", name: "Careers" },
  { path: "/contact", name: "Advertise now" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBgWhite, setNavBgWhite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileNavWhite, setMobileNavWhite] = useState(false);
  const [adBlockerInView, setAdBlockerInView] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const [mobFooterInView, setMobFooterInView] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith("/blogs");
  const isDarkHeader = isBlogPage && !navBgWhite;
  const isDarkMobile = isBlogPage && !mobileNavWhite;

  //  mobile
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout | null = null;
    let animationFrameId: number | null = null;

    const checkNavbarSections = () => {
      const navbar = document.querySelector('nav, header, [role="navigation"]');
      const desktopFooter = document.getElementById("site-footer");
      const mobileFooter = document.getElementById("mob-site-footer");
      const adBlocker = document.getElementById("ad-blocker");

      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const navbarBottom = navbarRect.bottom;

      if (adBlocker) {
        const adRect = adBlocker.getBoundingClientRect();

        const isInAdBlocker =
          navbarBottom >= adRect.top && navbarBottom <= adRect.bottom;

        setAdBlockerInView(isInAdBlocker);
      }

      // ✅ Check desktop footer
      if (desktopFooter) {
        const footerRect = desktopFooter.getBoundingClientRect();
        const footerTop = footerRect.top;
        setFooterInView(navbarBottom >= footerTop);
      }

      // ✅ Check mobile footer
      if (mobileFooter) {
        const footerRect = mobileFooter.getBoundingClientRect();
        const footerTop = footerRect.top;

        const isTouching = navbarBottom >= footerTop - 5;
        setMobFooterInView(isTouching);
      }
    };

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(checkNavbarSections);
      timeoutId = setTimeout(checkNavbarSections, 10);
    };

    // Initial check
    checkNavbarSections();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [setFooterInView, setMobFooterInView]);

  //  site-footer

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

  const headerBg =
    footerInView || adBlockerInView || isDarkHeader
      ? "bg-[#01261E]"
      : "bg-[#FAFAFA]";

  // const mobileHeaderBg =
  //   mobFooterInView || adBlockerInView || isDarkMobile
  //     ? "bg-[#01261E]"
  //     : "bg-[#FAFAFA]";

  const mobileTextColor =
    mobFooterInView || adBlockerInView || isDarkMobile
      ? "text-black"
      : "text-black";

  // const mobileLogoSrc =
  //   mobFooterInView || adBlockerInView || isDarkMobile
  //     ? "/light-logo.png"
  //     : "/logo.png";

  // const mobileMenuIconColor =
  //   mobFooterInView || adBlockerInView || isDarkMobile
  //     ? "bg-white"
  //     : "bg-black";

  const isContactPage = pathname === "/contact";
  const isCareersSlugPage = pathname.startsWith("/careers/");

  return (
    <>
      {/* === Desktop  ===  */}
      <header
        className={`hidden lg:block fixed top-0 left-0 w-full px-[110px] py-[12px] z-50 transition-colors duration-300 ${headerBg}`}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="w-32 md:w-36">
              <img
                src={
                  footerInView || adBlockerInView || isDarkHeader
                    ? "/light-logo.png"
                    : "/logo.png"
                }
                alt="Logo"
                className=""
              />
            </div>
          </Link>

          <div className=" font-[400] flex items-center">
            <div className="flex items-center gap-[30px]">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`relative group lg:text-[17px] overflow-hidden ${
                    pathname === route.path
                      ? "text-[#C7A262]"
                      : footerInView || adBlockerInView || isDarkHeader
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

            <CustomizedHoverButton
              href="/contact"
              label="Advertise now"
              fontSize="16px"
              fontWeight="300"
              // width="135px"
              // height="42px"
              // hoverBorderColor="#C7A262"
              hoverText="#ffffff"
              bgColor="#C7A262"
              hoverBgColor="#01261E"
              textColor="#fff"
              padding="px-6 py-2"
              margin="ml-[120px]"
            />
          </div>
        </div>
      </header>

      {/* === Mobile=== */}
      <header
        className={`block lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[97px] mt-[32px] bg-[#FAFAFA]`} //${mobileHeaderBg}
      >
        {/* Border line with side cut via margin */}
        <div className={`${mobileNavBorder} mx-4`}>
          <div className="flex items-center justify-between h-[97px] px-0">
            {/* Logo */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <div className="w-32">
                {/* {mobileLogoSrc} */}
                <img src="/logo.png" alt="Logo" />
              </div>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transform transition-transform duration-500 ease-in-out flex flex-col justify-center items-center"
            >
              <div className="relative w-6 h-4 flex flex-col justify-between items-center">
                {/* ${mobileMenuIconColor} */}
                <span
                  className={`absolute top-0 left-0 w-full h-[2px] bg-black ${
                    isOpen ? "opacity-0" : "top-0 opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute top-1/2 left-0 w-full h-[2px] bg-black ${
                    isOpen ? "opacity-0" : "top-[44%] opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-[2px] bg-black ${
                    isOpen ? "rotate-45" : "-translate-y-full opacity-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 w-full h-[2px] bg-black ${
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
