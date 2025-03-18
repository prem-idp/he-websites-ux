import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import BookOpenDay from "@packages/shared-components/common-utilities/cards/interaction-button/bookopenday";
import { fetchenquirydata } from "@packages/REST-API/rest-api";

jest.mock("@packages/REST-API/rest-api", () => ({
    fetchenquirydata: jest.fn()
  }));
  
jest.mock("next/navigation", () => ({
    useRouter: jest.fn()
}));

describe("BookOpenDay Component", () =>{
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
    selectedSubject: "Engineering",
    qualCode: "M"
  };

  test("renders the button correctly", () => {
    render(<BookOpenDay enquiryProps={mockProps} />);
    expect(screen.getByText("Book open day")).toBeInTheDocument();
  });

  test("calls fetchenquirydata and opens a URL in a new tab when bookingUrl is present", async () => {
    const mockResponse = { bookingUrl: "https://test-url.com" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);

    render(<BookOpenDay enquiryProps={mockProps} />);
    window.open = jest.fn();
    
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(fetchenquirydata).toHaveBeenCalledWith(expect.objectContaining({ suborderItemId: "123" }));
      expect(window.open).toHaveBeenCalledWith("https://test-url.com", "_blank");
    });
  });

  test("navigates to the correct URL when eventId is present", async () => {
    const mockResponse = { eventId: "1234" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);

    render(<BookOpenDay enquiryProps={mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(mockRouter.push).toHaveBeenCalledWith(
        "/open-days/book?collegeId=789&courseId=101&suborderItemId=123&eventId=1234&sponsoredOrderItemId=456&manualBoostingFlag=N&pageName=coursesearchresult"
      );
    });
  });

  test("handles API errors gracefully", async () => {
    (fetchenquirydata as jest.Mock).mockRejectedValue(new Error("API error"));
    console.error = jest.fn();

    render(<BookOpenDay enquiryProps={mockProps} />);
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith("Error fetching enquiry data:", expect.any(Error));
    });
  });
});