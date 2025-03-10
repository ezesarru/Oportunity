import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto text-center animate-fadeIn font-mono">
      <p className="mb-[2%] text-xl font-bold">
        404. You're not in the right place.
      </p>
      <Link
        className="border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
