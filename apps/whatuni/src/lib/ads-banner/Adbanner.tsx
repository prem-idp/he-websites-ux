"use client";
import { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    const loadAds = () => {
      const onGptLoad = () => {
        if (window.googletag && window.googletag.apiReady) {
          window.googletag.cmd.push(() => {
            const width =
              window.innerWidth || document.documentElement.clientWidth;

            if (width <= 480) {
              window.googletag
                .defineSlot(
                  "/1029355/test_wuni_searchresults_mbl_lb_300x50",
                  [300, 50],
                  "blst_4",
                )
                .addService(window.googletag.pubads());
            } else {
              window.googletag
                .defineSlot(
                  "/1029355/test_wuni_clearingbrowsemoneypage_topban_468x60",
                  [728, 90],
                  "blst_4",
                )
                .addService(window.googletag.pubads());
            }
            window.googletag.pubads().enableLazyLoad({
              fetchMarginPercent: 0,
              renderMarginPercent: 0,
              mobileScaling: 0.0,
            });
            window.googletag.enableServices();
            window.googletag.display("blst_4");
          });
        } else {
          setTimeout(onGptLoad, 100);
        }
      };

      if (window.googletag) {
        onGptLoad();
      } else {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        script.onload = () => {
          onGptLoad();
        };
        script.onerror = () => {};
        document.head.appendChild(script);
      }
    };

    loadAds();
  }, []);

  return <div id="blst_4" style={{ width: "100%", textAlign: "center" }}></div>;
};

export default AdBanner;
