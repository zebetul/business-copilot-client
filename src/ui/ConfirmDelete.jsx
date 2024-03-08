import PropTypes from "prop-types";

import Button from "./Button";
import Loader from "./Loader";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <>
      <h2 className="mb-4 text-2xl">Delete {resourceName}</h2>

      <p className="mb-12 text-sm">
        Are you sure you want to delete this {resourceName}?
      </p>

      <div className="flex justify-between">
        <Button onClick={onCloseModal}>Cancel</Button>

        <Button onClick={onConfirm} disabled={disabled}>
          {disabled ? <Loader size="small" /> : "Delete"}
        </Button>
      </div>
    </>
  );
}

ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmDelete;
