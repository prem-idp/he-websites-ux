import React from "react";
import Link from "next/link";
import { ContentfulInspectorManager } from "@packages/lib/contentful-preview/ContentfulInspector";
const Ctabutton = ({ cta, sysId, iscontentPreview }: any) => {
  return (
    <>
      {/* {iscontentPreview && (
        <ContentfulInspectorManager
          fields={[
            {
              entryId: sysId,
              fieldId: "cta",
              targetSelector: "#cta_btn",
            },
          ]}
        />
      )} */}
      <button
        type="button"
        id="cta_btn"
        className="btn btn-primary flex items-center justify-center min-w-[117px] w-fit gap-[8px] p-[10px_20px] group-hover:bg-primary-500"
      >
        {cta?.primaryCtaLabel}
      </button>
    </>
  );
};

export default Ctabutton;
