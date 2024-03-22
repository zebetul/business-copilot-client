import { RectangleStackIcon } from "@heroicons/react/24/outline";
import HistoryList from "../features/history/HistoryList";
import Header1 from "../ui/Header1";
import Section from "../ui/Section";
import Header2 from "../ui/Header2";

function History() {
  return (
    <Section>
      <Header1>
        <RectangleStackIcon className="my-auto h-8 w-8 text-accentColor" />

        <span>History</span>
      </Header1>

      <Header2 className="text-accent-3 text-center text-lg">
        Your recent interactions
      </Header2>

      <HistoryList />
    </Section>
  );
}

export default History;
