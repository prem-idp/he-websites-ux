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
      // Custom style for paragraphs
      "embedded-asset-block": (node: any) => {
        return (
          <img
            src={node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
            className="w-full h-auto rounded-lg shadow-md mx-auto"
          />
        );
      },
      "embedded-entry-block": (node: any) => {
        return (
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            Custom Entry
          </div>
        );
      },
      // Custom style for paragraphs
      paragraph: (node: any) => {
        return (
          <p className="text-lg mb-4 text-grey-400">{node.content[0].value}</p>
        );
      },
      // Custom style for headings
      "heading-1": (node: any) => {
        return (
          <h1 className="text-3xl font-bold my-4">{node.content[0].value}</h1>
        );
      },
      "heading-2": (node: any) => {
        return (
          <h2 className="text-2xl font-semibold my-3">
            {node.content[0].value}
          </h2>
        );
      },
      "heading-3": (node: any) => {
        return (
          <h3 className="text-xl font-medium my-2">{node.content[0].value}</h3>
        );
      },
      // Custom style for hyperlinks
      hyperlink: (node: any) => {
        console.log(node);
        return (
          <a
            href={node.data.uri}
            className="text-green-500 hover:text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.content[0].value}
          </a>
        );
      },
    },
    renderText: (text: string) => {
      return text; // Keep text as is, but you could add classes or other modifications here.
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
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {data?.bodyContentCollection?.items?.map((dt: any, index: any) => (
          <div key={index} className="mb-8 max-w-3xl w-full">
            {dt?.paragraphTitle && (
              <h2 className="text-xl font-bold mb-4">{dt?.paragraphTitle}</h2>
            )}
            {dt?.media?.url && (
              <Image
                alt="Image"
                src={dt?.media?.url}
                width={700}
                height={700}
                className="mb-4 mx-auto"
              />
            )}
            <div className="prose mx-auto">
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
