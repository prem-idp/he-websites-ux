import { sendHTTPRequest } from "./httpRequest";

export async function createJAVASideCookie(cookieName: String, cookieValue: string): Promise<any>{

    const url = "http://localhost:8080/degrees/cookies/create-cookie-popup.html";
    const resData = await sendHTTPRequest(url, "POST", {
        "cookieName": cookieName,
        "cookieValue": cookieValue
    });
    return resData;
}