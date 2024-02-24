import { API_URL } from "../config/config.js";
import supabase from "./supabase.js";

// Get documents from supabase
export async function apiGetDocuments() {
  const { data, error } = await supabase.from("documents").select("*");

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the documents");
  }

  return data;
}

// Upload document to API to be processed before saving it to supabase
export async function apiUploadDocument(file) {
  try {
    // Data validation
    if (!file) return console.log("No file provided");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_URL}/documents`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to upload document");
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    throw new Error("Failed to upload document");
  }
}

// Delete document from supabase
export async function apiDeleteDocument(id) {
  const { error } = await supabase.from("documents").delete().match({ id });

  if (error) {
    console.log(error);

    throw new Error("Failed deleting the document");
  }
}
