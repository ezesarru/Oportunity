"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex text-xs text-center text-gray-600 dark:text-white font-mono">
      <div className="grow text-left">
        <p>ezesarru@gmail.com</p>
      </div>
      <div>
        <Link
          href="https://github.com/ezesarru/Oportunity"
          target="_blank"
          className="text-gray-600 dark:text-white border-2 p-1 transition-[border-color] border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
        >
          Source
        </Link>
      </div>
    </footer>
  );
}
