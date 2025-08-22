import React from "react";
import Favourites from "@packages/shared-components/common-utilities/favourites/favourites";
import ManageFavourites from "@packages/shared-components/common-utilities/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

const FavouritesPage = () => {
  const bgColor1 = "white";

  return (
    <>
      <Favourites />
      <ManageFavourites />
      <Advicecomponents
        bgColor={bgColor1}
        heading={"Open days advice and articles"}
        subheading={""}
      />
      <Subscribecomponents />
    </>
  );
};

export default FavouritesPage;
