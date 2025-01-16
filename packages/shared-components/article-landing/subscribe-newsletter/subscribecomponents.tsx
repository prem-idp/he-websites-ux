"use server";
import Subscribe from "./subscribe";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import React from "react";
import { NewsletterQuery } from "@packages/lib/graphQL/article-landing";
// import { usePathname } from "next/navigation";
// import { useSearchParams } from "next/navigation";
const Subscribecomponents = async ({ iscontentPreview }: any) => {
  const query = NewsletterQuery(iscontentPreview);
  const jsondata = await graphQlFetchFunction(query);
  // const [jsondata, setjsonData] = useState<any>();
  // const path = usePathname();
  // const arr = path.split("/");
  // const routename = arr[arr.length - 1];
  // console.log(routename);
  // const searchparams = useSearchParams();
  // const isPreviewTrue =
  //   searchparams.get("preview") === "MY_SECRET_TOKEN" ? true : false;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const query = NewsletterQuery(isPreviewTrue);
  //     console.log(query);
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${isPreviewTrue ? process.env.NEXT_PUBLIC_GRAPHQL_preview_AUTH : process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
  //       },
  //       body: JSON.stringify({ query }),
  //     });
  //     if (response.ok) {
  //       const responseData = await response.json();
  //       setjsonData(responseData);
  //     } else {
  //       setjsonData(null);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Subscribe data={jsondata} isPreviewTrue={iscontentPreview} />
    </>
  );
};

export default Subscribecomponents;
