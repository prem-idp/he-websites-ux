import Link from "next/link";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="h5">Contact details</div>
      <p>
        Call
        <Link className="font-semibold px-[4px]" href="tel: 0333 733 1876">
          0333 733 1876
        </Link>
        between 9.30am and 4.30pm (GMT), Monday to Friday for assistance
      </p>
    </div>
  );
};

export default ContactDetails;
