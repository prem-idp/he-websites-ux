import React from "react";
import Favourites from "@packages/shared-components/user-profile/favourites/favourites";
import ManageFavourites from "@packages/shared-components/user-profile/favourites/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
// import CourseResult from "@packages/shared-components/user-profile/favourites/course-result/CourseResult";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import OpendaysSREliteComponents from "@packages/shared-components/common-utilities/opendays-sr-elite/OpendaysSREliteComponents";
import {
  openDaysData,
  AllOpenDaysData,
  AnyEventsOpenDaysData,
} from "@packages/constants/constants";
import Othercoursesmaylikecomponents from "@packages/shared-components/common-utilities/other-courses-you-may-like/othercoursesmaylikecomponents";
import { userFavCourseData } from "@packages/constants/constants";

const FavouritesPage = () => {
  const bgColor = "grey-50";
  const bgColor1 = "white";
  const userFavourites = true;

  return (
    <>
      <Favourites />
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
      {/* <section className="bg-white p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">{/* <CourseResult /></div>
      </section> */}
      <Subscribecomponents />
    </>
  );
};

export default FavouritesPage;
