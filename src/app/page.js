"use client";

import Image from "next/image";
import Link from "next/link";
import useStore from "../store";

export default function Page() {
  const showContact = useStore((state) => state.showContact);

  return (
    <div className="border-4 border-orange-500 w-[95%] mx-auto flex flex-col items-center">
      <div className="flex w-full items-center">
        <Image
          src="/profilePicture.jpg"
          alt="Ezequiel Sarrugeri picture"
          width={170}
          height={170}
          priority={true}
          className="rounded-xl ml-[3%] mr-[2%]"
        />
        <div className="flex flex-col border-4">
          <p className="mb-[5%]">Hello! I'm Ezequiel.</p>
          <div className="space-y-[2%] text-justify">
            <p>
              I'm a passionate and versatile professional with experience in
              Full Stack software development.
            </p>
            <p>
              My experience at{" "}
              <Link
                href="https://soyhenry.com"
                className="underline decoration-blue-500 underline-offset-4 font-semibold"
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
      </div>
      <div
        className={`${
          showContact ? "block" : "hidden"
        } w-[70%] text-green-600 border-4 border-gray-400 m-[1%] flex justify-center`}
      >
        Feel free to reach out to me at ezesarru@gmail.com
      </div>
    </div>
  );
}
