"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { createCookieConsent} from "./OneTrustcookie";
import { getCookieValue } from "../utlils/commonFunction";

let OptanonConsent: string | undefined = undefined;
let OptanonAlertBoxClosed: string | undefined = undefined;

export default function OneTrustCookieScript() {
  const [useinteraction, setUserinteraction] = useState(false);
  const loadAnalyticsScripts = async (): Promise<boolean> => {
    console.log(
      "User consented to analytics; loading analytics scripts...",
      window.Optanon
    );

    //if (window.Optanon && typeof window.Optanon.IsConsented === 'function') {
  
      const cookieDate = new Date();
      //
      const defaultCookieCategoryId = 'C0001'; 
      const functionalCookieCategoryId = 'C0002';
      const performanceCookieCategoryId = 'C0003';
      const targetingCookieCategoryId = 'C0004';
      //
       OptanonConsent = getCookieValue('OptanonConsent');
       OptanonAlertBoxClosed = getCookieValue('OptanonAlertBoxClosed');
  
      //
      const strickCK = OnetrustActiveGroups.includes(defaultCookieCategoryId) ? "0" : "1"; 
      const funCK = OnetrustActiveGroups.includes(functionalCookieCategoryId) ? "0" : "1"; 
      const perCK = OnetrustActiveGroups.includes(performanceCookieCategoryId) ? "0" : "1"; 
      const targetCK = OnetrustActiveGroups.includes(targetingCookieCategoryId) ? "0" : "1"; 
  
      //
      const oneTrustCookieconsentVal = strickCK + funCK + perCK + targetCK;
    
      const isUserAcctpedCookie: boolean = (OptanonConsent && OptanonConsent != '') && (OptanonAlertBoxClosed && OptanonAlertBoxClosed != '') ? true : false;
      const cookieConsentVal = isUserAcctpedCookie ? oneTrustCookieconsentVal : "0111";
      console.log("IsAlertBoxClosed: ", isUserAcctpedCookie);
      console.log("cookieConsentVal: ", cookieConsentVal);
      console.log("OptanonConsent: ", OptanonConsent, "OptanonAlertBoxClosed: ", OptanonAlertBoxClosed);
      
      // --> dataLayerFn("cookieconsent_ga4", "NA", dataLabel, "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA", "NA");
      if(isUserAcctpedCookie){
        const formattedDate = cookieDate.getDate() + '-' + cookieDate.getMonth() + '-' + cookieDate.getFullYear() + ' ' + cookieDate.getHours() + ':' + cookieDate.getMinutes() + ':' + cookieDate.getSeconds();
        createCookieConsent('cookie_splash_flag_new',encodeURI(formattedDate));
        createCookieConsent('cookie_splash_flag',encodeURI(formattedDate));
      }
      createCookieConsent('cookieconsent',cookieConsentVal);
  
      
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

  const watchOnetrustClosedcookie = async () => {
    
    var timeOutTime = setTimeout(async () => {
      OptanonAlertBoxClosed = getCookieValue('OptanonAlertBoxClosed'); 
      OptanonConsent = getCookieValue('OptanonConsent'); 
      console.log("set time out OptanonAlertBoxClosed: " + OptanonAlertBoxClosed);
      if((OptanonConsent && OptanonConsent != '') && (OptanonAlertBoxClosed && OptanonAlertBoxClosed != '')){
        loadAnalyticsScripts();
      } else{
        watchOnetrustClosedcookie();
      }
    }, 1000);
  };

  const [userConsentGiven, setUserConsentGiven] = useState<boolean>(false);
  useEffect(() => {
    // Function to check consent, when event fires
    const handleConsentChange = async () => {
      console.log("OptanonWrapper function triggered...");
      const returnVal = await loadAnalyticsScripts();
      setUserConsentGiven(() => returnVal);
      watchOnetrustClosedcookie();
    };
    window.OptanonWrapper = handleConsentChange;

    const handleUserInteraction = () => {
      setUserinteraction(true);
      window.OptanonWrapper = handleConsentChange;
      // Remove event listeners after loading the script

      window.removeEventListener("load", handleUserInteraction);
    };

    // Add event listeners for user interaction

    window.addEventListener("load", handleUserInteraction);

    return () => {
      window.removeEventListener("load", handleUserInteraction);
    };
  }, []);

  return (
    <>
      {useinteraction && (
        <>
          {userConsentGiven ? (
            <Script
              src="https://accounts.google.com/gsi/client"
              id="googleGsiId"
              strategy="lazyOnload"
            />
          ) : (
            <>
              <Script
                src={`${process.env.NEXT_PUBLIC_ONE_TRUST_SRC}`}
                id="oneTrustCookieeId"
                data-domain-script={`${process.env.NEXT_PUBLIC_ONE_TRUST_DOMAIN}`}
                strategy="lazyOnload"
              />
            </>
          )}
        </>
      )}
    </>
  );
}
