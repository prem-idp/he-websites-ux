"use client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Pullquote = ({ data, key }: any) => {
  console.log(data, "rrrrrrrrrrrrrrrrrrrrrrrrrr");
  return (
    <div className="border-x-8 border-blue-200 p-[16px] bg-blue-50 text-grey300 flex flex-col gap-[8px]">
      <q className="pull-quotes text-heading6 font-farro  font-noraml">
        {data?.pullQuote?.json &&
          documentToReactComponents(data?.pullQuote.json)}
      </q>

      <div className="flex flex-col gap-[4px]">
        <span className="x-small font-semibold font-inter ">
          {data?.pullQuoteAuthor}
        </span>
        <span className="x-small font-normal font-inter">
          {data?.pullQuoteRole}
        </span>
      </div>
    </div>
  );
};

export default Pullquote;
