"use client";

import React, { useContext } from "react";

// import FavouriteIcon from './FavouriteHeartIcon';
import { FavouriteContext } from "./FavFunctionalityWrapper";
import dynamic from 'next/dynamic';
const FavouriteIcon = dynamic(() => import('./FavouriteHeartIcon'), {
  ssr: false,
});

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
  contentName: string
}

const UserFavourite = ({ contentId, contentType, contentName }: UserFavouriteProps) => {

  const favouriteslist = useContext(FavouriteContext);

  return <>
    <FavouriteIcon {...{ contentId, contentType, contentName, favouritedContentsId: favouriteslist }} />
  </>
}

export default UserFavourite;