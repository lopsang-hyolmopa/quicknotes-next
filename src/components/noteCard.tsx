import Link from "next/link";

import { Note } from "@prisma/client";
interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <Link
      key={note?.id}
      className="container flex flex-col justify-between gap-6 border bg-gray-100 rounded-xl p-4 hover:shadow-md"
      href={`notes/${note?.id}`}
    >
      <div>
        <h3 className="text-lg lg:text-xl font-medium mb-4 text-gray-800">{note?.title}</h3>
        <p className="text-gray-700">{note?.description}</p>
      </div>
    </Link>
  );
}
