import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteDocument } from "./useDeleteDocument";

function DocumentRow({ document }) {
  const { isDeleting, deleteDocument } = useDeleteDocument();
  const { id, title, type } = document;

  return (
    <li
      key={id}
      className="grid grid-cols-3 gap-3 border-bgColorDark border-b py-5 text-textColorLight"
    >
      <p>{title}</p>

      <p>{type}</p>

      <button
        className="ml-auto hover:text-textColor transition-colors"
        onClick={() => deleteDocument(id)}
        disabled={isDeleting}
      >
        <TrashIcon className="w-6 h-6" />
      </button>
    </li>
  );
}

DocumentRow.propTypes = {
  document: PropTypes.object,
};

export default DocumentRow;
