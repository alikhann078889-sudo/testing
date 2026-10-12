"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { loginSchema, signupSchema } from "@/lib/validation";

export type AuthState = { error?: string; message?: string };

function friendly(message: string): string {
  if (message.includes("Invalid login credentials")) {
    return "Wrong email or password. Please try again.";
  }
  if (message.includes("Email not confirmed")) {
    return "Please confirm your email first — check your inbox for the verification link.";
  }
  if (message.includes("already registered")) {
    return "An account with this email already exists. Try logging in instead.";
  }
  if (message.includes("rate limit")) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  return message;
}

export async function logIn(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return {
      error:
        "Supabase isn't connected yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local, then restart the dev server.",
    };
  }

  const { error } = await supabase.auth.signInWithPassword(parsed.data);
  if (error) return { error: friendly(error.message) };

  redirect("/dashboard");
}

export async function signUp(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const parsed = signupSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form and try again." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return {
      error:
        "Supabase isn't connected yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local, then restart the dev server.",
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
  });
  if (error) return { error: friendly(error.message) };

  if (data.session) redirect("/dashboard");

  return {
    message: `Account created! We sent a confirmation link to ${parsed.data.email}. Confirm your email, then log in.`,
  };
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/login");
}
