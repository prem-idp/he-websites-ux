"use server";
export async function graphQlFetchFunction(payload: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_AUTHORIZATION}`,
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
        "x-api-key": `${process.env.NEXT_PUBLIC_SEARCH_AJAX_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
export async function ajaxSearch(payload: any) {
  const endpoint: string = `https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/homepage/sub-inst-ajax`;
  const auth: string = "vrlwDbRFMn4pcfGFqaFjR8JGreMibYxJ9mO72PFy";
  try {
    const res = await fetch(endpoint, {
      cache: "force-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${auth}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}
