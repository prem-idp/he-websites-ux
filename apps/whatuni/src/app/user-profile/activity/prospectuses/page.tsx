import React from "react";
import { userFavCourseData } from "@packages/constants/constants";
import Othercoursesmaylikecard from "@packages/shared-components/common-utilities/cards/other-courses-you-may-like/othercoursesmaylikecard";
const ProspectusesPage = () => {
  const bgColor1 = "transparent";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[16px]">
        {userFavCourseData.data.map((item, index) => (
          <Othercoursesmaylikecard
            {...item}
            seasonWusca={false}
            openDays={false}
            userFavourites={true}
            activityProspectuses={true}
          />
        ))}
      </div>
    </>
  );
};
export default ProspectusesPage;
