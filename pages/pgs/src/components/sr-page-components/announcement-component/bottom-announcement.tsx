"use server";
import React from "react";
const Announcement = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full bg-success-100 text-[13px] py-[10px]">
        <div className="flex items-center justify-center gap-[8px]">
          <div className="">ANNOUNCEMENTS:</div>
          <span className="text-secondary-400">Welcome To IDP world</span>
        </div>
      </div>
    </>
  );
};

export default Announcement;
