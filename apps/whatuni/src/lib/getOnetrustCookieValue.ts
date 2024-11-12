
export function getOnetrustCookieValue(cookieValue: string|undefined){

 let latestCookieValue = "";
  //String cookieValue = "isGpcEnabled=0&datestamp=Wed+Nov+30+2022+14%3A48%3A24+GMT%2B0530+(India+Standard+Time)&version=202211.1.0&isIABGlobal=false&hosts=&consentId=534832fe-0d83-4f29-8a6e-0179052c726f&interactionCount=1&landingPath=https%3A%2F%2Fmtest.thecompleteuniversityguide.co.uk%2F&groups=C0004%3A0%2CC0002%3A0%2CC0005%3A0%2CC0001%3A1%2C0009%3A0";
  if (cookieValue != null) {
    let arrOfStr: string[] = cookieValue.toString().split("&");
    arrOfStr.map((cookieNameVal) => {
      if (cookieNameVal != null && cookieNameVal != "") {
        if (cookieNameVal.indexOf("groups") > -1) {
          latestCookieValue = cookieNameVal;
        }
      }
    })
  }
  let cookieValueFinal: string = "";
  if (latestCookieValue != null && latestCookieValue != "") {
    latestCookieValue = decodeURIComponent(latestCookieValue);
    latestCookieValue.split("=")[1].split(",").sort().forEach((consent) => {
      let cookieValue = "";
      //In one trust 1-accepted and 0-not accpeted cookie. So here we changing it for our cookie consent
      if((consent.split(":")[1]) ==  "1") {
        cookieValue += (consent.split(":")[1]).replace("1", "0");
      }else if((consent.split(":")[1]) == "0") {
        cookieValue += (consent.split(":")[1]).replace("0", "1");
      }
    
     
      cookieValueFinal += cookieValue;
    });
  }
  return cookieValueFinal.toString();

}
