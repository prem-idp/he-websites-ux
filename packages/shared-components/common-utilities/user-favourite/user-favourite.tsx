"use client";

import { getCurrentUser } from "@aws-amplify/auth";
import { addRemoveFavourites } from "@packages/lib/utlils/userfavourite";
import React, { useEffect, useMemo, useState } from "react";
import useFavourite from "./useFavourite";
import emitter from "@packages/lib/eventEmitter/eventEmitter";
import FavouriteLimitExceeded from "./FavouriteLimitExceeded";
import FavouritedToolTip from "./FavouritedToolTip";

interface Favourite {
  fav_id: string;
  fav_type: string;
  fav_date?: string;
  final_choice_id?: string | null;
  choice_position?: number | null;
}

interface UserFavouriteProps {
  contentType: 'INSTITUTION' | 'COURSE',
  contentId: number,
  contentName: string,
  test?: string
}

const UserFavourite = ({ contentId, contentType, contentName }: UserFavouriteProps) => {

  const [exceedMessage, setExceedMessage] = useState(false);
  const [favourite] = useFavourite();
  const [favourites, setFavourties] = useState<any>([])
  const [favourtiteTooltip, setfavourtiteTooltip] = useState("");
  // const [fav, setFav] = useState<any[]>([]);
  console.log("log", +contentId, favourites?.includes(+contentId));

  useEffect(() => {
    setFavourties(favourite)
  }, [favourite])

  //Handle Favourite
  const handleFavourite = async (
    contentId: any,
    contentName: any,
    contentType: any,
    e: React.FormEvent
  ) => {
    e.stopPropagation();
    // e.preventDefault();
    try {
      await getCurrentUser();
    } catch (error) {
      window.location.href = "/register/";
      return
    }
    const isAdd = !favourites?.includes(+contentId);
    const payload = {
      contentType: contentType,
      contentId: contentId,
      contentName: contentName,
      inputFlag: isAdd,
    };
    try {
      emitFavouriteAction(isAdd, payload);
      const data = await addRemoveFavourites([payload]);
      console.log(data)
      if (data?.message?.toLowerCase() === "added course" || data?.message?.toLowerCase() === "added institution") {
        setfavourtiteTooltip(contentId);
      } else if (
        data?.message?.toLowerCase() === "removed institution" ||
        data?.message?.toLowerCase() === "removed course"
      ) {
        setfavourtiteTooltip("");
      } else if (data?.message?.toLowerCase() === "limit exceeded") {
        setfavourtiteTooltip("");
        setExceedMessage(true);
        emitFavouriteAction(!isAdd, payload);
      }
    } catch (error) {
      // console.error("Error while toggling favorite:", error);
      emitFavouriteAction(!isAdd, payload);
    }
  };

  function emitFavouriteAction(isAdd: boolean, payload: any) {
    if (isAdd)
      emitter.emit('favourite', payload);
    else
      emitter.emit('unfavourite', payload);
  }

  const onClose = (event: React.FormEvent) => {
    event.stopPropagation();
    setfavourtiteTooltip("");
    setExceedMessage(false);
  };

  return (
    <>
      <div data-testid="favourite"
      id={`fav${contentId + '-' + favourites?.includes(+contentId)}`}
        onClick={(event) =>
          handleFavourite(
            contentId,
            contentName,
            contentType,
            event
          )
        }
        className={`ripple-circle-blue ${favourites?.includes(+contentId) ? "heart active" : ""} min-w-[40px] w-[40px] h-[40px] bg-white x-small border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100 relative`}
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
        {+favourtiteTooltip === contentId && <FavouritedToolTip onClose={onClose} />}
      </div>
      {exceedMessage && <FavouriteLimitExceeded onClose={onClose} />}
    </>
  )
}

export default UserFavourite;