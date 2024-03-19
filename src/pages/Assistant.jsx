import PromptInput from "../features/assistant/PromptInput";

import useSendRequest from "../features/assistant/useSendRequest";
import DefaultContent from "../features/assistant/DefaultContent";
import Loading from "../ui/Loading";
import MarkdownContainer from "../ui/MarkdownContainer";

function Assistant() {
  const { isSending, sendRequest, assistantResponse } = useSendRequest();

  return (
    <section className="relative mx-auto h-full max-w-2xl">
      {isSending && <Loading />}

      {assistantResponse && (
        <MarkdownContainer>{assistantResponse}</MarkdownContainer>
      )}

      {!isSending && !assistantResponse && (
        <>
          <DefaultContent sendRequest={sendRequest} />

          <PromptInput sendRequest={sendRequest} isSending={isSending} />
        </>
      )}
    </section>
  );
}

export default Assistant;
