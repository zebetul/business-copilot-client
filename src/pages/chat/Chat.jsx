import { useState } from "react";
import InputBox from "../../ui/InputBox";
import { sendPrompt } from "../../services/apiBusinessCopilot";

function Chat() {
  const [userPrompt, setUserPrompt] = useState("");
  const [copilotResponse, setCopilotResponse] = useState("");

  const handleUserPrompt = async () => {
    // Input validation
    if (userPrompt === "") return console.log("Empty input");

    try {
      // Send userPrompt to backend
      const { response } = await sendPrompt(userPrompt);
      setCopilotResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row">
      <section className="section_left h-full w-2/3 max-w-2xl">
        <h1 className="mb-10 text-center">Chat</h1>

        <p>{copilotResponse}</p>

        <InputBox
          userPrompt={userPrompt}
          setUserPrompt={setUserPrompt}
          handleUserPrompt={handleUserPrompt}
        />
      </section>

      <section className="section_right h-full w-1/3">
        <h1 className="mb-10 text-center">Section Right</h1>
      </section>
    </div>
  );
}

export default Chat;
