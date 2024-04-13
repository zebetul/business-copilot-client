import { PlusIcon } from "@heroicons/react/24/outline";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmAddComapany from "./ConfirmAddCompany";

function AddCompany() {
  return (
    <Modal>
      <Modal.Open opens="add_company">
        <Button size="sm" variant="accent">
          <PlusIcon className="h-4 w-4" />

          <span className="">Add company</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="add_company">
        <ConfirmAddComapany />
      </Modal.Window>
    </Modal>
  );
}

export default AddCompany;
