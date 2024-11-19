import "@testing-library/jest-dom";
import React from "react";
import HeroSliderCard from "@packages/shared-components/common-utilities/cards/hero-card/heroslidercard";
import { render, screen } from "@testing-library/react";
import { SliderBannerCollection } from "@packages/lib/types/interfaces";
import HeroSliderComponent from "@packages/shared-components/home/hero/heroslidercomponent";
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

jest.mock("@packages/lib/server-actions/server-action", () => ({
  graphQlFetchFunction: jest.fn(),
}));

const originalEnv = process.env;
beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv };
});
afterAll(() => {
  process.env = originalEnv;
});

jest.mock("@packages/shared-components/home/hero/search-pod/searchbox", () =>
  jest.fn(() => <div data-testid="searchbox">searchbox</div>)
);

jest.mock("@packages/shared-components/home/hero/slider-pod/heroSlider", () =>
  jest.fn(() => <div data-testid="heroSlider">heroSlider</div>)
);

test("Correct rendering of Hero Slider component when coloour code is pgs", () => {
  render(<HeroSliderComponent data={mockData} />);
});

test("Hero slider child component", () => {
  render(<HeroSliderCard data={mockData.items[0]} />);
  expect(screen.getByTestId("heroslidercard")).toBeInTheDocument();
});

test("Correct rendering of color in hero component for whatuni ", () => {
  process.env.PROJECT = "Whatuni";
  render(<HeroSliderComponent data={mockData} />);
  expect(screen.getByTestId("hero-banner-colour")).toHaveClass("bg-blue-200");
});
test("Correct rendering of color in hero component for pgs", () => {
  process.env.PROJECT = "Pgs";
  render(<HeroSliderComponent data={mockData} />);
  expect(screen.getByTestId("hero-banner-colour")).toHaveClass("bg-yellow-200");
});
