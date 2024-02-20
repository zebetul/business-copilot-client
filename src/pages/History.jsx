import { useHistory } from "../features/assistant/useHistory";
import InteractionComponent from "../features/assistant/InteractionComponent";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

function History() {
  const { history, isLoading, error } = useHistory();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <h1 className="max-w-3xl mx-auto mb-20 flex gap-2 text-4xl">
        <RectangleStackIcon className="h-10 w-10 my-auto" />

        <span className="ml-2">History</span>
      </h1>

      {history && (
        <ul className="history_page_list flex flex-col max-w-3xl mx-auto border-t border-bgColorDark">
          {history.map((item) => (
            <InteractionComponent key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}

export default History;
