import { db } from "@/db";
import Layout from "@/components/layout";

interface NoteViewPageProps {
  params: {
    id: string;
  };
}

export default async function NoteViewPage(props: NoteViewPageProps) {
  const id = parseInt(props.params.id);
  const note = await db.note.findFirst({
    where: {
      id,
    },
  });
  return <Layout>
    <h1 className="text-2xl font-bold">{note?.title}</h1>
    </Layout>;
}
