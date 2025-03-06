"use client"
import { fetchAuthSession } from "aws-amplify/auth";
import { setNewCookie } from "../utlils/commonFunction";
import eventEmitter from "@packages/lib/eventEmitter/eventEmitter";

const getUserFavourites = async (): Promise<any> => {
      try {
        const payload :  any = {
           "affiliateId": process.env.PROJECT === "Whatuni" ? 220703 : 607022,
        }
        const session = await fetchAuthSession();
        const headers: any = {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_FAV_X_API_KEY}`,
        };
        let apiUrl = `${process.env.NEXT_PUBLIC_VIEW_FAVOURITES_API}`;
        if (session.tokens?.idToken) {
          
          headers.Authorization = `${session.tokens.idToken}`;
        }
        const respone = await fetch(apiUrl, {
          method: "POST",
          headers,
          body: payload ?  JSON.stringify(payload) : undefined,
        });
        const data = await respone.json();       
        return data?.favourites;
      } catch (error) {
        console.log("ERROR", error);
        throw error;
      }
    }

     async function addRemoveFavourites(payload:any[]){
        try {
          const favpayload = {
            affiliateId: process.env.PROJECT === "Whatuni" ? "220703" : "607022",     
            AddFavoriteRequestList: payload,    
          };
          const session = await fetchAuthSession();
          const headers: any = {
            "Content-Type": "application/json",
            "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
          };
          let apiUrl = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/favourites/favorites-add-delete`;
          if (session.tokens?.idToken) {
            headers.Authorization = `${session.tokens.idToken}`;
          }
          const respone = await fetch(apiUrl, {
            method: "POST",
            headers,
            body: payload ?  JSON.stringify(favpayload) : undefined,
          });
          const data = await respone.json();
          if(data?.status == 200) {
            setNewCookie(`basketId=${data?.basketId}; path=/; secure`);
            const newFavourite = data?.count || 0;
            console.log("count",newFavourite, data?.count)
            setNewCookie(`USER_FAV_BASKET_COUNT=${newFavourite}; Path=/;secure`);
            eventEmitter.emit("favouriteCookieUpdated", newFavourite);
           
          }
          console.log("fav data", data);
          return data;
        } catch (error) {
          console.log("ERROR", error);
          throw error;
        }
      }

    export {getUserFavourites,addRemoveFavourites}