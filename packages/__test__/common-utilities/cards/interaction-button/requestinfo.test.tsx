import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RequestInfo from "@packages/shared-components/common-utilities/cards/interaction-button/requestinfo";
import { fetchenquirydata } from "@packages/REST-API/rest-api";
import { useRouter } from "next/navigation";

jest.mock("@packages/REST-API/rest-api", () => ({
  fetchenquirydata: jest.fn()
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

describe("RequestInfo Component", () => {
  const mockRouter = { push: jest.fn() };
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  const mockProps = {
    subOrderItemId: "123",
    orderItemId: "456",
    collegeId: "789",
    sponsoredListingFlag: "Y",
    manualBoostingFlag: "N",
    pageName: "coursesearchresult",
    collegeName: "TestCollege",
    courseId: "101",
    selectedSubject: "Engineering"
  };

  test("renders the button correctly", () => {
    render(<RequestInfo enquiryProps={mockProps} />);
    expect(screen.getByRole("button", { name: /request info/i })).toBeInTheDocument();
  });

  test("calls fetchenquirydata and opens a URL in a new tab when requestInfoWebform is present", async () => {
    const mockResponse = { requestInfoWebform: "https://test-url.com" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);

    render(<RequestInfo enquiryProps={mockProps} />);
    window.open = jest.fn();
    
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(fetchenquirydata).toHaveBeenCalledWith(expect.objectContaining({ suborderItemId: "123" }));
      expect(window.open).toHaveBeenCalledWith("https://test-url.com", "_blank");
    });
  });

  test("navigates to the correct URL when requestInfoEmail is present and pageName is 'coursesearchresult'", async () => {
    const mockResponse = { requestInfoEmail: "email@test.com" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);

    render(<RequestInfo enquiryProps={mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith(
        "/degrees/email/TestCollege-email/789/101/Engineering/n-123/send-college-email.html?fromPage=coursesearchresult"
      );
    });
  });

  test("handles API errors gracefully", async () => {
    (fetchenquirydata as jest.Mock).mockRejectedValue(new Error("API error"));
    console.error = jest.fn();

    render(<RequestInfo enquiryProps={mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith("Error fetching enquiry data:", expect.any(Error));
    });
  });
});
