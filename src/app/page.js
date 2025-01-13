import Image from "next/image";

export default function Page() {
  return (
    <div className="flex justify-center space-x-4">
      <Image
        src="/profilePicture.jpg"
        width={180}
        height={240}
        alt="Eze Sarru"
      />
      <p>Home</p>
    </div>
  );
}
