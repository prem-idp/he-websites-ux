import React from "react";
import Image from "next/image";

const Favourites = () => {
  const bgColor1 = "white";
  return (
    <section className="px-[16px] md:px-[20px] xl:px-0 py-[32px] md:py-[40px]">
      <div className="max-w-container mx-auto flex flex-col gap-[16px]">
        <div className="font-farro font-bold text-black text-heading4 lg:text-heading3">
          Your Favourites
        </div>
        <div className="bg-blue-50 border-2 border-dotted border-blue-200 rounded-[8px] flex flex-col items-center text-center gap-[16px] p-[24px] md:p-[40px]">
          <Image
            width={106}
            height={109}
            src="/static/assets/images/user-profile/favourites.png"
            alt="favourites"
          />
          <div>
            <div className="font-farro font-bold text-black text-heading6 lg:text-heading5">
              You haven’t added any <br></br>Favourites yet
            </div>
            <p className="mt-[4px]">
              Start searching now to find fantastic unis and courses
            </p>
          </div>
          <button className="px-[16px] py-[8px] bg-white border border-primary-500 text-primary-500 rounded-[18px] hover:bg-primary-600 transition small font-semibold">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Favourites;
