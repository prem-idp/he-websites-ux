// components/ClientTopSection.js
"use client";

import React, { useState, useEffect } from "react";
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/user-favourite";
import { AuthUser, getCurrentUser } from "@aws-amplify/auth";
import { getUserFavourites } from "@packages/lib/utlils/userfavourite";

interface UserFavouriteTopSectionProps {
  collegeId: number;
  collegeName: string;
}

interface Favourite {
  fav_id: string;
  fav_type: string;
  fav_date?: string;
  final_choice_id?: string | null;
  choice_position?: number | null;
}

export default function UserFavouriteTopSection({
  collegeId,
  collegeName,
}: UserFavouriteTopSectionProps) {
  const [user, setUserData] = useState<AuthUser | null>(null);
  const [favourite, setFavourite] = useState<{ favouritedList: any[] }>({
    favouritedList: [],
  });
  useEffect(() => {
    // Getting favourites list when user logged in
    async function checkUser() {
      try {
        const user: AuthUser = await getCurrentUser();
        setUserData(user);
        if (user && typeof window !== "undefined") {
          const favList: Favourite[] = await getUserFavourites();
          setFavourite({ favouritedList: favList?.map((fav) => fav?.fav_id) });
        }
      } catch (error) {
        setUserData(null);
      }
    }
    checkUser();
  }, []);

  return (
    <>
      <UserFavourite
        favourites={favourite}
        contentId={collegeId}
        contentName={collegeName}
        contentType="INSTITUTION"
      />
    </>
  );
}
