import supabase from "./supabase";

// Get the interactions history by company id from the history supabaseClient table
export async function apiGetHistory(companyId) {
  if (!companyId) return null;

  const { data, error } = await supabase
    .from("history")
    .select("title, id")
    .eq("companyId", companyId)
    .order("id", { ascending: false });

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the documents");
  }

  return data;
}

// Get a row with a specific id form the history supabaseClient table
export async function apiGetHistoryById(id) {
  const { data, error } = await supabase
    .from("history")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the document");
  }

  return data;
}

// Delete a row with a specific id form the history supabaseClient table
export async function apiDeleteHistoryItem(id) {
  const { error } = await supabase.from("history").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the document");
  }
}

// Rename the title in a row with a specific id form the history supabaseClient table
export async function apiUpdateHistoryRecord(record) {
  const { id } = record;

  const { error } = await supabase.from("history").update(record).eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the document");
  }
}
