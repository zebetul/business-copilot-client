import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";
import Header1 from "../ui/Header1";
import Section from "../ui/Section";

function Documents() {
  return (
    <Section>
      <Header1>
        <ClipboardDocumentListIcon className="my-auto h-8 w-8 text-accentColor" />

        <span>Documents</span>
      </Header1>

      <DocumentsTable />
    </Section>
  );
}

export default Documents;
