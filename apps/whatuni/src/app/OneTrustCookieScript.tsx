"use client"

import { createJAVASideCookie } from '@/lib/createJAVASideCookie';
import $ from 'jquery';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { createCookieConsent, getOnetrustCookieValue } from './OneTrustcookie';


// export default function OneTrustCookieScript({cookieValuefromOnetrust, ...props} :{cookieValuefromOnetrust: string}){

   
//     useEffect(() => {

//         //
//         createCookie("cookieconsent", cookieValuefromOnetrust);

//         //
//         $(document).on("click", "#onetrust-accept-btn-handler", async function(e){
        
//             const resData = await createJAVASideCookie("cookie_splash_flag", "N");
//             if(resData == 'success'){
//                 $("#cookiePopup").hide();
//             }
//             console.log("cookie accepted....")
//         });

//         //
//         $(document).on("click", ".onetrust-close-btn-handler", async function(e){
//             let strictCk = "0";
// 	        let functCk = $('#ot-group-id-C0002').is(":checked") ? "0" : "1"; //functional cookie - ot-group-id-C0002(input id from one trust)
// 	        let perfCk = $('#ot-group-id-C0003').is(":checked") ? "0" : "1"; //performance cookie
// 	        let targetCk = $('#ot-group-id-C0004').is(":checked") ? "0" : "1";	//marketing cookie
// 	        if($('#heapScriptJs').length > 0 && targetCk == "1") {
// 		        //--> heapCall();
// 	        }
	
	
// 	let consentCkVal = strictCk + functCk + perfCk + targetCk;
	
// 	let fc = $('#ot-group-id-C0002').is(":checked") ? "ON" : "OFF";
// 	let pc =  $('#ot-group-id-C0003').is(":checked") ? "ON" : "OFF";
// 	let mc =  $('#ot-group-id-C0004').is(":checked") ? "ON" : "OFF";
// 	let gaCkieVal = 'SNCON'+'|FC'+fc+'|PC'+pc+'|MC'+mc;
// 	let cookieConsentStatus = $('#cookieConsentStatus').val();
	
// 	let fcForGa = functCk == "0" ? "1" : "0";
// 	let pcForGa = perfCk == "0" ? "1" : "0";
// 	let mcForGa = targetCk == "0" ? "1" : "0";
// 	let dataLabel = "1" + fcForGa + pcForGa + mcForGa;
// 	//--> dataLayerFn("cookieconsent_ga4", "NA", dataLabel, "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA");
//     createJAVASideCookie('cookieconsent',consentCkVal);
// 	/* --> if (bannerCheck == "bannerExist") {
// 		let limitedAdStatus = mc == "OFF" ? true : false;
// 		  googletag.cmd.push(function() {
// 			  googletag.pubads().setPrivacySettings({
// 					limitedAds: limitedAdStatus,
// 			  });
// 		  });
// 		 displayBanner();
// 	}*/
//         });
//     }, []);
//     return <Script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" id="oneTrustCookieeId" data-domain-script="aef8a843-4acf-4f91-acd1-f823a4a625c0" />
// }
  

// export default function OneTrustCookieScript(){

// 	// function want to run after consent is given
// function triggerAnalyticsScripts() {
//     console.log("User accepted cookies; loading analytics scripts...");
// }
  
// // OneTrust wrapper function (after user accepts/rejects this function will trigger)
//  function OptanonWrapperr() {

//     console.log("cookie accepted...")
//     const defaultCookieCategoryId = 'C0001'; 
//     const functionalCookieCategoryId = 'C0002';
//     const performanceCookieCategoryId = 'C0003';
//     const targetingCookieCategoryId = 'C0004';

//     //console.dir("window.Optanon: " + window.Optanon, 6);
//     console.log("window.Optanon.IsConsented(defaultCookieCategoryId): " + window.Optanon.IsConsented(defaultCookieCategoryId));


//     // Check if `window.Optanon` exists and if the user has consented to the specified category
//     if (window.Optanon && window.Optanon.IsConsented(defaultCookieCategoryId)) {
//       triggerAnalyticsScripts();
//     }
// }
  
//   // Attach OptanonWrapper to the window
//   // This makes sure it is recognized globally by OneTrust's script
//   if (typeof window !== 'undefined') {
//     (window as any).OptanonWrapper = OptanonWrapperr;
//   }
	
// 	return <>
// 	<Script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" id="oneTrustCookieeId" data-domain-script="aef8a843-4acf-4f91-acd1-f823a4a625c0" />
// 	</>
// }

export const loadAnalyticsScripts = async (): Promise<boolean> => {

	//console.log("User consented to analytics; loading analytics scripts...", window.Optanon);
	
	//if (window.Optanon && typeof window.Optanon.IsConsented === 'function') {

    const cookieDate = new Date();
    //
    const defaultCookieCategoryId = 'C0001'; 
    const functionalCookieCategoryId = 'C0002';
    const performanceCookieCategoryId = 'C0003';
    const targetingCookieCategoryId = 'C0004';
    //
    const OptanonConsent = await getOnetrustCookieValue('OptanonConsent');
    const OptanonAlertBoxClosed = await getOnetrustCookieValue('OptanonAlertBoxClosed');

    //
    const strickCK = OnetrustActiveGroups.includes(defaultCookieCategoryId) ? "0" : "1"; 
    const funCK = OnetrustActiveGroups.includes(functionalCookieCategoryId) ? "0" : "1"; 
    const perCK = OnetrustActiveGroups.includes(performanceCookieCategoryId) ? "0" : "1"; 
    const targetCK = OnetrustActiveGroups.includes(targetingCookieCategoryId) ? "0" : "1"; 

    //
    const oneTrustCookieconsentVal = strickCK + funCK + perCK + targetCK;
	
	const isUserAcctpedCookie: boolean = (OptanonConsent != null && OptanonConsent != undefined) && (OptanonAlertBoxClosed != null && OptanonAlertBoxClosed != undefined)
    const cookieConsentVal = isUserAcctpedCookie ? oneTrustCookieconsentVal : "0111";
    console.log("IsAlertBoxClosed", isUserAcctpedCookie);
	console.log("cookieconsentVal", cookieConsentVal);
    
    // --> dataLayerFn("cookieconsent_ga4", "NA", dataLabel, "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA");
    createCookieConsent('cookieconsent',cookieConsentVal);
    createCookieConsent('cookie_splash_flag',cookieDate.toLocaleString());
    createCookieConsent('cookie_splash_flag_new',cookieDate.toLocaleString());

    
    // if (bannerCheck == "bannerExist") {
    // 	var limitedAdStatus = targetCK == "0" ? true : false;
    // 	window?.googletag?.cmd?.push(function() {
    // 		window?.googletag?.pubads().setPrivacySettings({
    // 			limitedAds: limitedAdStatus,
    // 		});
    // 	});
    // 	displayBanner();
    // }

    //loadDynamicJs("https://accounts.google.com/gsi/client"); */
//}
	return isUserAcctpedCookie;
};

export default function OneTrustCookieScript(){

	const [userConsentGiven, setUserConsentGiven] = useState(false);
  useEffect(() => {

    // Function to check consent when event fires
    const handleConsentChange = async () => {
		
	  console.log("OptanonWrapper function triggered...")
      const returnVal = await loadAnalyticsScripts();
	  setUserConsentGiven(() => { 
		console.log("state triggered...")
		return returnVal});
    };

	window.OptanonWrapper = handleConsentChange;

  }, []);

  return (
	<>
	{console.log("userConsentGiven: ", userConsentGiven)}
	{userConsentGiven ?
    <Script src="https://accounts.google.com/gsi/client" id="googleGsiId" /> :
	<>
		<Script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" id="oneTrustCookieeId" data-domain-script="aef8a843-4acf-4f91-acd1-f823a4a625c0" />
		<Script src='https://accounts.google.com/gsi/client' id="dummyScript"/>
	</>
	}
	</>
  );
}