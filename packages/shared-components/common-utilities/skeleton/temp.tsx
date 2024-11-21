const HeroTempSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse w-full flex justify-center items-center "
      style={{
        minHeight: "50rem",
      }}
    >
      <div
        className=" max-w-screen-xl px-6 flex flex-col justify-center md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse"
        style={{
          width: "78%",
        }}
      >
        <div
          className="flex flex-col space-y-4 md:space-y-6 md:w-1/2"
          style={{ marginTop: "-25rem" }}
        >
          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3"></div>

          <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></div>

          <div className="flex space-x-6 rtl:space-x-reverse">
            <div className="h-16 bg-gray-200 rounded-lg dark:bg-gray-700 w-1/4"></div>
          </div>
        </div>

        <div className="grid justify-center px-[20px] md:px-[16px] md:py-[36px] xl:px-[0] row-start-1 row-end-2 xl:row-end-3 col-start-2 col-end-1 transform scale-x-[-1]">
          <svg
            width="95%"
            height="380"
            viewBox="0 0 417 408"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M414.329 0L415.713 209.739C416.424 317.432 329.698 405.311 222.004 406.021L2.67098 407.469L1.2868 197.73C0.576077 90.037 87.3025 2.15823 194.996 1.4475L414.329 0Z"
              fill="#E6E6E6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroTempSkeleton;
