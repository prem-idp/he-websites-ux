"use server";
const testSgDatafetch = async (
  methodType: string,
  url: any,
  auth: any,
  payload: any,
  xapikey: any,
  urlparams: any,
) => {
  try {
    if (methodType === "POST" && auth !== null) {
      const response = await fetch(url, {
        method: methodType,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
        body: JSON.stringify({ query: payload }),
      });
      const jsonData = await response.json();
      return jsonData;
    } else if (methodType === "GET" && xapikey !== null) {
      const urlparam = new URLSearchParams(urlparams).toString();
      // console.log("url endpoints and search params", `${url}?${urlparam}`);
      const response = await fetch(`${url}?${urlparam}`, {
        method: methodType,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xapikey,
        },
      });
      const jsonData = await response.json();
      return jsonData;
    } else if (methodType === "POST" && xapikey !== null) {
      const response = await fetch(url, {
        method: methodType,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xapikey,
        },
        body: JSON.stringify({ payload }),
      });
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    throw new Error(`Failed while fetching data, ${error}`);
  }
};

export default testSgDatafetch;
