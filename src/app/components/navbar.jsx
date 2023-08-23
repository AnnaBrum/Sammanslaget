import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-wrap justify-between p-5 bg-white">
        <div>
          <span className="text-red-600">SAMMANSLAGET</span>
        </div>
        <div className="flex space-x-2">
          <Link className="text-black hover:text-red-600 hover:font-bold" href="/">
            HOME
          </Link>
          <Link href="/about" className="text-black hover:text-red-600 hover:font-bold">
            ABOUT
          </Link>
        </div>
      </nav>
    </>
  );
}
