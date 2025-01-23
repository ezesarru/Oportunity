"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="border-2 border-orange-500 w-[75%] mx-auto flex items-center">
      <Image
        src="/profilePicture.jpg"
        alt="Ezequiel Sarrugeri picture"
        width={170}
        height={170}
        priority={true}
        className="rounded-xl"
      />
      <div className="flex flex-col mx-[2%] border-4">
        <p className="mb-[5%]">Hello! I'm Ezequiel.</p>
        <div className="space-y-[2%] text-justify">
          <p>
            I'm a passionate and versatile professional with experience in Full
            Stack software development.
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
  );
}

/*
  <div>
    <p>
      My core competencies include React, Next, Redux, and PostgreSQL, among
      other key technologies.
    </p>
    
  </div>
  */
