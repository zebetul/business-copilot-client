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

      <ul className="h-full">
        <>
          {documents.length !== 0 &&
            documents.map((document) => (
              <DocumentRow key={document.id} document={document} />
            ))}
        </>

        {documents.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <p className="mt-40 text-center text-3xl text-textColorLight">
              No documents added yet
            </p>

            <UploadDocument className="mx-auto mt-5 gap-2">
              <PlusIcon className="h-5 w-5" />
              <span className="text-nowrap">Add new</span>
            </UploadDocument>
          </div>
        )}
      </ul>
    </div>
  );
}

export default DocumentsTable;
