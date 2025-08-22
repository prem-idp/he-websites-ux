import React from "react";
import UserProfileComponents from "@packages/shared-components/common-utilities/form-variations/UserProfileComponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

const ProfileDetailsPage = () => {
  return (
    <>
      <UserProfileComponents />
      <Subscribecomponents />
    </>
  );
};

export default ProfileDetailsPage;
