import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FaqClient from "@packages/shared-components/common-utilities/faq/faq-clientwrap";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { ContentfulInspectorManager } from "@packages/lib/contentful-preview/ContentfulInspector";

// Mocking necessary imports
jest.mock("@contentful/live-preview/react", () => ({
  useContentfulLiveUpdates: jest.fn(),
}));

jest.mock("@packages/lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: jest.fn(() => <div>Mocked ContentfulInspectorManager</div>),
}));

describe("FaqClient Component", () => {
  const mockJsonData = {
    faqEntriesCollection: {
      items: [
        {
          sys: { id: "1" },
          question: "What is your return policy?",
          answer: "You can return items within 30 days of purchase.",
        },
        {
          sys: { id: "2" },
          question: "How do I track my order?",
          answer: "You can track your order via our tracking page.",
        },
      ],
    },
  };

  beforeEach(() => {
    (useContentfulLiveUpdates as jest.Mock).mockReturnValue({
        data: mockJsonData,
      });
  });

  it("renders FAQ questions and answers correctly", () => {
    render(<FaqClient jsondata={mockJsonData} iscontentPreview={false} />);

    // Verify that FAQ questions are rendered
    expect(screen.getByText("What is your return policy?")).toBeInTheDocument();
    expect(screen.getByText("How do I track my order?")).toBeInTheDocument();
  });

  it("toggles the answer visibility when a question is clicked", async () => {
    render(<FaqClient jsondata={mockJsonData} iscontentPreview={false} />);

    // Check if answers are initially hidden
    expect(screen.queryByText("You can return items within 30 days of purchase.")).not.toBeInTheDocument();
    expect(screen.queryByText("You can track your order via our tracking page.")).not.toBeInTheDocument();

    // Click on the first question to open the answer
    fireEvent.click(screen.getByText("What is your return policy?"));
    
    // Wait for the answer to appear
    await waitFor(() => {
      expect(screen.getByText("You can return items within 30 days of purchase.")).toBeInTheDocument();
    });

    // Click on the first question again to close the answer
    fireEvent.click(screen.getByText("What is your return policy?"));
    
    // Wait for the answer to disappear
    await waitFor(() => {
      expect(screen.queryByText("You can return items within 30 days of purchase.")).not.toBeInTheDocument();
    });

    // Click on the second question to open its answer
    fireEvent.click(screen.getByText("How do I track my order?"));
    
    // Wait for the answer to appear
    await waitFor(() => {
      expect(screen.getByText("You can track your order via our tracking page.")).toBeInTheDocument();
    });
  });

  it("shows ContentfulInspectorManager when iscontentPreview is true", () => {
    render(<FaqClient jsondata={mockJsonData} iscontentPreview={true} />);
    
    // Ensure ContentfulInspectorManager is rendered when in preview mode
    expect(screen.getByText("Mocked ContentfulInspectorManager")).toBeInTheDocument();
  });

  it("does not show ContentfulInspectorManager when iscontentPreview is false", () => {
    render(<FaqClient jsondata={mockJsonData} iscontentPreview={false} />);
    
    // Ensure ContentfulInspectorManager is not rendered when not in preview mode
    expect(screen.queryByText("Mocked ContentfulInspectorManager")).not.toBeInTheDocument();
  });

  it("renders the accordion animation when toggling open/close", async () => {
    render(<FaqClient jsondata={mockJsonData} iscontentPreview={false} />);
    
    // Click the first question and check if the corresponding answer is revealed
    const question = screen.getByText("What is your return policy?");
    fireEvent.click(question);
    
    // Wait for the answer to appear (ensure it has been revealed with animation)
    await waitFor(() => {
      expect(screen.getByText("You can return items within 30 days of purchase.")).toBeInTheDocument();
    });
    
    // Click the question again to close the accordion and check if it disappears
    fireEvent.click(question);
    
    // Wait for the answer to be removed
    await waitFor(() => {
      expect(screen.queryByText("You can return items within 30 days of purchase.")).not.toBeInTheDocument();
    });
  });
});
