"use server";
import crypto from "crypto";
export async function graphQlFetchFunction(payload: string) {
  try {
    const hash = crypto.createHash("sha256").update(payload).digest("hex");
    // console.log(
    //   hash,
    //   "this is hash value inside the graphqlserveraction",
    //   payload
    // );
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
        "x-amz-content-sha256": hash,
      },
      body: JSON.stringify({ query: payload }),
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    // console.log("Graph QL fecth function", error);
    throw error;
  }
}

export async function searchAjaxFecthFunction (payload: Record<string, any>) {
  try {
    // Convert the payload to query parameters
    const queryParams = new URLSearchParams(payload).toString();

    // Compute the hash of the payload string
    const payloadString = JSON.stringify(payload);
    const hash = crypto
      .createHash("sha256")
      .update(payloadString)
      .digest("hex");

    const url = `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/sub-inst-ajax?${queryParams}`;
    console.log("url", url);
    // Make a GET request with the query parameters
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
        "x-amz-content-sha256": hash,
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

export async function getReviewDetailsFunction(reviewPayload: any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
        },
        body: JSON.stringify(reviewPayload),
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    // console.log("review api", error);
    throw error;
  }
}

export async function getUcasCalculatorGrades(ucasPayload: any) {
  try {
    const payloadString = JSON.stringify(ucasPayload);
    const hash = crypto
      .createHash("sha256")
      .update(payloadString)
      .digest("hex");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/ucas-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
          "x-amz-content-sha256": hash,
        },
        body: JSON.stringify(payloadString),
        cache: "no-store",
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    // console.log("ucas ajax", error);
    throw error;
  }
}
