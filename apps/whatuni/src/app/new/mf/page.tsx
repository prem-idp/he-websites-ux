"use client";
import { useEffect } from "react";
import Script from "next/script";
const MicroFrontendLoader = () => {
  useEffect(() => {
    const loadCss = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://dev-eu-west-2-wu-site-assets/colc/static/css/main.colc.0.1.0.css";
      document.head.appendChild(link);
    };

    loadCss();
  }, []);
  return (
    <>
      <Script
        src="https://dev-eu-west-2-wu-site-assets/colc/static/js/main.colc.0.1.0.js"
        strategy="lazyOnload"
      />
    </>
  );
};
export default MicroFrontendLoader;
