import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";
import TrackSessionId from "@packages/lib/utlils/tracksessionid";
import HeaderWrapper from "../../../../packages/shared-components/common-utilities/header/headerWrapper";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
import OneTrustCookieScript from "@packages/lib/oneTrust/OneTrustCookieScript";
import { Suspense } from "react";
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
      
      
      <body
        className={`${farroBold.variable} ${interBold.variable} antialiased`}
      >
        <TrackSessionId />
        <OneTrustCookieScript />
        <HeaderWrapper />
        {children}

        <Footer />
      </body>
    </html>
  );
}
