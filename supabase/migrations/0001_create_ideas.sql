-- Idea board: a private per-user CRUD table for the dashboard.
create table if not exists public.ideas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  notes text not null default '',
  status text not null default 'idea'
    check (status in ('idea', 'exploring', 'building', 'shipped')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Row level security is mandatory: users may only ever touch their own rows.
alter table public.ideas enable row level security;

create policy "ideas_select_own"
  on public.ideas for select
  using (auth.uid() = user_id);

create policy "ideas_insert_own"
  on public.ideas for insert
  with check (auth.uid() = user_id);

create policy "ideas_update_own"
  on public.ideas for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "ideas_delete_own"
  on public.ideas for delete
  using (auth.uid() = user_id);

create index if not exists ideas_user_created_idx
  on public.ideas (user_id, created_at desc);
