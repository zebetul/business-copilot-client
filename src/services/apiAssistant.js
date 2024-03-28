export async function apiSendRequest(request) {
  try {
    // Input validation
    if (request.userRequest === "")
      return console.log("No user request provided");

    const response = await fetch(`${import.meta.env.VITE_API_URL}/assistant`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request,
      }),
    });

    const assistantResponse = await response.json();

    return assistantResponse;
  } catch (error) {
    console.error("Error sending prompt:", error);

    throw error;
  }
}
