import React from "react";
import Image from "next/image";

const Wuscaherosection = () => {
  return (
    <>
      <section className="relative overflow-hidden h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/static/assets/images/wusca/wusca_hero_banner_image.png')] bg-cover bg-no-repeat bg-[position:-165px_0] md:bg-[position:0] lg:bg-[position:0_-130px]" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient18" />
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          {/* WUSCA Logo */}
          <div className="w-[120px] h-[120px] bg-blue-300 rounded-full flex items-center justify-center">
            <Image
              src="/static/assets/images/wusca/wusca_hero_banner_logo.png"
              alt="Whatuni Student Choice Awards 2026"
              width={91}
              height={77}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Wuscaherosection;
