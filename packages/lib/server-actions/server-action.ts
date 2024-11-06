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
