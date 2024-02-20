import DocumentRow from "./DocumentRow";
import FileInput from "./FileInput";
import { useDocuments } from "./useDocuments";

function DocumentsTable() {
  const { documents, isLoading, error } = useDocuments();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="documents_table w-full flex flex-col justify-center">
      <header className="table_header h-10 border-bgColorDark border-b grid grid-cols-3 gap-3 justify-center pb-4 text-sm font-bold">
        <p className="my-auto text-textColor">Title</p>

        <p className="my-auto text-textColor">Type</p>

        <FileInput />
      </header>

      <div className="documents_container flex flex-col">
        {documents.map((document) => (
          <DocumentRow key={document.id} document={document} />
        ))}
      </div>
    </section>
  );
}

export default DocumentsTable;
