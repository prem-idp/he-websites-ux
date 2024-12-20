export default function Shortlisted() {
  // Array of items to display in the list
  return (
    <>
      <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-5px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px]">
        <ul className="small">
          <li className="mb-[16px] hover:underline">
            <a href="/degrees/comparison">
              Favourites
              {/* <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                5
              </span> */}
            </a>
          </li>
          <li className="mb-[16px] hover:underline">
            <a href="#">
              Courses
              {/* <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                2
              </span> */}
            </a>
          </li>
          <li className="hover:underline">
            <a href="#">
              Universities
              {/* <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                3
              </span> */}
            </a>
          </li>
        </ul>
        <a
          href="/degrees/comparison"
          className="font-semibold small bg-primary-400 text-white px-[16px] py-[8px] rounded-[18px] self-start hover:bg-primary-500"
        >
          Compare
        </a>
      </div>
    </>
  );
}
