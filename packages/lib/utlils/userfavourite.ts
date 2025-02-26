"use client"
import { fetchAuthSession } from "aws-amplify/auth";

const getUserFavourites = async (): Promise<any> => {
    //  export async function getUserFavourites(){
       console.log("user favourites")
      try {
        const payload :  any = {
           "affiliateId":220703,
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
        //console.log("favdata", data?.favourites);
        return data?.favourites;
      } catch (error) {
        console.log("ERROR", error);
        throw error;
      }
    }

     async function addRemoveFavourites(payload:any[]){
        try {
          console.log("fav data", payload);
          const favpayload = {
            affiliateId: "220703",     
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
          console.log("fav data", data);
          return data;
        } catch (error) {
          console.log("ERROR", error);
          throw error;
        }
      }

    export {getUserFavourites,addRemoveFavourites}