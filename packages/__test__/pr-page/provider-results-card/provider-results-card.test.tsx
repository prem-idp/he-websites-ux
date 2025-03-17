import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProviderResultsCard from "@packages/shared-components/pr-page/provider-results-card/provider-results-card";

const mockSearchResults = [
    {
        title: "Test University",
        cdpagesurl: "/test-university",
        points: "120 Points",
        tagLocation: "London, UK",
        fullCourse: "Full Course Details",
        modulesList: ["Module 1", "Module 2"],
        hasProspectus: true,
        hasWebsite: true,
        hasEmail: true,
        courseId: "123",
        collegeId: "456",
        subOrderItemId: "789",
        sponsoredListingFlag: true,
        manualBoostingFlag: false,
        orderItemId: "101",
        collegeTextKey: "Test College",
        pageName: "testPage",
    },
];

describe("ProviderResultsCard Component", () => {
    test("renders the provider card correctly", () => {
        render(<ProviderResultsCard searchResultlist={mockSearchResults} />);

        expect(screen.getByText("Test University")).toBeInTheDocument();
        expect(screen.getByText("120 Points")).toBeInTheDocument();
        expect(screen.getByText("London, UK")).toBeInTheDocument();
    });

    test("toggles module visibility on click", () => {
        render(<ProviderResultsCard searchResultlist={mockSearchResults} />);

        const moduleToggle = screen.getByText("Modules");
        fireEvent.click(moduleToggle);

        expect(screen.getByText("Module 1")).toBeInTheDocument();
        expect(screen.getByText("Module 2")).toBeInTheDocument();
    });
});
