import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";
import Header1 from "../ui/Header1";
import Section from "../ui/Section";
import Header2 from "../ui/Header2";

function Documents() {
  return (
    <Section>
      <Header1>
        <ClipboardDocumentListIcon className="my-auto h-8 w-8 text-accentColor" />

        <span>Documents</span>
      </Header1>

      <Header2>Add documets to assistant memory</Header2>

      <DocumentsTable />
    </Section>
  );
}

export default Documents;
