"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import HeaderBanner from "../../../../../packages/shared-components/common-utilities/header-banner/header-banner";

const page = () => {
  // Toggle function
  const [modelOpen, setModalOpen] = useState(false);
  const toggleFunc = () => {
    setModalOpen(!modelOpen);
  };

  const skiplinkLabel = [
    "Why study here?",
    "University details",
    "University life",
    "Outcomes",
  ];
  const skiplinklabellisting = skiplinkLabel.map((skiplinkLabel, index) => (
    <li
      className={`border-s-[4px]  py-[10px] px-[16px] small font-inter font-normal hover:text-grey300 hover:underline hover:border-blue-400 ${
        index == 0
          ? "border-blue-400 text-blue-400"
          : "border-grey-300 text-grey300"
      }`}
      key={`${skiplinkLabel}-${index + 1}`}
    >
      <Link href={`#skiplink-${index + 1}`}>{skiplinkLabel}</Link>
    </li>
  ));
  const skiplinkmobilelisting = skiplinkLabel.map((items, index) => (
    <li
      className="border-s-[2px]  py-[10px] px-[16px] text-white border-white small font-inter font-normal"
      key={`${items}-${index + 1}`}
    >
      <Link href={`#skiplink-${index + 1}`}>{items}</Link>
    </li>
  ));
  return (
    <>
      <HeaderBanner />
      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0] py-[40px]">
          {/* only for Mobile */}
          <div className="py-[16px] border-b border-grey-200 lg:hidden mb-[40px]">
            <div
              className={`bg-blue-400 rounded-[4px] overflow-hidden border-b relative border-grey-200 skiplinkoption ${
                modelOpen ? "active" : ""
              }`}
            >
              <div className="">
                <div
                  onClick={toggleFunc}
                  className="bg-blue-400 cursor-pointer flex justify-between p-[18px]"
                >
                  <span className="text-white small font-inter font-semibold">
                    On this page
                  </span>
                  <div className="burger-menu flex flex-col justify-center gap-[4px]">
                    <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                    <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                    <span className="bg-white w-[18px] h-[2px] rounded-[4px] flex"></span>
                  </div>
                </div>
                {modelOpen && (
                  <ul className="p-[16px]">{skiplinkmobilelisting}</ul>
                )}
              </div>
            </div>
          </div>

          {/* only for Mobile END */}

          <div className="flex flex-col lg:flex-row gap-[20px]">
            {/* Left skip link option  */}
            <div className="min-w-[289px] hidden lg:flex flex-col  relative max-w-[100%]">
              <div className="sticky lg:flex flex-col lg:gap-[8px] top-[40px]">
                <h2 className="text-black para font-semibold font-inter">
                  On this page
                </h2>
                <ul>{skiplinklabellisting}</ul>
              </div>
            </div>
            {/* Left skip link option ENd */}

            <div className="w-full xl:w-[804px] flex flex-col gap-[40px]">
              <div id="skiplink-1">
                <div className="h1">Testing 1</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
              </div>
              <div id="skiplink-2">
                <div className="h1">Testing 2</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
              </div>
              <div id="skiplink-3">
                <div className="h1">Testing 3</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
              </div>
              <div id="skiplink-4">
                <div className="h1">Testing 4</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  placerat lectus nec suscipit faucibus. Vestibulum arcu urna,
                  malesuada vitae euismod ultrices, accumsan vitae ex. Nunc
                  scelerisque nibh ac feugiat auctor. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos. Nulla pharetra posuere ligula, eget commodo turpis
                  semper a. Phasellus tincidunt elementum sem, nec feugiat
                  lectus dignissim nec.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;
