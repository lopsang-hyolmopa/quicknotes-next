import Link from "next/link";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { Note } from "@prisma/client";
import * as actions from "@/actions";
interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const deleteNoteAction = actions.deleteNote.bind(null, note.id);
  return (
    <div
      key={note?.id}
      className="container flex flex-col justify-between gap-6 border bg-gray-100 rounded-xl p-4 hover:shadow-md"
    >
      <div>
        <h3 className="text-xl font-bold mb-4">{note?.title}</h3>
        <p className="text-gray-700">{note?.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <button className="flex items-center justify-between gap-2 text-gray-400 hover:text-gray-600">
          <AiOutlineEdit />
          Edit
        </button>
        <form action={deleteNoteAction}>
          <button className="flex items-center justify-between gap-2 text-gray-400 hover:text-gray-600">
            <AiOutlineDelete />
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
