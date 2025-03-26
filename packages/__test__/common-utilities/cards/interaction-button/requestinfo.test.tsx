import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RequestInfo from "@packages/shared-components/common-utilities/cards/interaction-button/requestinfo";
import { fetchenquirydata } from "@packages/REST-API/rest-api";
import { useRouter } from "next/navigation";
import { fetchAuthSession } from "aws-amplify/auth";

jest.mock("@packages/REST-API/rest-api", () => ({
  fetchenquirydata: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("aws-amplify/auth", () => ({
  fetchAuthSession: jest.fn(),
}));

describe("RequestInfo Component", () => {
  let mockRouter;

  beforeEach(() => {
    mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    (fetchenquirydata as jest.Mock).mockResolvedValue({ tokens: { idToken: "mockToken" } });
  });

  test("renders the button correctly", () => {
    render(<RequestInfo enquiryProps={{}} />);
    expect(screen.getByRole("button", { name: /request info/i })).toBeInTheDocument();
  });

  test("calls API and navigates on button click", async () => {
    const mockEnquiryProps = {
      subOrderItemId: "123",
      orderItemId: "456",
      collegeId: "789",
      courseId: "1011",
      collegeName: "Test College",
      selectedSubject: "Math",
      qualCode: "M",
      pageName: "coursesearchresult",
    };

    (fetchenquirydata as jest.Mock).mockResolvedValue({ requestInfoWebform: "https://example.com" });

    render(<RequestInfo enquiryProps={mockEnquiryProps} />);

    const button = screen.getByRole("button", { name: /request info/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(fetchenquirydata).toHaveBeenCalledWith({
        suborderItemId: "123",
        orderItemId: "456",
        collegeId: "789",
        affiliateId: 607022,
        qualCode: "M",
       // sponsoredListingFlag: undefined,
        //manualBoostingFlag: undefined,
      });
    });
  });

  test("opens request info webform if present in response", async () => {
    window.open = jest.fn();
    (fetchenquirydata as jest.Mock).mockResolvedValue({ requestInfoWebform: "https://example.com" });
    render(<RequestInfo enquiryProps={{}} />);
    fireEvent.click(screen.getByRole("button"));
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith("https://example.com", "_blank");
    });
  });

  // test("navigates to email page when no webform is present", async () => {
  //   (fetchenquirydata as jest.Mock).mockResolvedValue({ requestInfoEmail: true });
  //   render(<RequestInfo enquiryProps={{ collegeId: "123", courseId: "456" }} />);
  //   fireEvent.click(screen.getByRole("button"));
  //   await waitFor(() => {
  //     expect(mockRouter.push).toHaveBeenCalledWith("/degrees/email/123/4560");
  //   });
  // });
});
