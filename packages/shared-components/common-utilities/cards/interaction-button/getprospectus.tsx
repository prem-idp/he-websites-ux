import React from "react";
import { fetchenquirydata } from '@packages/lib/server-actions/server-action';
import router from "next/router";

const Getprospectus  = ({ enquiryProps }: any) => {
  const handleVisitWebsite = async () => {
      console.log("Enter", enquiryProps);
       try {
        const vwPayload = {
          suborderItemId: enquiryProps?.subOrderItemid,
          orderItemId: enquiryProps?.orderItemId,
          collegeId: enquiryProps?.collegeId,
          affiliateId: 220703,
          sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
          //manualBoostingFlag: enquiryProps?.manualBoostingFlag,
        };
        const response = await fetchenquirydata(vwPayload);
        console.log("response printing", response);
        if(response?.requestProspectusWebform){
          const url = `/degrees/navigation-url.html?id=${enquiryProps?.subOrderItemid || ""}&cta-button-name=prospectus_webform`;
          console.log("URL Printing", url);
          router.push(url);
        }
        if(enquiryProps?.pageName === "browsemoneypageresults" && response?.requestProspectusEmail){
        const url = `/degrees/prospectus${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}/law${enquiryProps?.subOrderItemid ? `/${enquiryProps?.subOrderItemid}`:""}/order-prospectus.html?sponsoredOrderItemId=${enquiryProps?.sponsoredListingFlag || "0"}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=sr`;
        console.log("URL Printing", url);
        router.push(url);
        }
        if(enquiryProps?.pageName === "coursesearchresult" && response?.requestProspectusEmail){
          const url = `/degrees/prospectus${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}/law${enquiryProps?.subOrderItemid ? `/${enquiryProps?.subOrderItemid}`:""}/order-prospectus.html?sponsoredOrderItemId=${enquiryProps?.sponsoredListingFlag || "0"}&pageName=${enquiryProps?.pageName}`;
          console.log("URL Printing", url);
          router.push(url);
          }
       } catch(error){
          console.error('Error fetching enquiry data:', error);
       }
    };
  return (
    <>
     
        <button type="button" className="btn btn-negative-default w-full" onClick={handleVisitWebsite}>
          Get Prospectus
        </button>
    </>
  );
};

export default Getprospectus;
