"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import HeroSliderCard from "@packages/shared-components/common-utilities/cards/hero-card/heroslidercard";
const HeroSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      effect="fade"
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper hero"
    >
      <SwiperSlide>
        <HeroSliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSliderCard />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSliderCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
