import supabase from "./supabase";

// Get the history supabaseClient table and arrange in descending order
export async function apiGetHistory() {
  const { data, error } = await supabase
    .from("history")
    .select("title, id")
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
export async function apiRenameRecord({ id, title }) {
  const { error } = await supabase
    .from("history")
    .update({ title })
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the document");
  }
}
