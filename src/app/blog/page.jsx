export default function Blog() {
  return (
    <div className="mx-auto animate-fadeIn font-mono">
      <p className="mb-[2%] text-xl font-bold">Blog</p>
      <div className="flex flex-col gap-y-2">
        <a
          className="border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
          href="/blog/"
        >
          <div className="flex items-center gap-6">
            <p>2025</p>
            <span>The Power of Now</span>
          </div>
        </a>
        <a
          className="border-2 p-1 transition-[border-color] duration-500 border-gray-300  hover:border-gray-600  dark:border-gray-500 dark:hover:border-yellow-500"
          href="/blog/"
        >
          <div className="flex items-center gap-6">
            <p>2025</p>
            <span>Prioritize Yourself</span>
          </div>
        </a>
      </div>
    </div>
  );
}
