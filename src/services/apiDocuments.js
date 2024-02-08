import { API_URL } from "../config/config.js";

// /documents
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

export async function getDocuments() {
  try {
    const response = await fetch(`${API_URL}/documents`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed fetching the documents");
  }
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
