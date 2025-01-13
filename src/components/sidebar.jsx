import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="mr-8">
      <h1>Ezequiel Sarrugeri</h1>
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
