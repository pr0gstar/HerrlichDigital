import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <div className="p-10">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-center gap-4 align-middle">
          <Link
            to="/"
            className="text-primary underlined block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
          >
            <h1>Herrlich Digital</h1>
          </Link>
        </div>
        <ul className="flex">
          <li className="px-5 py-2">
            <Link to="/blog" className="text-gray-800 dark:text-gray-100">
              Blog
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link to="/about" className="text-gray-800 dark:text-gray-100">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
