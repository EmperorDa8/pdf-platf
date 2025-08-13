# Database Setup Guide

This guide will help you set up the Supabase database for the PDF Library application.

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be ready,

## 2. Get Project Credentials

1. Go to Project Settings > API
2. Copy the following values:
   - Project URL
   - Anon (public) key
   - Service role key (keep this secret!)

## 3. Create Database Tables

Run the following SQL in the Supabase SQL Editor:

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  stripe_customer_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Documents Table
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  access_level TEXT CHECK (access_level IN ('free', 'pro')) DEFAULT 'free',
  file_path TEXT NOT NULL,
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Categories Table
```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Subscriptions Table
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  status TEXT CHECK (status IN ('active', 'canceled', 'past_due')) DEFAULT 'active',
  stripe_sub_id TEXT UNIQUE NOT NULL,
  current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Download Logs Table
```sql
CREATE TABLE download_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### PDF Requests Table
```sql
CREATE TABLE pdf_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT,
  urgency TEXT DEFAULT 'normal',
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 4. Set Up Row Level Security (RLS)

Enable RLS on all tables and create policies:

### Users Table
```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Allow insert during signup
CREATE POLICY "Allow insert during signup" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);
```

### Documents Table
```sql
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Anyone can view documents
CREATE POLICY "Anyone can view documents" ON documents
  FOR SELECT USING (true);

-- Only admins can insert/update/delete
CREATE POLICY "Only admins can manage documents" ON documents
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.is_admin = true
    )
  );
```

### Subscriptions Table
```sql
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can view their own subscriptions
CREATE POLICY "Users can view own subscriptions" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Only admins can manage subscriptions
CREATE POLICY "Only admins can manage subscriptions" ON subscriptions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.is_admin = true
    )
  );
```

## 5. Create Storage Bucket

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `pdfs`
3. Set it to private
4. Create storage policies:

```sql
-- Allow authenticated users to download PDFs
CREATE POLICY "Allow authenticated users to download PDFs" ON storage.objects
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only admins can upload PDFs
CREATE POLICY "Only admins can upload PDFs" ON storage.objects
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.id = auth.uid() 
      AND users.is_admin = true
    )
  );
```

## 6. Insert Sample Categories

```sql
INSERT INTO categories (name) VALUES
  ('Business & Finance'),
  ('Technology'),
  ('Education'),
  ('Health & Wellness'),
  ('Science & Research'),
  ('Arts & Literature'),
  ('History'),
  ('Other');
```

## 7. Create Admin User

After creating your first user account, make them an admin:

```sql
UPDATE users 
SET is_admin = true 
WHERE email = 'your-email@example.com';
```

## 8. Test the Setup

1. Try to sign up a new user
2. Check if the user appears in the users table
3. Try to access the admin dashboard (should work for admin users)

## Troubleshooting

### Common Issues:

1. **RLS Policy Errors**: Make sure all policies are created correctly
2. **Permission Denied**: Check if the user has the correct role
3. **Table Not Found**: Ensure all tables are created in the correct schema

### Useful Queries:

```sql
-- Check if RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- View all policies
SELECT * FROM pg_policies WHERE schemaname = 'public';

-- Check user permissions
SELECT * FROM users WHERE email = 'your-email@example.com';
```

