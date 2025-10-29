import "./globals.css";
import Navbar from "../components/navbar/navbar";
import FooterWrapper from "../components/footerWrapper/footerWrapper";

// import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// const gtSuper = localFont({
//   src: url("/fonts/GT-Super-Display-Regular-Trial.otf"),
//   variable: "--font-gt-super",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <Navbar />
        {children}
        <FooterWrapper /> {/* Handles conditional banners + footer */}
      </body>
    </html>
  );
}
