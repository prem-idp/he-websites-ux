import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSlider from "@packages/shared-components/home/hero/slider-pod/heroSlider";
import { SliderBannerCollection } from "@packages/lib/types/interfaces";

// Mocking Swiper components and modules
jest.mock("swiper/react", () => ({
  Swiper: ({ children }: any) => <div>{children}</div>,
  SwiperSlide: ({ children }: any) => <div>{children}</div>,
}));

jest.mock("swiper/modules", () => ({
  Autoplay: jest.fn(),
  EffectFade: jest.fn(),
  Pagination: jest.fn(),
}));

describe("Hero Slider component", () => {
  const data: SliderBannerCollection = {
    items: [
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
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
        },
        title: "Nam vitae porttitor lorem",
        internalName: "Homepage - Banner - Whatuni",
        cta: null,
        image: {
          imageTitle: null,
          imgAltText: "Hero banner",
          imgUpload: {
            url: "https://example.com/hero-banner.png",
            height: 460,
            width: 362,
          },
        },
      },
    ],
  };

  test("renders Hero Slider component with data", () => {
    render(<HeroSlider data={data} />);
    expect(screen.getByText("Nam vitae porttitor lorem")).toBeInTheDocument();
    expect(screen.getByAltText("Hero banner")).toBeInTheDocument();
  });
});
