"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "../store";

export default function Page() {
  const showContact = useStore((state) => state.showContact);

  return (
    <div className="border-2 border-orange-500 w-[95%] mx-auto flex flex-col items-center">
      <div className="flex w-full items-center">
        <div className="flex flex-col border-2">
          <p className="mb-[3%] text-xl font-bold">Hello! I'm Ezequiel.</p>
          <div className="space-y-[2%] text-justify">
            <p>
              I'm a passionate and versatile professional with experience in
              Full Stack software development.
            </p>
            <p>
              My experience at{" "}
              <Link
                href="https://soyhenry.com"
                className="underline decoration-blue-500 underline-offset-4 font-semibold text-yellow-400"
              >
                Henry Bootcamp
              </Link>{" "}
              gave me the opportunity to lead a team and build an e-commerce.
            </p>
            <p>
              I'm fluent in Spanish with intermediate English, that allows me to
              collaborate in multicultural teams.
            </p>
          </div>
        </div>
        <Link href={"https://www.linkedin.com/in/ezesarru/"} target="_blank">
          <Image
            src="/profilePicture.jpg"
            alt="Ezequiel Sarrugeri"
            width={140}
            height={186}
            priority={true}
            className="rounded-xl ml-[2%] mr-[2%] grayscale hover:grayscale-0"
          />
        </Link>
      </div>
      <div
        className={`${
          showContact ? "block" : "hidden"
        } w-[95%] border-2 border-violet-500 m-[1%] flex flex-col justify-center space-y-[1%]`}
      >
        <p className="text-xl font-bold">Contact</p>
        <p>
          I had love to hear from you! Don't hesitate to contact me at{" "}
          <Link
            href="mailto:ezesarru@gmail.com"
            className="underline decoration-blue-500 underline-offset-4 font-semibold  text-yellow-400"
          >
            ezesarru@gmail.com
          </Link>{" "}
        </p>

        <p>
          Or you can also find me on{" "}
          <Link
            href="https://github.com/ezesarru"
            className="underline decoration-blue-500 underline-offset-4 font-semibold text-yellow-400"
          >
            GitHub
          </Link>{" "}
          and{" "}
          <Link
            href="https://linkedin.com/in/ezesarru/"
            className="underline decoration-blue-500- underline-offset-4 font-semibold  text-yellow-400"
          >
            LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
}
