# MCP: Supabase Configuration Manager

## Purpose
Automatically configures the Supabase project with:
- Database schema
- Auth setup
- Storage bucket
- Row-Level Security (RLS)

## Trigger Context
- After Supabase project is created
- Before or during app deployment

## Input
- Supabase Project URL
- Supabase Anon Key (for client)
- Supabase Service Role Key (for admin)
- Project ID (optional)

## Output
- Initialized DB schema
- Configured RLS policies
- Storage bucket "documents" created and protected
- Admin seed (optional)

## Required Tables
- `users (user_id uuid PK, email text, is_admin bool default false, stripe_customer_id text)`
- `documents (id uuid PK, title text, access_level text, category text, file_path text, download_count int)`
- `subscriptions (id uuid PK, user_id uuid FK, status text, stripe_subscription_id text, current_period_end timestamp)`
- `download_logs (id uuid PK, user_id uuid FK, document_id uuid FK, downloaded_at timestamp)`
- `categories (id uuid PK, name text)`

## Auth Trigger
```sql
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (user_id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## RLS Policy Overview
- `users`: user can select/update own profile
- `documents`:
  - all users can read Free
  - Pro users can read Pro (requires sub join)
  - only admins can insert/update/delete
- `subscriptions`: user can read own, admin can read all
- `storage.objects`:
  - allow download via signed URL only
  - allow upload/delete for admin only

## Steps
1. Connect to Supabase CLI or SQL Editor
2. Execute schema and trigger scripts
3. Enable RLS on each table
4. Create "documents" storage bucket
5. Apply bucket-level RLS policies
6. (Optional) seed initial admin in `users`

## Agent Role
- Confirm all tables exist
- Verify RLS is active
- Ensure no public access to Pro content
- Print Supabase schema status

## Output Format
- Confirmation log (tables + RLS)
- SQL error reports (if any)

## Reusability
Can be re-run after reset or in staging environments.

