import React from "react";
import ManageFavourites from "@packages/shared-components/user-profile/favourites/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import OpendaysSREliteComponents from "@packages/shared-components/common-utilities/opendays-sr-elite/OpendaysSREliteComponents";
import { openDaysData } from "@packages/constants/constants";
import Othercoursesmaylikecomponents from "@packages/shared-components/common-utilities/other-courses-you-may-like/othercoursesmaylikecomponents";
import { userFavCourseData } from "@packages/constants/constants";
import ResultPod from "@packages/shared-components/user-profile/favourites/result-pod/result-section";
import { favouritesCourseData } from "@packages/constants/constants";
const FavouritesCoursePage = () => {
  const bgColor = "grey-50";
  const bgColor1 = "white";
  const userFavourites = true;

  return (
    <>
      <section className="bg-white p-[16px] md:px-[20px] lg:py-[40px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="text-heading5 font-farro font-semibold mb-[16px] md:text-heading4">
            Your courses
          </div>
          <ResultPod
            favouritesCourseStudentReview={true}
            clickShowModule={false}
            viewCourse={false}
            courseData={favouritesCourseData}
          />
        </div>
      </section>
      <ManageFavourites />
      <Othercoursesmaylikecomponents
        {...userFavCourseData}
        bgColor={bgColor1}
        seasonWusca={false}
        userFavourites={userFavourites}
      />
      <OpendaysSREliteComponents
        {...openDaysData}
        bgColor={bgColor}
        featureOpd={false}
      />
      <Advicecomponents
        bgColor={bgColor1}
        heading={"Open days advice and articles"}
        subheading={""}
      />
      <Subscribecomponents />
    </>
  );
};

export default FavouritesCoursePage;
