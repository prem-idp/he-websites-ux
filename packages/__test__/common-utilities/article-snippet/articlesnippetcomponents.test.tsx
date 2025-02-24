import { render, screen, waitFor } from "@testing-library/react";
import Articlesnippetcomponents from "@packages/shared-components/common-utilities/article-snippet/articlesnippetcomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";

// Mocking necessary modules
jest.mock("@packages/lib/server-actions/server-action", () => ({
  graphQlFetchFunction: jest.fn(),
}));

jest.mock("@packages/lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: jest.fn(() => <div>Mocked ContentfulInspector</div>),
}));

jest.mock("../../../shared-components/common-utilities/article-snippet/text-toggle-comp", () => ({
    __esModule: true,
    default: jest.fn(() => <div>Mocked TextToggleComponent</div>),
  }));
  

describe("Articlesnippetcomponents", () => {
  const mockData = {
    data: {
      contentData: {
        items: [
          {
            bodyContentCollection: {
              items: [
                {
                  mediaCardsCollection: {
                    items: [
                      {
                        sys: { id: "1" },
                        title: "Test Title",
                        longDescription: { json: "Test long description" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  };

  beforeEach(() => {
    //graphQlFetchFunction.mockResolvedValue(mockData);
    (graphQlFetchFunction as jest.Mock).mockResolvedValue({
        data: mockData,
      });
  });

  it("renders the title and text toggle component correctly", async () => {
    render(
      <Articlesnippetcomponents
        internalName="testName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={false}
      />
    );

    // Wait for data to be fetched and rendered
    await waitFor(() => screen.getByText("Test Title"));

    // Check if the title is rendered
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Check if the mocked TextToggleComponent is rendered
    expect(screen.getByText("Mocked TextToggleComponent")).toBeInTheDocument();
  });

  it("renders ContentfulInspectorManager when iscontentPreview is true", async () => {
    render(
      <Articlesnippetcomponents
        internalName="testName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={true}
      />
    );

    // Ensure that ContentfulInspectorManager is rendered when in content preview mode
    expect(screen.getByText("Mocked ContentfulInspector")).toBeInTheDocument();
  });

  it("does not render ContentfulInspectorManager when iscontentPreview is false", async () => {
    render(
      <Articlesnippetcomponents
        internalName="testName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={false}
      />
    );

    // Ensure that ContentfulInspectorManager is NOT rendered when iscontentPreview is false
    expect(screen.queryByText("Mocked ContentfulInspector")).not.toBeInTheDocument();
  });

  it("handles missing data gracefully", async () => {
    // Mock an empty response for the fetch
   // graphQlFetchFunction.mockResolvedValueOnce({ data: null });
    (graphQlFetchFunction as jest.Mock).mockResolvedValue({
        data: null,
      });
    render(
      <Articlesnippetcomponents
        internalName="testName"
        routename="testRoute"
        contentModelName="testModel"
        iscontentPreview={false}
      />
    );

    // Wait for the component to render
    await waitFor(() => {
      // You can test the fallback behavior (if you handle errors or no data in the component)
      // For example, ensure there's a loading state or empty state message.
      expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
      expect(screen.queryByText("Mocked TextToggleComponent")).not.toBeInTheDocument();
    });
  });
});
