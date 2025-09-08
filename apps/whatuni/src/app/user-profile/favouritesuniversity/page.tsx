import React from "react";
import ManageFavourites from "@packages/shared-components/user-profile/favourites/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import OpendaysSREliteComponents from "@packages/shared-components/common-utilities/opendays-sr-elite/OpendaysSREliteComponents";
import {
  openDaysData,
  AllOpenDaysData,
  AnyEventsOpenDaysData,
} from "@packages/constants/constants";
import Othercoursesmaylikecomponents from "@packages/shared-components/common-utilities/other-courses-you-may-like/othercoursesmaylikecomponents";
import { userFavCourseData } from "@packages/constants/constants";

const FavouritesUniversityPage = () => {
  const bgColor = "grey-50";
  const bgColor1 = "white";
  const userFavourites = true;
  const uniFavourites = true;

  return (
    <>
      <Othercoursesmaylikecomponents
        {...userFavCourseData}
        bgColor={bgColor1}
        seasonWusca={false}
        userFavourites={userFavourites}
        uniFavourites={uniFavourites}
      />
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

export default FavouritesUniversityPage;
