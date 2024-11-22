"use client";

import { partnerLogo } from "@packages/lib/graphQL/graphql-query";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

interface LogoImage {
  url: string;
  width: number;
  height: number;
}

interface Partner {
  logoName: string;
  logoLink: string | null;
  logoImage: LogoImage;
}

const OurPartnerComponent = ({ heading }: any) => {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    async function contentfulLoadData() {
      const partnerLogoJsonData = await graphQlFetchFunction(partnerLogo);
      const partnerLogos =
        partnerLogoJsonData?.data?.contentData?.items[0]?.bodyContentCollection
          ?.items[0]?.mediaCardsCollection?.items || [];
      setPartners(partnerLogos);
      console.log("json", partnerLogoJsonData);
      console.log("data", partnerLogos);
    }

    contentfulLoadData();
  }, []);

  return (
    <>
      <section className="bg-grey-50 py-[40px] md:pt-[64px] md:pb-[39px] px-[16px] md:px-[20px] xl2:px-0">
        <div className="max-w-container mx-auto">
          <h2 className="text-center font-bold">{heading}</h2>
          <div className="flex items-center pt-[32px]">
            <Swiper
              autoplay={{
                delay: 0,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                  freeMode: true,
                },
                1200: {
                  slidesPerView: 10,
                  spaceBetween: 64,
                },
              }}
              modules={[Autoplay, EffectFade, Pagination]}
              className="mySwiper partner"
              pagination={true}
              speed={3000}
              loop={true}
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]">
                    <Image
                      className="rounded-[4px]"
                      src={partner?.logoImage?.url}
                      alt={partner?.logoName}
                      width={partner?.logoImage?.width || 64}
                      height={partner?.logoImage?.height || 64}
                      data-src={partner?.logoImage?.url}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartnerComponent;
