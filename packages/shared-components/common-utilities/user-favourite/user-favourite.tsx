"use client"

import { AuthUser, getCurrentUser } from "@aws-amplify/auth";
import { getUserFavourites, addRemoveFavourites } from "@packages/lib/utlils/userfavourite";
import Link from "next/link";
import React, { useEffect, useState } from "react";


interface Favourite {
  fav_id: string;
  fav_type: string;
  fav_date?: string;
  final_choice_id?: string | null;
  choice_position?: number | null;
}

interface UserFavouriteProps {
  contentType:string,
  contentId: number,
  contentName: string,
  exceedData: (val: boolean) => void,
  favourites: any
}
const UserFavourite= (favouriteProps : UserFavouriteProps) => {

    const [user, setUserData] = useState<AuthUser | null>(null);
    const [favourite, setFavourite] = useState<any>(favouriteProps.favourites);
  useEffect(() => {
    setFavourite(favouriteProps.favourites);
  }, [favouriteProps.favourites]);
     const [favourtiteTooltip, setfavourtiteTooltip] = useState("");

     //Handle Favourite
     const handleFavourite = async (
       contentId: any,
       contentName: any,
       contentType: any,
       e: React.FormEvent
     ) => {
       e.stopPropagation();
       if (!favourite) {
         window.location.href = "/register/";
       }
       const isAdd = !favourite?.favouritedList?.includes(contentId?.toString());
       try {
         const payload = {
           contentType: contentType,
           contentId: contentId,
           contentName: contentName,
           inputFlag: isAdd,
         };
         const data = await addRemoveFavourites([payload]);
         if (
           data?.message?.toLowerCase() === "added course" ||
           data?.message?.toLowerCase() === "added institution"
         ) {
           setFavourite((prevState) => ({
             ...prevState,
             favouritedList: [
              ...(prevState?.favouritedList || []), // Ensure favouritedList is an array, default to empty array
              contentId.toString(),
            ],
           }));
           setfavourtiteTooltip(contentId);
         } else if (
           data?.message?.toLowerCase() === "removed institution" ||
           data?.message?.toLowerCase() === "removed course"
         ) {
           setfavourtiteTooltip("");
           setFavourite((prevState) => ({
             ...prevState,
             favouritedList: prevState?.favouritedList?.filter(
               (id) => id != contentId
             ),
           }));
         } else if (data?.message?.toLowerCase() === "limit exceeded") {
           setfavourtiteTooltip(""), favouriteProps?.exceedData(true);
         }
       } catch (error) {
         setFavourite((prevState) => ({
           ...prevState,
           favouritedList: prevState?.favouritedList?.filter(
             (id) => id != contentId
           ),
         }));
         console.error("Error toggling favorite:", error);
       }
     };
     const onClose = (event: React.FormEvent) => {
       event.stopPropagation();
       setfavourtiteTooltip(""), favouriteProps?.exceedData(false);
     };

    return (
        <>
        <div data-testid = "favourite"
                  onClick={(event) =>
                    handleFavourite(
                        favouriteProps?.contentId,
                        favouriteProps?.contentName,
                        favouriteProps?.contentType,
                      event
                    )
                  }
                  className={`${favourite?.favouritedList?.includes(favouriteProps?.contentId?.toString()) ? "heart active" : ""} w-[40px] h-[40px] bg-white x-small border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100 relative`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {+favourtiteTooltip === favouriteProps?.contentId ? (
                    <div className="absolute z-[1] select-none flex border border-grey-200 top-[43px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] right-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:right-[18px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                      <div className="flex items-center justify-between">
                        <span className="text-grey900 font-semibold">
                          We have added this to your comparison
                        </span>
                        <svg 
                          onClick={(event) => onClose(event)}
                          className="cursor-pointer"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L18 18"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <Link
                        href=""
                        className="flex items-center gap-[4px] w-fit text-primary-400 hover:underline"
                      >
                        View all comparison
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.23441 2.63471C8.54683 2.32229 9.05336 2.32229 9.36578 2.63471L14.1658 7.43471C14.4782 7.74713 14.4782 8.25366 14.1658 8.56608L9.36578 13.3661C9.05336 13.6785 8.54683 13.6785 8.23441 13.3661C7.92199 13.0537 7.92199 12.5471 8.23441 12.2347L11.6687 8.80039L2.4001 8.80039C1.95827 8.80039 1.6001 8.44222 1.6001 8.00039C1.6001 7.55856 1.95827 7.20039 2.4001 7.20039H11.6687L8.23441 3.76608C7.92199 3.45366 7.92199 2.94712 8.23441 2.63471Z"
                            fill="#3460DC"
                          />
                        </svg>
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

               
                </>
    )    
}

export default UserFavourite;