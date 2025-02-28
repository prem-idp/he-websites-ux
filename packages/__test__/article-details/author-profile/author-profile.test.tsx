import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Authorprofile from "@packages/shared-components/article-details/author-profile/author-profile";

describe("Authorprofile Component", () => {
  const mockProps = {
    propsdata: {
      author: {
        sys: { id: "author-id" },
        firstName: "John",
        middleName: "M.",
        lastName: "Doe",
        audienceGroup: "Developers",
        image: {
          imgUpload: {
            url: "/profile.jpg",
          },
          imgAltText: "Author Profile Image",
        },
      },
      bannerImageCollection: {
        items: [
          {
            sys: { id: "banner-id" },
            imgUpload: {
              url: "/banner.jpg",
            },
            imgAltText: "Banner Image",
          },
        ],
      },
    },
    preview: false,
  };

  test("renders author details correctly", () => {
    render(<Authorprofile {...mockProps} />);

    // Verify author name
    expect(screen.getByText("JohnM.Doe")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "JohnM.Doe" })).toHaveAttribute(
      "href",
      "#"
    );

    // Verify audience group
    expect(screen.getByText("Developers")).toBeInTheDocument();

    // Verify author image
    const authorImage = screen.getByAltText("Author Profile Image");
    expect(authorImage).toBeInTheDocument();
    //expect(authorImage).toHaveAttribute("src", "/profile.jpg");
  });

  test("renders the banner image correctly", () => {
    render(<Authorprofile {...mockProps} />);

    const bannerImage = screen.getByAltText("Banner Image");
    expect(bannerImage).toBeInTheDocument();
    //expect(bannerImage).toHaveAttribute("src", "/banner.jpg");
  });

  test("does not render preview content", () => {
    render(<Authorprofile {...mockProps} />);
    expect(screen.queryByTestId("preview-content")).not.toBeInTheDocument();
  });

  test("handles missing author data gracefully", () => {
    const incompleteProps = {
      propsdata: {
        author: null,
        bannerImageCollection: {
          items: [],
        },
      },
      preview: false,
    };
    render(<Authorprofile {...incompleteProps} />);

    expect(screen.queryByText("JohnM.Doe")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Author Profile Image")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Banner Image")).not.toBeInTheDocument();
  });
});
