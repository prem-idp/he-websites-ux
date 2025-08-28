import React from "react";
import Favourites from "@packages/shared-components/user-profile/favourites/favourites";
import ManageFavourites from "@packages/shared-components/user-profile/favourites/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import CourseResult from "@packages/shared-components/user-profile/favourites/course-result/CourseResult";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

const FavouritesPage = () => {
  const bgColor1 = "white";

  return (
    <>
      {/* <Favourites />
      <ManageFavourites />
      <Advicecomponents
        bgColor={bgColor1}
        heading={"Open days advice and articles"}
        subheading={""}
      /> */}
      <section className="bg-white p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">
          <CourseResult />
        </div>
      </section>
      <Subscribecomponents />
    </>
  );
};

export default FavouritesPage;
