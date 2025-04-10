import React from "react";
import Image from "next/image";
import Link from "next/link";

const Ctabanner = ({ key, propsdata, preview, urlParams }: any) => {
  return (
    <div className="pb-[20]">
      <div className="bg-blue-200 p-[16px] md:py-[0] gap-[20px] md:gap-[0]  md:px-[20px] rounded-[8px] flex md:flex-row flex-col-reverse justify-between items-end !m-0">
        <div className="flex flex-col gap-[16px] py-[0] md:py-[24px] !m-0">
          <div className="text-grey300 flex flex-col gap-[4px]">
            <div className="h4 heading4 font-semibold font-farro">
              Student Cost of Living Calculator
            </div>
            <div className="font-inter font-normal small">
              From accommodation to groceries, it breaks down uni living costs
              to help plan your budget with confidence.
            </div>
          </div>

          <Link
            href="#"
            className="btn btn-primary rtfcustom-link hover:no-underline px-[20px] py-[10px] w-fit !no-underline"
          >
            Calculate my budget now
          </Link>
        </div>
        <span className="md:min-w-[219px] w-full md:w-auto  h-[187px] flex justify-center !m-0">
          {/* <Image
            width="100"
            alt="banner"
            src="https://mtest.test.aws.whatuni.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fszez98lehkfm%2F7ItYEhMyZowMlrmrEK5qmL%2Fd2cf4daa83e23d926ee96034bfe30d17%2FCOLCLead.png&w=384&q=75"
          /> */}
        </span>
      </div>
    </div>
  );
};

export default Ctabanner;
