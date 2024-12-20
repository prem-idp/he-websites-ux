"use server";
import React from "react";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { testimonial } from "@packages/lib/graphQL/graphql-query";
import TestimonialVideo from "./testimonialvideocomponents";
const Testimonialcomponents = async ({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) => {
  const testimonialJsonData = await graphQlFetchFunction(testimonial);
  const contentfullData =
    testimonialJsonData?.data?.contentData?.items[0]?.bodyContentCollection
      ?.items[0]?.mediaCardsCollection?.items[0] || [];
  return (
    <section className="testimonials-container bg-white">
      <div className="max-w-container mx-auto">
        <div className="testimonials-card-container px-[16px] md:px-[20px] py-[34px] md:py-[64px] xl:px-[0]">
          <div className="testimonials-header mb-[26px] md:mb-[32px]">
            <h2 className="font-bold">{heading}</h2>
            <p className="font-normal small mt-[8px]">{subheading}</p>
          </div>
          <div className="testimonials-inner-wrap grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
            <TestimonialVideo contentfullRightData={contentfullData} />
            <div className="testimonial-card grid content-between p-[24px] rounded-[8px] gap-[16px] bg-primary-500">
              <div className="h5 !font-medium para-lg md:text-heading5 md:head text-white">
                "{contentfullData?.testimonialBlockRight?.testimonialText}"
              </div>
              <div className="testimonial-footer">
                <div className="author-name font-semibold small text-white">
                  {contentfullData?.testimonialBlockRight?.author?.firstName}
                </div>
                <p className="small text-white">
                  {contentfullData?.testimonialBlockRight?.author?.shortBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonialcomponents;
