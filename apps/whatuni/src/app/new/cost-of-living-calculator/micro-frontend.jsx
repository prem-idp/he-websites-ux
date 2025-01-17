"use client";
import { useEffect } from "react";
import Script from "next/script";
export default function MicroFrontend() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://mdev.dev.aws.whatuni.com/colc/static/css/main.colc.0.1.1.css";
    link.type = "text/css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <>
      <div>
        <Script src="https://mdev.dev.aws.whatuni.com/colc/static/js/main.colc.0.1.1.js"></Script>
        <colc-calculator></colc-calculator>
      </div>
    </>
  );
}
