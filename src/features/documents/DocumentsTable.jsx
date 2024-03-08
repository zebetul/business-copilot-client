import { useDocuments } from "./useDocuments";

import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import DocumentRow from "./DocumentRow";
import FileInput from "./FileInput";
import { useUploadDocument } from "./useUploadDocument";
import { PlusIcon } from "@heroicons/react/24/outline";

function DocumentsTable() {
  const { documents, isLoading, error } = useDocuments();
  const { isUploading, uploadDocument } = useUploadDocument();

  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <div className="h-full w-full">
      <header className="table_header grid h-10 grid-cols-3 items-center justify-center gap-3 border-b border-bgColorDark pb-4 text-sm font-bold">
        <p>Title</p>

        <p>Type</p>

        <FileInput
          onChange={uploadDocument}
          disabled={isUploading}
          className="ms-auto"
        >
          <PlusIcon className="h-5 w-5" />
        </FileInput>
      </header>

      <ul>
        {documents.length ? (
          documents.map((document) => (
            <DocumentRow key={document.id} document={document} />
          ))
        ) : (
          <FileInput
            onChange={uploadDocument}
            disabled={isUploading}
            className="mx-auto mt-5 gap-2"
          >
            <PlusIcon className="h-5 w-5" />

            <span className="text-nowrap">Add a document</span>
          </FileInput>
        )}
      </ul>
    </div>
  );
}

export default DocumentsTable;
