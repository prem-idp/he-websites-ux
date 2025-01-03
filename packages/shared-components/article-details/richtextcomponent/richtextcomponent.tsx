import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Richtextcomponent({ data }: any) {
  // console.log("inside the richtextcomponent-------------------------------------------");
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
    <div>
      <div className="mb-8 max-w-3xl w-full flex flex-col items-center text-center overflow-hidden">
        {data?.paragraphTitle && (
          <h2 className="text-xl font-bold mb-4">{data?.paragraphTitle}</h2>
        )}
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

        <div className="prose max-w-full">
          {data?.paragraphBodyRichText?.json &&
            documentToReactComponents(
              data?.paragraphBodyRichText.json,
              customOptions
            )}
        </div>
      </div>
    </div>
  );
}
