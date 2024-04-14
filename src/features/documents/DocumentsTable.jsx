import PropTypes from "prop-types";

import { useDocuments } from "./useDocuments";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import DocumentRow from "./DocumentRow";
import UploadDocument from "./UploadDocument";

function DocumentsTable({ companyId }) {
  const { documents, isLoading, error } = useDocuments(companyId);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <div className="w-full">
      <header className="table_header grid h-10 grid-cols-3 items-center justify-center gap-3 border-b border-bgColorDark pb-4 text-sm font-bold">
        <p>Title</p>

        <p>Type</p>
      </header>

      <ul className="h-full">
        <>
          {documents.length !== 0 &&
            documents.map((document) => (
              <DocumentRow key={document.id} document={document} />
            ))}
        </>

        {documents.length === 0 && (
          <div className="mt-10 flex flex-col items-center justify-center gap-5">
            <p className="text-center text-xl text-textColorLight">
              No documents added yet
            </p>

            <UploadDocument />
          </div>
        )}
      </ul>
    </div>
  );
}

DocumentsTable.propTypes = {
  companyId: PropTypes.number.isRequired,
};

export default DocumentsTable;
