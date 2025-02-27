import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Articledescription from "@packages/shared-components/article-details/article-description/article-description";

jest.mock("@contentful/live-preview/react", () => ({
  useContentfulLiveUpdates: jest.fn((data) => data),
}));

jest.mock("@packages/lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: () => <div data-testid="contentful-inspector" />,
}));

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe("Articledescription Component", () => {
  const mockProps = {
    propsdata: {
      sys: { id: "123" },
      articleType: { title: "Article Title" },
      pageTitle: "Test Page Title",
      shortDescription: "Test short description",
      modifiedDate: "2025-01-01",
    },
    preview: true,
  };

  test("renders the component correctly", () => {
    render(<Articledescription {...mockProps} />);
    expect(screen.getByText("Article Title")).toBeInTheDocument();
    expect(screen.getByText("Test Page Title")).toBeInTheDocument();
    expect(screen.getByText("Test short description")).toBeInTheDocument();
    expect(screen.getByText("Updated:2025-01-01")).toBeInTheDocument();
  });

  test("renders ContentfulInspectorManager when preview is true", () => {
    render(<Articledescription {...mockProps} />);
    expect(screen.getByTestId("contentful-inspector")).toBeInTheDocument();
  });

  test("toggles the modal on button click", () => {
    render(<Articledescription {...mockProps} />);
    const shareButton = screen.getByText("Share");
    fireEvent.click(shareButton);
    expect(screen.getByText("Share on")).toBeInTheDocument();

    const closeModal = screen.getByAltText("modal close");
    fireEvent.click(closeModal);
    expect(screen.queryByText("Share on")).not.toBeInTheDocument();
  });

  // test("copies the link to clipboard on button click", () => {
  //   render(<Articledescription {...mockProps} />);
  //   const copyLinkButton = screen.getByText("Copy link");
  //   fireEvent.click(copyLinkButton);
  //   expect(navigator.clipboard.writeText).toHaveBeenCalledWith(window.location.href);
  // });

  // test("contains correct URLs for social sharing links", () => {
  //   render(<Articledescription {...mockProps} />);
  //   const facebookLink = screen.getByText("Facebook").closest("a");
  //   const twitterLink = screen.getByText("Twitter").closest("a");
  //   const pinterestLink = screen.getByText("Pinterest").closest("a");

  //   expect(facebookLink).toHaveAttribute("href", expect.stringContaining("facebook.com/sharer/sharer.php"));
  //   expect(twitterLink).toHaveAttribute("href", expect.stringContaining("twitter.com/intent/tweet"));
  //   expect(pinterestLink).toHaveAttribute("href", expect.stringContaining("pinterest.com/pin/create/button"));
  // });
});
