import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Megamenucomponents from "../../shared-components/common-utilities/topnav/megamenucomponents";
import "@testing-library/jest-dom";
// Mock components used in Megamenucomponents
jest.mock(
  "@packages/shared-components/common-utilities//megamenu/menucategory1card",
  () => jest.fn(() => <div>Menucategory1card</div>)
);
jest.mock(
  "@packages/shared-components/common-utilities//megamenu/menucategory2card",
  () => jest.fn(() => <div>Menucategory2card</div>)
);
jest.mock(
  "@packages/shared-components/common-utilities//megamenu/menucategory3card",
  () => jest.fn(() => <div>Menucategory3card</div>)
);
jest.mock(
  "@packages/shared-components/common-utilities//megamenu/menucategory4card",
  () => jest.fn(() => <div>Menucategory4card</div>)
);
jest.mock(
  "@packages/shared-components/common-utilities//megamenu/menucategory5card",
  () => jest.fn(() => <div>Menucategory5card</div>)
);
describe("Megamenucomponents", () => {
  const mockData = {
    data: {
      contentData: {
        items: [
          {
            headerMainMenuCollection: {
              items: [
                {
                  navTitle: "Menu 1",
                  navUrl: "/menu1",
                  navIcon: { url: "/icon1.png" },
                  navChildC1Collection: {
                    items: [
                      {
                        navTitle: "Child 1",
                        navIcon: null,
                        flagNavItemStyle: "Nav Icon",
                      },
                    ],
                  },
                  navChildC2Collection: {
                    items: [],
                  },
                  navChildC3Collection: {
                    items: [],
                  },
                  navChildC4Collection: {
                    items: [],
                  },
                },
                {
                  navTitle: "Menu 2",
                  navUrl: "/menu2",
                  navIcon: { url: "/icon2.png" },
                  navChildC1Collection: {
                    items: [
                      {
                        navTitle: "Child 2",
                        navIcon: null,
                        flagNavItemStyle: "Nav Icon",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  };

  test("renders the component with menu items", () => {
    render(<Megamenucomponents data={mockData} />);
    expect(screen.getByText("Menu 1")).toBeInTheDocument();
  });

  //   test("toggles menu open and close on click (mobile)", () => {
  //     render(<Megamenucomponents data={mockData} />);

  //     // Simulate clicking the menu
  //     const menuLink = screen.getByText("Menu 1");
  //     fireEvent.click(menuLink);

  //     // Check if the menu is open
  //     expect(screen.getByText("Back")).toBeInTheDocument();

  //     // Simulate closing the menu
  //     const backButton = screen.getByText("Back");
  //     fireEvent.click(backButton);

  //     // Check if the menu is closed
  //     expect(screen.queryByText("Back")).not.toBeInTheDocument();
  //   });

  test("renders child components based on menu data", () => {
    render(<Megamenucomponents data={mockData} />);

    // Simulate menu open
    const menuLink = screen.getByText("Menu 1");
    fireEvent.mouseEnter(menuLink);

    // Check if the child component renders
    expect(screen.getByText("Menucategory2card")).toBeInTheDocument();
  });

  //   test("updates `isMobile` state on resize", () => {
  //     render(<Megamenucomponents data={mockData} />);

  //     // Simulate window resize
  //     global.innerWidth = 500;
  //     global.dispatchEvent(new Event("resize"));

  //     // Check if mobile state is updated
  //     const menuLink = screen.getByText("Menu 1");
  //     fireEvent.click(menuLink);

  //     expect(screen.getByText("Back")).toBeInTheDocument();
  //   });

  //   test("disables scrolling when the menu is open", () => {
  //     render(<Megamenucomponents data={mockData} />);

  //     // Simulate opening the menu
  //     const menuLink = screen.getByText("Menu 1");
  //     fireEvent.click(menuLink);

  //     expect(document.body.classList.contains("overflow-y-hidden")).toBe(true);

  //     // Simulate closing the menu
  //     const backButton = screen.getByText("Back");
  //     fireEvent.click(backButton);

  //     expect(document.body.classList.contains("overflow-y-hidden")).toBe(false);
  //   });
});
