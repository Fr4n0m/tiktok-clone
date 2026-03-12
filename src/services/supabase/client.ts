import { createClient } from "@supabase/supabase-js";
import {
  IS_SUPABASE_ENABLED,
  SUPABASE_ANON_KEY,
  SUPABASE_URL,
} from "../../config/appConfig";

const hasCredentials = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const isSupabaseReady = IS_SUPABASE_ENABLED && hasCredentials;
export const supabase = isSupabaseReady
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
