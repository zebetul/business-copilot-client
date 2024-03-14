import { API_URL } from "../config/config.js";

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

    const { assistantResponse } = await response.json();

    return assistantResponse;
  } catch (error) {
    console.error("Error sending prompt:", error);

    throw error;
  }
}
