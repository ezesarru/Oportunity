"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import useStore from "../store";

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();

  const showContact = useStore((state) => state.showContact);
  const handleContact = useStore((state) => state.handleContact);

  return (
    <div className="flex justify-between font-mono text-gray-600 dark:text-white transition-all duration-700">
      <h1 className="text-lg font-bold">Ezequiel Sarrugeri</h1>
      <ul className="flex flex-row gap-6 text-xs items-center">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "border-2 p-1 border-gray-600 dark:border-yellow-500"
                : "border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
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
                : "border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
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
                : "border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            className="border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
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
