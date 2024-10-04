"use server";
export default async function FetchDataForQuery(query: any) {
  const endpoint: any = process.env.GRAPHQL_ENDPOINT;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GRAPHQL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    // console.log(" data for the grphql fetch function -----------------", data);
    return data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}
