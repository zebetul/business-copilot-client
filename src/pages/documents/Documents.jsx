import DocumentsTable from "../../ui/DocumentsTable";
import FileInput from "../../ui/FileInput";

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
