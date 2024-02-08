const API_URL = "http://localhost:5000";

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
    throw error;
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

// /chat
export async function sendPrompt(prompt) {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed sending the prompt");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error sending prompt:", error);

    throw error;
  }
}
