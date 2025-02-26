import { render, screen } from "@testing-library/react";
import TextToggleComponent from "@packages/shared-components/common-utilities/article-snippet/text-toggle-comp";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Mock ContentfulInspectorManager to avoid testing external package code
jest.mock("@packages/lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: jest.fn(() => <div>Mocked ContentfulInspectorManager</div>),
}));

// Mock the documentToReactComponents function to just return a string for the test
jest.mock("@contentful/rich-text-react-renderer", () => ({
  documentToReactComponents: jest.fn((text) => <div>{text}</div>),
}));

describe("TextToggleComponent", () => {
  const mockText = "This is a sample text for testing purposes.";
  const mockSysId = "test-id";

  it("should render ContentfulInspectorManager when iscontentPreview is true", () => {
    render(
      <TextToggleComponent text={mockText} iscontentPreview={true} sysId={mockSysId} />
    );

    expect(screen.getByText("Mocked ContentfulInspectorManager")).toBeInTheDocument();
  });

  it("should not render ContentfulInspectorManager when iscontentPreview is false", () => {
    render(
      <TextToggleComponent text={mockText} iscontentPreview={false} sysId={mockSysId} />
    );

    expect(screen.queryByText("Mocked ContentfulInspectorManager")).toBeNull();
  });

  it("should render the provided text using documentToReactComponents", () => {
    render(
      <TextToggleComponent text={mockText} iscontentPreview={true} sysId={mockSysId} />
    );

    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  it("should render the +Read More link", () => {
    render(
      <TextToggleComponent text={mockText} iscontentPreview={true} sysId={mockSysId} />
    );

    expect(screen.getByText("+Read More")).toBeInTheDocument();
  });
});
