"use client";

import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import Footer from "@/components/footer/footer";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldHideFooter =
    pathname.startsWith("/analytics") || pathname === "/readers" || "";
  const isContactPage = pathname === "/contact";
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        {/* Show mobile-only banner on /contact page above Navbar */}
        {isContactPage && (
          <div className="block lg:hidden fixed top-0 left-0 w-full z-[999]">
            <div className="bg-[#01261E] w-full px-4 py-[8px] flex items-center justify-center">
              <span className="text-[#ffffff] text-[12px] font-[600] leading-normal">
                Want to advertise with us?
              </span>
              <a
                href="/schedule-call"
                className="ml-2 text-[#C7A262] hover:underline inline-flex items-center text-[12px] font-[800] leading-normal"
              >
                <span>SCHEDULE A CALL</span>
                <img
                  src="/contact/r-arr.png"
                  alt="arrow"
                  className="w-[11px] h-[11px] ml-[15px]"
                />
              </a>
            </div>
          </div>
        )}
        <Navbar />
        {children}
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
