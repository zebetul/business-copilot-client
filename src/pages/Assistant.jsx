import PromptInput from "../features/assistant/PromptInput";

import useSendRequest from "../features/assistant/useSendRequest";
import DefaultContent from "../features/assistant/DefaultContent";
import Loading from "../ui/Loading";
import MarkdownContainer from "../ui/MarkdownContainer";
import Section from "../ui/Section";

function Assistant() {
  const { isSending, sendRequest, assistantResponse } = useSendRequest();

  return (
    <Section>
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
    </Section>
  );
}

export default Assistant;
