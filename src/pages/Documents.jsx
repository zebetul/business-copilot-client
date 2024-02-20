import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";

function Documents() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="mb-20 flex gap-2 text-4xl">
        <ClipboardDocumentListIcon className="h-10 w-10 my-auto" />

        <span className="ml-2">Documents</span>
      </h1>

      <DocumentsTable />
    </div>
  );
}

export default Documents;
