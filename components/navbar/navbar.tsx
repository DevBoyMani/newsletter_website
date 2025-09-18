"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Customized } from "recharts";
import CustomizedHoverButton from "../customizedHoverButton/customizedHoverButton";

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

  // nav bg color will change based on the effect while the footer comes to the view port
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   let observer: IntersectionObserver | null = null;
  //   let attempts = 0;
  //   const maxAttempts = 30;
  //   // ids to watch (handles either one or both footers)
  //   const footerIds = ["site-footer", "mob-site-footer"];

  //   const HEADER_HEIGHT = 90; // adjust to your fixed header height (px)
  //   const rootMargin = `-${HEADER_HEIGHT}px 0px 0px 0px`; // move intersection point up by header height

  //   const initObserver = () => {
  //     const elements = footerIds
  //       .map((id) => document.getElementById(id))
  //       .filter(Boolean) as HTMLElement[];

  //     if (elements.length === 0) {
  //       // retry if footer not yet mounted
  //       if (attempts++ < maxAttempts) {
  //         setTimeout(initObserver, 200);
  //       }
  //       return;
  //     }

  //     observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           const id = entry.target.id;
  //           // set the appropriate state per id
  //           if (id === "site-footer") {
  //             setFooterInView(entry.isIntersecting);
  //           } else if (id === "mob-site-footer") {
  //             setMobFooterInView(entry.isIntersecting);
  //           }

  //           // optional: set a unified state if you want one flag for all devices
  //           // setFooterInView(entry.isIntersecting || footerInView /* previous state */)
  //         });
  //       },
  //       { root: null, threshold: 0.05, rootMargin }
  //     );

  //     elements.forEach((el) => observer!.observe(el));
  //   };

  //   initObserver();

  //   // fallback: if IntersectionObserver isn't supported or is flaky, also check on scroll
  //   const scrollFallback = () => {
  //     footerIds.forEach((id) => {
  //       const el = document.getElementById(id);
  //       if (!el) return;
  //       const rect = el.getBoundingClientRect();
  //       const inView = rect.top < window.innerHeight && rect.bottom > 0;
  //       if (id === "site-footer") setFooterInView(inView);
  //       if (id === "mob-site-footer") setMobFooterInView(inView);
  //     });
  //   };

  //   window.addEventListener("scroll", scrollFallback, { passive: true });
  //   window.addEventListener("resize", scrollFallback);

  //   return () => {
  //     observer?.disconnect();
  //     window.removeEventListener("scroll", scrollFallback);
  //     window.removeEventListener("resize", scrollFallback);
  //   };
  // }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout | null = null;
    let animationFrameId: number | null = null;

    const checkNavbarFooterContact = () => {
      const navbar = document.querySelector('nav, header, [role="navigation"]');
      const desktopFooter = document.getElementById("site-footer");
      const mobileFooter = document.getElementById("mob-site-footer");

      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const navbarBottom = navbarRect.bottom;

      // Check desktop footer contact
      if (desktopFooter) {
        const footerRect = desktopFooter.getBoundingClientRect();
        const footerTop = footerRect.top;
        setFooterInView(navbarBottom >= footerTop);
      }

      // Check mobile footer contact - more sensitive detection
      if (mobileFooter) {
        const footerRect = mobileFooter.getBoundingClientRect();
        const footerTop = footerRect.top;

        // For mobile, use a smaller threshold for instant detection
        const isTouching = navbarBottom >= footerTop - 5; // 5px buffer for instant detection
        setMobFooterInView(isTouching);
      }
    };

    // Use requestAnimationFrame for smoother mobile performance
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      // Cancel previous animation frame if exists
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      // Use requestAnimationFrame for instant response on mobile
      animationFrameId = requestAnimationFrame(checkNavbarFooterContact);

      // Also set timeout for resize events
      timeoutId = setTimeout(checkNavbarFooterContact, 10);
    };

    // Initial check
    checkNavbarFooterContact();

    // Add event listeners with better options for mobile
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
    footerInView || isDarkHeader ? "bg-[#01261E]" : "bg-[#FAFAFA]";

  const mobileHeaderBg =
    mobFooterInView || isDarkMobile ? "bg-[#01261E]" : "bg-[#FAFAFA]";
  const mobileTextColor =
    mobFooterInView || isDarkMobile ? "text-black" : "text-black";
  const mobileLogoSrc =
    mobFooterInView || isDarkMobile ? "/blogs/logo-white.png" : "/logo.png";
  const mobileMenuIconColor =
    mobFooterInView || isDarkMobile ? "bg-white" : "bg-black";

  const isContactPage = pathname === "/contact";
  const isCareersSlugPage = pathname.startsWith("/careers/");

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
                  src={
                    footerInView || isDarkHeader
                      ? "/blogs/logo-white.png"
                      : "/logo.png"
                  }
                  alt="Logo"
                  className="mt-3"
                />
              </div>
            </Link>

            <div className=" font-[400] flex items-center">
              <div className="flex items-center space-x-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={`relative group lg:text-[17px] ml-2 md:ml-6 overflow-hidden h-[26px] ${
                      pathname === route.path
                        ? "text-[#C7A262]"
                        : footerInView || isDarkHeader
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
                label="Contact Sales"
                fontSize="16px"
                fontWeight="300"
                // width="135px"
                // height="42px"
                // borderColor="#C7A262"
                hoverText="#ffffff"
                bgColor="#C7A262"
                hoverBgColor="#000"
                textColor="#fff"
                padding="px-6 py-2"
                margin="ml-20"
              />
            </div>
          </div>
        </div>
      </header>

      {/* === Mobile=== */}
      <header
        className={`block lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[97px] mt-[32px] ${mobileHeaderBg}`}
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
