import { render, screen, waitFor } from "@testing-library/react";
import PrPageComponent from "@packages/shared-components/pr-page/prpage-component";
import { headers } from "next/headers";
import React from "react";
import fetchMock from "jest-fetch-mock";

jest.mock("next/headers", () => ({
    headers: jest.fn(() => new Map([['referer', 'test-referer']]))
}));

fetchMock.enableMocks();

describe("PrPageComponent", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("renders breadcrumb layout correctly", async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({ searchResultsList: [], totalCourseCount: 0 })
        );

        render(<PrPageComponent searchparams={{}} />);

        await waitFor(() => {
            expect(screen.getByText("Home")).toBeInTheDocument();
            expect(screen.getByText("Scholarships")).toBeInTheDocument();
            expect(screen.getByText("Search results")).toBeInTheDocument();
        });
    });

    it("renders no results component when no providers found", async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({ searchResultsList: [], totalCourseCount: 0 })
        );

        render(<PrPageComponent searchparams={{}} />);

        await waitFor(() => {
            expect(screen.getByText(/No results found/i)).toBeInTheDocument();
        });
    });

    it("renders provider results when data is available", async () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({
                searchResultsList: [
                    {
                        collegeId: "123",
                        collegeTextKey: "Test University",
                        bestMatchCoursesList: [
                            {
                                courseId: "456",
                                courseTitleTextKey: "Test Course",
                                enquiryDetails: {},
                            },
                        ],
                    },
                ],
                totalCourseCount: 10,
            })
        );

        render(<PrPageComponent searchparams={{}} />);

        await waitFor(() => {
            expect(screen.getByText("Test University")).toBeInTheDocument();
            expect(screen.getByText("Test Course")).toBeInTheDocument();
        });
    });
});
