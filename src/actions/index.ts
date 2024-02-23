"use server";

import { redirect } from "next/navigation";

import { db } from "@/db";

export async function addNote(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await db.note.create({
    data: {
      title,
      description,
    },
  });

  redirect("/");
}
