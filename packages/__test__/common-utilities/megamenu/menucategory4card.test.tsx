import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menucategory4card from "@packages/shared-components/common-utilities/megamenu/menucategory4card";
import {
  GADataLayerFn,
  currentAuthenticatedUser,
} from "@packages/lib/utlils/helper-function";
import "@testing-library/jest-dom";
jest.mock("@packages/lib/utlils/helper-function", () => ({
  GADataLayerFn: jest.fn(),
  currentAuthenticatedUser: jest.fn().mockResolvedValue("test-user"),
}));

describe("Menucategory4card Component", () => {
  const mockData = [
    {
      navTitle: "Item 1",
      flagNavItemStyle: "L2 Text",
      navUrl: "https://example.com/item1",
      navIcon: { url: "https://example.com/image1.png" },
    },
    {
      navTitle: "Item 2",
      flagNavItemStyle: "L2 Image",
      navUrl: "https://example.com/item2",
      navCtaTarget: "Open in new tab",
      navIcon: { url: "https://example.com/image2.png" },
    },
  ];

  const mockParentMenu = "Test Parent Menu";

  it("renders correctly", () => {
    render(<Menucategory4card data={mockData} parentMenu={mockParentMenu} />);

    // Check for navTitle
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    // Check for the first item
    expect(screen.getByText("Item 2")).toBeInTheDocument();

    // Check for image alt text
    expect(screen.getByAltText("University logo")).toBeInTheDocument();
  });

  //   it("calls GADataLayerFn on link click", async () => {
  //     render(<Menucategory4card data={mockData} parentMenu={mockParentMenu} />);

  //     const link = screen.getByText("Item 2").closest("a");
  //     fireEvent.click(link);

  //     // Wait for async function to resolve
  //     await Promise.resolve();

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
  //       "test-user",
  //       "NA",
  //       "NA",
  //       "NA",
  //       "NA",
  //       "NA",
  //       "NA",
  //       `${process.env.PROJECT}`,
  //       "Item 2",
  //       "https://example.com/item2",
  //       mockParentMenu,
  //       "Item 1"
  //     );
  //   });

  it("renders correct grid size based on data length", () => {
    const mockDataShort = [
      { navTitle: "Item 1", flagNavItemStyle: "L2 Text" },
      { navTitle: "Item 2", flagNavItemStyle: "L2 Image" },
    ];

    const { container } = render(
      <Menucategory4card data={mockDataShort} parentMenu={mockParentMenu} />
    );

    // Check for grid size class
    expect(container.querySelector(".lg\\:col-span-1")).toBeInTheDocument();
  });
});
