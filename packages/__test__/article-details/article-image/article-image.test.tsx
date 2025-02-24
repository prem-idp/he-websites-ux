import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Ensure this is imported
import Articleimage from "@packages/shared-components/article-details/article-image/article-image";
import { ContentfulInspectorManager } from "@packages/lib/contentful-preview/ContentfulInspector";

jest.mock("@packages/lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: jest.fn(() => <div data-testid="contentful-inspector"></div>),
}));

describe("Articleimage Component", () => {
  const mockPropsData = {
    sys: { id: "test-id" },
    imgUpload: { url: "/test-image.jpg" },
    imgAltText: "Test Image Alt Text",
  };

  test("renders ContentfulInspectorManager when preview is true", () => {
    render(<Articleimage propsdata={mockPropsData} preview={true} />);
    expect(screen.getByTestId("contentful-inspector")).toBeInTheDocument();
  });

  test("does not render ContentfulInspectorManager when preview is false", () => {
    render(<Articleimage propsdata={mockPropsData} preview={false} />);
    expect(screen.queryByTestId("contentful-inspector")).not.toBeInTheDocument();
  });

  test("renders the Image component with correct props when imgUpload.url is present", () => {
    render(<Articleimage propsdata={mockPropsData} preview={false} />);
    const image = screen.getByRole("img");
    //expect(image).toHaveAttribute("src", "/test-image.jpg");
    expect(image).toHaveAttribute("alt", "Test Image Alt Text");
    expect(image).toHaveAttribute("id", "article_title-imgUpload-inrichtext");
  });

  test("uses default alt text when imgAltText is not provided", () => {
    const mockPropsDataWithoutAltText = { ...mockPropsData, imgAltText: undefined };
    render(<Articleimage propsdata={mockPropsDataWithoutAltText} preview={false} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Article_image");
  });

  test("does not render the Image component when imgUpload.url is not present", () => {
    const mockPropsDataWithoutImage = { ...mockPropsData, imgUpload: { url: undefined } };
    render(<Articleimage propsdata={mockPropsDataWithoutImage} preview={false} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});