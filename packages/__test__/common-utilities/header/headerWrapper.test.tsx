import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // For additional matchers like toBeInTheDocument
import HeaderWrapper from "@packages/shared-components/common-utilities/header/headerWrapper";
import {
  graphQlFetchFunction,
  searchAjaxFecthFunction,
} from "@packages/lib/server-actions/server-action";
import Header from "@packages/shared-components/common-utilities/header/headercomponents";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";

// Mock the server actions
jest.mock("@packages/lib/server-actions/server-action", () => ({
  searchAjaxFecthFunction: jest.fn(),
  graphQlFetchFunction: jest.fn(),
}));

// Mock the Header component
jest.mock("@packages/shared-components/common-utilities/header/headercomponents", () =>
  jest.fn(() => <div data-testid="header-component"></div>)
);

const mockCourseData = { courses: ["Course1", "Course2"] };
const mockUniData = { universities: ["University1", "University2"] };
const mockHeaderData = {
  title: "Mock Header",
  menu: ["Home", "About", "Contact"],
};

describe("HeaderWrapper", () => {
  test("should render the Header component with data from all API calls", async () => {
    // Mock API responses
    (searchAjaxFecthFunction as jest.Mock)
      .mockResolvedValueOnce(mockCourseData) // First call for `body`
      .mockResolvedValueOnce(mockUniData); // Second call for `unibody`
    (graphQlFetchFunction as jest.Mock).mockResolvedValue(mockHeaderData); // Mock GraphQL response

    // Render the component
    render(await HeaderWrapper());

    // Verify that the `searchAjaxFecthFunction` is called with correct arguments
    expect(searchAjaxFecthFunction).toHaveBeenCalledWith({
      affiliateId: 220703,
      actionType: "subject",
      keyword: "",
      qualCode: "",
      networkId: 2,
    });
    expect(searchAjaxFecthFunction).toHaveBeenCalledWith({
      affiliateId: 220703,
      actionType: "institution",
      keyword: "",
      qualCode: "",
      networkId: 2,
    });

    // Verify that the `graphQlFetchFunction` is called with the correct query
    expect(graphQlFetchFunction).toHaveBeenCalledWith(Headerquery);

    // Verify that the Header component is rendered
    const headerComponent = screen.getByTestId("header-component");
    expect(headerComponent).toBeInTheDocument();

    // Verify that the `Header` component receives the correct props
    expect(Header).toHaveBeenCalledWith(
      {
        data: mockHeaderData,
        course_data: mockCourseData,
        uni_data: mockUniData,
      },
      {}
    );
  });

  test("should render the Header component with empty data when APIs return empty responses", async () => {
    // Mock empty responses
    (searchAjaxFecthFunction as jest.Mock)
      .mockResolvedValueOnce({ courses: [] }) // Empty response for `body`
      .mockResolvedValueOnce({ universities: [] }); // Empty response for `unibody`
    (graphQlFetchFunction as jest.Mock).mockResolvedValue({
      title: "",
      menu: [],
    }); // Empty GraphQL response

    // Render the component
    render(await HeaderWrapper());

    // Verify the Header component is rendered with empty props
    const headerComponent = screen.getByTestId("header-component");
    expect(headerComponent).toBeInTheDocument();

    // Verify props passed to the `Header` component
    expect(Header).toHaveBeenCalledWith(
      {
        data: { title: "", menu: [] },
        course_data: { courses: [] },
        uni_data: { universities: [] },
      },
      {}
    );
  });
});
