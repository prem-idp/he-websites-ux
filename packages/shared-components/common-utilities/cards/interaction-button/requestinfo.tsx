import React from "react";
import router from "next/router";
import { fetchenquirydata } from '@packages/lib/server-actions/server-action';

const RequestInfo = ({ enquiryProps }: any) => {
  const handleRequestInfo = async () => {
    console.log("Enter", enquiryProps);
     try {
      const riPayload = {
        suborderItemId: enquiryProps?.subOrderItemid,
        orderItemId: enquiryProps?.orderItemId,
        collegeId: enquiryProps?.collegeId,
        affiliateId: 220703,
        sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
        //manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      const response = await fetchenquirydata(riPayload);
      console.log("response printing", response);
      if(response?.requestInfoWebform){
        const url = `/degrees/navigation-url.html?id=${enquiryProps?.subOrderItemid || ""}&cta-button-name=email_webform`;
        console.log("URL Printing", url);
        router.push(url);
      }
      if(enquiryProps?.pageName === "browsemoneypageresults" && response?.requestInfoEmail){
        const url = `/degrees/email${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}/law${enquiryProps?.subOrderItemid ? `/${enquiryProps?.subOrderItemid}`:""}/send-college-email.html?sponsoredOrderItemId=${enquiryProps?.sponsoredListingFlag || "0"}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=sr&fromPage=${enquiryProps?.pageName}`;
        console.log("URL Printing", url);
        router.push(url);
      }
      if(enquiryProps?.pageName === "coursesearchresult" && response?.requestInfoEmail){
        const url = `/degrees/email${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}/law${enquiryProps?.subOrderItemid ? `/${enquiryProps?.subOrderItemid}`:""}/send-college-email.html?fromPage=${enquiryProps?.pageName}`;
        console.log("URL Printing", url);
        router.push(url);
      }
     } catch(error){
        console.error('Error fetching enquiry data:', error);
     }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-blue w-full" onClick={handleRequestInfo}>
        Request info
      </button>
    </>
  );
};

export default RequestInfo;
