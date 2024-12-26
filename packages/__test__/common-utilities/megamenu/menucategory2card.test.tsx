import { render, screen, fireEvent } from "@testing-library/react";
import Menucategory2card from "@packages/shared-components/common-utilities/megamenu/menucategory2card";
import {
  GADataLayerFn,
  currentAuthenticatedUser,
} from "@packages/lib/utlils/helper-function";
import "@testing-library/jest-dom";
jest.mock("@packages/lib/utlils/helper-function", () => ({
  GADataLayerFn: jest.fn(),
  currentAuthenticatedUser: jest.fn().mockResolvedValue("test-user"),
}));

describe("Menucategory2card Component", () => {
  const mockData = [
    { flagNavItemStyle: "L2 Text", navTitle: "Parent Menu" },
    {
      navTitle: "Item 1",
      navUrl: "/item-1",
      navIcon: { url: "/icon1.png" },
      navCtaTarget: "Open in new tab",
    },
    {
      navTitle: "Item 2",
      navUrl: "/item-2",
      navIcon: { url: "/icon2.png" },
      navCtaTarget: "Same tab",
    },
  ];
  const mockParentMenu = "Mock Parent Menu";

  it("renders without crashing", () => {
    render(<Menucategory2card data={mockData} parentMenu={mockParentMenu} />);
    expect(screen.getByText("Parent Menu")).toBeInTheDocument();
  });

  it("calculates the correct size class", () => {
    render(<Menucategory2card data={mockData} parentMenu={mockParentMenu} />);
    expect(screen.getByText("Parent Menu").parentElement).toHaveClass(
      "lg:col-span-1"
    );
  });

  it("renders items correctly", () => {
    render(<Menucategory2card data={mockData} parentMenu={mockParentMenu} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

//   it("triggers GADataLayerFn on item click", async () => {
//     render(<Menucategory2card data={mockData} parentMenu={mockParentMenu} />);

//     const itemLink = screen.getByText("Item 1").closest("a");
//      await fireEvent.click(itemLink);

//     await screen.findByText("Item 1"); // Wait for async function
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
//       "test-project",
//       "Item 1",
//       "/item-1",
//       mockParentMenu,
//       "Parent Menu"
//     );
//   });

  it("renders links with correct attributes", () => {
    render(<Menucategory2card data={mockData} parentMenu={mockParentMenu} />);

    const itemLink = screen.getByText("Item 1").closest("a");
    expect(itemLink).toHaveAttribute("href", "/item-1");
    expect(itemLink).toHaveAttribute("target", "_blank");
    expect(itemLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
