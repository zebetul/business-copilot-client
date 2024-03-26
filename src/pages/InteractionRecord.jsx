import { useParams } from "react-router-dom";
import { useGetHistoryById } from "../features/history/useGetHistoryById";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import MarkdownContainer from "../ui/MarkdownContainer";
import Section from "../ui/Section";
import ClipboardCopy from "../ui/ClipboardCopy";

function InteractionRecord() {
  const { id } = useParams();
  const { interactionRecord, isLoading, error } = useGetHistoryById(id);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <Section>
        <ClipboardCopy text={interactionRecord.assistantResponse} />

        <MarkdownContainer>
          {interactionRecord.assistantResponse}
        </MarkdownContainer>
      </Section>
    </>
  );
}

export default InteractionRecord;
