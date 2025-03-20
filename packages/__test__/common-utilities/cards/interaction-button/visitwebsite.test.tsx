import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Visitwebsite from "@packages/shared-components/common-utilities/cards/interaction-button/visitwebsite";
import { fetchenquirydata } from "@packages/REST-API/rest-api";

jest.mock("@packages/REST-API/rest-api", () => ({
  fetchenquirydata: jest.fn(),
}));

describe("Visitwebsite Component", () => {
  const enquiryProps = {
    subOrderItemId: "12345",
    orderItemId: "67890",
    collegeId: "54321",
    qualCode: "M",
    //sponsoredListingFlag: true,
    //manualBoostingFlag: false,
  };

  test("renders the visit website button", () => {
    render(<Visitwebsite enquiryProps={enquiryProps} />);
    expect(screen.getByText("Visit website")).toBeInTheDocument();
  });

  test("calls fetchenquirydata and opens a new tab when the button is clicked", async () => {
    const mockResponse = { website: "https://example.com" };
    (fetchenquirydata as jest.Mock).mockResolvedValue(mockResponse);
    
    render(<Visitwebsite enquiryProps={enquiryProps} />);

    const button = screen.getByText("Visit website");
    
    // Mock window.open
    const windowOpenSpy = jest.spyOn(window, "open").mockImplementation();

    fireEvent.click(button);
    
    // Wait for async function to complete
    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(fetchenquirydata).toHaveBeenCalledWith({
      suborderItemId: "12345",
      orderItemId: "67890",
      collegeId: "54321",
      affiliateId: 607022,
      qualCode: "M",
      //sponsoredListingFlag: true,
      //manualBoostingFlag: false,
    });
    expect(windowOpenSpy).toHaveBeenCalledWith("https://example.com", "_blank");
    
    // Cleanup
    windowOpenSpy.mockRestore();
  });

  test("handles errors gracefully if API call fails", async () => {
    (fetchenquirydata as jest.Mock).mockRejectedValue(new Error("API Error"));
    
    render(<Visitwebsite enquiryProps={enquiryProps} />);

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    fireEvent.click(screen.getByText("Visit website"));

    await new Promise((resolve) => setTimeout(resolve, 0));
    
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching enquiry data:", expect.any(Error));

    consoleErrorSpy.mockRestore();
  });
});
