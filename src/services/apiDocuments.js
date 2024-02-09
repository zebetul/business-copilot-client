import { API_URL } from "../config/config.js";
import supabase from "./supabase.js";

export async function apiUploadDocument(file) {
  try {
    // Data validation
    if (!file) return console.log("No file selected.");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_URL}/documents`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Get documents from supabase
export async function getDocuments() {
  const { data, error } = await supabase.from("documents").select("*");

  if (error) {
    console.log(error);
    throw new Error("Failed fetching the documents");
  }

  return data;
}

export async function getDocument(id) {
  try {
    const response = await fetch(`${API_URL}/documents/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed fetching the document");
  }
}
