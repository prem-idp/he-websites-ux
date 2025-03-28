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
                    if (favList?.length) {
                        globalFavourites = favList?.map((fav) => +fav?.fav_id);
                        setFavourites(() => [...globalFavourites]);
                        console.log(favourites, 'favList')
                    }
                    emitter.emit('setFavourite');
                }
            } catch (error) {
                setFavourites([]);
            }
            isTriggered = false;
        }

        if (!globalFavourites?.length && !isTriggered)
            getFavouritesList();

        const setFavourite = () => {
            setFavourites(() => [...globalFavourites]);
        };

        emitter.on('setFavourite', setFavourite);

        // emitter.on('validateFavourites', () => {
        //     getFavouritesList();
        // });

        return () => {
            emitter.removeListener('setFavourite', setFavourite);
        }
    }, []);
    return { favourites, setFavourites };
};

export default useFavourite;