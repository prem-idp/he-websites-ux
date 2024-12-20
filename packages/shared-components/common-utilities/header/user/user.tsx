"use client";
import Link from "next/link";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "../../../../../apps/whatuni/configs/amplifyconfiguration";
Amplify.configure(awsconfig, { ssr: true });
export default function User({ topnav_data }: any) {
  const router = useRouter();
  async function clearAllCookies() {
    try {
      sessionStorage.clear();
      document.cookie =
        "wcache=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

      await signOut({ global: true }); // Wait for the signOut process to complete
      window.location.href = "/"; // Force a full reload to the home page
    } catch (error) {
      console.error("Error signing out:", error); // Handle errors if signOut fails
    }
  }
  const userprofile =
    topnav_data.data.contentData.items[0].customerProfileMenu
      .navChildC1Collection.items;
  return (
    <>
      <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-39px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px] lg:right-0">
        <ul className="small">
          {userprofile.map((item: any, index: any) => (
            <li
              key={index}
              className={
                item?.navTitle === "Logout"
                  ? `text-primary-400 hover:underline`
                  : "mb-[16px] hover:underline"
              }
            >
              <Link
                prefetch={false}
                href={item?.navUrl || ""}
                className="font-normal small"
                onClick={() =>
                  item.navTitle === "Logout" ? clearAllCookies() : ""
                }
              >
                {item.navTitle}
              </Link>
            </li>
          ))}
          {/* <li className={"text-primary-400 hover:underline"}>
            <Link href="/" onClick={() => clearAllCookies()}>
              Log Out
            </Link>
          </li> */}
        </ul>
        <Link
          prefetch={false}
          href="#"
          className="font-semibold x-small text-success-700 uppercase tracking-[1px] self-start"
        >
          Complete your profile
        </Link>
      </div>
    </>
  );
}
