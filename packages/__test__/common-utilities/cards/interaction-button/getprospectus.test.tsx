import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import Getprospectus from "@packages/shared-components/common-utilities/cards/interaction-button/getprospectus";
import { fetchenquirydata } from "@packages/REST-API/rest-api";

jest.mock("@packages/REST-API/rest-api", () => ({
    fetchenquirydata: jest.fn()
  }));
  
jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}));

describe("Getprospectus Component", () =>{
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

  test("renders the get prospectus button", () =>{
    render(<Getprospectus enquiryProps={mockProps} />);
    expect(screen.getByText("Get Prospectus")).toBeInTheDocument();
  });

  test("calls fetchenquirydata and opens a URL in a new tab when requestProspectusWebform is present", async () => {
    const mockResponse = { requestProspectusWebform: "https://test-url.com" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);

    render(<Getprospectus enquiryProps={mockProps} />);
    window.open = jest.fn();
    
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(fetchenquirydata).toHaveBeenCalledWith(expect.objectContaining({ suborderItemId: "123" }));
      expect(window.open).toHaveBeenCalledWith("https://test-url.com", "_blank");
    });
  });

  test("navigates to the correct URL when requestProspectusEmail is present and pageName is 'coursesearchresult'", async () => {
    const mockResponse = { requestProspectusEmail: "email@test.com" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);

    render(<Getprospectus enquiryProps={mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith(
        "/degrees/prospectus/TestCollege-prospectus/789/101/Engineering/n-123/order-prospectus.html?sponsoredOrderItemId=456&pageName=coursesearchresult"
      );
    });
  });

  test("handles API errors gracefully", async () => {
    (fetchenquirydata as jest.Mock).mockRejectedValue(new Error("API error"));
    console.error = jest.fn();

    render(<Getprospectus enquiryProps={mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith("Error fetching enquiry data:", expect.any(Error));
    });
  });
});