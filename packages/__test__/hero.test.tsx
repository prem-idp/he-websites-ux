import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSlider from "@packages/shared-components/home/hero/slider-pod/heroSlider";
import { SliderBannerCollection } from "@packages/lib/types/interfaces";
import "@testing-library/jest-dom";

const mockData: SliderBannerCollection = {
  items: [
    {
      __typename: "DynamicMediaComponent",
      longDescription: {
        json: {
          nodeType: "document",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [
                {
                  nodeType: "text",
                  value: "Find courses, read honest reviews, get expert advice",
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      },
      title: "Your uni search",
      internalName: "Homepage - Banner - Whatuni",
      cta: null,
      video: null,
      image: {
        imageTitle: null,
        imgAltText: "Hero banner",
        imgUpload: {
          url: "https://images.ctfassets.net/szez98lehkfm/3gBdzHXucWKFh2Tht18q8/9a241336f74a85eb9075f2c23aa195d8/hero-banner.png",
          height: 460,
          width: 362,
        },
      },
    },
    {
      __typename: "DynamicMediaComponent",
      longDescription: {
        json: {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Book an Open Day to see the campus in action and get a first-hand experience of uni life",
                  nodeType: "text",
                },
              ],
              nodeType: "paragraph",
            },
          ],
          nodeType: "document",
        },
      },
      title: "Find your perfect fit",
      internalName: "Homepage - Banner 2 - Whatuni",
      video: null,
      cta: {
        internalName: "Homepage - Banner 2 CTA - Whatuni",
        primaryCtaUrl: null,
        primaryCtaLabel: "Book my spot",
        secondaryCtaUrl: null,
        secondaryCtaLabel: null,
        primaryCtaTarget: null,
        secondaryCtaTarget: null,
        flagStyle: null,
      },
      image: {
        imageTitle: null,
        imgAltText: "Home page banner image",
        imgUpload: {
          url: "https://images.ctfassets.net/szez98lehkfm/3i9K1OgxSgjkQX9bsZUn8s/9909498c8433cee490fc69de506177b6/hero-banner1.png",
          height: 522,
          width: 468,
        },
      },
    },
  ],
};
jest.mock("swiper/react", () => ({
  Swiper: ({ children }: any) => <div>{children}</div>,
  SwiperSlide: ({ children }: any) => <div>{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Autoplay: jest.fn(),
  EffectFade: jest.fn(),
  Pagination: jest.fn(),
}));

// Mock the GraphQL fetch function
jest.mock("@packages/lib/server-actions/server-action", () => ({
  graphQlFetchFunction: jest.fn(),
}));
jest.mock(
  "@packages/shared-components/common-utilities/cards/hero-card/heroslidercard",
  () => {
    return jest.fn(({ data }) => (
      <div data-testid="hero-slider-card">{data.title}</div>
    ));
  }
);

describe("HeroSlider Component", () => {
  test("renders the HeroSlider component with slides", () => {
    render(<HeroSlider data={mockData} />);

    // Check that the slider is rendered
    const slider = screen.getByRole("list");
    expect(slider).toHaveClass("mySwiper hero");

    // Check that the correct number of slides are rendered
    const slides = screen.getAllByTestId(/slider\d+/);
    expect(slides).toHaveLength(mockData.items.length);

    // Check the content of individual slides
    mockData.items.forEach((item, index) => {
      const slide = screen.getByTestId(`slider${index + 1}`);
      expect(slide).toBeInTheDocument();
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("renders with no data gracefully", () => {
    render(<HeroSlider data={{ items: [] }} />);

    // Check that no slides are rendered
    const slides = screen.queryAllByTestId(/slider\d+/);
    expect(slides).toHaveLength(0);
  });
});
