import DocumentsTable from "../features/documents/DocumentsTable";

function Documents() {
  return (
    <>
      <h1 className="mt-10 mb-20 font-semibold text-center">
        Processed Documents
      </h1>

      <DocumentsTable />
    </>
  );
}

export default Documents;
