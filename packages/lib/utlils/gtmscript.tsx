"use client";
import { useEffect } from "react";
import Script from "next/script";
interface GTMProps {
  gtmId: string;
}
export default function GTMScript({ gtmId }: GTMProps) {
  console.log(gtmId);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const worker = new Worker(new URL("./gtm-webworker.ts", import.meta.url));
      worker.postMessage({
        type: "INIT_GTM",
        gtmId,
      });

      return () => {
        worker.terminate();
      };
    }
  }, [gtmId]);
  return (
    <Script
      id="gtm-script"
      // strategy="worker"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
    />
  );
}
