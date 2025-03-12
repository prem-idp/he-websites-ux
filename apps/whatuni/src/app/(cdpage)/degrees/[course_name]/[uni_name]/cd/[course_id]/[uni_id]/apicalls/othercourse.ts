// postRecommendedCourse.ts
export const otherRecommendedCourse = async (
    courseId: string,
    collegeId: string
): Promise<any> => {
    try {
        const response = await fetch(
            "https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/v1/recommended/recom-course",
            {
                method: "POST",
                headers: {
                    "x-api-key": "vrlwDbRFMn4pcfGFqaFjR8JGreMibYxJ9mO72PFy", // API Key
                    "Content-Type": "application/json",
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
