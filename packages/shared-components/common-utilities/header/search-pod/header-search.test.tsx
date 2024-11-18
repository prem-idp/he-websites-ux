import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./header-search";

// Mock the tabs to avoid rendering actual components
jest.mock(
  "@packages/shared-components/home/search-input-pods/universitytab",
  () => jest.fn(() => <div>University Tab Content</div>)
);
jest.mock("@packages/shared-components/home/search-input-pods/advicetab", () =>
  jest.fn(() => <div>Advice Tab Content</div>)
);
jest.mock("@packages/shared-components/home/search-input-pods/coursetab", () =>
  jest.fn(() => <div>Course Tab Content</div>)
);

describe("Search Component", () => {
  const mockRightMenuAction = jest.fn();

  beforeEach(() => {
    render(<Search rightMenuAction={mockRightMenuAction} />);
  });

  it("renders the search tabs correctly", () => {
    // Check if the tabs are rendered
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Universities")).toBeInTheDocument();
    expect(screen.getByText("Advice")).toBeInTheDocument();
  });

  it("should change tabs when clicked", () => {
    // Initially, the "Courses" tab should be active
    expect(screen.getByText("Course Tab Content")).toBeInTheDocument();

    // Click on the "Universities" tab
    fireEvent.click(screen.getByText("Universities"));
    expect(screen.getByText("University Tab Content")).toBeInTheDocument();

    // Click on the "Advice" tab
    fireEvent.click(screen.getByText("Advice"));
    expect(screen.getByText("Advice Tab Content")).toBeInTheDocument();
  });

  it("calls the rightMenuAction function when the close icon is clicked", () => {
    // Find and click the close button (SVG)
    const closeButton = screen.getByLabelText("close-button");
    fireEvent.click(closeButton);
    expect(mockRightMenuAction).toHaveBeenCalledWith("SEARCH");
  });

    // it('renders the "Calculate them" link in Course Tab', () => {
    //   // Check if "Calculate them" link is rendered in the Course tab
    //   expect(screen.getByText('Calculate them')).toBeInTheDocument();
    //   expect(screen.getByText('Calculate them').closest('a')).toHaveAttribute('href', '#');
    // });

  //   it('renders the "Browse unis A-Z" link in University Tab', () => {
  //     // Switch to the Universities tab
  //     fireEvent.click(screen.getByText('Universities'));
  //     const universityLink = screen.getByText('Browse unis A-Z');
  //     expect(universityLink).toBeInTheDocument();
  //     expect(universityLink.closest('a')).toHaveAttribute('href', '#');
  //   });

  //   it('renders the "Browse advice" link in Advice Tab', () => {
  //     // Switch to the Advice tab
  //     fireEvent.click(screen.getByText('Advice'));
  //     const adviceLink = screen.getByText('Browse advice');
  //     expect(adviceLink).toBeInTheDocument();
  //     expect(adviceLink.closest('a')).toHaveAttribute('href', '#');
  //   });
});
