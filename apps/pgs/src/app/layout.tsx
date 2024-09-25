import React, { Suspense } from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./global.css";
import Header from "@/components/shared-components/header/navbar";
import Footer from "@/components/shared-components/footer/footer";
import Loader from "./new/degree-courses/loading";
export const metadata: Metadata = {
  title: "Higher Eductaion",
  description:
    "Find courses at top universities. Free, trusted advice to help you decide which university is best for you. The UKs biggest student reviews site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <GoogleTagManager gtmId="GTM-PKPN9P9" />
        <GoogleAnalytics gaId="G-NZBQJ9J4H2" />
        <Suspense fallback={<Loader />}>
          <main className="flex-grow min-h-[1000px]">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
