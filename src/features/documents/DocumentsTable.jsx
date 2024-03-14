import { PlusIcon } from "@heroicons/react/24/outline";

import { useDocuments } from "./useDocuments";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import DocumentRow from "./DocumentRow";
import DocumentsHeader from "./DocumentsHeader";
import UploadDocument from "./UploadDocument";

function DocumentsTable() {
  const { documents, isLoading, error } = useDocuments();

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div className="h-full w-full">
      <DocumentsHeader />

      <ul>
        <>
          {documents.length !== 0 &&
            documents.map((document) => (
              <DocumentRow key={document.id} document={document} />
            ))}
        </>

        {documents.length === 0 && (
          <UploadDocument className="mx-auto mt-5">
            <PlusIcon className="h-5 w-5" />
            <span className="text-nowrap">Add a document</span>
          </UploadDocument>
        )}
      </ul>
    </div>
  );
}

export default DocumentsTable;
