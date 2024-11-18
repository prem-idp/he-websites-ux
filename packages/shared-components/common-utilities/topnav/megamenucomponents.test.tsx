// Megamenucomponents.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Megamenucomponents from "./megamenucomponents";

const mockData = {
  data: {
    contentData: {
      items: [
        {
          headerMainMenuCollection: {
            items: [
              {
                navTitle: "Menu 1",
                navChildC1Collection: { items: [{ navTitle: "Child1" }] },
                navChildC2Collection: { items: [{ navTitle: "Child2" }] },
                navChildC3Collection: { items: [{ navTitle: "Child3" }] },
                navChildC4Collection: { items: [{ navTitle: "Child4" }] },
              },
              {
                navTitle: "Menu 2",
                navChildC1Collection: { items: [] },
                navChildC2Collection: { items: [] },
                navChildC3Collection: { items: [] },
                navChildC4Collection: { items: [] },
              },
            ],
          },
        },
      ],
    },
  },
};


describe("Megamenucomponents", () => {
  it("renders menu items correctly", () => {
    render(<Megamenucomponents data={mockData} />);

    // Check if the main menu items are rendered
    expect(screen.getByText("Menu 1")).toBeInTheDocument();
    expect(screen.getByText("Menu 2")).toBeInTheDocument();
  });

  it("shows the megamenu options on hover for desktop view", () => {
    render(<Megamenucomponents data={mockData} />);

    const menuItem = screen.getByText("Menu 1");
    fireEvent.mouseEnter(menuItem);

    // Check if the submenu content is visible on hover
    expect(screen.getByText("Child1")).toBeInTheDocument();
    expect(screen.getByText("Child2")).toBeInTheDocument();
    expect(screen.getByText("Child3")).toBeInTheDocument();
    expect(screen.getByText("Child4")).toBeInTheDocument();
  });

  //   it('toggles the mobile menu on click', () => {
  //     // Simulate mobile view by setting window size
  //     global.innerWidth = 500;
  //     global.dispatchEvent(new Event('resize'));

  //     render(<Megamenucomponents data={mockData} />);

  //     const menuItem = screen.getByText('Menu 1');
  //     fireEvent.click(menuItem);

  //     // Check if the submenu content is visible after clicking
  //     expect(screen.getByText('Child 1')).toBeInTheDocument();
  //     expect(screen.getByText('Child 2')).toBeInTheDocument();
  //   });

  //   it('closes the mobile menu on clicking the back button', () => {
  //     // Simulate mobile view
  //     global.innerWidth = 500;
  //     global.dispatchEvent(new Event('resize'));

  //     render(<Megamenucomponents data={mockData} />);

  //     const menuItem = screen.getByText('Menu 1');
  //     fireEvent.click(menuItem);

  //     // Check if submenu is open
  //     expect(screen.getByText('Child 1')).toBeInTheDocument();

  //     // Click the back button
  //     const backButton = screen.getByRole('button', { name: /back/i });
  //     fireEvent.click(backButton);

  //     // Check if the submenu content is hidden after clicking back
  //     expect(screen.queryByText('Child 1')).not.toBeInTheDocument();
  //   });
});
