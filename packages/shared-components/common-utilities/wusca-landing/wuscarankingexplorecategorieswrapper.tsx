import React from "react";
import Wuscarankingcategorygrid from "./wuscarankingcategorygrid";
import Tagcloudcomponents from "@packages/shared-components/home/tag-cloud/tagcloudcomponents";
import { DiscoverCardData } from "@packages/shared-components/common-utilities/slider/discovercard";

interface WuscaRankingExploreCategoriesWrapperProps {
  title: string;
  cards: DiscoverCardData[];
}

const Wuscarankingexplorecategorieswrapper = ({
  title,
  cards,
}: WuscaRankingExploreCategoriesWrapperProps) => {
  return (
    <section className="bg-grey-50 py-[40px] md:py-[64px]">
      <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-[0]">
        <h2 className="font-farro font-bold text-heading2 mb-[26px] md:mb-[32px]">
          {title}
        </h2>
        <div className="discover-card-slide">
          <Wuscarankingcategorygrid cards={cards} />
        </div>
        {/* Tag Cloud */}
        <div className="mx-[-16px] md:mx-[-20px] lg:mx-0">
          <Tagcloudcomponents />
        </div>
      </div>
    </section>
  );
};

export default Wuscarankingexplorecategorieswrapper;
