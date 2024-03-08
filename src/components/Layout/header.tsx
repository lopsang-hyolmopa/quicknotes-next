import { AiOutlinePlus } from "react-icons/ai";

import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-blue-900">
      <nav className="flex justify-between items-center p-4 lg:px-28">
        <Link href="/" className="text-2xl font-bold text-white">
          QuickNotes
        </Link>
        <Link
          href="/notes/new"
          className="flex items-center gap-1 border border-0 rounded-full bg-white px-3.5 py-1.5 lg:px-6 lg:py-2 hover:shadow-md"
        >
          <AiOutlinePlus /> Add note
        </Link>
      </nav>
    </div>
  );
}
