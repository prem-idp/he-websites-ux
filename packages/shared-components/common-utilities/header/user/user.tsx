import Link from "next/link";
import { useRouter } from "next/navigation";

export default function User() {
  const router = useRouter();
  // Array of menu items
  function clearAllCookies() {
    // Get all cookies
    // console.log("inside the cclear all cookies");
    const cookies = document.cookie.split(";");

    // Clear each cookie
    cookies.forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    // Redirect to home page
    window.location.href = "/";
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
              Log out
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
