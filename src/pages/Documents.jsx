import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";
import Header1 from "../ui/Header1";

function Documents() {
  return (
    <section className="relative mx-auto h-full w-full max-w-2xl">
      <Header1>
        <ClipboardDocumentListIcon className="my-auto h-10 w-10" />

        <span className="ml-2">Documents</span>
      </Header1>

      <DocumentsTable />
    </section>
  );
}

export default Documents;
