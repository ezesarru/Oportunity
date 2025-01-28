"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "../store";

export default function Sidebar({ contactClick }) {
  const pathname = usePathname();

  const handleContact = useStore((state) => state.handleContact);

  return (
    <nav className="border-4 border-blue-600">
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
          <button
            onClick={handleContact}
            className="underline decoration-red-500 underline-offset-4 font-bold" //! Añadir CSS para que sea diferente
          >
            Contact
          </button>
        </li>
        <li>
          <Link
            className="underline decoration-red-500 underline-offset-4 font-bold"
            href="/resume.pdf"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
