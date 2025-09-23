import React from "react";
import Image from "next/image";
import Link from "next/link";

const ManageFavourites = () => {
  return (
    <section className="bg-primary-50 px-[16px] md:px-[20px] xl:px-0">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px]">
          <div className="flex items-end justify-center md:overflow-hidden">
            <div className="w-[200px] pt-[40px] md:w-[384px] md:mb-[-100px] lg:mb-[-233px]">
              <Image
                width={385}
                height={344}
                src="/static/assets/images/user-profile/favourites-device.png"
                alt="favourites"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[16px] py-[24px] py-[40px] md:gap-[24px] md:py-[64px]">
            <div className="md:space-y-[8px]">
              <div className="font-farro font-bold text-grey300 text-heading3 md:text-heading2">
                Actual uni tips. From real students.
              </div>
              <p className="mt-[16px] md:mt-0 line-clamp-2">
                Use the Ambassador Chat in the Whatuni App to hear it straight
                from students living it.
              </p>
              <Image
                className="hidden md:block cursor-pointer"
                src="/static/assets/images/user-profile/favourites-qrcode.svg"
                alt="QR Code"
                width={107}
                height={107}
              />
            </div>

            <div className="flex gap-[16px]">
              <Link href="#">
                <Image
                  width={120}
                  height={40}
                  src="/static/assets/images/app_store.svg"
                  alt="App Store"
                />
              </Link>
              <Link href="#">
                <Image
                  width={135}
                  height={40}
                  src="/static/assets/images/google_play_store.svg"
                  alt="Google Play"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageFavourites;
