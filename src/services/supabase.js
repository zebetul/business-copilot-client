import { createClient } from "@supabase/supabase-js";
import { sbApiKey, sbUrl } from "../config/config";

const supabase = createClient(sbUrl, sbApiKey);

export default supabase;
