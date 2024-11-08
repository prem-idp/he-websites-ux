"use client"

import { sendHTTPRequest } from '@/lib/httpRequest';
import $ from 'jquery';
import { useEffect } from 'react';

export default function OneTrustCookie(){

    useEffect(() => {$(document).on("click", "#onetrust-accept-btn-handler", async function(e){
        
        const cookieName = "cookie_splash_flag";
        const cookieValue = "N";
        const url = "/degrees/cookies/create-cookie-popup.html?cookieName="+cookieName+"&cookieValue="+cookieValue;
        const resData = await sendHTTPRequest(url, "POST", {
            cookieName: "cookie_splash_flag",
            cookieValue: "N"
        })
        if(resData == 'success'){
            $("#cookiePopup").hide();
        }
        console.log("cookie accepted....")
    })}, [])
    return <></>
}