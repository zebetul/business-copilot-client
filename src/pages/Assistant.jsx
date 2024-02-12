import { useState } from "react";
import PropTypes from "prop-types";
import PromptInput from "../features/assistant/PromptInput";
import { sendRequest } from "../services/apiAssistant";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Assistant({ setAssistantResponse, assistantResponse }) {
  const [userRequest, setUserRequest] = useState("");

  const handleUserRequest = async () => {
    // Input validation
    if (userRequest === "") return console.log("Empty input");

    setAssistantResponse("Loading...");

    setUserRequest("");

    try {
      // Send userRequest to backend
      const { response } = await sendRequest(userRequest);

      setAssistantResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  const mdContent = `
  # Assistant

  The assistant is a GPT-3 powered AI that can help you with your assignments. It can help you with writing essays, generating code, and much more. Just type in your prompt and the assistant will generate a response for you.

  ## How to use the assistant

  1. Type in your prompt in the input box at the bottom of the page.

  2. Click the send button to send your prompt to the assistant.

  3. The assistant will generate a response for you.

  4. You can copy the response and use it in your assignment.

  ## Example prompts

  - Write an essay on the importance of education.

  - Generate a function that takes in a list of numbers and returns the sum of the numbers.

  - Write a poem about nature.

  ## Note

  The assistant is powered by GPT-3, which is a powerful language model. It can generate human-like responses to prompts. However, it is not perfect and may generate incorrect or inappropriate responses. Please use the assistant responsibly and verify the responses before using them in your assignments.

  ## Usefull links

  - [OpenAI](https://openai.com/)

  - [GPT-3](https://en.wikipedia.org/wiki/GPT-3)

  - [GPT-3 API](https://beta.openai.com/docs/)
  `;

  return (
    <>
      <section className="chat_section max-w-2xl mx-auto">
        <Markdown
          className="markdown_content mb-40 text-textColorLight"
          remarkPlugins={[remarkGfm]}
        >
          {assistantResponse}
          {/* {mdContent} */}
        </Markdown>

        <PromptInput
          userRequest={userRequest}
          setUserRequest={setUserRequest}
          handleUserRequest={handleUserRequest}
        />
      </section>
    </>
  );
}

Assistant.propTypes = {
  setAssistantResponse: PropTypes.func,
  assistantResponse: PropTypes.string,
};

export default Assistant;
