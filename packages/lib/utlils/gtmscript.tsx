"use client";
import { useEffect } from "react";
import Script from "next/script";
interface GTMProps {
  gtmId: string;
}
export default function GTMScript({ gtmId }: GTMProps) {
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
    <>
      {/* Load the GTM script */}
      <Script
        id="gtm-script"
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />
    </>
  );
}
