import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
  console.warn('Supabase environment variables not properly configured. Using fallback mode.');
}

// Create Supabase client only if credentials are available
export const supabase = supabaseUrl && supabaseAnonKey && supabaseUrl !== 'YOUR_SUPABASE_URL' && supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY'
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database types for TypeScript
export interface IntakeSubmission {
  id?: string
  client_name: string
  company_name: string
  email: string
  phone: string
  state: string
  revenue?: number
  deal_type: string
  time_in_business?: string
  existing_debt?: string
  notes?: string
  status?: string
  created_at?: string
  updated_at?: string
}
