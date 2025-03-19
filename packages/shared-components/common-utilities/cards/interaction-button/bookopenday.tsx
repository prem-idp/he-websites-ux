'use client'
import React from 'react'
import { fetchenquirydata } from '@packages/REST-API/rest-api';
import { useRouter } from "next/navigation";
const BookOpenDay  = ({ enquiryProps }: any) => {
 const router = useRouter()
 const handleBookOpenDay = async () => {
     console.log("Enter Props", enquiryProps);
      try {
       const bookOpenDayPayload = {
         suborderItemId: enquiryProps?.subOrderItemId,
         orderItemId: enquiryProps?.orderItemId,
         collegeId: enquiryProps?.collegeId,
         affiliateId: process.env.PROJECT === "Whatuni" ? 220703 : 607022,
         qualCode: enquiryProps?.qualCode,
         //sponsoredListingFlag: enquiryProps?.sponsoredListingFlag,
         //manualBoostingFlag: enquiryProps?.manualBoostingFlag,
        
       };
       console.log("bookOpenDayPayload", bookOpenDayPayload);
       const response = await fetchenquirydata(bookOpenDayPayload);
       console.log("response printing", response);
       if(response?.bookingUrl){
         console.log("BOPDURL", response?.bookingUrl);
         window.open(response.bookingUrl, '_blank');
       }else if(response?.eventId){
         const url = `/open-days/book?collegeId=${enquiryProps?.collegeId || "0"}${enquiryProps?.courseId ? `&courseId=${enquiryProps?.courseId}`:""}${enquiryProps?.subOrderItemId ? `&suborderItemId=${enquiryProps?.subOrderItemId}`:""}${response?.eventId ? `&eventId=${response?.eventId}`:""}${enquiryProps?.sponsoredListingFlag === "Y"? `&sponsoredOrderItemId=${enquiryProps?.orderItemId}` : `&sponsoredOrderItemId=0`}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=${enquiryProps?.pageName}`;
         router.push(url);
       }
      //  if(response?.event_id && enquiryProps?.pageName === "browsemoneypageresults" || enquiryProps?.pageName === "coursesearchresult"){
      //   const url = `/open-days/book?collegeId=${enquiryProps?.collegeId || ""}&courseId=${enquiryProps?.courseId || ""}&suborderItemId=${enquiryProps?.subOrderItemid || ""}&eventId=${response?.event_id || ""}&sponsoredOrderItemId=${enquiryProps?.sponsoredListingFlag || "0"}&manualBoostingFlag=${enquiryProps?.manualBoostingFlag || "N"}&pageName=${enquiryProps?.pageName}`;
      //   router.push(url);
      // }
      } catch(error){
         console.error('Error fetching enquiry data:', error);
      }
   };
  return (
    <button type="button" className="btn btn-green w-full" onClick={handleBookOpenDay}>Book open day</button>
  )
}

export default BookOpenDay