import Link from "next/link";


export default function User() {
  // Array of menu items

  const menuItems = [
    { name: "My profile", href: "#" },
    { name: "Favourites", href: "#" },
    { name: "Profile item", href: "#" },
    { name: "Log out", href: "#", specialClass: "text-primary-400" },
  ];

  return (
    <>
      
      <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-39px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px] lg:right-0">
        <ul className="small">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`mb-[16px] hover:underline ${item.specialClass || ""}`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
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
