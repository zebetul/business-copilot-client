import { RectangleStackIcon } from "@heroicons/react/24/outline";
import HistoryList from "../features/history/HistoryList";
import Section from "../ui/Section";
import PageHeader from "../ui/PageHeader";

function History() {
  return (
    <Section>
      <PageHeader>
        <PageHeader.Title>
          <RectangleStackIcon className="my-auto h-8 w-8 text-accentColor" />

          <span>History</span>
        </PageHeader.Title>
      </PageHeader>

      <HistoryList />
    </Section>
  );
}

export default History;
