"use client"
import { v4 as uuidv4 } from "uuid";

type RequestType = "GET" | "POST";

export async function httpClientRequest(
    endpoint: string,
    bodyPayload: any,
    reqtype: RequestType,
    xAPIKey: string,
    cacheType: RequestCache,
    cacheTime: number,
    customHeaders: any,
  ): Promise<any> {
    try {
      const url = endpoint;
      // const cacheparam = cacheType?.toString() != "no-store" ? {next: {revalidate: cacheTime}} : {};
      const res = await fetch(url, {
        method: reqtype,
        headers: {
          ...customHeaders,
          "Content-Type": "application/json",
          "x-correlation-id": uuidv4(),
          sitecode: `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`,
          "x-api-key": xAPIKey,
        },
        body: JSON.stringify(bodyPayload),
        cache: cacheType ? cacheType : "default",
        // ...cacheparam
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("ERROR:", error, " endpoint: ", endpoint);
      //throw error;
    }
  }