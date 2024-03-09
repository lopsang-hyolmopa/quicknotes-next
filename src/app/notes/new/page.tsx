"use client";

import { useFormState } from "react-dom";

import Layout from "@/components/Layout";
import * as actions from "@/actions";

export default function NewNotePage() {
  const [formState, action] = useFormState(actions.addNote, { message: "" });

  const isTitleRequired = formState.message
    ? "border-red-600 placeholder-red-600"
    : "";

  return (
    <Layout>
      <h1 className="text-xl lg:text-2xl font-bold mb-4">Take a Note</h1>
      <form action={action}>
        <div className="flex flex-col items-start gap-2">
          {formState.message ? (
            <label htmlFor="title" className="text-red-600">
              Title is required
            </label>
          ) : (
            <label htmlFor="title">Title</label>
          )}
          <input
            type="text"
            name="title"
            id="title"
            className={`border border-1 rounded-lg w-full p-2 mb-4 ${isTitleRequired}`}
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
        <button
          type="submit"
          className="border-0 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-500"
        >
          Add Note
        </button>
      </form>
    </Layout>
  );
}
