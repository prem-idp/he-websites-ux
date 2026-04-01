import Image from "next/image";
import SigninContent from "@packages/shared-components/common-utilities/register-new/signincontent";
import SocialSignup from "@packages/shared-components/common-utilities/register-new/socialsignup";

const page = () => {
  return (
    <div className="flex items-start md:items-center justify-center backdrop-shadow-white fixed inset-0 bg-white">
      <div className="shadow-custom-6 w-full md:w-[728px] bg-white md:rounded-[8px] overflow-y-auto md:overflow-x-hidden md:custom-scrollbar-3 md:scrollbar-hidden relative max-h-[100vh] md:max-h-[90vh]">
        <div className="flex flex-col md:flex-row md:min-h-full">
          <div className="bg-blue-100 px-[16px] py-[40px] md:py-[52px] w-full h-[100%] md:w-[309px] flex-shrink-0">
            <SigninContent />
          </div>
          <div className="md:m-[40px_20px_0_24px] h-[100%]">
            <div className="absolute top-[14px] right-[17px] z-[1] cursor-pointer">
              <Image
                className="block"
                src="/static/assets/icons/modal_close.svg"
                width="14"
                height="14"
                alt="modal close"
              />
            </div>
            <div className="p-[32px_16px] md:h-[530px] md:overflow-y-auto md:overflow-x-hidden md:custom-scrollbar-3">
              <SocialSignup registerModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
