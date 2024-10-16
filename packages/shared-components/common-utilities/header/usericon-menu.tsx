import React from "react";
import Link from "next/link";
const UserIconMenu = () => {
  return (
    <div className="flex justify-between p-[16px] absolute top-[56px] right-[-39px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] lg:top-[71px] lg:right-0">
      <ul className="small">
        <li className="mb-[16px] hover:underline">
          <Link href="#">My profile</Link>
        </li>
        <li className="mb-[16px] hover:underline">
          <Link href="#">Favourites</Link>
        </li>
        <li className="mb-[16px] hover:underline">
          <Link href="#">Profile item</Link>
        </li>
        <li className="text-primary-400 hover:underline">
          <Link href="#">Log out</Link>
        </li>
      </ul>
      <Link
        href="#"
        className="font-semibold x-small text-success-400 uppercase tracking-[1px]"
      >
        Complete your profile
      </Link>
    </div>
  );
};

export default UserIconMenu;
