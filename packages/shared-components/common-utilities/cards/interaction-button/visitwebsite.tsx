'use client'
import React from 'react'
import { fetchenquirydata } from '@packages/REST-API/rest-api';

const Visitwebsite = ({ enquiryProps }: any) => {
  const handleVisitWebsite = async () => {
    console.log("Enter Props", enquiryProps);
     try {
      const vwPayload = {
        suborderItemId: enquiryProps?.subOrderItemId,
        orderItemId: enquiryProps?.orderItemId,
        collegeId: enquiryProps?.collegeId,
        affiliateId: process.env.PROJECT === "Whatuni" ? 220703 : 607022,
        qualCode: enquiryProps?.qualCode,
        //sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
        //manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      console.log("vwpayload", vwPayload);
      const response = await fetchenquirydata(vwPayload);
      console.log("response printing", response);
      if(response?.website){
        console.log("VWURL", response?.website);
        window.open(response.website, '_blank');
      }
     } catch(error){
        console.error('Error fetching enquiry data:', error);
     }
  };
  return (
    <button
      type="button" className="btn btn-grey w-full" onClick={handleVisitWebsite}
    >
      Visit website
    </button> 
  );
};

export default Visitwebsite