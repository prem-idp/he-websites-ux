'use client'
import React from 'react'
import { fetchenquirydata } from '@packages/REST-API/rest-api';

const Visitwebsite = ({ enquiryProps }: any) => {
  const handleVisitWebsite = async () => {
    console.log("Enter", enquiryProps);
     try {
      const vwPayload = {
        suborderItemId: enquiryProps?.subOrderItemid,
        orderItemId: enquiryProps?.orderItemId || null,
        collegeId: enquiryProps?.collegeId,
        affiliateId: 220703,
        sponsoredListingFlag: enquiryProps?.sponsoredListingFlag || null,
        manualBoostingFlag: enquiryProps?.manualBoostingFlag,
      };
      console.log("payload", vwPayload);
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