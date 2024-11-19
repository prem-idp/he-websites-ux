import { render, screen } from "@testing-library/react";
import Menucategory5card from "../../shared-components/common-utilities/megamenu/menucategory5card"; // Update path if needed
import "@testing-library/jest-dom"; // Ensure jest-dom is available

describe("Menucategory5card", () => {
  const mockData = [
    {
      flagNavItemStyle: "L2 Text",
      navTitle: "Category Title",
      navUrl: "",
      navCtaTarget: false,
      navIcon: { url: "https://via.placeholder.com/289x224" },
    },
    {
      flagNavItemStyle: "Other",
      navTitle: "Link 1",
      navUrl: "https://example.com/1",
      navCtaTarget: false,
      navIcon: { url: "https://via.placeholder.com/289x224" },
    },
    {
      flagNavItemStyle: "Other",
      navTitle: "Link 2",
      navUrl: "https://example.com/2",
      navCtaTarget: true,
      navIcon: { url: "https://via.placeholder.com/289x224" },
    },
  ];

  it('renders the category title when "L2 Text" style is found in data', () => {
    render(<Menucategory5card data={mockData} />);

    // Check that the category title is rendered
    const titleElement = screen.getByText("Category Title");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders all the links except the first one (sliced)", () => {
    render(<Menucategory5card data={mockData} />);

    // Check that the links are rendered and the first item is excluded
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(2); // Because slice(1) excludes the first item

    // Check the content of the links
    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });

  it("renders the correct image with src and alt attributes", () => {
    render(<Menucategory5card data={mockData} />);

    // Check that the images are rendered with the correct src and alt
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2); // Two links have images after slice(1)
    expect(images[0]).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F289x224&w=640&q=75"
    );
    expect(images[0]).toHaveAttribute("alt", "University logo");
    expect(images[1]).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F289x224&w=640&q=75"
    );
    expect(images[1]).toHaveAttribute("alt", "University logo");
  });

  //   it('renders the correct link target and rel attributes for external links', () => {
  //     render(<Menucategory5card data={mockData} />);

  //     // Check that the target and rel attributes are set correctly for the external link
  //     const externalLink = screen.getByText('Link 2');
  //     expect(externalLink).toHaveAttribute('target', '_blank');
  //     expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  //   });

  it("renders the links in a flex column layout", () => {
    render(<Menucategory5card data={mockData} />);

    // Check that the container has the expected flex layout classes
    const container = screen.getByRole("list");
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-col");
  });

  it("does not render any links if data is empty or undefined", () => {
    const { container } = render(<Menucategory5card data={[]} />);
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
        navIcon: { url: "https://via.placeholder.com/289x224" },
      },
    ];

    render(<Menucategory5card data={noCategoryData} />);

    const titleElement = screen.queryByText("Category Title");
    expect(titleElement).not.toBeInTheDocument();
  });
});
