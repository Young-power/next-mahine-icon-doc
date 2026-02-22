"use client";

import { usePathname } from "next/navigation";
import { links } from "./linkData";
import Link from "next/link";

const LinkData = () => {
  const pathName = usePathname();

  const navLink = links.map((link, index) => (
    <li key={index}>
      <Link
        href={link.path}
        className={`transition-colors duration-300 ${
          pathName === link.path
            ? "text-blue-500 font-semibold"
            : "text-black dark:text-zinc-300 hover:text-blue-400 dark:hover:text-blue-400"
        }`}
      >
        {link.label}
      </Link>
    </li>
  ));

  return <>{navLink}</>;
};

export default LinkData;