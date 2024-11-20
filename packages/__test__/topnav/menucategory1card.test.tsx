import { render, screen } from "@testing-library/react";
import Menucategory1card from "../../shared-components/common-utilities/megamenu/menucategory1card"; // Update path if needed
import "@testing-library/jest-dom";
describe("Menucategory1card", () => {
  const mockData = [
    {
      flagNavItemStyle: "L2 Text",
      navTitle: "Category Title",
      navUrl: "",
      navCtaTarget: false,
    },
    {
      flagNavItemStyle: "Other",
      navTitle: "Link 1",
      navUrl: "https://example.com/1",
      navCtaTarget: false,
    },
    {
      flagNavItemStyle: "Other",
      navTitle: "Link 2",
      navUrl: "https://example.com/2",
      navCtaTarget: true,
    },
  ];

  it('renders the category title when "L2 Text" style is found in data', () => {
    render(<Menucategory1card data={mockData} />);

    // Check that the category title is rendered
    const titleElement = screen.getByText("Category Title");
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all the links except "L2 Text"', () => {
    render(<Menucategory1card data={mockData} />);

    // Check that the links are rendered
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(2); // Because there are 2 non-'L2 Text' items

    // Check the content of the links
    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });

  it("renders the correct link target and rel attributes for external links", () => {
    render(<Menucategory1card data={mockData} />);

    // Check that the target and rel attributes are set correctly for the external link
    const externalLink = screen.getByText("Link 2");
    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render any links if data is empty or undefined", () => {
    const { container } = render(<Menucategory1card data={[]} />);
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
      },
    ];

    render(<Menucategory1card data={noCategoryData} />);

    const titleElement = screen.queryByText("Category Title");
    expect(titleElement).not.toBeInTheDocument();
  });
});
