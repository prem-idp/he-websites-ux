'use client';
import { AuthUser, getCurrentUser } from "@aws-amplify/auth";
import { getUserFavourites } from "@packages/lib/utlils/userfavourite";
import { useEffect, useState } from "react";
import { createContext } from 'react';

interface Favourite {
    fav_id: string;
    fav_type: string;
    fav_date?: string;
    final_choice_id?: string | null;
    choice_position?: number | null;
}

export const FavouriteContext = createContext<any[]>([]);

const FavFunctionalityWrapper = ({ children }: any) => {

    const [favourites, setFavourites] = useState<any[]>([]);

    useEffect(() => {
        async function getFavouritesList() {
            try {
                const user: AuthUser = await getCurrentUser();
                if (user && typeof window !== "undefined") {
                    const favList: Favourite[] = await getUserFavourites();
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