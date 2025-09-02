import React from "react";
import Image from "next/image";

const ManageFavourites = () => {
  return (
    <section className="bg-grey-50 px-[16px] md:px-[20px] xl:px-0">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
          <div className="flex items-end justify-center md:overflow-hidden">
            <div className="w-[200px] pt-[40px] md:w-[384px] md:mb-[-100px] lg:mb-[-225px]">
              <Image
                className="grow"
                width={385}
                height={344}
                src="/static/assets/images/user-profile/favourites-device.png"
                alt="favourites"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[16px] py-[24px] py-[40px] md:py-[64px]">
            <div>
              <div className="font-farro font-bold text-black text-heading3 md:text-heading2">
                Manage your favourites on the go
              </div>
              <p className="mt-[16px] md:mt-[8px]">
                Compare, manage and edit your favourites on the go on our free
                app! Download now to take your favourites on the go so you can
                prepare for the next stage of your uni journey the smart way.
              </p>
            </div>
            <button className="btn btn-primary btn-large w-fit flex gap-[6px] items-center">
              Find out more
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999"
                  stroke="#fff"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex gap-[16px]">
              <a href="" target="_blank">
                <Image
                  width={120}
                  height={40}
                  src="/static/assets/images/app_store.svg"
                  alt="App Store"
                />
              </a>
              <a href="" target="_blank">
                <Image
                  width={135}
                  height={40}
                  src="/static/assets/images/google_play_store.svg"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageFavourites;
