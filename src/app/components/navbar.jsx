import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-10 flex flex-wrap justify-between p-5 bg-white fixed top-0 w-full  border-b border-gray-300">
      <div>
        <span className="text-red-600">SAMMANSLAGET</span>
      </div>
      <div className="flex space-x-2">
        <Link
          className="text-black hover:font-bold"
          href="/"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="text-black hover:font-bold"
        >
          ABOUT
        </Link>
      </div>
    </nav>
  );
}
