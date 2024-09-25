import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Search result page",
  description:
    "Find courses at top universities. Free, trusted advice to help you decide which university is best for you. The UK biggest student reviews site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
