import "./globals.css";
import Navbar from "../components/navbar/navbar";
import FooterWrapper from "../components/footerWrapper/footerWrapper";
import ChatraProvider from "../components/chatraProvider/chatraProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="9eqrF35DPBCpUmWcXWYJL31OjFXXVwBd_H6crG8wmvw"
        />
      </head>
      <body>
        <ChatraProvider />
        <Navbar />
        {children}
        <FooterWrapper />
      </body>
      <GoogleAnalytics gaId="G-8LHP119MT9" />
    </html>
  );
}
