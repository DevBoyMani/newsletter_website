import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import FooterWrapper from "../components/footerWrapper/footerWrapper";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Navbar />
        {children}
        <FooterWrapper /> {/* Handles conditional banners + footer */}
      </body>
    </html>
  );
}
