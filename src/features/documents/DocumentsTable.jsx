import DocumentRow from "./DocumentRow";
import { useDocuments } from "./useDocuments";

function DocumentsTable() {
  const { documents, isLoading, error } = useDocuments();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="documents_container flex flex-col gap-5">
      {documents.map((document) => (
        <DocumentRow key={document.id} document={document} />
      ))}
    </div>
  );
}

export default DocumentsTable;
