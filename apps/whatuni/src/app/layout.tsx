import React from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./global.css";
import Header from "@/components/shared-components/header/navbar";
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
      <body>
        <Header />
        <GoogleTagManager gtmId="GTM-PKPN9P9" />
        <GoogleAnalytics gaId="G-NZBQJ9J4H2" />
        {children}
      </body>
    </html>
  );
}
