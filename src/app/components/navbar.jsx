import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className = " flex flex-wrap justify-between p-5">
        <div>
          <h2>SAMMANSLAGET URVALSPROV</h2>
          
        </div>
        <div className = "flex space-x-2">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        </div>
      </nav>
    </>
  );
}
