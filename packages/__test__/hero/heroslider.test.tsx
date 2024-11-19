import { render, screen } from "@testing-library/react";
import { SliderBannerCollection } from "@packages/lib/types/interfaces"; // Adjust the import path
import HeroSlider from "@packages/shared-components/home/hero/slider-pod/heroSlider";
import { ReactNode } from "react";
import "@testing-library/jest-dom";
jest.mock("swiper/react", () => ({
  Swiper: ({ children, ...props }: { children: ReactNode }) => (
    <div data-testid="swiper" {...props}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children, ...props }: { children: ReactNode }) => (
    <div data-testid="swiper-slide" {...props}>
      {children}
    </div>
  ),
}));
jest.mock("swiper/css", () => jest.fn());
jest.mock("swiper/css/pagination", () => jest.fn());
jest.mock("swiper/css/effect-fade", () => jest.fn());

jest.mock("swiper/modules", () => ({
  Autoplay: jest.fn(),
  EffectFade: jest.fn(),
  Pagination: jest.fn(),
}));

describe("HeroSlider", () => {
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
                    value:
                      "Find courses, read honest reviews, get expert advice",
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

  it("renders the Swiper component", () => {
    render(<HeroSlider data={mockData} />);
  });

  it("renders all slides from data", () => {
    render(<HeroSlider data={mockData} />);
    const slides = screen.getAllByTestId(/slider\d+/);
    expect(slides.length).toBe(mockData.items.length);

    // Check if each slide contains its corresponding data
    mockData.items.forEach((item, index) => {
      const slide = screen.getByTestId(`slider${index + 1}`);
      expect(slide).toBeInTheDocument();
    });
  });

  it("renders HeroSliderCard for each slide", () => {
    render(<HeroSlider data={mockData} />);
    const cards = screen.getAllByTestId("heroslidercard");
    expect(cards.length).toBe(mockData.items.length);
  });
});
