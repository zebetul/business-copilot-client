import { API_URL } from "../config/config.js";

// /chat
export async function sendPrompt(prompt) {
  try {
    const response = await fetch(`${API_URL}/assistant`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error sending prompt:", error);

    throw error;
  }
}
