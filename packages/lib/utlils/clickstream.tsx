export const ClickStream = async ({ body }: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CLICKSTREAM_API}`, {
    headers: {
      ContentType: "application/json",
      "x-api-key": `${process.env.NEXT_PUBLIC_CLICKSTREAM_API_KEY}`,
    },
    body: JSON.stringify({ body }),
  });
};
