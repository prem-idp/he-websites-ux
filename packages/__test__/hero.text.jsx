import { render } from "@testing-library/react";
import HeroSlider from "@packages/shared-components/home/hero/slider-pod/heroSlider";
import "@testing-library/jest-dom";
import { DataInterface } from "@packages/lib/types/interfaces";
import React from "react";
describe("Hero Slider component", () => {
  const data = {
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
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum neque lectus, molestie congue risus ",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
        },
        title: "Nam vitae porttitor lorem. Vestibulum vel felis",
        internalName: "Homepage - Banner - Whatuni",
        cta: null,
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
            nodeType: "document",
            data: {},
            content: [
              {
                nodeType: "paragraph",
                data: {},
                content: [
                  {
                    nodeType: "text",
                    value: "2. ",
                    marks: [],
                    data: {},
                  },
                  {
                    nodeType: "text",
                    value:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum neque lectus, molestie congue risus ",
                    marks: [],
                    data: {},
                  },
                ],
              },
            ],
          },
        },
        title: "2. Nam vitae porttitor lorem. Vestibulum vel felis",
        internalName: "Homepage - Banner 2 - Whatuni",
        cta: null,
        image: null,
      },
    ],
  };

  test("First Check", () => {
    render(<HeroSlider data={data} />);
  });
});
