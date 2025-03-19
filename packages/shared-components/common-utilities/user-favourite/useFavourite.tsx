import { AuthUser, getCurrentUser } from '@aws-amplify/auth';
import emitter from '@packages/lib/eventEmitter/eventEmitter';
import { getUserFavourites } from '@packages/lib/utlils/userfavourite';
import { useState, useEffect } from 'react';

interface Favourite {
    fav_id: string;
    fav_type: string;
    fav_date?: string;
    final_choice_id?: string | null;
    choice_position?: number | null;
}

let globalFavourites: any[] = [];
let isTriggered = false;

const useFavourite = () => {
    const [favourites, setFavourites] = useState<any[]>([]);

    useEffect(() => {
        async function getFavouritesList() {
            isTriggered = true;
            try {
                const user: AuthUser = await getCurrentUser();
                if (user && typeof window !== "undefined") {
                    const favList: Favourite[] = await getUserFavourites();
                    globalFavourites = favList?.map((fav) => +fav?.fav_id);
                    setFavourites(() => globalFavourites);
                }
            } catch (error) {
                setFavourites([]);
            }
            isTriggered = false;
        }

        if (!globalFavourites?.length && !isTriggered)
            getFavouritesList();

        emitter.on('validateFavourites', () => {
            getFavouritesList();
        });

        emitter.on('favourite', (data) => {
            setFavourites((prev) => {
                return [...prev, data?.contentId];
            });
        });

        emitter.on('unfavourite', (data) => {
            setFavourites((prev: any[]) => {
                return prev?.filter(ele => ele !== data?.contentId);
            });
        });
    }, []);
    return favourites;
};

export default useFavourite;