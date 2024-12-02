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
      next: { revalidate: 90 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
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
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
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
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function guestUserUcas(ucasPayload: any, tracksessionid: string) {
  try {
    const res = await fetch(
      `https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/guest/homepage/ucas-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
          tracksessionid: tracksessionid,
        },
        body: JSON.stringify(ucasPayload),
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
