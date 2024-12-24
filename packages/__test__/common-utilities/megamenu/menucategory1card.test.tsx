import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Menucategory1card from "@packages/shared-components/common-utilities/megamenu/menucategory1card";
import "@testing-library/jest-dom";
jest.mock("@packages/lib/utlils/helper-function", () => ({
  currentAuthenticatedUser: jest.fn(() => Promise.resolve("mockUser")),
  GADataLayerFn: jest.fn(),
}));

const mockData = [
  { flagNavItemStyle: "L2 Text", navTitle: "Category 1" },
  { flagNavItemStyle: "L2 Link", navTitle: "Sub-item 1", navUrl: "/sub-item-1" },
  { flagNavItemStyle: "L2 Link", navTitle: "Sub-item 2", navUrl: "/sub-item-2" },
];

const mockParentMenu = "Parent Menu";

describe("Menucategory1card Component", () => {
  it("renders without crashing", () => {
    render(<Menucategory1card data={mockData} parentMenu={mockParentMenu} />);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
  });

  it("throws an error if data prop is missing", () => {
    // Suppress console.error for this test
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => {
      render(<Menucategory1card data={undefined} parentMenu={mockParentMenu} />);
    }).toThrow("Menucategory1card requires data prop.");
    spy.mockRestore();
  });

  it("renders the correct number of list items", () => {
    render(<Menucategory1card data={mockData} parentMenu={mockParentMenu} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2); // Only items without "L2 Text" style are rendered in the list
  });

  it("applies correct link attributes", () => {
    render(<Menucategory1card data={mockData} parentMenu={mockParentMenu} />);
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/sub-item-1");
    expect(links[0]).not.toHaveAttribute("target", "_blank");
    expect(links[1]).toHaveAttribute("href", "/sub-item-2");
  });

  // it("calls GADataLayerFn on click", async () => {
  //   const { GADataLayerFn } = require("@packages/lib/utlils/helper-function");
  //   render(<Menucategory1card data={mockData} parentMenu={mockParentMenu} />);
  //   const link = screen.getByText("Sub-item 1");

  //   fireEvent.click(link);
  //   expect(GADataLayerFn).toHaveBeenCalledWith(
  //     "ga_contentful_events",
  //     "header_clicks",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "homepage",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "in_year",
  //     await expect.anything(), // Simulating the awaited user call
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     "NA",
  //     process.env.PROJECT,
  //     "Sub-item 1",
  //     "/sub-item-1",
  //     mockParentMenu,
  //     "Category 1"
  //   );
  // });

  it("handles conditional rendering for navTitle", () => {
    const mockDataWithoutText = mockData.filter(
      (item) => item.flagNavItemStyle !== "L2 Text"
    );
    render(
      <Menucategory1card
        data={mockDataWithoutText}
        parentMenu={mockParentMenu}
      />
    );
    expect(screen.queryByText("Category 1")).not.toBeInTheDocument();
  });
});
