// fetchData.ts
export const cdfetchData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc",
            },
        });

        if (!response.ok) {
            console.error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        // Re-throw to handle it at the caller level if needed
    }
};
