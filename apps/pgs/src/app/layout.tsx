import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";
import HeaderWrapper from "@packages/shared-components/common-utilities/header/headerWrapper";
import OneTrustCookieScript from "@packages/lib/oneTrust/OneTrustCookieScript";
const farroBold = localFont({
  src: "./fonts/Farro-Bold.woff2",
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
      <body
        className={`${farroBold.variable} ${interBold.variable} antialiased`}
      >
        <OneTrustCookieScript />
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
