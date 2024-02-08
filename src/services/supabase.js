import { createClient } from "@supabase/supabase-js";

const sbApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZ3V1aHpwbXFlcmVzemJydm10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwMTcwNDEsImV4cCI6MjAyMTU5MzA0MX0._jrBqVOksa1eDXX_7_qw6lvYhOoQRPJVTJZX4jYyE3E";
const sbUrl = "https://boguuhzpmqereszbrvmt.supabase.co";

const supabase = createClient(sbUrl, sbApiKey);

export default supabase;
