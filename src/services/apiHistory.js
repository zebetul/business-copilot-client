import supabase from "./supabase";

// Delete a row with a specific id form the history supabaseClient table
export async function apiDeleteHistoryItem(id) {
  const { error } = await supabase.from("history").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the document");
  }
}
