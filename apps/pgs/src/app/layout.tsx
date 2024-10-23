import React from "react";
import type { Metadata } from "next";
import "./global.css";
import Script from "next/script";
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
      <Script
        src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js"
        type="text/javascript"
        data-domain-script="aef8a843-4acf-4f91-acd1-f823a4a625c0"
        async
        defer
      ></Script>
      <Script
        id="onetrust"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
      function OptanonWrapper() {
        console.log('OptanonWrapper triggered');
        if (typeof window.Optanon !== "undefined" && window.Optanon.IsAlertBoxClosed()) {
          if (window.OptanonActiveGroups.includes('C0001')) {
            (function(i,s,o,g,r,a,m){
              i['GoogleAnalyticsObject']=r;
              i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments);
              },i[r].l=1*new Date();
              a=s.createElement(o),m=s.getElementsByTagName(o)[0];
              a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'YOUR_GOOGLE_ANALYTICS_ID', 'auto');
            ga('send', 'pageview');
          }
        }
      }
    `,
        }}
      />

      <body>{children}</body>
    </html>
  );
}
