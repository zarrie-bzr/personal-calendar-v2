// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ulizpsjxxitqabxngslv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsaXpwc2p4eGl0cWFieG5nc2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMjYyNTksImV4cCI6MjA1MjYwMjI1OX0.Sl6N0ji65_muKIImysM4NYIGsH7pyAMpR4yym4i-cUk';
export const supabase = createClient(supabaseUrl, supabaseKey);
