import { render, screen } from "@testing-library/react";
import Breadcrumblayoutcomponent from "@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent";
import '@testing-library/jest-dom';

describe("Breadcrumblayoutcomponent", () => {
  const mockPropsdata = [
    { label: "Home", url: "/", Imgurl: null },
    { label: "Category", url: "/category", Imgurl: null },
    { label: "Product", url: null, Imgurl: null },
    { label: "ImageLink", url: "/image-link", Imgurl: "/path/to/image.jpg" },
  ];

  test("renders breadcrumb items correctly", () => {
    render(
      <Breadcrumblayoutcomponent propsdata={mockPropsdata} preview={false} />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
  });

  test("renders links correctly", () => {
    render(
      <Breadcrumblayoutcomponent propsdata={mockPropsdata} preview={false} />
    );

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Category").closest("a")).toHaveAttribute("href", "/category");
  });

  test("renders static text for items without URL", () => {
    render(
      <Breadcrumblayoutcomponent propsdata={mockPropsdata} preview={false} />
    );

    expect(screen.getByText("Product")).not.toHaveAttribute("href");
  });

  test("renders image links correctly", () => {
    render(
      <Breadcrumblayoutcomponent propsdata={mockPropsdata} preview={false} />
    );
  
    const image = screen.getByAltText("breadcrumb icon");
    expect(image).toBeInTheDocument();
  
    // const src = image.getAttribute("src");
    // expect(src).toContain("/path/to/image.jpg");
  });

  test("applies correct class names", () => {
    render(
      <Breadcrumblayoutcomponent propsdata={mockPropsdata} preview={false} />
    );

    const homeLink = screen.getByText("Home").closest("a");
    expect(homeLink).toHaveClass("text-primary-400 hover:underline");
  });
});
