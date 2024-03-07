import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-yellow-200">
      <nav className="flex justify-between items-center p-4 lg:px-28">
        <Link href="/" className="text-2xl font-bold">
          QuickNotes
        </Link>
        <Link
          href="/notes/new"
          className="border border-0 rounded-full bg-white px-3.5 py-1.5 lg:px-6 lg:py-2 hover:shadow-md"
        >
          Add new Note
        </Link>
      </nav>
    </div>
  );
}
