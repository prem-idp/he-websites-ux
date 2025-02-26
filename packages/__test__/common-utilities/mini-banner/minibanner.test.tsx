import { render, screen, waitFor } from "@testing-library/react";
import MiniHeroBanner from "@packages/shared-components/common-utilities/mini-banner/mini-banner";
import { ContentfulInspectorManager } from "../../../lib/contentful-preview/ContentfulInspector";

jest.mock("../../../lib/contentful-preview/ContentfulInspector", () => ({
  ContentfulInspectorManager: jest.fn(() => null),
}));

describe("MiniHeroBanner", () => {
  const mockData = {
    sys: {
      id: "test-id",
    },
    title: "Test Title",
    subTitle: "Test Subtitle",
    image: {
      imgUpload: {
        url: "http://example.com/test-image.jpg",
      },
      imgAltText: "Test Image",
    },
  };

  it("renders correctly with valid data", () => {
    render(<MiniHeroBanner data={mockData} iscontentPreview={false} />);

    // Check if the title and subtitle are rendered
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
    expect(screen.getByText(mockData.subTitle)).toBeInTheDocument();

    // Check if the image is rendered
    const image = screen.getByAltText(mockData.image.imgAltText);
    expect(image).toHaveAttribute("src", mockData.image.imgUpload.url);
  });

  it("renders ContentfulInspectorManager when iscontentPreview is true", async () => {
    render(<MiniHeroBanner data={mockData} iscontentPreview={true} />);

    // Check if ContentfulInspectorManager is rendered with correct props
    await waitFor(() => {
      expect(ContentfulInspectorManager).toHaveBeenCalledWith(
        expect.objectContaining({
          fields: expect.arrayContaining([
            expect.objectContaining({
              entryId: mockData.sys.id,
              fieldId: "title",
            }),
            expect.objectContaining({
              entryId: mockData.sys.id,
              fieldId: "subTitle",
            }),
            expect.objectContaining({
              entryId: mockData.sys.id,
              fieldId: "image",
            }),
          ]),
        }),
        {}
      );
    });
  });

  it("does not render ContentfulInspectorManager when iscontentPreview is false", () => {
    render(<MiniHeroBanner data={mockData} iscontentPreview={false} />);

    // Check if ContentfulInspectorManager is not called
    expect(ContentfulInspectorManager).not.toHaveBeenCalled();
  });

  it("does not render anything when no data is provided", () => {
    render(<MiniHeroBanner data={null} iscontentPreview={false} />);

    // Check that the title, subtitle, and image are not rendered
    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Subtitle")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Test Image")).not.toBeInTheDocument();
  });
});
