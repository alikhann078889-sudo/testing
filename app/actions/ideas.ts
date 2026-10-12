"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { ideaSchema } from "@/lib/validation";

export type IdeaState = { error?: string; ok?: boolean };

export async function createIdea(_prev: IdeaState, formData: FormData): Promise<IdeaState> {
  const parsed = ideaSchema.safeParse({
    title: formData.get("title"),
    notes: formData.get("notes") ?? "",
    status: formData.get("status") ?? "idea",
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." };
  }

  const supabase = await createClient();
  if (!supabase) return { error: "Supabase isn't connected yet." };

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Your session expired — please log in again." };

  const { error } = await supabase.from("ideas").insert({
    user_id: user.id,
    title: parsed.data.title,
    notes: parsed.data.notes ?? "",
    status: parsed.data.status,
  });
  if (error) return { error: error.message };

  revalidatePath("/dashboard");
  return { ok: true };
}

export async function updateIdea(_prev: IdeaState, formData: FormData): Promise<IdeaState> {
  const id = String(formData.get("id") ?? "");
  if (!id) return { error: "Missing idea id." };

  const parsed = ideaSchema.safeParse({
    title: formData.get("title"),
    notes: formData.get("notes") ?? "",
    status: formData.get("status") ?? "idea",
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." };
  }

  const supabase = await createClient();
  if (!supabase) return { error: "Supabase isn't connected yet." };

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Your session expired — please log in again." };

  const { error } = await supabase
    .from("ideas")
    .update({
      title: parsed.data.title,
      notes: parsed.data.notes ?? "",
      status: parsed.data.status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("user_id", user.id);
  if (error) return { error: error.message };

  revalidatePath("/dashboard");
  return { ok: true };
}

export async function deleteIdea(formData: FormData): Promise<void> {
  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const supabase = await createClient();
  if (!supabase) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("ideas").delete().eq("id", id).eq("user_id", user.id);
  revalidatePath("/dashboard");
}
