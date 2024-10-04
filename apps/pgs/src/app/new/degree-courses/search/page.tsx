import React, { Suspense } from "react";
import SrPageContent from "./srpage-wrapper";
// import Footer from "@/components/shared-components/footer/footer";
const DegreeCourses = ({ searchParams }: any) => {
  const subject = searchParams?.subject || "art";

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: "1",
        item: {
          "@id": "https://mdev.dev.aws.whatuni.com/university-clearing/",
          name: "Clearing 2024",
        },
      },
      {
        "@type": "ListItem",
        position: "2",
        item: {
          "@id":
            "https://mdev.dev.aws.whatuni.com/degree-courses/search?clearing&subject=business",
          name: `${subject} courses in clearing`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="flex items-center justify-center py-[13px] bg-primary-300 text-small">
        <label className="inline-flex items-center gap-[8px] cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-[40px] h-[24px] bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:start-[6px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-success-600"></div>
          <span>Show Clearing 2024 courses</span>
        </label>
      </section>
      <Suspense>
        <SrPageContent sub={subject} />
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default DegreeCourses;
