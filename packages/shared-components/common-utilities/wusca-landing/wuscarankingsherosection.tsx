import React from "react";
import Image from "next/image";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";

interface WuscaRankingsHeroSectionProps {
  title: string;
  badgeImage?: string;
  breadcrumbs: { label: string; url?: string; Imgurl?: string }[];
}

const Wuscarankingsherosection = ({
  title,
  badgeImage = "/static/assets/images/wusca/wusca_ranking_hero_logo.png",
  breadcrumbs,
}: WuscaRankingsHeroSectionProps) => {
  return (
    <section className="bg-blue-100">
      {/* Breadcrumb Row */}
      <div className="px-[16px] md:px-[20px] xl:px-[112px] pt-[24px]">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbs} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="px-[16px] md:px-[20px] xl:px-[112px]">
        <div className="max-w-container mx-auto">
          {/* Mobile: column layout (logo top center, title below) */}
          <div className="flex flex-col items-center gap-[16px] py-[24px] md:hidden">
            <div className="w-[150px] h-[150px]">
              <Image
                src={badgeImage}
                alt="Whatuni Student Choice Awards"
                width={150}
                height={150}
                className="object-contain w-full h-full"
              />
            </div>
            <h1 className="font-farro font-bold text-heading3 text-grey300 text-center">
              {title}
            </h1>
          </div>

          {/* Tablet & Desktop: row layout (title left-bottom, logo right) */}
          <div className="hidden md:flex flex-row justify-between items-start h-[200px] lg:h-[234px] gap-[20px]">
            <h1 className="font-farro font-bold text-heading2 lg:text-heading-lg text-grey300 self-end pb-[24px] lg:pb-[32px]">
              {title}
            </h1>
            <div className="w-[200px] h-[200px] lg:w-[392px] lg:h-[234px] shrink-0 self-stretch">
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
      </div>
    </section>
  );
};

export default Wuscarankingsherosection;
