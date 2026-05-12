import React from "react";
import Image from "next/image";

interface WuscaRankingsHeroSectionProps {
  title: string;
  badgeImage?: string;
}

const Wuscarankingsherosection = ({
  title,
  badgeImage = "/static/assets/images/wusca/wusca_ranking_hero_logo.png",
}: WuscaRankingsHeroSectionProps) => {
  return (
    <section className="bg-blue-100 px-[16px] md:px-[20px] xl:px-[0]">
      <div className="max-w-container mx-auto flex flex-col  gap-[16px] items-center md:flex-row md:justify-between py-[16px] md:py-[0]">
        <h1 className="font-farro font-bold text-heading-lg md:text-heading-xl md:self-end md:pb-[24px] lg:pb-[32px]">
          {title}
        </h1>
        <div className="w-full h-[145px] md:w-[219px] md:h-[214px] lg:w-[392px] lg:h-[234px] shrink-0 md:self-stretch order-first md:order-last">
          <Image
            src={badgeImage}
            alt="Whatuni Student Choice Awards"
            width={392}
            height={234}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Wuscarankingsherosection;
