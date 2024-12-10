"use server";
export async function graphQlFetchFunction(payload: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
      },
      body: JSON.stringify({ query: payload }),
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchAjaxFecthFunction(payload: Record<string, any>) {
  try {
    // Convert the payload to query parameters
    const queryParams = new URLSearchParams(payload).toString();

    // Compute the hash of the payload string

    const url = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/homepage/sub-inst-ajax?${queryParams}`;
    // console.log("url", url);
    // Make a GET request with the query parameters
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

export async function getReviewDetailsFunction(reviewPayload: any) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/homepage/reviews`,
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
    throw error;
  }
}

// export async function guestUserUcas(ucasPayload: any, tracksessionid: string) {
//   try {
//     const res = await fetch(
//       `https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/guest/homepage/ucas-ajax`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
//           tracksessionid: tracksessionid,
//         },
//         body: JSON.stringify(ucasPayload),
//         next: { revalidate: 300 },
//       }
//     );
//     const data = await res.json();
//     console.log("res", res);
//     console.log("data", data);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
