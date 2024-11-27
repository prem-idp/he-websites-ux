import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderWrapper from "../../../../packages/shared-components/common-utilities/header/headerWrapper";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
import Scrpit from "next/script";
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

export const metadata: Metadata = {
  title: "Compare the Best University Degrees Courses UK | Whatuni",
  description:
    "Find courses at top universities. Free, trusted advice to help you decide which university is best for you. The UK’s biggest student reviews site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Scrpit
            async
            src="https://accounts.google.com/gsi/client"
            type="text/javascript"
          ></Scrpit>
      </head>
      <body
        className={`${farroBold.variable} ${interBold.variable} antialiased`}
      >
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
