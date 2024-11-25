type requestMethod = "GET" | "POST"

export const sendHTTPRequest = async (url: string, reqMethod: requestMethod, reqBody: any): Promise<any> => {
    try {
        const response = await fetch(url, {
        method: reqMethod,
        headers: {
            
        },
        body: reqBody
        });
        return response;
    } catch (error){
        throw new Error("Error while fetching data " + error);
    }

}