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

export const metadata = {
  metadataBase: new URL("https://www.houseofsummary.com"),

  title: {
    default: "House of Summary | Verified News, Summarized",
    // template: "%s | House of Summary",
  },

  description:
    "Get the latest, verified news summaries from House of Summary. Stay informed with concise, fact-based news for a clear picture of the world.",
};

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
