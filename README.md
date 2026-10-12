# Maya Chen — Portfolio + Auth Dashboard

A personal portfolio (Next.js 15 App Router, Tailwind CSS 3, Framer Motion) with Supabase
g email/password auth and a protected, private idea-board dashboard.

## Features

- Portfolio: hero, about, skills, projects, experience, testimonials, contact, footer
- Email/password **sign up** and **log in** via Supabase Auth
- `/dashboard` protected by middleware **and** Postgres row level security
- Private CRUD idea board: create, edit, change status, delete
- Friendly "Connect Supabase to see data" empty state when env vars are missing

## Setup

1. `npm install`
2. Create a free project at [supabase.com](https://supabase.com).
3. Run the migration — either paste `supabase/migrations/0001_create_ideas.sql` into the
   Supabase SQL editor, or run `supabase link && supabase db push` with the CLI.
4. Copy `.env.example` to `.env.local` and fill in:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

5. `npm run dev` → http://localhost:3000

## Auth notes

- Email confirmation lives under **Authentication → Providers → Email**. If it's enabled,
  new users receive a verification link; set the Site URL to `http://localhost:3000`.
- Security model: the `ideas` table has RLS enabled with four policies scoped to
  `auth.uid()`. Only the public anon key is used — never a service-role key.
- Server actions validate all input with zod before touching the database.

## Scripts

- `npm run dev` — start the dev server
- `npm run lint` — ESLint
