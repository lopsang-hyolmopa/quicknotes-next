import { db } from "@/db";
import Layout from "@/components/Layout";
import NoteCard from "@/components/noteCard";

export default async function Home() {
  const notes = await db.note.findMany();

  return (
    <Layout>
      <h1 className="text-xl lg:text-2xl font-bold mb-4">{notes.length} Notes</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </Layout>
  );
}
