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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}/sub-inst-ajax`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
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
        next: { revalidate: 300 },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
