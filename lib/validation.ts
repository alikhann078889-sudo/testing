import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const signupSchema = z
  .object({
    email: z.string().trim().email("Enter a valid email address"),
    password: z.string().min(8, "Use at least 8 characters for your password"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const ideaStatuses = ["idea", "exploring", "building", "shipped"] as const;

export const ideaStatusSchema = z.enum(ideaStatuses);

export const ideaSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Give your idea a short title (at least 2 characters)")
    .max(120, "Keep the title under 120 characters"),
  notes: z.string().trim().max(2000, "Keep notes under 2000 characters").default(""),
  status: ideaStatusSchema.default("idea"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type IdeaInput = z.infer<typeof ideaSchema>;
