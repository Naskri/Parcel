import { createClient } from '@supabase/supabase-js'

export const supabaseURL = import.meta.env.VITE_SUPABASE_URL
export const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY

export const supabase = createClient(supabaseURL, supabaseKey)
