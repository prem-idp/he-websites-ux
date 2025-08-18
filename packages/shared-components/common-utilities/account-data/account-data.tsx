import React from "react";

export interface AccountDataProps {
  data: {
    title: string;
    description: string | React.ReactNode;
    buttonText: string;
    popupBlocker?: string;
    popupFunc?: boolean;
  }[];
}
const AccountData = ({ data }: AccountDataProps) => {
  // Assuming you want to render the first item in the data array
  const { title, description, buttonText, popupBlocker } = data[0] || {};

  return (
    <>
      <div className="flex flex-col items-start gap-[16px]">
        <div className="h6">{title}</div>
        <div className="para">{description}</div>
        <button className="btn btn-primary">{buttonText}</button>
        {popupBlocker && <span className="pb-[8px]">{popupBlocker}</span>}
      </div>
      {/* <DeleteAccount /> */}
    </>
  );
};

export default AccountData;
