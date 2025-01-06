import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent";
import Articledescription from "@packages/shared-components/article-details/article-description/article-description";
import Authorprofile from "@packages/shared-components/article-details/author-profile/author-profile";
import { articleDetailQuery } from "@packages/lib/graphQL/article-detail";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Image from "next/image";

const page = async () => {
  const articledetaildata = await graphQlFetchFunction(articleDetailQuery);
  const data = articledetaildata?.data?.contentData?.items[0];
  const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Payments",
    },
    {
      url: "#",
      label: "Online payments",
    },
    {
      url: "",
      label: "Overview",
    },
  ];
  const customOptions = {
    renderNode: {
      paragraph: (node: any, children: any) => (
        <p className="mb-4 text-base leading-relaxed w-[700px] ">{children}</p>
      ),
      "heading-1": (node: any, children: any) => (
        <h1 className="text-3xl font-bold mb-6">{children}</h1>
      ),
      "heading-2": (node: any, children: any) => (
        <h2 className="text-2xl font-semibold mb-4">{children}</h2>
      ),
      "heading-3": (node: any, children: any) => (
        <h3 className="text-xl font-semibold mb-3">{children}</h3>
      ),
      "unordered-list": (node: any, children: any) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      "ordered-list": (node: any, children: any) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
      "list-item": (node: any, children: any) => (
        <li className="mb-2">{children}</li>
      ),
      hyperlink: (node: any, children: any) => (
        <a href={node.data.uri} className="text-blue-600 hover:underline">
          {children}
        </a>
      ),
    },
    renderMark: {
      bold: (text: any) => <strong className="font-bold">{text}</strong>,
      italic: (text: any) => <em className="italic">{text}</em>,
      underline: (text: any) => <u className="underline">{text}</u>,
    },
  };

  return (
    <>
      {/* breadcrumb  */}
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
        {data?.bodyContentCollection?.items?.map((dt: any, index: any) => (
          <div
            key={index}
            className="mb-8 max-w-3xl w-full flex flex-col items-center text-center overflow-hidden"
          >
            {dt?.paragraphTitle && (
              <h2 className="text-xl font-bold mb-4">{dt?.paragraphTitle}</h2>
            )}
            {dt?.media?.url && (
              <Image
                priority={true}
                alt="Image"
                src={dt?.media?.url}
                width={700}
                height={700}
                className="mb-4"
              />
            )}

            <div className="prose max-w-full">
              {dt?.paragraphBodyRichText?.json &&
                documentToReactComponents(
                  dt?.paragraphBodyRichText.json,
                  customOptions
                )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
