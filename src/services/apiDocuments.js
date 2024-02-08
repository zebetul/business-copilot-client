import { API_URL } from "../config/config.js";
import supabase from "./supabase.js";

export async function uploadDocument(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_URL}/documents`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed uploading the document");
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
