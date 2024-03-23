import PromptInput from "../features/assistant/PromptInput";

import useSendRequest from "../features/assistant/useSendRequest";
import DefaultContent from "../features/assistant/DefaultContent";
import Loading from "../ui/Loading";
import MarkdownContainer from "../ui/MarkdownContainer";
import Section from "../ui/Section";

function Assistant() {
  const { isSending, sendRequest, assistantResponse } = useSendRequest();

  if (isSending) return <Loading />;

  if (assistantResponse)
    return (
      <Section>
        <MarkdownContainer>{assistantResponse}</MarkdownContainer>;
      </Section>
    );

  return (
    <>
      <div className="default_content flex flex-col overflow-y-auto">
        <Section>
          <DefaultContent sendRequest={sendRequest} />
        </Section>
      </div>

      <PromptInput sendRequest={sendRequest} isSending={isSending} />
    </>
  );
}

export default Assistant;
