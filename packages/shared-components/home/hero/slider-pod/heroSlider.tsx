"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import HeroSliderCard from "@packages/shared-components/common-utilities/cards/hero-card/heroslidercard";
import { DataInterface } from "@packages/lib/types/interfaces";
interface PropsInterface {
  data: DataInterface;
}
const HeroSlider: React.FC<PropsInterface> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      effect={"fade"}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper hero"
    >
      {data?.items?.map((childItems, index) => (
        <SwiperSlide key={index + 1}>
          <HeroSliderCard data={childItems} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
