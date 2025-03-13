'use client'
import React from "react";
import { fetchenquirydata } from '@packages/REST-API/rest-api';
import { useRouter } from "next/navigation";
const RequestInfo = ({ enquiryProps }: any) => {
  const router = useRouter()
  const handleRequestInfo = async () => {
    console.log("Enter Props", enquiryProps);
     try {
      const requestInfoPayload = {
        suborderItemId: enquiryProps?.subOrderItemId,
        orderItemId: enquiryProps?.orderItemId,
        collegeId: enquiryProps?.collegeId,
        affiliateId: process.env.PROJECT === "Whatuni" ? 220703 : 607022,
        sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
        manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      console.log("requestInfoPayload", requestInfoPayload);
      const response = await fetchenquirydata(requestInfoPayload);
      console.log("response printing", response);
      if(response?.requestInfoWebform){
        // const url = `/degrees/navigation-url.html?id=${enquiryProps?.subOrderItemid || ""}&cta-button-name=email_webform`;
        // console.log("URL Printing", url);
        // router.push(url);
        console.log("REQUESTINFO_WEBFORMURL", response?.requestInfoWebform);
        window.open(response.requestInfoWebform, '_blank');
      }
      else if(enquiryProps?.pageName === "browsemoneypageresults" && response?.requestInfoEmail){
        const url = `/degrees/email${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}-email`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}${enquiryProps?.selectedSubject ? `/${enquiryProps?.selectedSubject}`:"0"}${enquiryProps?.subOrderItemId ? `/n-${enquiryProps?.subOrderItemId}`:""}/send-college-email.html?${enquiryProps?.sponsoredListingFlag === "Y"? `sponsoredOrderItemId=${enquiryProps?.orderItemId}` : `sponsoredOrderItemId=0`}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=sr&fromPage=${enquiryProps?.pageName}`;
        console.log("URL Printing", url);
        router.push(url);
      }
      else if(enquiryProps?.pageName === "coursesearchresult" && response?.requestInfoEmail){
        const url = `/degrees/email${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}-email`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}${enquiryProps?.selectedSubject ? `/${enquiryProps?.selectedSubject}`:"0"}${enquiryProps?.subOrderItemId ? `/n-${enquiryProps?.subOrderItemId}`:""}/send-college-email.html?fromPage=${enquiryProps?.pageName}`;
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
