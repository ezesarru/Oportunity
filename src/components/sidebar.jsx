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
    <nav className="border-2 border-blue-600">
      <h1 className="text-4xl font-bold mb-[10%]">
        Ezequiel
        <br />
        Sarrugeri
      </h1>
      <ul className="flex flex-col gap-2 text-lg">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "underline decoration-yellow-300 underline-offset-4 font-bold"
                : ""
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
                ? "underline decoration-yellow-300 underline-offset-4 font-bold"
                : ""
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
                ? "underline decoration-yellow-300 underline-offset-4 font-bold"
                : ""
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline decoration-red-500 underline-offset-4 hover:font-bold "
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
