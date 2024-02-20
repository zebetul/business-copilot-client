import { useParams } from "react-router-dom";
import { useGetHistoryById } from "../features/assistant/useGetHistoryById";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function InteractionRecord() {
  const { id } = useParams();

  const { interactionRecord, isLoading, error } = useGetHistoryById(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="chat_section max-w-2xl mx-auto">
        <Markdown
          className="markdown_content pb-40 text-textColorLight dark:text-textColor"
          remarkPlugins={[remarkGfm]}
        >
          {interactionRecord.assistantResponse}
        </Markdown>
      </section>
    </>
  );
}

export default InteractionRecord;
