import React, { useEffect, useState } from "react";
import PopularCard from "../cards/popular-card/popular-card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const PopularCardSlider = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <>
      <div className="lg:w-[650px] xl:w-[907px] ">
        <Swiper
          slidesPerView={2}
          spaceBetween={8}
          navigation={true}
          pagination={isMobile ? { clickable: true } : false}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Navigation]}
          className="MultiSwiper popular"
        >
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Architectural Engineering and Technology"}
              subjectBgColor={"bg-blue-100"}
              leafBgColor={"bg-blue-200"}
              rightArrowColor={"fill-primary-500"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <PopularCard
              subjectTitle={"Wildlife and Conservation Biology"}
              subjectBgColor={"bg-green-100"}
              leafBgColor={"bg-green-200"}
              rightArrowColor={"fill-secondary-500"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Creative Arts and Design"}
              subjectBgColor={"bg-orange-100"}
              leafBgColor={"bg-orange-200"}
              rightArrowColor={"fill-orange-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Aerospace Engineering"}
              subjectBgColor={"bg-grey-200"}
              leafBgColor={"bg-grey-300"}
              rightArrowColor={"fill-grey-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Forensic Nursing"}
              subjectBgColor={"bg-blue-100"}
              leafBgColor={"bg-blue-200"}
              rightArrowColor={"fill-primary-500"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Wildlife and Conservation Biology"}
              subjectBgColor={"bg-green-100"}
              leafBgColor={"bg-green-200"}
              rightArrowColor={"fill-secondary-500"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Creative Arts and Design"}
              subjectBgColor={"bg-orange-100"}
              leafBgColor={"bg-orange-200"}
              rightArrowColor={"fill-orange-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Aerospace Engineering"}
              subjectBgColor={"bg-grey-200"}
              leafBgColor={"bg-grey-300"}
              rightArrowColor={"fill-grey-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularCard
              subjectTitle={"Forensic Nursing"}
              subjectBgColor={"bg-blue-100"}
              leafBgColor={"bg-blue-200"}
              rightArrowColor={"fill-primary-500"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PopularCardSlider;
