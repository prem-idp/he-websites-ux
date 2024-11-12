"use client"

import { createJAVASideCookie } from '@/lib/createJAVASideCookie';
import { getOnetrustCookieValue } from '@/lib/getOnetrustCookieValue';
import $ from 'jquery';
import Script from 'next/script';
import { useEffect } from 'react';
import { createCookie } from './OneTrustcookie';


export default function OneTrustCookieScript({cookieValuefromOnetrust, ...props} :{cookieValuefromOnetrust: string}){

   
    useEffect(() => {

        //
        createCookie("cookieconsent", cookieValuefromOnetrust);

        //
        $(document).on("click", "#onetrust-accept-btn-handler", async function(e){
        
            const resData = await createJAVASideCookie("cookie_splash_flag", "N");
            if(resData == 'success'){
                $("#cookiePopup").hide();
            }
            console.log("cookie accepted....")
        });

        //
        $(document).on("click", ".onetrust-close-btn-handler", async function(e){
            let strictCk = "0";
	        let functCk = $('#ot-group-id-C0002').is(":checked") ? "0" : "1"; //functional cookie - ot-group-id-C0002(input id from one trust)
	        let perfCk = $('#ot-group-id-C0003').is(":checked") ? "0" : "1"; //performance cookie
	        let targetCk = $('#ot-group-id-C0004').is(":checked") ? "0" : "1";	//marketing cookie
	        if($('#heapScriptJs').length > 0 && targetCk == "1") {
		        //--> heapCall();
	        }
	
	
	let consentCkVal = strictCk + functCk + perfCk + targetCk;
	
	let fc = $('#ot-group-id-C0002').is(":checked") ? "ON" : "OFF";
	let pc =  $('#ot-group-id-C0003').is(":checked") ? "ON" : "OFF";
	let mc =  $('#ot-group-id-C0004').is(":checked") ? "ON" : "OFF";
	let gaCkieVal = 'SNCON'+'|FC'+fc+'|PC'+pc+'|MC'+mc;
	let cookieConsentStatus = $('#cookieConsentStatus').val();
	
	let fcForGa = functCk == "0" ? "1" : "0";
	let pcForGa = perfCk == "0" ? "1" : "0";
	let mcForGa = targetCk == "0" ? "1" : "0";
	let dataLabel = "1" + fcForGa + pcForGa + mcForGa;
	//--> dataLayerFn("cookieconsent_ga4", "NA", dataLabel, "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA");
    createJAVASideCookie('cookieconsent',consentCkVal);
	/* --> if (bannerCheck == "bannerExist") {
		let limitedAdStatus = mc == "OFF" ? true : false;
		  googletag.cmd.push(function() {
			  googletag.pubads().setPrivacySettings({
					limitedAds: limitedAdStatus,
			  });
		  });
		 displayBanner();
	}*/
        });
    }, []);
    return <Script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" id="oneTrustCookieeId" data-domain-script="aef8a843-4acf-4f91-acd1-f823a4a625c0" />
}