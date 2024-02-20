import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteDocument } from "./useDeleteDocument";

function DocumentRow({ document }) {
  const { isDeleting, deleteDocument } = useDeleteDocument();
  const { id, title, type } = document;

  return (
    <div
      key={id}
      className="grid grid-cols-3 gap-3 border-bgColorDark border-b py-5 text-textColorLight"
    >
      <h2 className="">{title}</h2>

      <p className="">{type}</p>

      <button
        className="w-5 h-5 ml-auto hover:text-textColor transition-colors"
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
