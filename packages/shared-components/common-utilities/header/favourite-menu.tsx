import React from "react";
import Link from "next/link";
const FavouritesMenu = () => {
  return (
    <div className="flex justify-between p-[16px] absolute top-[56px] right-[-5px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] lg:top-[71px]">
      <ul className="small">
        <li className="mb-[16px] hover:underline">
          <Link href="#">
            Favourites
            <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
              5
            </span>
          </Link>
        </li>
        <li className="mb-[16px] hover:underline">
          <Link href="#">
            Courses
            <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
              2
            </span>
          </Link>
        </li>
        <li className="mb-[16px] hover:underline">
          <Link href="#">
            Universities
            <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
              3
            </span>
          </Link>
        </li>
      </ul>
      <Link
        href="#"
        className="font-semibold small bg-primary-400 text-white px-[16px] py-[8px] rounded-[18px] self-start"
      >
        Compare
      </Link>
    </div>
  );
};

export default FavouritesMenu;
