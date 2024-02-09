import DocumentsTable from "../features/documents/DocumentsTable";
import FileInput from "../features/documents/FileInput";

function Documents() {
  return (
    <>
      <h1 className="mb-10 font-semibold">Processed Documents</h1>

      <FileInput />

      <DocumentsTable />
    </>
  );
}

export default Documents;
