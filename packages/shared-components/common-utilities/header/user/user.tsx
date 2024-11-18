import Link from "next/link";

export default function User() {
  // Array of menu items

  return (
    <>
     <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-39px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px] lg:right-0">
                      <ul className="small">
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">My profile</Link>
                        </li>
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">Favourites</Link>
                        </li>
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">Profile item</Link>
                        </li>
                        <li className="text-primary-400 hover:underline">
                          <Link href="#">Log out</Link>
                        </li>
                      </ul>
                      <Link
                        href="#"
                        className="font-semibold x-small text-success-700 uppercase tracking-[1px] self-start"
                      >
                        Complete your profile
                      </Link>
                    </div>

    </>
  );
}
