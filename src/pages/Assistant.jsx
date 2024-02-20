import PromptInput from "../features/assistant/PromptInput";

import useSendRequest from "../features/assistant/useSendRequest";
import DefaultContent from "../features/assistant/DefaultContent";
import Loading from "../ui/Loading";
import MarkdownContainer from "../ui/MarkdownContainer";

function Assistant() {
  const { isSending, sendRequest, assistantResponse } = useSendRequest();

  return (
    <>
      <section className="assistant_response_container max-w-2xl h-full mx-auto">
        {isSending && <Loading />}

        {assistantResponse && (
          <MarkdownContainer>{assistantResponse}</MarkdownContainer>
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
