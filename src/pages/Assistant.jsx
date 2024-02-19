import PromptInput from "../features/assistant/PromptInput";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useSendRequest from "../features/assistant/useSendRequest";
import DefaultContent from "../features/assistant/DefaultContent";

function Assistant() {
  const { isSending, sendRequest, assistantResponse } = useSendRequest();

  return (
    <>
      <section className="assistant_content max-w-2xl h-full mx-auto">
        {isSending && <div>Loading...</div>}

        {assistantResponse && (
          <Markdown
            className="markdown_content pb-40 text-textColorLight"
            remarkPlugins={[remarkGfm]}
          >
            {assistantResponse}
          </Markdown>
        )}

        {!isSending && !assistantResponse && (
          <DefaultContent sendRequest={sendRequest} />
        )}

        <PromptInput sendRequest={sendRequest} isSending={isSending} />
      </section>
    </>
  );
}

export default Assistant;
