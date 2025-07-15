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

// export const metadata = {
//   title: "Sagravia world",
//   description: "Newsletter company",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // const hideFooterRoutes = ['/analytics','/analytics/[slug]', '/readers'];
  //  const shouldHideFooter = hideFooterRoutes.includes(pathname);
  // const shouldHideFooter = pathname.startsWith('/analytics') || pathname === '/readers';

  const shouldHideFooter =
    pathname.startsWith("/analytics") || pathname === "/readers" || "";
  // pathname === "/readers" ||
  // pathname.startsWith("/careers/");
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Navbar />
        {children}
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
