import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-background p-4 shadow-sm">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  )
};