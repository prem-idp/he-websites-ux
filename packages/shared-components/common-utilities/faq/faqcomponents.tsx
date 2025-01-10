"use client";

import React, { Suspense, useState, useEffect } from "react";
import { homePageComponentQueryFormation } from "@packages/lib/graphQL/fetch-function";
import { FaqsQuery } from "@packages/lib/graphQL/article-landing";
const Faqcomponents = ({
  heading,
  subheading,
  internalName,
  routename,
  contentModelName,
}: any) => {
  useEffect(() => {
    const fetchData = async () => {
      const query = homePageComponentQueryFormation(
        internalName,
        FaqsQuery,
        routename,
        contentModelName
      );
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error calling Search Ajax API:", error);
      }
    };

    fetchData();
  }, []);
  // async function fetchData() {
  //   const query = homePageComponentQueryFormation(
  //     internalName,
  //     FaqsQuery,
  //     routename,
  //     contentModelName
  //   );
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}`, {
  //     headers: {
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPHQL_AUTH}`,
  //       ContentType: "application/json",
  //     },
  //     body: JSON.stringify(query),
  //   });
  //   const jsonData = await response.json();
  //   return jsonData;
  // }
  // const data = React.use(fetchData());
  // console.log(data);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faq_items = [
    {
      title: "How can I see my existing clients through Designership?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "How does Designership attract clients?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "What type of support does Designership provide?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "How can I see my existing clients through Designership?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "How does Designership attract clients?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
    {
      title: "What type of support does Designership provide?",
      content:
        "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
    },
  ];
  return (
    <Suspense fallback={<p>loaidng</p>}>
      <div className="faq-container bg-white">
        <div className="max-w-container mx-auto">
          <div className="faq-card-container px-[16px] py-[34px] lg:py-[60px] lg:px-[20px] xl:px-[0]">
            <div className="faq-header mb-[26px]  lg:px-[20px] xl:px-[0] xl:mb-[32px]">
              <h2 className="font-bold">{heading}</h2>
              <p className="font-normal small mt-[8px]">{subheading}</p>
            </div>
            <div className="accordion flex flex-col rounded-[6px] border border-grey-200 px-[16px]">
              {faq_items.map((item, index) => (
                <div
                  className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0 cursor-pointer"
                  key={index}
                >
                  <div
                    className="accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey300"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <span>
                      {openIndex === index ? (
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 6L6 1L1 6"
                            stroke="#82898F"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 1L6 6L1 1"
                            stroke="#82898F"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                  <div
                    className={`accordion-body mt-[16px] ${openIndex === index ? "expanded flex" : "collapsed hidden"}`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Faqcomponents;
