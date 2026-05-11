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
    <section className="bg-blue-100">
      <div className="px-[16px] md:px-[20px] xl:px-[112px]">
        <div className="max-w-container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start py-[24px] md:py-[0] md:h-[200px] lg:h-[234px] gap-[16px] md:gap-[20px]">
          <h1 className="font-farro font-bold text-heading3 md:text-heading2 lg:text-heading-lg text-grey300 text-center md:text-left md:self-end md:pb-[24px] lg:pb-[32px]">
            {title}
          </h1>
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[392px] lg:h-[234px] shrink-0 md:self-stretch order-first md:order-last">
            <Image
              src={badgeImage}
              alt="Whatuni Student Choice Awards"
              width={392}
              height={234}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wuscarankingsherosection;
