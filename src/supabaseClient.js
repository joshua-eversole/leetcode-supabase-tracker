import { createClient } from '@supabase/supabase-js'

// Read the variables from the environment
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY

// Create the client
export const supabase = createClient(supabaseUrl, supabaseKey)