import { render, screen, waitFor } from "@testing-library/react";
import Articlelinkcomponents from "@packages/shared-components/common-utilities/article-link/articlelinkcomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageComponentQueryFormation } from "@packages/lib/graphQL/fetch-function";

// Mock the child components (LinkcardBig and LinkcardSmall)
jest.mock("../../../shared-components/common-utilities/cards/article-link/articlelink-big", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked LinkcardBig</div>),
}));

jest.mock("../../../shared-components/common-utilities/cards/article-link/articlelink-small", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked LinkcardSmall</div>),
}));

// Mock the graphQL Fetch Function
jest.mock("@packages/lib/server-actions/server-action", () => ({
  graphQlFetchFunction: jest.fn(),
}));

// Mock the homePageComponentQueryFormation function
jest.mock("@packages/lib/graphQL/fetch-function", () => ({
  homePageComponentQueryFormation: jest.fn(),
}));

describe("Articlelinkcomponents", () => {
  const mockData = [
    { id: "1", title: "Big Link Card" },
    { id: "2", title: "Small Link Card" },
  ];

  beforeEach(() => {
    // Reset the mocks before each test
    (graphQlFetchFunction as jest.Mock).mockResolvedValue({
      data: {
        contentData: {
          items: [
            {
              bodyContentCollection: {
                items: [
                  {
                    mediaCardsCollection: {
                      items: mockData,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });

    // Mock homePageComponentQueryFormation to return a sample query
     (homePageComponentQueryFormation as jest.Mock).mockReturnValue("mocked-query");
  });

  it("should render the component with heading and subheading", async () => {
    render(
      <Articlelinkcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="test-name"
        routename="test-route"
        contentModelName="test-model"
        iscontentPreview={false}
      />
    );

    // Check if heading and subheading are rendered
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
    expect(screen.getByText("Test Subheading")).toBeInTheDocument();
  });

  it("should render LinkcardBig and LinkcardSmall components when data is available", async () => {
    render(
      <Articlelinkcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="test-name"
        routename="test-route"
        contentModelName="test-model"
        iscontentPreview={false}
      />
    );

    // Wait for the data to load and check for the presence of the mocked components
    await waitFor(() => {
      expect(screen.getByText("Mocked LinkcardBig")).toBeInTheDocument();
      expect(screen.getByText("Mocked LinkcardSmall")).toBeInTheDocument();
    });
  });

  it("should not render Linkcard components if no data is available", async () => {
    // Mock the fetch function to return no media cards
     (graphQlFetchFunction as jest.Mock).mockResolvedValue({
      data: {
        contentData: {
          items: [
            {
              bodyContentCollection: {
                items: [
                  {
                    mediaCardsCollection: {
                      items: [],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });

    render(
      <Articlelinkcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="test-name"
        routename="test-route"
        contentModelName="test-model"
        iscontentPreview={false}
      />
    );

    // Wait for the component to render
    await waitFor(() => {
      // Expect neither LinkcardBig nor LinkcardSmall to be rendered
      expect(screen.queryByText("Mocked LinkcardBig")).toBeNull();
      expect(screen.queryByText("Mocked LinkcardSmall")).toBeNull();
    });
  });

  it("should not render LinkcardBig and LinkcardSmall if GraphQL fetch fails", async () => {
    // Mock the fetch function to simulate an error
     (graphQlFetchFunction as jest.Mock)
          .mockRejectedValueOnce(new Error("GraphQL fetch failed"));

    render(
      <Articlelinkcomponents
        heading="Test Heading"
        subheading="Test Subheading"
        internalName="test-name"
        routename="test-route"
        contentModelName="test-model"
        iscontentPreview={false}
      />
    );

    // Wait for the component to handle the error and make assertions
    await waitFor(() => {
      // Make sure no Linkcard components are rendered
      expect(screen.queryByText("Mocked LinkcardBig")).toBeNull();
      expect(screen.queryByText("Mocked LinkcardSmall")).toBeNull();
    });
  });
});
