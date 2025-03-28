'use client';
import { AuthUser, getCurrentUser } from "@aws-amplify/auth";
import { getUserFavourites } from "@packages/lib/utlils/userfavourite";
import { useEffect, useState } from "react";
import { createContext } from 'react';

export const FavouriteContext = createContext<any[]>([]);

const FavFunctionalityWrapper = ({ children }: any) => {

    const [favourites, setFavourites] = useState<any[]>([]);

    useEffect(() => {
        async function getFavouritesList() {
            try {
                const user: AuthUser = await getCurrentUser();
                if (user && typeof window !== "undefined") {
                    const favList: any[] = await getUserFavourites();
                    if (favList?.length) {
                        let formattedList = favList?.map((fav) => +fav?.fav_id);
                        setFavourites(() => [...formattedList]);
                    }
                }
            } catch (error) {
                setFavourites([]);
            }
        }

        getFavouritesList();

    }, []);

    return <FavouriteContext.Provider value={favourites}>
        {children}
    </FavouriteContext.Provider>;
}

export default FavFunctionalityWrapper;