import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useDeleteDocument } from "./useDeleteDocument";
import ButtonIcon from "../../ui/ButtonIcon";

function DocumentRow({ document }) {
  const { isDeleting, deleteDocument } = useDeleteDocument();
  const { id, title, type } = document;

  return (
    <li
      key={id}
      className="grid grid-cols-3 gap-3 items-center border-bgColorDark border-b py-5 text-textColorLight"
    >
      <p>{title}</p>

      <p>{type}</p>

      <ButtonIcon
        className="ms-auto"
        onClick={() => deleteDocument(id)}
        disabled={isDeleting}
      >
        <TrashIcon className="w-5 h-5" />
      </ButtonIcon>
    </li>
  );
}

DocumentRow.propTypes = {
  document: PropTypes.object,
};

export default DocumentRow;
