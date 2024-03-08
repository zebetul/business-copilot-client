import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteDocument } from "./useDeleteDocument";

function DeleteDocument({ documentId }) {
  const { isDeleting, deleteDocument } = useDeleteDocument();

  return (
    <Modal>
      <Modal.Open opens="delete_document">
        <ButtonIcon className="ms-auto">
          <TrashIcon className="h-5 w-5" />
        </ButtonIcon>
      </Modal.Open>

      <Modal.Window name="delete_document">
        <ConfirmDelete
          resourceName="document"
          onConfirm={() => deleteDocument(documentId)}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

DeleteDocument.propTypes = {
  documentId: PropTypes.number.isRequired,
};

export default DeleteDocument;
