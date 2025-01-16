"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="mr-8">
      <h1 className="text-3xl font-bold mb-3">
        Ezequiel
        <br />
        Sarrugeri
      </h1>
      <ul className="flex flex-col gap-2">
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
            href="/contact"
            className={
              pathname === "/contact"
                ? "underline decoration-yellow-300 underline-offset-4 font-bold"
                : ""
            }
          >
            Contact
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
          <Link href="/resume.pdf">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
