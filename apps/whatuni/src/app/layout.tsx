import React from "react";
import type { Metadata } from "next";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
import Header from "@packages/shared-components/common-utilities/header/headercomponents";
import "./global.css";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
