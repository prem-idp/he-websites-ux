'use server';
import type { Metadata } from "next";
import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";
import TrackSessionId from "@packages/lib/utlils/tracksessionid";
import HeaderWrapper from "../../../../packages/shared-components/common-utilities/header/headerWrapper";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
import Script from "next/script";
import OneTrustCookieScript from "@packages/lib/oneTrust/OneTrustCookieScript";
import { Suspense } from "react";
const farroBold = localFont({
  src: "./fonts/Farro-Bold.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const interBold = localFont({
  src: "./fonts/Inter-Bold.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// export const metadata: Metadata = {
//   title: "Compare the Best University Degrees Courses UK | Whatuni",
//   description:
//     "Find courses at top universities. Free, trusted advice to help you decide which university is best for you. The UK’s biggest student reviews site.",
// };

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
        
             
        <Suspense fallback={null}>
        {/* @ts-ignore Server Component */}
        <HeaderWrapper />
        </Suspense>
        {children}
        {/* @ts-ignore Server Component */}
        <Footer />
      </body>
    </html>
  );
}
