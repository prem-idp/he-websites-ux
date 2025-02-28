import { render, screen, waitFor } from "@testing-library/react";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";

// Mock the graphQlFetchFunction
jest.mock("@packages/lib/server-actions/server-action", () => ({
  graphQlFetchFunction: jest.fn(),
}));

describe("Subscribecomponents", () => {
  it("renders correctly when data is returned", async () => {
    const mockData = {
      data: {
        newsLetterData: {
          items: [{ title: "Test Newsletter", description: "Test Description" }],
        },
      },
    };

    // Mock the fetch function to return the mock data
    (graphQlFetchFunction as jest.Mock).mockResolvedValue({
      data: mockData,
    });
    // Render the component
    render(<Subscribecomponents iscontentPreview={false} />);

    // Wait for the component to update with the fetched data
    await waitFor(() => screen.getByText("Test Newsletter"));

    // Assert that the correct data is displayed
    expect(screen.getByText("Test Newsletter")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("handles loading state correctly", async () => {
    // Mock the fetch function to return a promise that doesn't resolve immediately
    (graphQlFetchFunction as jest.Mock).mockImplementation(() => new Promise(() => {})),
    render(<Subscribecomponents iscontentPreview={true} />);

    // Since it's waiting for data, you could test for a loading state here.
    // You would need to ensure the component is showing a loading indicator if it's implemented.
    // Example assertion:
    expect(screen.getByText("Loading...")).toBeInTheDocument(); // Assuming there's a loading text.
  });

  it("handles error states correctly", async () => {
    // Mock the fetch function to throw an error
    (graphQlFetchFunction as jest.Mock).mockRejectedValue(new Error('Network error'))

    render(<Subscribecomponents iscontentPreview={false} />);

    // Assert that the error state is handled (e.g., showing an error message).
    await waitFor(() => {
      expect(screen.getByText("Error loading data")).toBeInTheDocument(); // Assuming you handle errors this way.
    });
  });
});
