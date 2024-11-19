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
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchAjaxFecthFunction(payload: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_AJAX_API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
