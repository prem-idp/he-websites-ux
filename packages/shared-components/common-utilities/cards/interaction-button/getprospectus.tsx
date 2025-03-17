'use client'
import React from "react";
import { fetchenquirydata } from '@packages/REST-API/rest-api';
import { useRouter } from "next/navigation";
const Getprospectus = ({ enquiryProps }: any) => {
  const router = useRouter()
  const handleGetProspectus = async () => {
    console.log("Enter Props", enquiryProps);
    try {
      const getProspectusPayload = {
        suborderItemId: enquiryProps?.subOrderItemId,
        orderItemId: enquiryProps?.orderItemId,
        collegeId: enquiryProps?.collegeId,
        affiliateId: process.env.PROJECT === "Whatuni" ? 220703 : 607022,
        sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
        manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      console.log("getProspectusPayload", getProspectusPayload);
      const response = await fetchenquirydata(getProspectusPayload);
      console.log("response printing", response);
      if (response?.requestProspectusWebform) {
        // const url = `/degrees/navigation-url.html?id=${enquiryProps?.subOrderItemid || ""}&cta-button-name=prospectus_webform`;
        // console.log("URL Printing", url);
        // router.push(url);
        console.log("PROSPECTUS_WEBFORMURL", response?.requestProspectusWebform);
        window.open(response.requestProspectusWebform, '_blank');
        return
      }
      let url = `/degrees/prospectus${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}-prospectus` : ""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}` : ""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}` : ""}${enquiryProps?.selectedSubject ? `/${enquiryProps?.selectedSubject}` : "0"}`
      if (enquiryProps?.pageName === "browsemoneypageresults" && response?.requestProspectusEmail) {
        if (enquiryProps?.subOrderItemId)
          url = `${url}/n-${enquiryProps?.subOrderItemId}/order-prospectus.html?${getSponsorOrderItemId()}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=sr`;
        else
          url = `${url}/n-/order-prospectus.html?${getSponsorOrderItemId()}&pageName=sr&nonAdvertiserFlag=Y`;
      }
      else if (enquiryProps?.pageName === "coursesearchresult" && response?.requestProspectusEmail) {
        if (enquiryProps?.subOrderItemId)
          url = `${url}/n-${enquiryProps?.subOrderItemId}/order-prospectus.html?${getSponsorOrderItemId()}&pageName=${enquiryProps?.pageName}`;
        else
          url = `${url}/n-/order-prospectus.html?${getSponsorOrderItemId()}&pageName=${enquiryProps?.pageName}&nonAdvertiserFlag=Y`;
      }
      console.log("URL Printing", url);
      router.push(url);
    } catch (error) {
      console.error('Error fetching enquiry data:', error);
    }
  };

  function getSponsorOrderItemId() {
    return `sponsoredOrderItemId=${enquiryProps?.sponsoredListingFlag === "Y" ? (enquiryProps?.orderItemId || '') : ''}`;
  }

  return (
    <button type="button" className="btn btn-negative-default w-full" onClick={handleGetProspectus}>
      Get Prospectus
    </button>
  );
};

export default Getprospectus;
