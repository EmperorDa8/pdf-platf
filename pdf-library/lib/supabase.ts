import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client-side client (for use in client components)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service role client for admin operations (client-side only)
export const createServiceClient = () => createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
