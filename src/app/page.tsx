import { db } from "@/db";
import NoteCard from "@/components/noteCard";

export default async function Home() {
  const notes = await db.note.findMany();

  return (
    <div className="container mx-auto p-4 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">All notes</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
