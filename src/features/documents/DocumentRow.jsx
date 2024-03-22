import PropTypes from "prop-types";
import DeleteDocument from "./DeleteDocument";

function DocumentRow({ document }) {
  const { id, title, type } = document;

  return (
    <li
      key={id}
      className="grid grid-cols-3 items-center gap-3 border-b border-bgColorDark py-5"
    >
      <p>{title}</p>

      <p>{type}</p>

      <DeleteDocument documentId={id} />
    </li>
  );
}

DocumentRow.propTypes = {
  document: PropTypes.object,
};

export default DocumentRow;
