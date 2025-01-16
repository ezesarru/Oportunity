"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center space-x-4">
      <Image
        src="/profilePicture.jpg"
        alt="Ezequiel Sarrugeri picture"
        width={180}
        height={240}
        priority={true}
        className="rounded-lg"
      />
      <div className="flex flex-col justify-center max-w-2xl mx-auto">
        <p className="mb-4">Hello! I'm Ezequiel.</p>
        <div className="space-y-2">
          <p>
            I'm a versatile professional with experience in management and
            software development.
          </p>
          <p>
            My experience as a Full Stack Developer at{" "}
            <Link
              href="https://soyhenry.com"
              className="underline decoration-blue-500 underline-offset-4 font-semibold"
            >
              Henry Bootcamp
            </Link>{" "}
            allowed me to manage a development team and build a robust
            e-commerce platform.
          </p>
          <p>
            My core competencies include React, Next, Redux, and PostgreSQL,
            among other key technologies.
          </p>
          <p>
            I'm bilingual, with proficiency in Spanish and an intermediate level
            of English, which allows me to communicate and collaborate
            effectively in multicultural teams.
          </p>
        </div>
      </div>
    </div>
  );
}
