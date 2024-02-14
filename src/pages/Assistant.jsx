import PromptInput from "../features/assistant/PromptInput";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useSendRequest from "../features/assistant/useSendRequest";

function Assistant() {
  const { isSending, sendRequest, assistantResponse } = useSendRequest();

  return (
    <>
      <section className="chat_section max-w-2xl mx-auto">
        {isSending ? (
          <div>Loading...</div>
        ) : (
          <Markdown
            className="markdown_content mb-40 text-textColorLight"
            remarkPlugins={[remarkGfm]}
          >
            {assistantResponse}
          </Markdown>
        )}

        <PromptInput sendRequest={sendRequest} isSending={isSending} />
      </section>
    </>
  );
}

export default Assistant;
