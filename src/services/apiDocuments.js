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

    if (!response.ok) {
      throw new Error("Failed uploading the document");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed uploading the document");
  }
}

export async function getDocuments() {
  const response = await fetch(`${API_URL}/documents`);

  if (!response.ok) {
    throw new Error("Failed fetching the documents");
  }

  const { data } = await response.json();

  return data;
}

export async function getDocument(id) {
  const response = await fetch(`${API_URL}/documents/${id}`);

  if (!response.ok) {
    throw new Error("Failed fetching the document");
  }

  const { data } = await response.json();

  return data;
}
