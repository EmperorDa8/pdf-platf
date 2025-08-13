export interface User {
  id: string
  email: string
  is_admin: boolean
  stripe_customer_id?: string
  created_at: string
}

export interface Document {
  id: string
  title: string
  category: string
  access_level: 'free' | 'pro'
  file_path: string
  download_count: number
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  created_at: string
}

export interface Subscription {
  id: string
  user_id: string
  status: 'active' | 'canceled' | 'past_due'
  stripe_sub_id: string
  current_period_end: string
  created_at: string
}

export interface DownloadLog {
  id: string
  user_id: string
  document_id: string
  timestamp: string
}

export interface PDFRequest {
  id: string
  user_email: string
  title: string
  description: string
  category?: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
}

