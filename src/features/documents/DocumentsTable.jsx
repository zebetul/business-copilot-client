import { useQuery } from "@tanstack/react-query";
import DocumentRow from "./DocumentRow";
import { getDocuments } from "../../services/apiDocuments";

function DocumentsTable() {
  const {
    isLoading,
    data: documents,
    error,
  } = useQuery({
    queryKey: ["documents"],
    queryFn: getDocuments,
  });

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
