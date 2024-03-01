import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";

function Documents() {
  return (
    <div className="mx-auto h-max max-w-3xl pt-10">
      <h1 className="mb-20 flex gap-2 text-4xl">
        <ClipboardDocumentListIcon className="my-auto h-10 w-10" />

        <span className="ml-2">Documents</span>
      </h1>

      <DocumentsTable />
    </div>
  );
}

export default Documents;
