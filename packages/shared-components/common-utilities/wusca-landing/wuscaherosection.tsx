import React from "react";
import Image from "next/image";

const Wuscaherosection = () => {
  return (
    <section className="relative w-full h-[400px] isolate">
      {/* Background Image */}
      <Image
        src="/static/assets/images/wusca/wusca_hero_banner_image.jpg"
        alt="WUSCA Hero Banner"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,23,42,0.8)_0%,rgba(0,0,0,0)_41.67%)]"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-[20px] py-[40px] gap-[10px]">
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
  );
};

export default Wuscaherosection;
