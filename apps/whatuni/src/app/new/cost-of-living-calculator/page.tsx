"use server";
import React from "react";
import MicroFrontend from "./micro-frontend";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
const page = () => {
  return (
    <>
      <MicroFrontend />
      <Subscribecomponents isContentPreview={false} />
    </>
  );
};

export default page;
