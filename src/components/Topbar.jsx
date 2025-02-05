"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import useStore from "../store";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleContact = useStore((state) => state.handleContact);
  const showContact = useStore((state) => state.showContact);

  return (
    <div className="border-2 border-blue-600 flex justify-between items-center font-mono text-gray-600 dark:text-white">
      <h1 className="text-lg font-bold">Ezequiel Sarrugeri</h1>
      <ul className="flex flex-row gap-6 text-xs">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "border-2 p-1 border-gray-600 dark:border-yellow-500"
                : "border-2 p-1 transition-[border-color] border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
            }
          >
            About
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              if (pathname !== "/") {
                handleContact(true);
                router.push("/");
              } else {
                handleContact();
              }
            }}
            className={`${
              showContact && pathname === "/"
                ? "border-2 p-1 border-gray-600 dark:border-yellow-500"
                : "border-2 p-1 transition-[border-color] border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
            }`}
          >
            Contact
          </button>
        </li>
        <li>
          <Link
            href="/blog"
            className={
              pathname === "/blog"
                ? "border-2 p-1 border-gray-600 dark:border-yellow-500"
                : "border-2 p-1 transition-[border-color] border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            className="border-2 p-1 transition-[border-color] border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
