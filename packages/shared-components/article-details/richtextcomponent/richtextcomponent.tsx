"use client";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Richtextcomponent({ data }: any) {
  const customOptions = {
    renderNode: {
      paragraph: (node: any, children: any) => <p>{children}</p>,
      "heading-1": (node: any, children: any) => <h1>{children}</h1>,
      "heading-2": (node: any, children: any) => <h2>{children}</h2>,
      "heading-3": (node: any, children: any) => <h3>{children}</h3>,
      "unordered-list": (node: any, children: any) => <ul>{children}</ul>,
      "ordered-list": (node: any, children: any) => <ol>{children}</ol>,
      "list-item": (node: any, children: any) => <li>{children}</li>,
      hyperlink: (node: any, children: any) => (
        <a
          onClick={() => console.log("clicking  clicking  clicking clicking")}
          href={node.data.uri}
        >
          {children}
        </a>
      ),
    },
    renderMark: {
      bold: (text: any) => <strong>{text}</strong>,
      italic: (text: any) => <em>{text}</em>,
      underline: (text: any) => <u>{text}</u>,
    },
  };

  return (
    <>
      {data?.paragraphTitle && <h2>{data?.paragraphTitle}</h2>}
      {data?.media?.url && (
        <Image
          priority={true}
          alt="Image"
          src={data?.media?.url}
          width={700}
          height={700}
          className="mb-4"
        />
      )}
      <div id={data?.skipLinkId}>
        {data?.paragraphBodyRichText?.json &&
          documentToReactComponents(
            data?.paragraphBodyRichText.json,
            customOptions
          )}
      </div>
    </>
  );
}
