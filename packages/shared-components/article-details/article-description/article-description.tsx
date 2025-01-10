"use client"; // This marks the component as a Client Component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Articledescription = ({ data }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalPopToggle = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <div className="flex flex-col gap-[8px]">
        <span className="x-small font-inter tracking-[1px] text-blue-400">
          {data?.articleType?.title}
        <Link className='hover:underline' href="#">
          CATEGORY
          </Link> 
        </span>
        <h1 className="font-farro text-heading1 text-grey900">
          {data?.pageTitle}
        </h1>
        <p className="text-para-lg max-w-[907px] w-full text-grey900 text-inter">
          {data?.shortDescription}
        <h1 className="font-farro text-heading1 text-grey900">Article title</h1>
        <p className="text-para-lg max-w-[907px] w-full text-grey300 text-inter">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla pharetra posuere ligula, eget commodo
          turpis semper a. Phasellus t
        </p>
        <span className="x-small text-grey300 text-inter">
          {` Updated:${data?.modifiedDate ?? ""}`}
        </span>
        <button
          onClick={modalPopToggle}
          className="btn btn-primary-outline px-[16px] py-[8px] flex gap-[6px] svg-hover-white w-fit"
        >
          <Image
            src="/static/assets/icons/share-blue.svg"
            width="20"
            height="20"
            alt="Share icon"
          />
          Share
        </button>
      </div>
      {modalOpen && (
        <>
          <div className="modal modal-container flex  justify-center md:px-[0] px-[16px] items-center backdrop-shadow-black fixed top-0 right-0 left-0 bottom-0 bg-white">
            <div className="modal-box shadow-custom-6 w-full md:w-[512px] p-[24px] bg-white rounded-[8px] overflow-hidden relative">
              <div
                onClick={() => setModalOpen(false)}
                className="modal_close absolute top-[16px] p-[4px] right-[16px] z-[1] cursor-pointer"
              >
                <Image
                  className="block"
                  src="/static/assets/icons/modal_close.svg"
                  width="12"
                  height="12"
                  alt="modal close"
                />
              </div>
              <div className="flex flex-col gap-[32px] items-center">
                <span className="font-inter font-semibold para-lg leading-[27px] text-black">
                  Share on
                </span>
                <div className="flex flex-wrap gap-[6px] justify-center">
                  <button className="md:min-w-[111.5px] min-w-[69px] flex flex-col gap-[9px] items-center text-blue-400 hover:text-grey300 hover:underline">
                    <Image
                      width="40"
                      height="40"
                      src="/static/assets/icons/facebook-blue.svg"
                      alt="Facebook"
                    />
                    <span className="small font-inter">Facebook</span>
                  </button>
                  <button className="md:min-w-[111.5px] min-w-[69px] flex flex-col gap-[9px] items-center text-blue-400 hover:text-grey300 hover:underline">
                    <Image
                      width="40"
                      height="40"
                      src="/static/assets/icons/twitter-blue.svg"
                      alt="twitter"
                    />
                    <span className="small font-inter">Twitter</span>
                  </button>
                  <button className="md:min-w-[111.5px] min-w-[69px] flex flex-col gap-[9px] items-center text-blue-400 hover:text-grey300 hover:underline">
                    <Image
                      width="40"
                      height="40"
                      src="/static/assets/icons/pinterest.svg"
                      alt="pinterest"
                    />
                    <span className="small font-inter">Pinterest</span>
                  </button>
                  <button className="md:min-w-[111.5px] min-w-[69px] flex flex-col gap-[9px] items-center text-blue-400 hover:text-grey300 hover:underline">
                    <Image
                      width="40"
                      height="40"
                      src="/static/assets/icons/copy-link.svg"
                      alt="Copy link"
                    />
                    <span className="small font-inter">Copy link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Articledescription;
