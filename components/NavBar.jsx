import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 rounded px-8 py-4">
      <Link
        className="text-white text-xl font-extrabold tracking-wider"
        href="/"
      >
        iDeas
      </Link>
      <Link
        href="/add-idea"
        className="bg-white font-semibold text-slate-800 p-2 px-3 rounded"
      >
        Add iDea
      </Link>
    </nav>
  );
}
