"use server";

import { fetchAuthSession } from "@aws-amplify/auth";
import { API_END_POINTS } from "../utlils/API_END_POINTS";
import { v4 as uuidv4 } from "uuid";
import { currentAuthenticatedUser } from "../utlils/helper-function";

type RequestType = "GET" | "POST";

export async function graphQlFetchFunction(
  payload: string,
  isContentPreview?: boolean
) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isContentPreview ? process.env.NEXT_PUBLIC_PREVIEW_GRAPHQL_AUTH : process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
      },
      body: JSON.stringify({ query: payload }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchAjaxFecthFunction(payload: Record<string, any>) {
  try {
    const queryParams = new URLSearchParams(payload).toString();
    const url = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/homepage/sub-inst-ajax?${queryParams}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
      },
      cache: "no-store",
    });

    // Parse the JSON response
    const data = await res.json();
    return data;
  } catch (error) {
    // Handle the error
    throw error;
  }
}

export async function callClickstreamAPI(payload: any) {
  try {
    const session = await fetchAuthSession();
    const tracksession_id = uuidv4().replace(/\D/g, "").slice(0, 8);
    const headers: any = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
      tracksessionid: tracksession_id,
    };
    let apiUrl = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}`;

    if (session.tokens?.idToken) {
      headers.Authorization = `${session.tokens.idToken}`;
      apiUrl += API_END_POINTS.user.clickstream;
    } else {
      apiUrl += API_END_POINTS.guest.clickstream;
    }

    const respone = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: payload ? JSON.stringify(payload) : undefined,
    });
  } catch (error: any) {
    console.log("Clickstram error: ", error);
  }
}

export async function httpBFFRequest(endpoint: string, bodyPayload: any, reqtype: RequestType, xAPIKey: string, cacheType: RequestCache): Promise<any> {
  try {

    const url = endpoint;
    const res = await fetch(url, {
      method: reqtype,
      headers: {
        "Content-Type": "application/json",
        "x-correlation-id": uuidv4(),
        sitecode: `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`,
        "x-api-key": xAPIKey,
      },
      body: JSON.stringify(bodyPayload),
      cache: cacheType ? cacheType : "default",
    });

    const data = await res.json();
    return data;
    
  } catch (error) {
    console.log("ERROR:", error, " endpoint: ", endpoint);
    //throw error;
  }

};

const searchResultsFetchFunction = async (searchPayload: any): Promise<any> => {
  try {
    searchPayload = {
      dynamicRandomNumber: uuidv4().replace(/\D/g, "").slice(0, 8),
      //userRegionArray : headersList?.get('cloudfront-viewer-country-region'),
      ...searchPayload,
    };
    const url = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/searchResults`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sitecode: `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`,
        "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
      },
      body: JSON.stringify(searchPayload),
      cache: "no-store",
    });

    // Parse the JSON response
    const data = await res.json();
    return data;
  } catch (error) {
    // Handle the error
    console.log("ERROR", error);
    throw error;
  }
};

export { searchResultsFetchFunction };
