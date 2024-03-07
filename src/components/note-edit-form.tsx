"use client";

import { useState } from "react";

import type { Note } from "@prisma/client";
import Layout from "./layout";
import * as actions from "@/actions";

interface NoteEditFormProps {
  note: Note;
}

export default function NoteEditForm({ note }: NoteEditFormProps) {
  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;;
    setTitle(newTitle);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
  };

  const editNoteAction = actions.editNote.bind(
    null,
    note?.id,
    title,
    description
  );

  return (
    <Layout>
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Edit Note</h1>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border border-1 rounded-lg w-full p-2 mb-4"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows={6}
          className="border border-1 rounded-lg w-full p-2 mb-6"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <form action={editNoteAction}>
        <button
          type="submit"
          className="border-0 bg-yellow-200 px-6 py-2 rounded-xl"
        >
          Update
        </button>
      </form>
    </Layout>
  );
}
