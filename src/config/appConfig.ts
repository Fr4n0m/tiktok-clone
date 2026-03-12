const DEFAULT_SUPABASE_URL = "https://ycfjobemexdujnlkqcxq.supabase.co";

export const DATA_SOURCE = (import.meta.env.VITE_DATA_SOURCE ?? "mock").toLowerCase();
export const IS_SUPABASE_ENABLED = DATA_SOURCE === "supabase";
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? DEFAULT_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY ?? "";
