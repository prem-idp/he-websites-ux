import { v4 as uuidv4 } from "uuid";
const makeApiCall = async (
  url: string,
  method: string,
  headers: Record<string, string> | null,
  queryParams: string | null,
  bodyjson: any
): Promise<any> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/${url}${
    queryParams ? `?${queryParams}` : ""
  }`;
  try {
    const response = await fetch(apiUrl, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
        "x-correlation-id": uuidv4(),
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
        ...headers,
      },
      cache: "force-cache",
      body: method === "GET" ? undefined : JSON.stringify(bodyjson),
    });

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({}));
      console.error({
        error: errorResponse,
        endpoint: apiUrl,
        status: response?.status,
        statusText: response?.statusText,
      });
      throw new Error(`API Error: ${response?.status} ${response?.statusText}`);
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`API call failed: ${error.message}`, { endpoint: apiUrl });
      throw error;
    } else {
      console.error("Unknown error occurred", { endpoint: apiUrl, error });
      throw new Error("An unknown error occurred during the API call.");
    }
  }
};

const getSrFilter = async (bodyjson: any): Promise<any> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/getSearchFilters`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-correlation-id": uuidv4(),
        sitecode: `${process.env.SITE_CODE}`,
        "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
      },
      body: JSON.stringify(bodyjson),
    });
    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({}));
      console.error({
        error: errorResponse,
        endpoint: apiUrl,
        status: response?.status,
        statusText: response?.statusText,
      });
      return null;
    }
    return await response.json();
  } catch (error: unknown) {
    console.error(`API call failed: ${error}`, { endpoint: apiUrl });
    console.error("Unknown error occurred", { endpoint: apiUrl, error });
  }
};
 async function fetchenquirydata(enquiryPayload: any) {
  try {
    const url = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/getEnquiryDetails`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sitecode: `${process.env.PROJECT === "Whatuni" ? "WU_WEB" : "PGS_WEB"}`,
        "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
      },
      body: JSON.stringify(enquiryPayload),
      cache: "no-store",
    });

const getSrFilterCount = async (bodyjson: any): Promise<any> => {
  const apiUrl = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dom-search/v1/search/getCourseCount`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-correlation-id": uuidv4(),
        sitecode: `${process.env.SITE_CODE}`,
        "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
      },
      body: JSON.stringify(bodyjson),
    });
    if (!response.ok) {
      const errorResponse = await response.json().catch(() => ({}));
      console.error({
        error: errorResponse,
        endpoint: apiUrl,
        status: response?.status,
        statusText: response?.statusText,
      });
      return null;
    }
    return await response.json();
  } catch (error: unknown) {
    console.error(`API call failed: ${error}`, { endpoint: apiUrl });
    console.error("Unknown error occurred", { endpoint: apiUrl, error });
  }
};
export default makeApiCall;
export { getSrFilter, getSrFilterCount };
