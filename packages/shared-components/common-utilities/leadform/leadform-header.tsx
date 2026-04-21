import React from "react";

type LeadFormHeaderProps = {
  title: string;
  description: string;
};

const LeadFormHeader = ({ title, description }: LeadFormHeaderProps) => (
  <div className="flex flex-col gap-[8px] text-center">
    <h1 className="text-heading6 md:text-heading5 font-farro font-bold">
      {title}
    </h1>
    <p className="text-small">{description}</p>
  </div>
);

export default LeadFormHeader;
