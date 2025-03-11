'use client'
import React from "react";
import { fetchenquirydata } from '@packages/REST-API/rest-api';
import { useRouter } from "next/navigation";
const Getprospectus  = ({ enquiryProps }: any) => {
  const router = useRouter()
  const handleGetProspectus = async () => {
      console.log("Enter", enquiryProps);
       try {
        const getProspectusPayload = {
          suborderItemId: enquiryProps?.subOrderItemid,
          orderItemId: enquiryProps?.orderItemId,
          collegeId: enquiryProps?.collegeId,
          affiliateId: 220703,
          sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
          manualBoostingFlag: enquiryProps?.manualBoostingFlag,
        };
        const response = await fetchenquirydata(getProspectusPayload);
        console.log("response printing", response);
        if(response?.requestProspectusWebform){
          const url = `/degrees/navigation-url.html?id=${enquiryProps?.subOrderItemid || ""}&cta-button-name=prospectus_webform`;
          console.log("URL Printing", url);
          router.push(url);
        }
        else if(enquiryProps?.pageName === "browsemoneypageresults" && response?.requestProspectusEmail){
        const url = `/degrees/prospectus${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}-prospectus`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}/law${enquiryProps?.subOrderItemid ? `/n-${enquiryProps?.subOrderItemid}`:""}/order-prospectus.html?${enquiryProps?.sponsoredListingFlag === "Y"? `sponsoredOrderItemId=${enquiryProps?.orderItemId}` : `sponsoredOrderItemId=0`}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=sr`;
        console.log("URL Printing", url);
        router.push(url);
        }
        else if(enquiryProps?.pageName === "coursesearchresult" && response?.requestProspectusEmail){
          const url = `/degrees/prospectus${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}-prospectus`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}/law${enquiryProps?.subOrderItemid ? `/n-${enquiryProps?.subOrderItemid}`:""}/order-prospectus.html?${enquiryProps?.sponsoredListingFlag === "Y"? `sponsoredOrderItemId=${enquiryProps?.orderItemId}` : `sponsoredOrderItemId=`}&pageName=${enquiryProps?.pageName}`;
          console.log("URL Printing", url);
          router.push(url);
          }
       } catch(error){
          console.error('Error fetching enquiry data:', error);
       }
    };
  return (
    <>
     
        <button type="button" className="btn btn-negative-default w-full" onClick={handleGetProspectus}>
          Get Prospectus
        </button>
    </>
  );
};

export default Getprospectus;
