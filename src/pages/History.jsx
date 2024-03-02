import { RectangleStackIcon } from "@heroicons/react/24/outline";
import HistoryList from "../features/history/HistoryList";

function History() {
  return (
    <>
      <h1 className="mx-auto mb-20 mt-10 flex max-w-3xl gap-2 text-4xl">
        <RectangleStackIcon className="my-auto h-10 w-10" />

        <span className="ml-2">History</span>
      </h1>

      <HistoryList />
    </>
  );
}

export default History;
