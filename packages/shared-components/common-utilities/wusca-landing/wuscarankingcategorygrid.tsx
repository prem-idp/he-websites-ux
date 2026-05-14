"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import DiscoverCard, {
  DiscoverCardData,
} from "@packages/shared-components/common-utilities/slider/discovercard";

const Wuscarankingcategorygrid = ({ cards }: { cards: DiscoverCardData[] }) => (
  <Swiper
    navigation={true}
    pagination={true}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 8 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      992: { slidesPerView: 3, spaceBetween: 20 },
    }}
    modules={[FreeMode, Navigation, Pagination]}
    className="MultiSwiper"
  >
    {cards.map((card, index) => (
      <SwiperSlide key={index}>
        <DiscoverCard card={card} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Wuscarankingcategorygrid;
