import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";

import { db } from "@/db";
import Layout from "@/components/Layout";
import NoteCard from "@/components/noteCard";

export default async function Home() {
  const notes = await db.note.findMany();

  const noNotes = notes.length === 0;

  return (
    <Layout>
      {noNotes ? (
        <div className="min-h-80 mt-32 flex flex-col items-center justify-center gap-4">
          <GrNotes className="h-24 w-24 text-gray-400" />
          <p>No notes found. Take your first note.</p>
          <Link
            href="/notes/new"
            className="flex items-center gap-1 border border-0 rounded-full bg-blue-600 text-white px-3.5 py-1.5 lg:px-6 lg:py-2 hover:bg-blue-500"
          >
            <AiOutlinePlus /> Add note
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-xl lg:text-2xl font-bold mb-4">
            {notes.length} Notes
          </h1>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}
