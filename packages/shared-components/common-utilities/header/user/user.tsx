import Link from "next/link";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Amplify } from "aws-amplify";
import config from "../../../../../apps/whatuni/configs/amplifyconfiguration.json";

export default function User() {
  const router = useRouter();
  async function clearAllCookies() {
    try {
      await signOut(); // Wait for the signOut process to complete
      window.location.href = "/"; // Force a full reload to the home page
    } catch (error) {
      console.error("Error signing out:", error); // Handle errors if signOut fails
    }
  }
  return (
    <>
      <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-39px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px] lg:right-0">
        <ul className="small">
          <li className="mb-[16px] hover:underline">
            <Link href="/degrees/mywhatuni.html">My profile</Link>
          </li>
          <li className="mb-[16px] hover:underline">
            <Link href="/degrees/comparison">Favourites</Link>
          </li>

          <li className="text-primary-400 hover:underline">
            <Link href="/" onClick={() => clearAllCookies()}>
              Log Out
            </Link>
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
