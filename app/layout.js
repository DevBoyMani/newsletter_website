import "./globals.css";
import Navbar from "../components/navbar/navbar";
import FooterWrapper from "../components/footerWrapper/footerWrapper";
import ChatraProvider from "../components/chatraProvider/chatraProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// export const metadata = {
//   metadataBase: new URL("https://www.houseofsummary.com"),
//   title: {
//     default: "House of Summary | Verified News, Summarized",
//   },
//   description:
//     "Get the latest, verified news summaries from House of Summary. Stay informed with concise, fact-based news for a clear picture of the world.",
//   openGraph: {
//     title: "House of Summary | Verified News, Summarized",
//     description:
//       "Get the latest, verified news summaries from House of Summary. Stay informed with concise, fact-based news for a clear picture of the world.",
//     url: "https://www.houseofsummary.com/",
//     siteName: "House of Summary",
//     images: [
//       {
//         url: "/og/og.png",
//         width: 1200,
//         height: 630,
//         alt: "House of Summary – Verified News",
//       },
//     ],
//     type: "website",
//   },
// };

export const metadata = {
  metadataBase: new URL("https://www.houseofsummary.com"),

  title: {
    default: "House of Summary | Verified News, Summarized",
  },

  description:
    "Get the latest, verified news summaries from House of Summary. Stay informed with concise, fact-based news for a clear picture of the world.",

  openGraph: {
    title: "House of Summary | Verified News, Summarized",
    description:
      "Get the latest, verified news summaries from House of Summary. Stay informed with concise, fact-based news for a clear picture of the world.",
    url: "https://www.houseofsummary.com/",
    siteName: "House of Summary",
    images: [
      {
        url: "https://www.houseofsummary.com/og/og.png",
        width: 1200,
        height: 630,
        alt: "House of Summary – Verified News",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "House of Summary | Verified News, Summarized",
    description:
      "Get the latest, verified news summaries from House of Summary.",
    images: ["https://www.houseofsummary.com/og/og.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.houseofsummary.com/#organization",
  name: "House of Summary",
  url: "https://www.houseofsummary.com/",
  logo: "https://www.houseofsummary.com/logo.png",
  email: "contact@houseofsummary.com",
  telephone: "+1-218-500-0099",
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St, Ste N",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-218-500-0099",
    contactType: "customer support",
    email: "contact@houseofsummary.com",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="9eqrF35DPBCpUmWcXWYJL31OjFXXVwBd_H6crG8wmvw"
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          // strategy="afterInteractive"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
