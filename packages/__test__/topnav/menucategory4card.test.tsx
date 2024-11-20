import { render, screen } from "@testing-library/react";
import Menucategory4card from "../../shared-components/common-utilities/megamenu/menucategory4card"; // Update path if needed
import "@testing-library/jest-dom"; // Ensure jest-dom is available

describe("Menucategory4card", () => {
  const mockData = [
    {
      flagNavItemStyle: "L2 Text",
      navTitle: "Category Title",
      navUrl: "",
      navCtaTarget: false,
      navIcon: { url: "https://via.placeholder.com/289x50" },
    },
    {
      flagNavItemStyle: "Other",
      navTitle: "Link 1",
      navUrl: "https://example.com/1",
      navCtaTarget: false,
      navIcon: { url: "https://via.placeholder.com/289x50" },
    },
    {
      flagNavItemStyle: "Other",
      navTitle: "Link 2",
      navUrl: "https://example.com/2",
      navCtaTarget: true,
      navIcon: { url: "https://via.placeholder.com/289x50" },
    },
  ];

  it('renders the category title when "L2 Text" style is found in data', () => {
    render(<Menucategory4card data={mockData} />);

    // Check that the category title is rendered
    const titleElement = screen.getByText("Category Title");
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all the links except "L2 Text"', () => {
    render(<Menucategory4card data={mockData} />);

    // Check that the links are rendered
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(2); // Because there are 2 non-'L2 Text' items

    // Check the content of the links
    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });

  it("renders the correct image with src and alt attributes", () => {
    render(<Menucategory4card data={mockData} />);

    // Check that the images are rendered with the correct src and alt
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2); // Two links have images
    expect(images[0]).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F289x50&w=640&q=75"
    );
    expect(images[0]).toHaveAttribute("alt", "University logo");
    expect(images[1]).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F289x50&w=640&q=75"
    );
    expect(images[1]).toHaveAttribute("alt", "University logo");
  });

  it("renders the links in a flex column layout", () => {
    render(<Menucategory4card data={mockData} />);

    // Check that the container has the expected flex layout classes
    const container = screen.getByRole("list");
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-col");
  });

  it("does not render any links if data is empty or undefined", () => {
    const { container } = render(<Menucategory4card data={[]} />);
    const linkElements = container.querySelectorAll("a");
    expect(linkElements.length).toBe(0);
  });

  it('does not render any category title if "L2 Text" is not found', () => {
    const noCategoryData = [
      {
        flagNavItemStyle: "Other",
        navTitle: "Link 1",
        navUrl: "https://example.com/1",
        navCtaTarget: false,
        navIcon: { url: "https://via.placeholder.com/289x50" },
      },
    ];

    render(<Menucategory4card data={noCategoryData} />);

    const titleElement = screen.queryByText("Category Title");
    expect(titleElement).not.toBeInTheDocument();
  });
});
