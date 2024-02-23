import { db } from "@/db";
import Layout from "@/components/layout";
import NoteCard from "@/components/noteCard";

export default async function Home() {
  const notes = await db.note.findMany();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">All notes</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </Layout>
  );
}
