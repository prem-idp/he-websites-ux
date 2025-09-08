"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Opendayscard from "../cards/opendays-card/Opendayscard";

const OpendaysSliderComponents = ({
  seasonWusca,
  data,
  openDays,
  featureOpd,
}: any) => {
  return (
    <>
      <div className="slider-container">
        <Swiper
          pagination={true}
          autoHeight={true}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="MultiSwiper"
        >
          {data?.map((item: any, index: number) => (
            <SwiperSlide key={index} className="swiper-slide">
              <Opendayscard
                {...item}
                seasonWusca="true"
                openDays={openDays}
                featureOpd={featureOpd}
                studyType={"IN-PERSON"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OpendaysSliderComponents;
