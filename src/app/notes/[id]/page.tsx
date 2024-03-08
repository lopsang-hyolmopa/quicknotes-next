import Link from "next/link";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { notFound } from "next/navigation";

import { db } from "@/db";
import Layout from "@/components/Layout";
import * as actions from "@/actions";

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

  if(!note) {
    return notFound()
  }

  const deleteNoteAction = actions.deleteNote.bind(null, id);

  return (
    <Layout>
      <h1 className="text-xl lg:text-2xl font-bold">Note Overview</h1>
      <div className="container border bg-gray-100 rounded-xl p-4 my-4">
        <h3 className="text-lg lg:text-xl font-medium mb-2 text-gray-800">
          {note?.title}
        </h3>
        <p className="text-gray-600">{note?.description}</p>
      </div>
      <div className="flex gap-4">
        <Link
          className="bg-blue-500 p-2 lg:px-4 rounded-xl flex items-center justify-between gap-1 text-white hover:bg-blue-600"
          href={`/notes/${note?.id}/edit`}
        >
          <AiOutlineEdit />
          Edit
        </Link>

        <form action={deleteNoteAction}>
          <button className="bg-red-500 p-2 lg:px-4 rounded-xl flex items-center justify-between gap-1 text-white hover:bg-red-600">
            <AiOutlineDelete />
            Delete
          </button>
        </form>
      </div>
    </Layout>
  );
}
