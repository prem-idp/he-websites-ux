import React from "react";
import Image from "next/image";

const Articleimage = ({ data, key }: any) => {
  return (
    <div>
      {data?.imgUpload?.url && (
        <Image
          src={data?.imgUpload?.url}
          width="804"
          height="452"
          className="block w-full h-auto"
          alt={data?.imgAltText ?? "Article_image"}
        />
      )}
    </div>
  );
};

export default Articleimage;
