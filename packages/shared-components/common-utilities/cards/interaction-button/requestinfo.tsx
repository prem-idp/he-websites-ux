'use client'
import React, { useEffect, useState } from "react";
import { fetchenquirydata } from '@packages/REST-API/rest-api';
import { useRouter } from "next/navigation";
import { fetchAuthSession } from "aws-amplify/auth";
const RequestInfo = ({ enquiryProps }: any) => {
  const router = useRouter()
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const getSession = async () => {
      const sessionData = await fetchAuthSession();
      setSession(sessionData);
    };
    getSession();
  }, []);
  const handleRequestInfo = async () => {
    console.log("Enter Props", enquiryProps);
     try {
      const requestInfoPayload = {
        suborderItemId: enquiryProps?.subOrderItemId,
        orderItemId: enquiryProps?.orderItemId,
        collegeId: enquiryProps?.collegeId,
        affiliateId: process.env.PROJECT === "Whatuni" ? 220703 : 607022,
        qualCode: enquiryProps?.qualCode,
        //sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
        //manualBoostingFlag: enquiryProps?.manualBoostingFlag,
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
        return
      }
      let url = `/degrees/email${enquiryProps?.collegeName ? `/${enquiryProps?.collegeName}-email`:""}${enquiryProps?.collegeId ? `/${enquiryProps?.collegeId}`:""}${enquiryProps?.courseId ? `/${enquiryProps?.courseId}`:""}${enquiryProps?.selectedSubject ? `/${enquiryProps?.selectedSubject}`:"0"}`;
       if(enquiryProps?.pageName === "browsemoneypageresults" && response?.requestInfoEmail){
        if(enquiryProps?.subOrderItemId)
           url = `${url}${enquiryProps?.subOrderItemId ? `/n-${enquiryProps?.subOrderItemId}`:""}/send-college-email.html?${enquiryProps?.sponsoredListingFlag === "Y"? `sponsoredOrderItemId=${enquiryProps?.orderItemId || "0"}` : `sponsoredOrderItemId=0`}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=sr&fromPage=${enquiryProps?.pageName}`;
        else
           url = getNonAdvertUrl();
      }
      else if(enquiryProps?.pageName === "coursesearchresult" && response?.requestInfoEmail){
        if(enquiryProps?.subOrderItemId)
           url = `${url}${enquiryProps?.subOrderItemId ? `/n-${enquiryProps?.subOrderItemId}`:""}/send-college-email.html?fromPage=${enquiryProps?.pageName}`;
        else
           url = getNonAdvertUrl();
      }
      console.log("URL Printing", url);
      router.push(url);
     } 
     catch(error){
        console.error('Error fetching enquiry data:', error);
     }
  };

  function getNonAdvertUrl(){
    if(session.tokens?.idToken)
      return `/degrees/get-pdf?from=COURSE&collegeId=${enquiryProps?.collegeId}&courseId=${enquiryProps?.courseId}`;
    else
      return `/register/?pagetype=non-request-info&coursename=${enquiryProps?.courseName}&collegename=${enquiryProps?.collegeName}&collegeid=${enquiryProps?.collegeId}`;
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
