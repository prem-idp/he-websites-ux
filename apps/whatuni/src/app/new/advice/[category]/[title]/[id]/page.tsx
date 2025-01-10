"use server";
import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent";
import Articledescription from "@packages/shared-components/article-details/article-description/article-description";
import Authorprofile from "@packages/shared-components/article-details/author-profile/author-profile";
import { articleDetailQuery } from "@packages/lib/graphQL/article-detail";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";

import dynamicComponentImports from "./dynamicimport";

const page = async ({ params }: any) => {
  // const { category, title, id } = await params;
  const category = "money";
  const title =
    "article-the-best-resources-for-saving-money-at-university-whatuni";
  const id = "121213";
  const articledetaildata = await graphQlFetchFunction(
    articleDetailQuery(category, title, id)
  );
  const data = articledetaildata?.data?.contentData?.items[0];
  // console.log(data);
  const breadcrumbData = [
    { url: "#", label: "Home" },
    { url: "#", label: "Payments" },
    { url: "#", label: "Online payments" },
    { url: "", label: "Overview" },
  ];

  return (
    <>
      <section className="pt-[16px] pb-[40px]">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </section>

      <section className="pb-[40px]">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          <Articledescription data={data} />
        </div>
      </section>

      <section className="pb-[40px]">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          <Authorprofile data={data} />
        </div>
      </section>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 lg:px-16 w-full max-w-4xl">
        {data?.bodyContentCollection?.items?.map((dt: any, index: any) => {
          const Component: any = dynamicComponentImports(dt?.__typename);
          return <Component key={index} data={dt} />;
        })}
      </div>
    </>
  );
};

export default page;
