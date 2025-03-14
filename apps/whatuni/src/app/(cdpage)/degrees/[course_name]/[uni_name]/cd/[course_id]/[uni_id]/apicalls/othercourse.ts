// postRecommendedCourse.ts
import { v4 as uuidv4 } from "uuid";
export const otherRecommendedCourse = async (
    courseId: string,
    collegeId: string
): Promise<any> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/recommended/recom-course`,
            {
                method: "POST",
                headers: {
                    "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`, // API Key
                    "Content-Type": "application/json",
                    "x-correlation-id": uuidv4(),
                    "siteCode": String(process.env.SITE_CODE), // Sending siteCode in headers
                },
                body: JSON.stringify({
                    courseId,
                    collegeId,
                    affiliateId: process.env.AFFILATE_ID,
                    pageName: "courseDetail",
                }),
            }
        );

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching recommended courses:", error);
        // throw error; // Re-throw to handle it at the caller level if needed
    }
};
