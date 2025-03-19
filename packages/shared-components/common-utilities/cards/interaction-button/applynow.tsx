import React from "react";
import { fetchenquirydata } from '@packages/REST-API/rest-api';

const ApplyNow = ({ enquiryProps }: any) => {
  const handleApplyNow = async () => {
    console.log("Enter", enquiryProps);
     try {
      const applyNowPayload = {
        suborderItemId: enquiryProps?.subOrderItemId,
        orderItemId: enquiryProps?.orderItemId,
        collegeId: enquiryProps?.collegeId,
        affiliateId: process.env.PROJECT === "Whatuni" ? 220703 : 607022,
        sponsoredListingFlag: enquiryProps?.sponsoredListingFlag || null,
        manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      console.log("applyNowPayload", applyNowPayload);
      const response = await fetchenquirydata(applyNowPayload);
      console.log("response printing", response);
      if(response?.applyNowUrl){
        console.log("APPLYNOWURL", response?.applyNowUrl);
        window.open(response.applyNowUrl, '_blank');
      }
     } catch(error){
        console.error('Error fetching enquiry data:', error);
     }
  };
  return (
    <>
        <button type="button" className="btn btn-orange w-full" onClick={handleApplyNow}>
        Apply now
        </button>
    </>
  );
};

export default ApplyNow;
