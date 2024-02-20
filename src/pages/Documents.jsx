import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import DocumentsTable from "../features/documents/DocumentsTable";

function Documents() {
  return (
    <>
      <h1 className="max-w-3xl mx-auto mb-20 flex gap-2 text-4xl font-bold text-textColorLight dark:text-textColor">
        <ClipboardDocumentListIcon className="h-10 w-10 my-auto" />

        <span className="ml-2">Documents</span>
      </h1>

      <DocumentsTable />
    </>
  );
}

export default Documents;
