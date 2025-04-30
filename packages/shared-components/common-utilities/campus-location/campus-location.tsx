import React from "react";
import Image from "next/image";

const CampusLocation = () => {
  return (
    <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
      <div className="para-lg font-semibold">Campus location</div>
      <Image
        src="/static/assets/images/campus-location.jpg"
        width="907"
        height="283"
        alt="campus-location"
      />
    </div>
  );
};

export default CampusLocation;
