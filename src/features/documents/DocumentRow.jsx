import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteDocument } from "./useDeleteDocument";

function DocumentRow({ document }) {
  const { isDeleting, deleteDocument } = useDeleteDocument();
  const { id, title, type } = document;

  return (
    <div key={id} className="grid grid-cols-3 gap-4 text-textColorLight">
      <h2 className="">{title}</h2>

      <p className="">{type}</p>

      <button
        className="w-6 h-6"
        onClick={() => deleteDocument(id)}
        disabled={isDeleting}
      >
        <TrashIcon />
      </button>
    </div>
  );
}

DocumentRow.propTypes = {
  document: PropTypes.object,
};

export default DocumentRow;
