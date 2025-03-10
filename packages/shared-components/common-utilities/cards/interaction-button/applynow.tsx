import React from "react";
import { fetchenquirydata } from '@packages/REST-API/rest-api';

const ApplyNow = ({ enquiryProps }: any) => {
  const handleApplyNow = async () => {
    console.log("Enter", enquiryProps);
     try {
      const applyNowPayload = {
        suborderItemId: enquiryProps?.subOrderItemid,
        orderItemId: enquiryProps?.orderItemId || null,
        collegeId: enquiryProps?.collegeId,
        affiliateId: 220703,
        sponsoredListingFlag: enquiryProps?.sponsoredListingFlag || null,
        manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      console.log("payload", applyNowPayload);
      const response = await fetchenquirydata(applyNowPayload);
      console.log("response printing", response);
      if(response?.applynow_url){
        console.log("APPLYNOWURL", response?.applynow_url);
        window.open(response.applynow_url, '_blank');
      }
     } catch(error){
        console.error('Error fetching enquiry data:', error);
     }
  };
  return (
    <>
        <button type="button" className="btn btn-negative-default w-full" onClick={handleApplyNow}>
          Get Prospectus
        </button>
    </>
  );
};

export default ApplyNow;
