"use client";

import React, { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const loadGoogleAnalytics = () => {
      if (window.OptanonActiveGroups?.includes("C0001")) {
        (function (
          i: any,
          s: any,
          o: string,
          g: string,
          r: string,
          ...args: any[]
        ) {
          i["GoogleAnalyticsObject"] = r;
          i[r] =
            i[r] ||
            function (...funcArgs: any[]) {
              (i[r].q = i[r].q || []).push(funcArgs);
            };
          i[r].l = new Date().getTime(); // Ensure it's a number (timestamp)
          const a = s.createElement(o) as HTMLScriptElement;
          const m = s.getElementsByTagName(o)[0];
          a.async = true; // `async` should be a boolean
          a.src = g;
          if (m && m.parentNode) {
            m.parentNode.insertBefore(a, m);
          }
        })(
          window,
          document,
          "script",
          "https://www.google-analytics.com/analytics.js",
          "ga"
        );

        if (window.ga) {
          window.ga("create", "YOUR_GOOGLE_ANALYTICS_ID", "auto");
          window.ga("send", "pageview");
        }
      }
    };

    const checkConsent = () => {
      if (typeof window !== "undefined" && window.Optanon) {
        const hasConsent = window.Optanon.IsAlertBoxClosed();
        if (hasConsent && window.OptanonActiveGroups?.includes("C0001")) {
          loadGoogleAnalytics();
          console.log("User consented to Performance cookies");
        }
      }
    };

    if (typeof window !== "undefined") {
      checkConsent();
    }
  }, []);

  return <div>CookieConsent</div>;
};

export default CookieConsent;
