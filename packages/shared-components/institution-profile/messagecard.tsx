import React from "react";

const MessageCard = ({ title, description }: any) => {
  return (
    <div className="rounded-[8px] mb-[16px] p-[20px] border-l-[4px] border-b-[4px] border-grey-300 bg-grey-100 flex flex-col gap-[4px]">
      <div className="para-lg font-semibold">{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default MessageCard;
