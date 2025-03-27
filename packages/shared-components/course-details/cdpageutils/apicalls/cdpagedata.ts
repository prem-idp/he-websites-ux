// fetchData.ts
import { v4 as uuidv4 } from "uuid";
export const cdfetchData = async (url: string): Promise<any> => {
    console.log(url,"url");
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {

                "Content-Type": "application/json",
                "x-correlation-id": uuidv4(),
                 "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
                 "siteCode": String(process.env.SITE_CODE),
            },
        });
        // console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
       throw new Error(`HTTP error! Status: ${error}`);
    }
};
