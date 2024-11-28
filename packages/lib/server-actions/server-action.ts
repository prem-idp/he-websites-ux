"use server";
import crypto from "crypto";

export async function graphQlFetchFunction(payload: string) {
  try {
    const hash = crypto.createHash("sha256").update(payload).digest("hex");
    console.log(hash, "this is hash value inside the graphqlserveraction");
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

export async function searchAjaxFecthFunction(payload: any) {
  try {
    const payloadString = JSON.stringify(payload);
    const hash = crypto
      .createHash("sha256")
      .update(payloadString)
      .digest("hex");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/sub-inst-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
          "x-amz-content-sha256": hash,
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    // console.log("search ajax", error);
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/ucas-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
        },
        body: JSON.stringify(ucasPayload),
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
