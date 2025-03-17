import { render, screen } from "@testing-library/react";
import PrPageTopSection from "@packages/shared-components/pr-page/PrTopSection/Pr-top-section";
import UserFavouriteTopSection from "@packages/shared-components/pr-page/PrTopSection/UserFavouriteTopSection";

jest.mock("../UserFavouriteTopSection", () => () => <div data-testid="user-favourite" />);

describe("PrPageTopSection Component", () => {
    const mockSearchResultList = {
        searchResultsList: [
            {
                collegeDisplayName: "Test University",
                collegeId: "123",
                collegeTextKey: "Test University",
                collegeMedia: { ipCollegeLogo: "/test-logo.png" },
                distanceInMiles: 10,
                rating: 4.5,
                reviewCount: 120,
                wuscaRanking: 5,
            },
        ],
        totalCourseCount: 50,
    };

    it("renders university details correctly", () => {
        render(<PrPageTopSection searchResultlist={mockSearchResultList} />);

        expect(screen.getByText("Test University")).toBeInTheDocument();
        expect(screen.getByText("50 courses available")).toBeInTheDocument();
        expect(screen.getByText("4.5")).toBeInTheDocument();
        expect(screen.getByText("120 reviews")).toBeInTheDocument();
    });

    it("renders college logo correctly", () => {
        render(<PrPageTopSection searchResultlist={mockSearchResultList} />);
        const logo = screen.getByAltText("University logo");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", "/test-logo.png");
    });

    it("renders UserFavouriteTopSection component", () => {
        render(<PrPageTopSection searchResultlist={mockSearchResultList} />);
        expect(screen.getByTestId("user-favourite")).toBeInTheDocument();
    });

    it("renders empty component when searchResultsList is empty", () => {
        render(<PrPageTopSection searchResultlist={{ searchResultsList: [] }} />);
        expect(screen.queryByText("Test University")).not.toBeInTheDocument();
    });
});
