import PropTypes from "prop-types";
import DeleteDocument from "./DeleteDocument";

function DocumentRow({ document }) {
  const { id, title, type } = document;

  return (
    <li
      key={id}
      className="flex flex-row justify-between gap-3 border-b border-bgColorDark py-5"
    >
      <p className="basis-2/4">{title}</p>

      <p className="basis-1/4">{type}</p>

      <DeleteDocument documentId={id} />
    </li>
  );
}

DocumentRow.propTypes = {
  document: PropTypes.object,
};

export default DocumentRow;
