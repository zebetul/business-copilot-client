import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import useAddCompany from "./useAddCompany";
import Loader from "../../ui/Loader";

function AddCompany() {
  const [cui, setCui] = useState("");
  const { addCompany, isPending } = useAddCompany();

  const onAddCompany = async () => {
    addCompany(cui, {
      onSuccess: () => {
        setCui("");
      },
    });
  };

  return (
    <Modal>
      <Modal.Open opens="add_company">
        <Button size="sm" variant="accent">
          <PlusIcon className="h-4 w-4" />

          <span className="">Add company</span>
        </Button>
      </Modal.Open>

      <Modal.Window name="add_company">
        <div className="flex flex-col gap-5">
          <Input
            name="cui"
            type="text"
            label="CUI"
            required
            placeholder="CUI"
            value={cui}
            onChange={(e) => setCui(e.target.value)}
          />

          <Button variant="accent" onClick={onAddCompany}>
            {isPending ? <Loader size="small" /> : "Import"}
          </Button>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default AddCompany;
