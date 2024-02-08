import { API_URL } from "../config/config.js";

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
