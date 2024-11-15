"use server";
import React from "react";
import SearchBox from "./search-pod/searchbox";
import HeroSlider from "./slider-pod/heroSlider";
import { DataInterface } from "../../../lib/types/interfaces";
interface PropjectProps {
  project: string;
}
const HeroSliderComponent: React.FC<PropjectProps> = ({ project }) => {
  const data: DataInterface = {
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
  return (
    <>
      <div
        className={`${
          project === "whatuni" ? "bg-blue-200" : "yellow-blue-200"
        } px-[16px] md:px-[20px] xl2:px-01`}
      >
        <div className="max-w-container mx-auto">
          <HeroSlider data={data} />
        </div>
      </div>
      <SearchBox />
    </>
  );
};

export default HeroSliderComponent;
