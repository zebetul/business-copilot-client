export async function apiSendRequest(request) {
  try {
    // Input validation
    if (request.userRequest === "") throw new Error("No user request provided");

    if (!request.companyId) throw new Error("No company ID provided");

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

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }

    const assistantResponse = await response.json();

    return assistantResponse;
  } catch (error) {
    console.error("Error sending prompt:", error);
    throw new Error(error.message);
  }
}
