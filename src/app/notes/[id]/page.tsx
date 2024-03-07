import Link from "next/link";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { db } from "@/db";
import Layout from "@/components/layout";
import * as actions from "@/actions";
import NoteCard from "@/components/noteCard";

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

  const deleteNoteAction = actions.deleteNote.bind(null, id);

  return (
    <Layout>
      <h1 className="text-xl lg:text-2xl font-bold">Note Overview</h1>
      <div className="container border bg-gray-100 rounded-xl p-4 my-4">
        <h3 className="text-lg lg:text-xl font-medium mb-2 text-gray-800">
          {note?.title}
        </h3>
        <p className="text-gray-700">{note?.description}</p>
      </div>
      <div className="flex gap-4">
        <Link
          className="bg-yellow-200 p-2 lg:px-4 rounded-xl flex items-center justify-between gap-2 text-gray-800 hover:shadow-md"
          href={`/notes/${note?.id}/edit`}
        >
          <AiOutlineEdit />
          Edit
        </Link>

        <form action={deleteNoteAction}>
          <button className="bg-red-200 p-2 lg:px-4 rounded-xl flex items-center justify-between gap-2 text-gray-800 hover:shadow-md">
            <AiOutlineDelete />
            Delete
          </button>
        </form>
      </div>
    </Layout>
  );
}
