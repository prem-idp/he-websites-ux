import type { Metadata } from "next";

import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import TrackSessionId from "@packages/lib/utlils/tracksessionid";
import HeaderWrapper from "../../../../packages/shared-components/common-utilities/header/headerWrapper";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
import OneTrustCookieScript from "@packages/lib/oneTrust/OneTrustCookieScript";

import GoogleOneTap from "@packages/lib/utlils/GoogleOneTap";
const farroBold = localFont({
  src: "./fonts/Farro-Bold.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const interBold = localFont({
  src: "./fonts/Inter-Bold.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="en">
      {/* GTM Head Script */}

      <body
        className={`bg-grey-50 ${farroBold.variable} ${interBold.variable} antialiased`}
      >
        <GoogleOneTap/>
        <TrackSessionId />
        <OneTrustCookieScript />
        <HeaderWrapper />
        {children}

        <Footer />
      </body>
    </html>
  );
}
