import Link from "next/link";

export default function Shortlisted() {
  // Array of items to display in the list

  return (
    <>
      <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-5px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px]">
        <ul className="small">
          <li className="mb-[16px] hover:underline">
            <Link href="/degrees/comparison">
              Favourites
              {/* <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                5
              </span> */}
            </Link>
          </li>
          <li className="mb-[16px] hover:underline">
            <Link href="#">
              Courses
              {/* <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                2
              </span> */}
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="#">
              Universities
              {/* <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                3
              </span> */}
            </Link>
          </li>
        </ul>
        <Link
          href="/degrees/comparison"
          className="font-semibold small bg-primary-400 text-white px-[16px] py-[8px] rounded-[18px] self-start hover:bg-primary-500"
        >
          Compare
        </Link>
      </div>
    </>
  );
}
