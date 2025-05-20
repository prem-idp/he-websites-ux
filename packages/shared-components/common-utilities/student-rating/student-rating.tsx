import React, { useEffect, useState } from "react";
import Image from "next/image";

const StudentRating = ({ data }: any) => {
  const [ratingGrid, setRatingGrid] = useState(0);
  useEffect(() => {
    setRatingGrid(data.length);
  }, []);

  return (
    <>
    <div className="flex flex-col gap-[16px] p-[16px]">
      <div className="flex flex-col gap-[8px] items-start justify-between md:flex-row md:items-center">
        <div className="flex items-center gap-[4px]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.337 4.75813C14.8605 3.14719 17.1395 3.14719 17.663 4.75813L19.5331 10.514C19.7672 11.2344 20.4386 11.7222 21.1961 11.7222H27.2481C28.942 11.7222 29.6462 13.8897 28.2759 14.8853L23.3797 18.4426C22.7668 18.8878 22.5104 19.6771 22.7445 20.3975L24.6147 26.1533C25.1381 27.7643 23.2943 29.1039 21.924 28.1082L17.0278 24.5509C16.4149 24.1057 15.5851 24.1057 14.9722 24.5509L10.076 28.1082C8.70569 29.1039 6.8619 27.7643 7.38533 26.1533L9.25551 20.3975C9.48959 19.6771 9.23315 18.8878 8.62031 18.4426L3.72412 14.8853C2.35377 13.8897 3.05804 11.7222 4.75189 11.7222H10.8039C11.5614 11.7222 12.2328 11.2344 12.4669 10.514L14.337 4.75813Z"
              fill="#333333"
            />
          </svg>
          <span className="para-lg font-semibold"> Student ratings </span>
        </div>
        <div className="flex xs-small font-semibold uppercase gap-[4px]">
          Source:
          <a href="#" className="text-primary-400 hover:underline">
            Whatuni student choice awards
          </a>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 justify-between gap-[20px] w-full *:text-small *:text-grey300 
    ${
      ratingGrid === 3
        ? "md:grid-cols-3"
        : ratingGrid === 4
          ? "md:grid-cols-4"
          : ratingGrid === 5
            ? "md:grid-cols-3"
            : ratingGrid === 6
              ? "md:grid-cols-3"
              : ""
    }`}
      >
        {data.map((item: any, index: any) => (
          <div className="flex flex-col" key={index}>
            <div className="small font-semibold line-clamp-1">{item.title}</div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width="24"
                  height="24"
                  alt="Rating icon"
                />
                <span className="text-heading6 font-farro font-bold">
                  {item.value}
                </span>
              </div>
              <span className="small">{item.extra}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default StudentRating;
