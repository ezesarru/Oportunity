"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "../store";

export default function Page() {
  const showContact = useStore((state) => state.showContact);

  return (
    <div className="animate-fadeIn">
      <div className="flex w-full items-center">
        <div className="">
          <p className="mb-[2%] text-xl font-bold">About</p>
          <div className="space-y-[1%]">
            <p>
              I'm a Full Stack software engineer. I'm originally from Lanús,
              Buenos Aires, Argentina.
            </p>
            <p>
              I started my carreer at{" "}
              <Link
                href="https://soyhenry.com"
                target="_blank"
                className="border-b-2 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-white"
              >
                Henry Bootcamp
              </Link>{" "}
              leading a team and building an e-commerce.
            </p>
            <p>
              I'm fluent in Spanish with intermediate English, that allows me to
              collaborate in multicultural teams.
            </p>
          </div>
        </div>
        <div className="ml-[2%] mt-[4%]">
          <Link href={"https://www.linkedin.com/in/ezesarru/"} target="_blank">
            <Image
              src="/profilePicture.jpg"
              alt="Ezequiel Sarrugeri"
              width={200}
              height={186}
              priority={true}
              className="grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
            />
          </Link>
        </div>
      </div>
      <div
        className={`transition-all duration-700 ease-in-out my-[4%] space-y-[1%] ${
          showContact
            ? "max-h-96"
            : "max-h-0 opacity-0 scale-95 overflow-hidden"
        }`}
      >
        <p className="mb-[2%] text-xl font-bold">Contact</p>
        <p>
          It would be great to hear from you! Contact me at{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ezesarru@gmail.com"
            target="_blank"
            className="border-b-2 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-white"
          >
            ezesarru@gmail.com
          </Link>{" "}
        </p>

        <p>
          Or you can also find me on{" "}
          <Link
            href="https://github.com/ezesarru"
            target="_blank"
            className="border-b-2 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-white"
          >
            GitHub
          </Link>{" "}
          and{" "}
          <Link
            href="https://linkedin.com/in/ezesarru/"
            target="_blank"
            className="border-b-2 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-white"
          >
            LinkedIn
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
