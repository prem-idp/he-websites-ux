import { getCurrentUser } from '@aws-amplify/auth';
import { addRemoveFavourites } from '@packages/lib/utlils/userfavourite';
import React, { useState, useEffect } from 'react';
import FavouriteLimitExceeded from './FavouriteLimitExceeded';
import FavouritedToolTip from './FavouritedToolTip';

interface UserFavouriteProps {
    contentType: 'INSTITUTION' | 'COURSE',
    contentId: number,
    contentName: string,
    favouritedContentsId?: any[]
}

const FavouriteIcon: React.FC<any> = ({ contentId, contentType, contentName, favouritedContentsId = [] }: UserFavouriteProps) => {

    const [exceedMessage, setExceedMessage] = useState(false);
    const [favourtiteTooltip, setfavourtiteTooltip] = useState("");
    const [favourites, setFavourites] = useState<any>(favouritedContentsId);

    useEffect(() => {
        if (favouritedContentsId?.length) {
            setFavourites(() => [...favouritedContentsId]);
        }
    }, [favouritedContentsId]);

    const handleFavourite = async (
        contentId: number,
        contentName: string,
        contentType: 'INSTITUTION' | 'COURSE',
        e: React.FormEvent
    ) => {
        e.stopPropagation();
        e.preventDefault();
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
            inputFlag: isAdd
        };
        try {
            updateAction(isAdd, payload);
            const data = await addRemoveFavourites([payload]);
            switch (data?.message?.toLowerCase()) {
                case 'added course':
                case 'added institution':
                    setfavourtiteTooltip(contentId.toString());
                    break;
                case 'removed course':
                case 'removed institution':
                    setfavourtiteTooltip("");
                    break;
                case 'limit exceeded':
                    setfavourtiteTooltip("");
                    setExceedMessage(true);
                    updateAction(!isAdd, payload);
                    break;
                default:
                    updateAction(!isAdd, payload);
            }
        } catch (error) {
            console.log('error', error)
            updateAction(!isAdd, payload);
        }
    };

    function updateAction(isAdd: boolean, payload: any) {
        if (isAdd)
            setFavourites((prev: any[]) => {
                return [...prev, payload?.contentId];
            });
        else
            setFavourites((prev: any[]) => {
                return prev?.filter(ele => ele !== payload?.contentId);
            });
    }

    const onClose = (event: React.FormEvent) => {
        event.stopPropagation();
        setfavourtiteTooltip("");
        setExceedMessage(false);
    };

    return <>
        <div data-testid="favourite"
            id={`fav-icon-${contentId}`}
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
}

export default FavouriteIcon;