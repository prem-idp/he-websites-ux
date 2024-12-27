
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menucategory5card from "@packages/shared-components/common-utilities/megamenu/menucategory5card";
import { currentAuthenticatedUser, GADataLayerFn } from "@packages/lib/utlils/helper-function";
import "@testing-library/jest-dom"
jest.mock("@packages/lib/utlils/helper-function", () => ({
  currentAuthenticatedUser: jest.fn(),
  GADataLayerFn: jest.fn(),
}));

describe("Menucategory5card", () => {
  const mockData = [
    { flagNavItemStyle: "L2 Text", navTitle: "Category Title" },
    { navUrl: "/link1", navTitle: "Link 1", navCtaTarget: "Open in new tab", navIcon: { url: "/icon1.png" } },
    { navUrl: "/link2", navTitle: "Link 2", navCtaTarget: "Same tab", navIcon: { url: "/icon2.png" } },
  ];

  const mockParentMenu = "Parent Menu";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with title and list items", () => {
    render(<Menucategory5card data={mockData} parentMenu={mockParentMenu} />);

    // Check for the title
    expect(screen.getByText("Category Title")).toBeInTheDocument();

    // Check for the links
    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });

  it("renders links with correct attributes", () => {
    render(<Menucategory5card data={mockData} parentMenu={mockParentMenu} />);

    const link1 = screen.getByText("Link 1").closest("a");
    const link2 = screen.getByText("Link 2").closest("a");

    expect(link1).toHaveAttribute("href", "/link1");
    expect(link1).toHaveAttribute("target", "_blank");
    expect(link1).toHaveAttribute("rel", "noopener noreferrer");

    expect(link2).toHaveAttribute("href", "/link2");
    expect(link2).toHaveAttribute("target", "_parent");
  });

//   it("calls GADataLayerFn on link click", async () => {
//     (currentAuthenticatedUser as jest.Mock).mockResolvedValue("Mock User");

//     render(<Menucategory5card data={mockData} parentMenu={mockParentMenu} />);

//     const link1 = screen.getByText("Link 1").closest("a");

//     fireEvent.click(link1!);

//     await screen.findByText("Link 1"); // Wait for async calls

//     expect(GADataLayerFn).toHaveBeenCalledWith(
//       "ga_contentful_events",
//       "header_clicks",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "homepage",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "in_year",
//       "Mock User",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "undefined", // Replace with process.env.PROJECT if it's defined
//       "Link 1",
//       "/link1",
//       mockParentMenu,
//       "Category Title"
//     );
//   });
});
