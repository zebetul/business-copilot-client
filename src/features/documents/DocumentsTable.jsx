import { useDocuments } from "./useDocuments";

import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import DocumentRow from "./DocumentRow";
import FileInput from "./FileInput";

function DocumentsTable() {
  const { documents, isLoading, error } = useDocuments();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      <header className="table_header h-10 border-bgColorDark border-b grid grid-cols-3 gap-3 justify-center items-center pb-4 text-sm font-bold">
        <p>Title</p>

        <p>Type</p>

        <FileInput />
      </header>

      <ul>
        {documents?.map((document) => (
          <DocumentRow key={document.id} document={document} />
        ))}
      </ul>
    </>
  );
}

export default DocumentsTable;
