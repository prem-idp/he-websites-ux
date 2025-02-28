import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import Pullquote from "@packages/shared-components/article-details/pull-quote/pull-quote";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";

// Mocking external dependencies
jest.mock("@contentful/live-preview/react", () => ({
  useContentfulLiveUpdates: jest.fn(),
}));

jest.mock("@contentful/rich-text-react-renderer", () => ({
  documentToReactComponents: jest.fn(() => <div>Rich Text Content</div>),
}));

describe("Pullquote Component", () => {
  const mockProps = {
    pullQuote: {
      json: { some: "mocked rich text data" },
    },
    pullQuoteAuthor: "Author Name",
    pullQuoteRole: "Author Role",
  };

  beforeEach(() => {
    // Mocking the live updates hook to return the props
    (useContentfulLiveUpdates as jest.Mock).mockReturnValue(mockProps);
  });

  test("renders the component with rich text and author details", () => {
    render(<Pullquote propsdata={mockProps} />);

    // Check if the rich text content is rendered
    expect(documentToReactComponents).toHaveBeenCalledWith(mockProps.pullQuote.json);
    expect(screen.getByText("Rich Text Content")).toBeInTheDocument();

    // Check if author name and role are rendered
    expect(screen.getByText("Author Name")).toBeInTheDocument();
    expect(screen.getByText("Author Role")).toBeInTheDocument();
  });

  test("renders nothing if propsdata is null", () => {
    (useContentfulLiveUpdates as jest.Mock).mockReturnValue(null);
  
    const { container } = render(<Pullquote propsdata={null} />);
    expect(container.firstChild).toBeNull(); // Verify that nothing is rendered
  });
});
