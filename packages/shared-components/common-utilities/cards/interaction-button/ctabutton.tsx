import React from "react";
const Ctabutton = ({ cta }: any) => {
  return (
    <button
      type="button"
      className="btn btn-primary flex items-center justify-center min-w-[117px] w-fit gap-[8px] p-[10px_20px] group-hover:bg-primary-500"
    >
      {cta?.primaryCtaLabel}
    </button>
  );
};

export default Ctabutton;
