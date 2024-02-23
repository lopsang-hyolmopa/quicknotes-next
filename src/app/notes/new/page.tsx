'use client'

import * as actions from "@/actions"

export default function NewNotePage() {
  return (
    <div className="container mx-auto p-4 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Take a Note</h1>
      <form action={actions.addNote}>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="border border-1 rounded-lg w-full p-2 mb-4"
            placeholder="Enter title"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={6}
            className="border border-1 rounded-lg w-full p-2 mb-6"
            placeholder="Enter description"
          />
        </div>

        <button type="submit" className="border-0 bg-orange-200 px-6 py-2 rounded-xl">
          Add Note
        </button>
      </form>
    </div>
  );
}
