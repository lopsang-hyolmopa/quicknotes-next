"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/db";

export async function addNote(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (typeof title !== "string" || title.length <= 0) {
    return {
      message: "Title is requried!",
    };
  }

  await db.note.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/")
  redirect("/");
}

export async function editNote(id: number, title: string, description: string) {
  if (typeof title !== "string" || title.length <= 0) {
    return {
      message: "Title is requried!",
    };
  }

  await db.note.update({
    where: { id },
    data: {
      title,
      description,
    },
  });

  revalidatePath(`/notes/${id}`)
  redirect(`/notes/${id}`);
}

export async function deleteNote(id: number) {
  await db.note.delete({
    where: {
      id,
    },
  });

  revalidatePath("/")
  redirect("/");
}
