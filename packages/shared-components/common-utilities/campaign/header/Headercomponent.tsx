import React from "react";
import Image from "next/image";
import Link from "next/link";

const Headercomponent = () => {
  return (
    <>
      <header className="bg-grey-50 flex items-center justify-center">
        <div className="py-[4px] md:py-[6px] w-[51px] lg:w-[58px]">
          <Link href="#">
            <Image
              src="/static/assets/images/whatuni-logo.svg"
              alt="Whatuni Logo"
              width={58}
              height={64}
            />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Headercomponent;
