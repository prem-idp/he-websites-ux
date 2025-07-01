import Image from "next/image";
import React from "react";

const CategroryRanking = () => {
  return (
    <div className="card flex flex-col gap-[16px] w-full md:max-w-[327px] border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]">
      <div className="para-lg font-semibold">Category rankings</div>
      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center gap-[6px]">
          <div className="small">Overall rating</div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width={24}
                  height={24}
                  alt="Rating icon"
                />
              </span>
            ))}
          </div>
          <div className="small">3.5</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="small">University rating</div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width={24}
                  height={24}
                  alt="Rating icon"
                />
              </span>
            ))}
          </div>
          <div className="small">3.5</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="small">Course rating</div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width={24}
                  height={24}
                  alt="Rating icon"
                />
              </span>
            ))}
          </div>
          <div className="small">3.5</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="small">Uni location rating</div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width={24}
                  height={24}
                  alt="Rating icon"
                />
              </span>
            ))}
          </div>
          <div className="small">3.5</div>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="small">Uni Halls rating</div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width={24}
                  height={24}
                  alt="Rating icon"
                />
              </span>
            ))}
          </div>
          <div className="small">3.5</div>
        </div>
      </div>
    </div>
  );
};

export default CategroryRanking;
