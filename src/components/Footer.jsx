"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex text-xs text-center text-gray-600 dark:text-white font-mono">
      <div className="grow text-left">
        <p>Ezequiel Sarrugeri - 2025</p>
      </div>
      <div>
        <Link
          href="https://github.com/ezesarru/Oportunity"
          target="_blank"
          className="text-gray-600 dark:text-white border-b transition-[border-color] border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-white"
        >
          Source
        </Link>
      </div>
    </footer>
  );
}
