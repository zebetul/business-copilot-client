import { useParams } from "react-router-dom";
import { useGetHistoryById } from "../features/history/useGetHistoryById";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import MarkdownContainer from "../ui/MarkdownContainer";

function InteractionRecord() {
  const { id } = useParams();
  const { interactionRecord, isLoading, error } = useGetHistoryById(id);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <section className="relative mx-auto h-full max-w-2xl">
        <MarkdownContainer>
          {interactionRecord.assistantResponse}
        </MarkdownContainer>
      </section>
    </>
  );
}

export default InteractionRecord;
