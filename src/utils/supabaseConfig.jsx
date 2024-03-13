import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://lgovfitimelmazuyvdjf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxnb3ZmaXRpbWVsbWF6dXl2ZGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4ODY3NjksImV4cCI6MjAyNTQ2Mjc2OX0.NgQ1D_NL1G045B-7tpXR4jlASKq6gb-iK7ygBzl-lLI'
export const supabase = createClient(supabaseUrl, supabaseKey)