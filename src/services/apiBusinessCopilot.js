const API_URL = "http://localhost:8000/api";

// /memory
export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/memory`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed uploading the file");
  }

  const { data } = await response.json();

  return data;
}

export async function getDocuments() {
  const response = await fetch(`${API_URL}/memory`);

  if (!response.ok) {
    throw new Error("Failed fetching the documents");
  }

  const { data } = await response.json();

  return data;
}

export async function getDocument(id) {
  const response = await fetch(`${API_URL}/memory/${id}`);

  if (!response.ok) {
    throw new Error("Failed fetching the document");
  }

  const { data } = await response.json();

  return data;
}

// /home
export async function sendPrompt(prompt) {
  const response = await fetch(`${API_URL}/home`, {
    method: "POST",
    body: prompt,
  });

  if (!response.ok) {
    throw new Error("Failed sending the prompt");
  }

  const { data } = await response.json();

  return data;
}
