import { RectangleStackIcon } from "@heroicons/react/24/outline";
import HistoryList from "../features/history/HistoryList";
import Header1 from "../ui/Header1";

function History() {
  return (
    <section className="relative mx-auto h-full w-full max-w-2xl">
      <Header1>
        <RectangleStackIcon className="my-auto h-10 w-10" />

        <span className="ml-2">History</span>
      </Header1>

      <HistoryList />
    </section>
  );
}

export default History;
