import React from "react";
import PopularSubject from "../cards/popular-subject/popular-subject";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const PopularSubjectSlider = () => {
  return (
    <>
      <div className="lg:w-[650px] xl:w-[907px] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          freeMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="MultiSwiper popular"
        >
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Architectural Engineering and Technology"}
              subjectBgColor={"bg-blue-100"}
              leafBgColor={"bg-blue-200"}
              rightArrowColor={"fill-primary-500"}
            />
          </SwiperSlide>

          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Wildlife and Conservation Biology"}
              subjectBgColor={"bg-green-100"}
              leafBgColor={"bg-green-200"}
              rightArrowColor={"fill-secondary-500"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Creative Arts and Design"}
              subjectBgColor={"bg-orange-100"}
              leafBgColor={"bg-orange-200"}
              rightArrowColor={"fill-orange-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Aerospace Engineering"}
              subjectBgColor={"bg-grey-200"}
              leafBgColor={"bg-grey-300"}
              rightArrowColor={"fill-grey-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Forensic Nursing"}
              subjectBgColor={"bg-blue-100"}
              leafBgColor={"bg-blue-200"}
              rightArrowColor={"fill-primary-500"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Wildlife and Conservation Biology"}
              subjectBgColor={"bg-green-100"}
              leafBgColor={"bg-green-200"}
              rightArrowColor={"fill-secondary-500"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Creative Arts and Design"}
              subjectBgColor={"bg-orange-100"}
              leafBgColor={"bg-orange-200"}
              rightArrowColor={"fill-orange-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
              subjectTitle={"Aerospace Engineering"}
              subjectBgColor={"bg-grey-200"}
              leafBgColor={"bg-grey-300"}
              rightArrowColor={"fill-grey-600"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PopularSubject
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

export default PopularSubjectSlider;
