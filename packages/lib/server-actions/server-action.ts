"use server";
export async function graphQlFetchFunction(payload: string) {
  const endpoint: string = `https://graphql.contentful.com/content/v1/spaces/szez98lehkfm/environments/dev_he_websites`;
  const auth: string = "FW8J_AkzpAVLFzBEYaRrxSIZ42b4UIgFbS3rtSFSOrs";
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({ query: payload }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error while fetching data:", error);
    throw error;
  }
}
export async function ajaxSearh(payload: any) {
  const endpoint: string = `https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/homepage/sub-inst-ajax`;
  const auth: string = "vrlwDbRFMn4pcfGFqaFjR8JGreMibYxJ9mO72PFy";
  try {
    const res = await fetch(endpoint, {
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
