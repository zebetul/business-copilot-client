import { API_URL } from "../config/config.js";
import supabase from "./supabase.js";

export async function apiSendRequest(userRequest) {
  try {
    // Input validation
    if (userRequest === "") return console.log("No user request provided");

    const response = await fetch(`${API_URL}/assistant`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userRequest,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error sending prompt:", error);

    throw error;
  }
}

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
