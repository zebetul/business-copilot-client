import { useParams } from "react-router-dom";
import { useGetHistoryById } from "../features/assistant/useGetHistoryById";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import MarkdownContainer from "../ui/MarkdownContainer";

function InteractionRecord() {
  const { id } = useParams();
  const { interactionRecord, isLoading, error } = useGetHistoryById(id);
  const assistantResponse = interactionRecord?.assistantResponse;

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <section className="max-w-2xl mx-auto">
        <MarkdownContainer>{assistantResponse}</MarkdownContainer>
      </section>
    </>
  );
}

export default InteractionRecord;
