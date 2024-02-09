import PropTypes from "prop-types";

function DocumentRow({ document }) {
  return (
    <div key={document.id} className="grid grid-cols-4 gap-4">
      {/*Checkbox */}
      <input
        type="checkbox"
        className="h-6 w-6"
        aria-label="Checkbox for selecting document"
      />

      <h2 className="">{document.title}</h2>

      <p className="">{document.type}</p>
    </div>
  );
}

DocumentRow.propTypes = {
  document: PropTypes.object,
};

export default DocumentRow;
