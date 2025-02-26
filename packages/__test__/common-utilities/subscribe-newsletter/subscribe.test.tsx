import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Subscribe from "@packages/shared-components/article-landing/subscribe-newsletter/subscribe";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

// Mocking the necessary imports
jest.mock("@contentful/live-preview/react", () => ({
  useContentfulLiveUpdates: jest.fn(),
}));

jest.mock("@packages/shared-components/common-utilities/cards/interaction-button/subscribebtn", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked Subscribebtn</div>),
}));

jest.mock("@packages/lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: jest.fn(() => <div>Mocked ContentfulInspectorManager</div>),
}));

describe("Subscribe Component", () => {
  const mockData = {
    sys: { id: "12345" },
    newsTitle: "Subscribe to our newsletter",
    newsDesc: { json: { content: [{ content: [{ value: "Stay updated with our news!" }] }] } },
    newsEmail: "Enter your email",
    ctaLabel: "Subscribe Now",
  };

  beforeEach(() => {
    (useContentfulLiveUpdates as jest.Mock).mockReturnValue({
      data: mockData,
    });
  //  useContentfulLiveUpdates.mockReturnValue(mockData); // Mock live updates
  });

  it("renders the subscribe component", () => {
    render(<Subscribe data={mockData} isPreviewTrue={false} />);

    // Check for title and description rendering
    expect(screen.getByText("Subscribe to our newsletter")).toBeInTheDocument();
    expect(screen.getByText("Stay updated with our news!")).toBeInTheDocument();
  });

  it("shows email validation error when invalid email is entered", async () => {
    render(<Subscribe data={mockData} isPreviewTrue={false} />);

    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });

    await waitFor(() => {
      expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
    });
  });

  it("shows checkbox error if checkbox is unchecked", async () => {
    render(<Subscribe data={mockData} isPreviewTrue={false} />);

    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const subscribeButton = screen.getByText("Mocked Subscribebtn");
    fireEvent.click(subscribeButton);

    await waitFor(() => {
      expect(screen.getByText("Please agree to our terms and conditions and privacy notice")).toBeInTheDocument();
    });
  });

  it("shows success message on successful subscription", async () => {
    // Mock the submitNewsletter function to simulate success
    const submitNewsletter = jest.fn().mockResolvedValue({
      message: "User Added",
    });

    render(<Subscribe data={mockData} isPreviewTrue={false} />);

    // Mock the success state and test for success message
    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const checkbox = screen.getByLabelText(/I confirm I am over 16/);
    fireEvent.click(checkbox);

    // Trigger the submitNewsletter mock function (it simulates a success)
    const subscribeButton = screen.getByText("Mocked Subscribebtn");
    fireEvent.click(subscribeButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText("Thanks, we’ll be in touch soon")).toBeInTheDocument();
    });
  });

  it("renders ContentfulInspectorManager when isPreviewTrue is true", () => {
    render(<Subscribe data={mockData} isPreviewTrue={true} />);

    // Check if ContentfulInspectorManager is rendered
    expect(screen.getByText("Mocked ContentfulInspectorManager")).toBeInTheDocument();
  });

  it("does not render ContentfulInspectorManager when isPreviewTrue is false", () => {
    render(<Subscribe data={mockData} isPreviewTrue={false} />);

    // Ensure that ContentfulInspectorManager is NOT rendered
    expect(screen.queryByText("Mocked ContentfulInspectorManager")).not.toBeInTheDocument();
  });
});
