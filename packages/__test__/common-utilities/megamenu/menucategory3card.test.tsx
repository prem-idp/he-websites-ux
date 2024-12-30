import { render, screen, fireEvent } from "@testing-library/react";
import Menucategory3card from "@packages/shared-components/common-utilities/megamenu/menucategory3card";
import {
  currentAuthenticatedUser,
  GADataLayerFn,
} from "@packages/lib/utlils/helper-function";
import "@testing-library/jest-dom";
jest.mock("@packages/lib/utlils/helper-function", () => ({
  currentAuthenticatedUser: jest.fn().mockResolvedValue("testUser"),
  GADataLayerFn: jest.fn(),
}));

describe("Menucategory3card", () => {
  const mockData = [
    {
      flagNavItemStyle: "L2 Text",
      navTitle: "Menu Title",
    },
    {
      flagNavItemStyle: "Icon",
      navIcon: { url: "/icon1.png" },
      navTitle: "Item 1",
      navUrl: "/item1",
      navCtaTarget: "Open in new tab",
    },
    {
      flagNavItemStyle: "Icon",
      navIcon: { url: "/icon2.png" },
      navTitle: "Item 2",
      navUrl: "/item2",
      navCtaTarget: "Same tab",
    },
  ];

  const mockParentMenu = "Parent Menu";

  it("renders the menu title correctly", () => {
    render(<Menucategory3card data={mockData} parentMenu={mockParentMenu} />);
    expect(screen.getByText("Menu Title")).toBeInTheDocument();
  });

  it("renders all menu items except the one with 'L2 Text'", () => {
    render(<Menucategory3card data={mockData} parentMenu={mockParentMenu} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.queryByText("L2 Text")).not.toBeInTheDocument();
  });

  it("applies the correct link attributes", () => {
    render(<Menucategory3card data={mockData} parentMenu={mockParentMenu} />);

    const link1 = screen.getByText("Item 1").closest("a");
    const link2 = screen.getByText("Item 2").closest("a");

    expect(link1).toHaveAttribute("href", "/item1");
    expect(link1).toHaveAttribute("target", "_blank");
    expect(link1).toHaveAttribute("rel", "noopener noreferrer");

    expect(link2).toHaveAttribute("href", "/item2");
    expect(link2).toHaveAttribute("target", "_parent");
  });

//   it("calls GADataLayerFn on link click", async () => {
//     render(<Menucategory3card data={mockData} parentMenu={mockParentMenu} />);

//     const link = screen.getByText("Item 1").closest("a");
//     if (link) {
//       await fireEvent.click(link);
//     }

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
//       "testUser",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "NA",
//       "test-project", // Replace with your process.env.PROJECT mock value
//       "Item 1",
//       "/item1",
//       mockParentMenu,
//       "Menu Title"
//     );
//   });


});
